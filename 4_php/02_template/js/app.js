/* jshint esversion: 6 */

window.addEventListener("DOMContentLoaded", function app() {
    "use strict";
    /* ci-dessous, les modules js à disposition */
    // console.log(persos);
    // console.log(navbar);
    // console.log(dom);
    // console.log(ajax);
    dom.init(function(elements) {
        /* on a récupéré les éléments du DOM */
        /* ready to go ! initialisation des modules ...  */
        burger.init(elements.navbar);
        persos.init(elements);
        cafes.init(elements);
    });
});
