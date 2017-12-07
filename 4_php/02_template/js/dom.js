/* jshint esversion:6 */

var dom = (function getDOMObjects() {
    "use strict";

    const app = document.getElementById("app");
    const getDataPHP = document.getElementById("get_data_php");
    const getDataAPI = document.getElementById("get_data_api");

    return {
        app: app,
        getDataPHP: getDataPHP,
        getDataAPI: getDataAPI,
    };

}());
