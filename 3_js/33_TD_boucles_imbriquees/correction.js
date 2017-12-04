/*jshint esversion: 6*/
/*global document, window, console*/

const exo1 = (function exo1() {
    "use strict";

    const cible = document.getElementById("exo1");

    const produits = [];

    const parcourirProduits = function parcourirProduits() {};

    return parcourirProduits;

}());

const exo2 = (function exo2() {
    "use strict";

    const cible = document.getElementById("exo2");
    const nbLignes = document.getElementById("nb_lignes");
    const nbColonnes = document.getElementById("nb_colonnes");

    const insererLigne = function insererLigne() {};

    const insererColonne = function insererColonne(tr, n) {};

    const dessinerMatrice = function dessinerMatrice(lignes, colonnes) {};

    const resetMatrice = function resetMatrice() {};

    nbLignes.oninput = function modifierLignes() {};

    nbColonnes.oninput = function modifierColonnes() {};

    return dessinerMatrice;

}());

window.addEventListener("DOMContentLoaded", function init() {
  exo1();
  exo2.dessiner(5, 5);
});
