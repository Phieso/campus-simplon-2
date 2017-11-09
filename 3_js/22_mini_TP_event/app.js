/*jshint esversion: 6*/
const app = (function () {
    "use strict";
    var values = [];

    const observer = function() {
        document.getElementById("my_btn").onclick = ajouterValeur;
        window.onkeypress = checkerKeypress;
    };

    const ajouterValeur = function(evt) {
        let input = document.getElementById("my_input");
        let list = document.getElementById("my_list");
        values.push(input.value);
        list.innerHTML += `<li>${ input.value }</li>`;
        input.value = "";
    };

    const checkerKeypress = function(evt) {
        if (evt.keyCode === 13 && document.activeElement === document.getElementById("my_input")) {
            ajouterValeur();
        }
    };

    window.onload = function init() {
        observer();
    };
}());
