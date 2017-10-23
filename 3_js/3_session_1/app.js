(function session1JS() {

    function afficherMessage(p) {
        alert(p);
    }

    // afficherMessage("Hello");

    function ecrireSurUneLigne(a, b){
        console.log(a + " " + b);
    }

    function multiplier(a, b) {
        return a * b;
    }

    ecrireSurUneLigne("c'est l'heure", "d'aller manger");

    window.onload = function() {
        var div = document.getElementById("ma_premiere_selection");
        console.log("le node html sélectionné ....");
        console.log(div);
        div.textContent = multiplier(103.66, 10032.45);
    };


}())
