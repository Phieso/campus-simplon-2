/* jshint esversion: 6 */

var dom = (function getDOMObjects() {
    "use strict";
    var elements;

    function getElements(clbk) {
        return elements;
    }

    function init(clbk) {
        elements = {
            app: document.getElementById("app"),
            nav: {
                elem: document.getElementById("grid_nav"),
                items: document.querySelectorAll("#grid_nav .item"),
            },
            navbar: document.getElementById("navbar"),
            getDataPHP: document.getElementById("get_data_php")
        };
        clbk(elements);
    }

    return {
        init: init, // ou simplement init (es6)
        getElements: getElements
    };

}());
