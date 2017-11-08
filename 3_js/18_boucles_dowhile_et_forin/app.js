/*jshint esversion: 6*/
var bouclesV2 = (function () {
    "use strict";
    var chatDAulnay, delegue;

    chatDAulnay = {
        nom: "inconnu", type: "chat", couleur: "blanc et noir", couleurYeux: "vert"
    };

    delegue = {
        prenom: "Fegan", profession: "dev js", joueurDeGo: true
    };

    var lancerDoWhile = function() {
        var arr = [];
        
        do {
            arr.push(prompt("saisir valeur ..."));

        } while(arr.length < 5);

        console.log("fin de do...while");
        console.log("contenu du tableau ---->");
        console.log(arr);

        return arr;
    };

    var lancerForIn = function(obj) {
        var prop,
        cible = document.getElementById("res_prop_objet");
        cible.innerHTML = ""; // on vide l'élément de son contenu

        for (prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                cible.innerHTML += prop + " : " + obj[prop] + '<br>';
            }
        }

        return obj;
    };

    return {
        lancerDoWhile: lancerDoWhile,
        lancerForIn: lancerForIn,
        o1: delegue,
        o2: chatDAulnay
    };
}());
