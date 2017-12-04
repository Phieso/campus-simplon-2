/*jshint esversion: 6*/

/* functions : elles sont utiles */


var app = (function() {
    "use strict";

    function reveal() {
        document.getElementById("tp").classList.remove("is-hidden");
    }

    window.onload = function() {
        document.getElementById("action").onclick = reveal;
    };

}());
