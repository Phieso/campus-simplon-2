/*jshint esversion: 6*/
/*global document, window, console*/

const exo1 = (function exo1() {
    "use strict";

    const cible = document.getElementById("exo1");

    const produits = [
      {nom: "baskets enfant", taillesDispo: [33, 34, 35, 36]},
      {nom: "baskets femme", taillesDispo: [36, 37, 38, 39, 40]},
      {nom: "baskets homme", taillesDispo: [39, 40, 41, 42, 43, 44, 45]},
      {nom: "baskets grandes tailles", taillesDispo: [46, 47, 48, 49, 50]}
    ];

    const parcourirProduits = function parcourirProduits() {

      for (let i = 0; i < produits.length; i += 1) {

        cible.innerHTML += `<div class="produit">`;
        cible.children[i].innerHTML += `<h2>${ produits[i].nom }</h2>`;
        cible.children[i].innerHTML += "<span>tailles dispo :</span>";
        cible.children[i].innerHTML += "<ul>";

        for (let j = 0; j < produits[i].taillesDispo.length; j += 1) {
          cible.children[i].innerHTML += `<li>${ produits[i].taillesDispo[j] }</li>`;

        }

        cible.children[i].innerHTML += "</ul>";
        cible.innerHTML += "</div>";
      }
    };

    return parcourirProduits;

}());

const exo2 = (function exo2() {
    "use strict";

    const cible = document.getElementById("exo2");
    const nbLignes = document.getElementById("nb_lignes");
    const nbColonnes = document.getElementById("nb_colonnes");

    const insererLigne = function insererLigne() {
      return cible.appendChild(document.createElement("tr"));
    };

    const insererColonne = function insererColonne(tr, n) {
      const col = document.createElement("td");
      col.textContent = n;
      return tr.appendChild(col);
    };

    const dessinerMatrice = function dessinerMatrice(lignes, colonnes) {

      for (let i = 1; i <= (lignes * colonnes); i += colonnes) {
        let ligne = insererLigne();

        for (let j = i; j < (colonnes + i); j += 1) {
          insererColonne(ligne, j);

        }
      }
    };

    const resetMatrice = function resetMatrice() {
      cible.innerHTML = "";
    };

    nbLignes.oninput = function modifierLignes() {
      resetMatrice();
      dessinerMatrice(Number(this.value), Number(nbColonnes.value));
    };

    nbColonnes.oninput = function modifierColonnes() {
      resetMatrice();
      dessinerMatrice(Number(nbLignes.value), Number(this.value));
    };

    return dessinerMatrice;

}());

window.addEventListener("DOMContentLoaded", function init() {
  exo1();
  exo2(5, 5);
});
