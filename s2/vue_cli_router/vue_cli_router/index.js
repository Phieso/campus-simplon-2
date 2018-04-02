console.log("Hello from node !");
/* jshint esversion : 6 */
const express = require('express');
const cors = require('cors');
const app = express();
var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "geographie_fr"
});

var connection2 = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "eshop"
});


// permettre les appels AJAX cross-origins (CORS...)
app.use(cors());
connection.connect();

connection.query("SELECT 1 + 1 AS solution", function(error, results, fields) {
  if (error) throw error;
  console.log("The solution is: ", results[0].solution);
});

app.get("/", (req, res) => {
  res.send("hello from node server !");
});

app.get("/departement", (req, res) => {
  const q = "SELECT * from departement ORDER BY departement_id";
  connection.query(q, (error, results, fields) => {
    if(error) throw error;
    else res.send(results);
  });
});

connection2.connect();
app.get("/produits", (req, res) => {
  const q = "SELECT * from produits ORDER BY id";
  connection2.query(q, (error, results, fields) => {
    if (error) throw error;
    else res.send(results);
  });
});

app.listen(3000);

