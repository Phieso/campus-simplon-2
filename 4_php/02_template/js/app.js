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

        const c1 = carrousel.add({
          target: document.getElementById("carrousel1"),
          height: "210",
          width: "320",
          images: [
            "assets/img/fractales/frac1.jpg",
            "assets/img/fractales/frac2.jpg",
            "assets/img/fractales/frac3.jpeg",
          ]
        });

        const c2 = carrousel.add({
          target: document.getElementById("carrousel2"),
          height: "130",
          width: "130",
          images: [
            "assets/img/logos/logo-js.jpeg",
            "assets/img/logos/logo-html.png",
            "assets/img/logos/logo-css.png",
            "assets/img/logos/logo-php.jpeg",
            "assets/img/logos/logo-sql.png"
          ]
        });
    });
});
