/* jshint esversion: 6 */

var persos = (function persos() {
    "use strict";

    var persosList;

    function createList(elements) {
        resetList();
        const ul = document.createElement("ul");
        ul.className = "list persos";

        persosList.forEach(function(p) {
            const li = document.createElement("li");
            li.className = "perso";
            li.innerHTML += `
                <span class="name"> ${ p.name } </span>
                <span class="genre"> ${ p.genre } </span>
            `;
            ul.appendChild(li);
        });

        elements.app.querySelector("#personnages").appendChild(ul);
    }

    function resetList() {
        const persos = document.querySelector("#personnages .persos");
        if (persos) {
            persos.remove();
        }
    }

    function init(elements) {
        if (elements.getDataPHP)
        elements.getDataPHP.onclick = function handleClick() {
            ajax.getData("data.php?ajax=persos", function (data) {
                persosList = data;
                createList(elements);
            });
        };
    }

    return {
        createList: createList,
        init: init
    };

}());
