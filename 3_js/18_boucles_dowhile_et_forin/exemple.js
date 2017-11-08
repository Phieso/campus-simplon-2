/*jshint esversion: 6*/
(function() {
    "use strict";
    var n = 1, products = [];

    function Product(n, p) {
        this.name = n;
        this.price = p;
    }

    if (true) {
        let t = "tadaaa";
    }

    console.log("t");
    console.log(typeof t);

    do {
        let name = prompt("saisir un nom");
        let price = prompt("saisir un prix");
        products.push(new Product(name, price));

    } while(products.length < n);

    console.log(products);
}());
