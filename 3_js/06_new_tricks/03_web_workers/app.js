/* jshint esversion : 6 */
var appWorker = (function appWorker() {

    "use strict";

    const doAnimation = () => {
      document.getElementById("demo_block").classList.toggle("is-active");
    };

    const doThreadBusy = () => {
        var i, c = 0;

        console.log("le thread est occupé à calculer....");

        for (i = 0; i < 4000000000; i += 1) {
            c += i * 2;
        }

        console.log("le thread est libéré");

        return c;
    };

    const doWorkerBusy = () => {
        const workerDemo = new Worker("worker.js");

        workerDemo.addEventListener("message", (e) => {
            console.log("Message retourné par le worker Demo");
            console.log(e.data);
        });

        workerDemo.postMessage("make-busy");
    };

    const getParisData = () => {
        alert("@todo !");
    };

    return {
        doAnimation,
        doThreadBusy,
        doWorkerBusy,
        getParisData,
    };

}());
