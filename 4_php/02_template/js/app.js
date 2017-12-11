/* jshint esversion: 6 */

window.addEventListener("DOMContentLoaded", function app() {
    "use strict";
    // console.log(persos);
    // console.log(dom);
    // console.log(ajax);
    dom.init(function(elements) {

        burger.init(elements.navbar);
        persos.init(elements);

        if (elements.getDataAPI)
        elements.getDataAPI.onclick = function () {
            ajax.getData("https://opendata.paris.fr/api/records/1.0/search/?dataset=liste-des-cafes-a-un-euro&rows=10000&facet=arrondissement", function (data) {
                console.log(data);
            });
        };
    });
});
