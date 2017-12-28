<?php

include_once dirname(__FILE__) . "./../../libs/utility.php";
include_once dirname(__FILE__) . "./../users/users-model.php";

$db = connectDB("127.0.0.1", "base_test_1", "root", "@mysql");

function deleteBills($ids) {
    global $db;

    $sql = "DELETE FROM bills where id = :id_bill";
    $query = $db->prepare($sql);
    $res = [];

    foreach($ids as $id) {
        $query->bindParam("id_bill", $id, PDO::PARAM_INT);
        $tmp = $query->execute();
        if ($tmp === true) {
            $res[] = (object)[
                "status" => ($tmp === true),
                'id' => $id
            ];
        }
    }

    return $res;
}

function createBill() {
    global $db;
    $sql = "INSERT INTO bills (id_user, total, created_at) VALUES (:id_user, :total, :created_at)";

    $query = $db->prepare($sql);
    $query->bindParam(":id_user", $_POST["id_user"], PDO::PARAM_STR);
    $query->bindParam(":total", $_POST["total"], PDO::PARAM_INT);
    $query->bindParam(":created_at", $_POST["created_at"], PDO::PARAM_STR);
    $res = $query->execute();
    $msg_crud = ($res === true) ? "insertion ok" : "soucis à l'insertion";
    return $db->lastInsertId();
}

function getBill($id) {
    global $db;
    $sql = "SELECT * FROM bills WHERE id = :id";

    $statement = $db->prepare($sql);
    $statement->bindParam(":id", $id, PDO::PARAM_STR);
    $status = $statement->execute();
    $bill = $statement->fetch(PDO::FETCH_OBJ);
    // récupérer les information de l'user facturé...
    // pour affichage des /nom/prénom
    $bill->user = getUser($bill->id_user);
    // debug($bill);
    return $bill;
}

function getBills() {
    global $db;
    $sql = "SELECT * FROM bills";
    $statement = $db->query($sql);
    $res = $statement->execute();
    return $statement->fetchAll(PDO::FETCH_OBJ);
}
