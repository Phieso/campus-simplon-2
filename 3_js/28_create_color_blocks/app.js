/*global window, document*/
/*jshint esversion:6 */

var app = (function app() {
    "use strict";
    const dom = {};

    const mettreBlocksActifsAjour = function mettreBlocksActifsAjour(actives) {

    };

    const gererSelectionBlock = function gererSelectionBlock() {
    };

    const creerBlocks = function creerBlocks() {
    };

    // écouter les clicks sur le bouton submit (dom.btn)
    // afficher un message de confirmation log() dans creerBlocks
    // récupérer la valeur de dom.count
    window.onload = function start() {
        dom.btn = document.getElementById("create_blocks");
        dom.color = document.getElementById("color_blocks");
        dom.count = document.getElementById("nb_blocks");
        dom.blocks = document.getElementById("blocks");
    };

}());
