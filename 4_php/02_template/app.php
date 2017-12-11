<?php
// on récupère le contenu de notre fichier de config en json
// on le converti en objet PHP
$config = json_decode(file_get_contents("my-config.json"));
// on inclut notre jeu de données
include "data.php";
// et aussi nos fonctions de debug utiles
include "libs/utility.php";

// ceci est un test en cours...
// define("BASEURI", getcwd());
// set_include_path(BASEURI);


// on récupère l'url courante
$url = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
// debug($url);
// conversion de l'url en array avec le séparateur '/'
$segments = explode('/', $url);
// debug($segments);
// on récupère le dernier segment de l'url (nom de la page souhaitée)
$page_name = $segments[count($segments) - 1];
// debug($page_name);

// isolation de la propriété config->page
// on converti l'objet associé en array multidimensionnel
$pages = (array)$config->pages;
// debug($pages);
if (isset($pages[$page_name])) {
    // si l'array page contient la clé page name
     // voir pages dans my-config.json
    $page_check = @fopen($pages[$page_name]->html, 'r');
    if ($page_check === false) {
        // si le fichier html de la page n'existe pas
        $page = $pages["notfound"];
    } else {
        $page = $pages[$page_name];
    }
} else {
    // sinon, page non trouvée. voir pages dans my-config.json
    $page = $pages["notfound"];
}
