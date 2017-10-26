/*jshint esversion: 6*/
var app = (function () {

    var list;

    function lancerUneBoucleWhileInfinie() {
        return alert("NOOOOOOOO !");
        while(true) {
            // ceci est une boucle infinie car true sera TOUJOURS true !
            console.log("je tourne en bouuuucle et ne m'arrête JAMAIS !");
        }
    }

    function lancerUneBoucleWhile() {
        var compteur = 1;
        while(compteur <= 1000) {
            console.log("tour de boucle n°" + compteur);
            compteur += 1;
            // synonyme de compteur++
            // synonyme de compteur = compteur + 1
        }
        console.log("##############");
        console.log("fin de boucle");
        console.log("##############");
    }

    function parcourirListeWhile() {
        var i = 0, text;

        console.log("début de boucle");
        while(i < list.children.length) {

            console.log(list.children[i]);
            text = list.children[i].textContent;

            if (text === "pause repas") {
                console.log("c'est l'heure du repas !");
                window.alert("Miam time !!! ^_^");
            }

            i += 1;
        }
        console.log("fin de boucle");
    }

    window.onload = function() {
        console.log("doc loaded !!!");
        list = document.getElementById("todo_list");
        // console.log(list.children);
        // lancerUneBoucleWhileInfinie();
        // lancerUneBoucleWhile();
        parcourirListeWhile();
    };

}());
