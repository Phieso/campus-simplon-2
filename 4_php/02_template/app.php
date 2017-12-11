<?php
// on récupère le contenu de notre fichier de config en json
// on le converti en objet PHP
$config = json_decode(file_get_contents("my-config.json"));
include "data.php";
include "libs/utility.php";
// ceci est un test...
// define("BASEURI", getcwd());
// set_include_path(BASEURI);


// on récupère l'url courante
$url = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
// conversion de l'url en array avec le séparateur '/'
$segments = explode('/', $url);
// on récupère le dernier segment de l'url (nom de la page souhaitée)
$page_name = $segments[count($segments) - 1];
// isolation de la propriété page de notre config
// on converti l'objet associé en array multidimension
$pages = (array)$config->pages;
// debugX($pages);

// si l'array page contient la clé page name
if (isset($pages[$page_name])) {
    $page = $pages[$page_name];
    $page_check = @fopen($page->tpl, 'r');
    if ($page_check === false) {
        $page = $pages["notfound"];
    }
} else {
    $page = $pages["notfound"];
}
