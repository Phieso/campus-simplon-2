/*jshint esversion: 6*/
/*global console, document, window*/

/**
 * tpGestionDesStocks
 * mini application de gestion des stocks côté client.
 * @return {object} les propriétés et méthodes publiques du module
 */
const tpGestionDesStocks = (function () {
    "use strict";
    // votre code JS à partir d'ici ...
    const produits = [];
    var maxProducts = 0;

    /**
     * Ajouter une ligne dans le tableur
     * @param {object} prod - le produit à afficher
     * @return {undefined} RAS
     */
    const ajouterTableur = function ajouterTableur(prod) {

    };


    /**
     * Fonction pour faire apparaître/disparaître la page active
     * @param {string} mode - le suffixe de l'id de la page à afficher
     * @return {object} l'objet DOM représentant la page active'
     */
    const changerAffichage = function changerAffichage(mode) {

    };


    /**
     * Ajoute un produit au stock et dans le DOM
     * @param {object} evt - l'objet représentant l'event click du form
     * @return {object|boolean} le nouveau produit créé si aucune erreur de formulaire OU false sinon
     */
    const creerProduit = function creerProduit(evt) {

    };


    /**
     * Lance les actions initiales du module
     * @return {undefined} objet contenant les fonctions publiques du module
     */
    const init = function init() {

    };


    /**
     * Produit à ajouter au stock de produits
     * @constructor
     * @param {object} param - les infos du nouveau produit
     * @return {object} le nouveau produit créé
     */
    const Produit = function Produit(p) {

    };


    /**
     * Supprime un produit donné du stock et du DOM
     * @param {object} evt - l'objet représentant l'event click sur supprimer
     * @return {number} la taille du stock mis à jour
     */
    const supprimerProduit = function supprimerProduit(evt) {

    };


    /**
     * Supprime un produit du DOM
     * @param {object} icon - objet DOM de l'icône suppression cliquée
     * @return {object} l'objet DOM retiré de l'arbre DOM
     */
    const supprimerDuTableur = function supprimerDuTableur(icon) {

    };


    /**
     * Supprime un produit donné du stock et du DOM
     * @return {undefined}
     */
    const validerProduit = function validerProduit() {

    };


    /**
     * Affiche ou masque la ligne du tableur indiquant un stock vide
     * @return {boolean} true si la ligne tableurVide est visible, false sinon
     */
    const verifierTableurVide = function verifierTableurVide() {

    };


    window.addEventListener("DOMContentLoaded", init);

    return {

    };
}());
