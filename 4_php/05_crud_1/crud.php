<?php
/*
  les injections SQL @ Computerphile :
  https://www.youtube.com/watch?v=_jKylhJtPmI
*/

ini_set('display_startup_errors', 1);
ini_set('display_errors', 1);
error_reporting(-1);

include "utility.php";
// debug(["foo", "hello", "bar", "world"]); // yes you can
$db = connectDB("127.0.0.1", "base_test_1", "root", "@mysql");
// debug($db);
// debug($_POST);


// if (isset($_POST["get_users"])) {
  // $sql = "SELECT * FROM users";
  // $exec = $db->query($sql);
  // $users = $exec->fetchAll(PDO::FETCH_OBJ);
// }


$users = getUsers();

if (isset($_GET["id"])) {
  $user = getUser($_GET["id"]);
}

if (isset($_POST["update_user"])) {
  updateUser();
}

if (isset($_POST["delete_users"]) &&
    isset($_POST["delete_user_id"]) &&
    count($_POST["delete_user_id"])) {
  deleteUser();
}

if (isset($_POST["create_user"])) {
  createUser();
}

function getUser($id) {
  global $db;
  $sql = "SELECT * FROM users WHERE id = :id";
  $statement = $db->prepare($sql);
  $statement->bindParam(":id", $id, PDO::PARAM_INT);
  $check = $statement->execute();
  return $statement->fetch(PDO::FETCH_OBJ);
}

function getUsers() {
  global $db;
  $sql = "SELECT * FROM users";
  $exec = $db->query($sql);
  return $exec->fetchAll(PDO::FETCH_OBJ);
}

function updateUser() {
  global $db;

  $sql = "UPDATE users SET lastname = :lastname, name = :name, age = :age,
                          email = :email WHERE id = :id";

  $age = (int)$_POST["age"];
  $age = $_POST["age"] !== "" ? $_POST["age"] : null;
  $email = $_POST["email"] !== "" ? $_POST["email"] : null;

  $statement = $db->prepare($sql);
  $statement->bindParam(":id", $_POST["id"], PDO::PARAM_INT);
  $statement->bindParam(":lastname", $_POST["lastname"], PDO::PARAM_STR);
  $statement->bindParam(":name", $_POST["name"], PDO::PARAM_INT);
  $statement->bindParam(":email", $email, PDO::PARAM_STR);
  $statement->bindParam(":age", $age, PDO::PARAM_INT);
  $check = $statement->execute();
  header("Location: index.php");
}

function deleteUser() {
  global $db;

  foreach ($_POST["delete_user_id"] as $id) {
    // debug($id);
    $sql = "DELETE FROM users WHERE id = :id";
    $statement = $db->prepare($sql);
    $statement->bindParam(":id", $id, PDO::PARAM_INT);
    $res = $statement->execute();
    $msg_crud = ($res === true) ? "suppression ok" : "soucis suppression";
  }
}

function createUser() {
  global $db;

  $sql = "INSERT INTO users (name, lastname, email, age)
    VALUES (:name, :lastname, :email, :age)";

  $age = (int)$_POST["age"];
  $age = $_POST["age"] !== "" ? $_POST["age"] : null;
  $email = $_POST["email"] !== "" ? $_POST["email"] : null;

  $statement = $db->prepare($sql);
  $statement->bindParam(":name", $_POST["name"], PDO::PARAM_STR);
  $statement->bindParam(":lastname", $_POST["lastname"], PDO::PARAM_STR);
  $statement->bindParam(":email", $email, PDO::PARAM_STR);
  $statement->bindParam(":age", $age, PDO::PARAM_INT);
  $res = $statement->execute();
  $msg_crud = ($res === true) ? "insertion ok" : "soucis à l'insertion";
  header("Location: index.php");
}
