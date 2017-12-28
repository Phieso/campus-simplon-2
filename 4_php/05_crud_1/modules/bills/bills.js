/*jshint esversion : 6*/
var bills = (function bills() {
    "use strict";

    var
    activeUser,
    activeUserId,
    formBill,
    formBillBtn,
    idsBills = [],
    inputTotal,
    inputDate,
    tablerBills;

    function addInDOMList(insertedId, billData) {
        var td;
        const tr = document.createElement("tr");
        tr.setAttribute("data-id-bill", insertedId);
        tr.classList.add("bill");

        td  = document.createElement("td");
        td.textContent = insertedId; //id de facture que'on vient d'insérer
        tr.appendChild(td);
        td = document.createElement("td"); //id de user qu'on vient de facturer
        td.textContent = activeUserId;
        tr.appendChild(td);
        td = document.createElement("td");
        td.textContent = billData.total; // montant total de la nouvelle acture
        tr.appendChild(td);
        td = document.createElement("td");
        td.textContent = billData.createdAt; // date de la nouvelle fature
        tr.appendChild(td);
        td = document.createElement("td");
        td.className = "update";
        td.innerHTML = "<span class=\"tabler-btn\">edit</span>";
        td.querySelector(".tabler-btn").onclick = paramEditForm;
        tr.appendChild(td);
        td = document.createElement("td");
        td.className = "delete";
        td.innerHTML = "<input type=\"checkbox\">";
        tr.appendChild(td);

        if (!tablerBills) {
            tablerBills = createTablerHTML();
        }

        tablerBills.appendChild(tr);
        // // l'user a été
        activeUserId = null;
    }

    function createBill(evt) {
        const createdAt = inputDate.value;
        const total = Number(inputTotal.value);

        if (createdAt && total) {
            const fd = new FormData();
            // si l'utilisateur à rempli les champs ci-dessus
            // on empêche le comportement par défaut du navigateur
            evt.preventDefault();

            const xhr = new XMLHttpRequest();

            fd.append("id_user", activeUserId);
            fd.append("created_at", createdAt);
            fd.append("total", total);
            fd.append("action", "create_bill");

            xhr.open("POST", "ajax.php");

            xhr.onload = function getServerResponse() {
                addInDOMList(this.response,  {
                    createdAt: createdAt,
                    total: total
                });
                displayEmptyMessage("off");
                resetForm();
            };

            xhr.send(fd);
        }
        // si l'utilisateur n'a pas rempli l'une des deux valeurs
        // le comportement par défaut s'applique et les attributs html5 required se déclenchent normalment
    }

    function createTablerHTML() {
        const tablerHead = [
            "id",
            "id_user",
            "total",
            "created_at",
            "update"
        ];
        var markup = "";
        let tabler = document.createElement("table");
        tabler.id = "tabler_bills";
        tabler.className = "tabler bills";

        markup += "<thead><tr>";

        for (let i = 0; i < tablerHead.length; i += 1) {
            markup += `<th>${ tablerHead[i] }</th>`;
        }

        markup += `<th class=\"delete\">
            <input type=\"submit\" id=\"delete_bills\" value=\"delete\" class=\"tabler-btn\">
        </th>`;

        markup += "</tr></thead><tbody id=\"tabler_bills_body\"></tbody>";

        tabler.innerHTML = markup;
        tabler.querySelector(".tabler-btn").onclick = deleteBills;
        tabler = document.getElementById("bills_wrap").appendChild(tabler);
        return tabler.querySelector("tbody");
    }

    function deleteBills() {
        const checked = document.querySelectorAll(".bills input:checked");

        function ajaxDeleteBills(ids) {
            const fd = new FormData();
            const xhr = new XMLHttpRequest();

            fd.append("action", "delete_bills");
            fd.append("mode", "async");
            fd.append("ids", JSON.stringify(ids));

            xhr.open("POST", "ajax.php");

            xhr.onload = function getServerResponse() {
                if (removeFromDOMList() === 0) {
                    displayEmptyMessage("on");
                    displayTabler("off");
                }
            };

            xhr.send(fd);
        }

        if (checked.length) {
            checked.forEach(function(c) {
                const bill = c.parentElement.parentElement;
                const idBill = Number(bill.getAttribute("data-id-bill"));
                idsBills.push(idBill);
            });

            ajaxDeleteBills(idsBills);
        }
    }

    function displayEmptyMessage(mode) {
        const msgBox = document.getElementById("msg_empty_bills");
        if (!msgBox) return;
        if (mode === "off") {
            msgBox.classList.add("is-hidden");
        } else {
            msgBox.classList.remove("is-hidden");
        }
    }

    function displayTabler(mode) {
        if (mode === "off") {
            document.getElementById("tabler_bills").classList.add("is-hidden");
        } else {
            document.getElementById("tabler_bills").classList.remove("is-hidden");
        }
    }

    function openForm(billToEdit) {
        if (formBill.classList.contains("is-active")) {
            resetForm(); // on vide le formulaire si il est déjà ouvert
            openForm(billToEdit); // puis on relance la même fonction
        } else {
            // si le formulaire n'est pas ouvert
            let title = formBill.querySelector(".title");
            formBill.classList.add("is-active");
            title.textContent = `Facture pour ${ activeUser.name } ${ activeUser.lastname }`;
            if (billToEdit) {
                // dans le cas d'un UPDATE
                formBillBtn.value = "Editer facture";
                let dateC = formBill.querySelector("#created_at");
                let total = formBill.querySelector("#total");
                // on affiche les valeurs suivantes ...
                total.value = billToEdit.total; // total la facture à éditer
                dateC.value = billToEdit.created_at; // date création de facture
            } else {
                formBillBtn.value = "Ajouter facture";
            }
        }
    }

    function prepareForm(evt) {

    }

    function paramCreateForm(evt) {
        const src = evt.target || evt.srcElement;
        const parent = src.parentElement.parentElement;
        const fd = new FormData();

        evt.preventDefault();

        /* on garde en mémoire dans une variable accessible dans tous le module, l'id de l'user que l'on va facturer */
        activeUserId = Number(parent.getAttribute("data-id-user"));

        fd.append("id", activeUserId);
        fd.append("action", "get_user");

        const xhr = new XMLHttpRequest();
        xhr.open("POST", "ajax.php");

        xhr.onload = function getUserFromServer() {
            activeUser = JSON.parse(this.response);
            openForm();
        };

        xhr.send(fd);
    }

    function paramEditForm(evt) {
        const src = evt.target || evt.srcElement;
        const parent = src.parentElement.parentElement;
        const fd = new FormData();
        const xhr = new XMLHttpRequest();

        evt.preventDefault();
        console.log(parent);
        activeUserId = Number(parent.getAttribute("data-id-user"));
        fd.append("id_bill", Number(parent.getAttribute("data-id-bill")));
        fd.append("action", "get_bill");

        xhr.open("POST", "ajax.php");

        xhr.onload = function getBillFromServer() {
            const billToEdit = JSON.parse(this.response);
            activeUser = billToEdit.user;
            openForm(billToEdit);
        };

        xhr.send(fd);
    }

    // @todo : simplifier en stockant directement les tr au moment du click sur delete btn
    function removeFromDOMList() {
        // récupère tous les checkbox:checked
        const checkboxes = tablerBills.querySelectorAll(".bill input:checked");
        checkboxes.forEach(function parse(checkbox) {
            // remonte sur les tr parents et ...
            // retire un à un ces éléments du document
            checkbox.parentElement.parentElement.remove();
        });
        return tablerBills.querySelectorAll("tbody tr").length;
    }

    function resetForm() {
        inputDate.value  = "";
        inputTotal.value = "";
        formBill.classList.remove("is-active");
    }

    window.addEventListener("DOMContentLoaded", function observer() {
        /* sélection des éléments html importants pour le module */
        tablerBills = document.getElementById("tabler_bills_body");
        formBill = document.getElementById("form_bill");
        formBillBtn = document.getElementById("btn_form_bill");
        inputTotal = document.getElementById("total");
        inputDate = document.getElementById("created_at");

        const tablerUsers = document.getElementById("users");
        const deleteBtn = document.getElementById("delete_bills");
        const cancelBtn = document.getElementById("cancel_bill");

        if (formBillBtn) formBillBtn.onclick = createBill;

        if (deleteBtn) deleteBtn.onclick = deleteBills;

        if (cancelBtn) cancelBtn.onclick = resetForm;

        if (tablerBills) {
            const updateBillBtns = tablerBills.querySelectorAll(".bill .tabler-btn");

            updateBillBtns.forEach(function observe(btn) {
                btn.onclick = paramEditForm;
            });
        }

        if (tablerUsers) {
            const createBillBtns = tablerUsers.querySelectorAll(".bill .tabler-btn");

            createBillBtns.forEach(function observe(btn) {
                btn.onclick = paramCreateForm;
            });
        }
    });

}());
