<?php

include "libs/utility.php";

$config = (object)[];
$config->title_app = "Template";
$config->title_home = "Home";

function getPersos() {
    return [
        ["Ralph", 0],
        ["Seya", 1],
        ["Megamind", 0],
        ["Mario", 2],
        ["Link", 2],
        ["Totoro", 1],
        ["Guts", 1]
    ];
}

function getGenres() {
    return [
        0 => "Animé",
        1 => "Manga",
        2 => "Jeu video",
    ];
}

function setUsers($names, $genres) {
    $users = null;
    for ($i = 0; $i <  count($names); $i += 1) {
        $users[] = (object)[];
        $users[$i]->name = $names[$i][0];
        $users[$i]->genre = $genres[$names[$i][1]];
    }
    return $users;
}

function getUsersAjax() {
    $users = setUsers(getPersos(), getGenres());
    // debug($users);
    echo json_encode($users);
}


if (isset($_GET["ajax"]) && $_GET["ajax"] === "users") {
    getUsersAjax();
}
