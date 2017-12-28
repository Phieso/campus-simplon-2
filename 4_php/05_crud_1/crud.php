<?php
include_once "libs/utility.php";
include_once "modules/bills/bills-model.php";
include_once "modules/users/users-model.php";

enablePHPMaxErros();

// mettre à jour $base_url ci-dessous avec la route de votre dossier crud1
$base_url = "http://localhost/~guillaumeamangoua/teaching/campus-simplon-2/4_php/05_crud_1/";

$users = getUsers();
// debug($users, 1);
$bills = getBills();
// debug($bills, 1);

if (isset($_GET["id"])) {
  $user = getUser($_GET["id"]);
}

if (isset($_POST["update_user"])) {
  updateUser();
}

if (isset($_POST["delete_users"]) &&
    isset($_POST["delete_user_ids"]) &&
    count($_POST["delete_user_ids"])) {
        deleteUser();
}

if (isset($_POST["create_user"])) {
    createUser();
}

if (isset($_POST["action"]) && $_POST["action"] === "get_bills") {
    getBills();
}
