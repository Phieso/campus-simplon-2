(function session1JS() {

    var user1, user2;

    user1 = {
        name: "Charlène",
        age: 33
    };

    user2 = {
        name: "Yanis",
        age: 25
    };

    user3 = {
        hobbies: ["escalade", "musique"]
    };

    function afficherMessage(p) {
        alert(p);
    }

    function ecrireSurUneLigne(a, b){
        console.log(a + " " + b);
    }

    var isNumber = function isNumber(value) {
       return typeof value === 'number' || typeof value === 'boolean' && !isNaN(value);
    }

    function multiplier(a, b) {
        var res;

        if (isNumber(a) && isNumber(b)) {
            res = a * b;

        } else if (!a || !b) {
           res = "operandes manquants";

       } else {
           // au moins un des deux n'est pas un nombre ....
           res = "erreur de multiplication";
        }

        return res;
    }

    function getAge(user) {
        return user.age || " - âge non renseigné -";
    }

    function getName(user) {
        return user.name || "anonyme";
    }

    function displayUserInfo(user) {
        console.log(`L'utilisateur se nommant ${getName(user)} est âgé(e) de ${getAge(user)} ans`);
    }

    window.onload = function() {
        var div = document.getElementById("ma_premiere_selection");
        // div.innerHTML = "<p><span></span></p>";
        console.log("le node html sélectionné ....");
        console.log(div);
        console.log(div.tagName);
        console.log(div.id);
        console.log(div.children[0]);
        if (div.children.length >= 1) {
            div.style.background = "red";
        } else {
            div.style.background = "green";
        }
        // ecrireSurUneLigne("c'est l'heure", "d'aller manger");
        // afficherMessage("Hello");
        // div.textContent = multiplier(false, 333);
        displayUserInfo(user3);
    };


}())
