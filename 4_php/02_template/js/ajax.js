/* jshint esversion:6 */

const moduleAjax = (function () {
    "use strict";

    function postData() {

    }

    function getData() {
        const xhr = new XMLHttpRequest();
        // const url = window.location.href || document.URL;
        const url = "data.php";
        xhr.open("GET", url + "?ajax=users");
        // console.log(url);
        xhr.onload = function(evt) {
            // console.log(evt);
            let res;
            if (this.response) {
                res = JSON.parse(this.response);
            }
            console.log(res);
        };

        xhr.send();
    }

    return {
        postData: postData,
        getData: getData,
    };

}());
