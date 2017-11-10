/*jshint esversion: 6*/
/*global window, document, console*/

/** @namespace */
const workinJSON = (function () {
    "use strict";

    var
        myArr = [1, 2, 3, 4, 5],
        myJSONArr = "[1, 2, 3, 4, 5]",
        myObj = { name:"choubi", last:"dooh!" },
        myJSONObj = '{ "name":"doobi", "last":"daah!" }';

    /**
     * Observe les actions de l'user sur les éléments DOM
     * @return {Array} RAS
     * @alias workinJSON.stringifyToJSON
     */
    const stringifyToJSON = function() {
        const jsonArr = JSON.stringify(myArr);
        const jsonObj = JSON.stringify(myObj);

        return [
            jsonArr,
            jsonObj
        ];
    };
    /**
     * Observe les actions de l'user sur les éléments DOM
     * @return {Array} RAS
     * @alias workinJSON.parseFromJSON
     */
    const parseFromJSON = function() {
        const jsArr = JSON.parse(myJSONArr);
        const jsObj = JSON.parse(myJSONObj);

        return [
            jsArr,
            jsObj
        ];
    };

    window.onload = function init() {
        document.getElementById("to_json").onclick = function() {
            console.log(stringifyToJSON());
        };
        document.getElementById("from_json").onclick = function() {
            console.log(parseFromJSON());
        };
    };

    return {
        stringifyToJSON: stringifyToJSON,
        parseFromJSON: parseFromJSON
    };

}());
