/*global self, console*/
/*jshint esversion : 6 */

// CORRECTION
// const getParisData = () => {
  // const workerParis = new Worker("worker-paris.js");
  //
  // workerParis.addEventListener("message", (e) => {
  //     console.log("Message retourné par le worker Paris");
  //     console.log(e.data);
  // });
  //
  // workerParis.postMessage("getData");
// };


(function workerParis() {
    "use strict";
    var start = 0;
    var url = "https://opendata.paris.fr/api/records/1.0/search/?dataset=comptages-routiers-permanents&rows=10000";

    const getData = (clbk) => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url);

        xhr.onload = function() {
          const tmp = JSON.parse(this.response);
          clbk(tmp.records);
        };

        xhr.send();
    };


    self.addEventListener('message', function (e) {

        console.log('Message reçu par le worker Paris');

        var result = getData((res) => {
          self.postMessage({
              label: 'reponse worker',
              res: res
          });
        });
    });

}());
