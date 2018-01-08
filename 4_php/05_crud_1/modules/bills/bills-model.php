<?php

include_once dirname(__FILE__) . "./../../libs/utility.php";
include_once dirname(__FILE__) . "./../users/users-model.php";

$db = connectDB("127.0.0.1", "base_test_1", "root", "@mysql");

// $ids est un tableau contenant l'id de chaque facture à supprimer
function deleteBills($ids) {
    global $db;
}

// insère une nouvelle ligne de facture avec les infos du post
function createBill() {
    global $db;
}

// sélectionne une ligne de bills correspondant à l'id passé en paramètre
function getBill($id) {
    global $db;
}

// récupère toutes les lignes de bills
function getBills() {
    global $db;

}
