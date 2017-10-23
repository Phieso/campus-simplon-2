(function session1JS() {

    function afficherMessage(p) {
        alert(p);
    }

    function ecrireSurUneLigne(a, b){
        console.log(a + " " + b);
    }

    function multiplier(a, b) {
        var res = a * b, error = isNaN(res);
        if (error) {
            return alert("erreur de multiplication !");
        }
        return res;
    }

    window.onload = function() {
        var div = document.getElementById("ma_premiere_selection");
        // ecrireSurUneLigne("c'est l'heure", "d'aller manger");
        // afficherMessage("Hello");
        console.log("le node html sélectionné ....");
        console.log(multiplier("toto", "titi"));
        console.log(multiplier("toto", 23));
        console.log(div);
        div.textContent = multiplier(103.66, 10032.45);
    };


}())
