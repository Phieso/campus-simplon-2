<?php
// on récupère le contenu de notre fichier de config en json
// on le converti en objet PHP
$config = json_decode(file_get_contents("my-config.json"));
// nous incluons notre jeu de données
include "data.php";
// et aussi nos fonctions de debug utiles
include "libs/utility.php";


function filterFile($file) {
  $pattern = '/css$|js$/';
  return preg_match($pattern, $file) == 1;
}

function getModules($page) {
  $filtered = array();
  // nous parcourons les pages du fichier de config
  // chaque objet $page représente une page de la config
  if (isset($page->mods) && count($page->mods)) {
    // si $page a des modules associés, on itère sur les modules
    foreach ($page->mods as $mod) {
      debug($mod);
      $files = scandir("modules/$mod");
      $files = array_diff($files, array('.', '..'));
      $filtered[] = array_filter($files, "filterFile");
    }
  }
  return $filtered;
}

getModules($config->pages);

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
    // on tente de lire le contenu du fichier de template html
    if ($page_check === false) {
        // si le fichier html de la page n'existe pas
        $page = $pages["notfound"];
    } else {
        $page = $pages[$page_name];
        $page_modules = getModules($page);
          debug('$page_modules');
          debug($page_modules);

    }
} else {
    // sinon, page non trouvée. voir pages dans my-config.json
    $page = $pages["notfound"];
}
