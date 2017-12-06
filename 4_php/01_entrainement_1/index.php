<?php

// commentaire mono-ligne
// PHP => PHP Hypertext Preprocessor

// commentaire multi-lignes
/*
  on ouvre PHP ainsi => <?php
  on ferme PHP ainsi => ?>
  note: dans un fichier .php, la fermeture est optionnelle
  (pas dans un fichier .html)
*/

// ############################################################################
// Pour afficher une valeur en PHP, on utilise l'instruction echo

echo "hello world";
echo "<p>" . (123 + 23) . "</p>";
echo '<p>retrouvez la documentation du language sur
<a href="http://php.net/docs.php" target="_blank">ce site</a></p>';
echo "<hr>";
// ############################################################################
// les types de données
// http://php.net/manual/fr/language.types.php

// Booléen
// Entiers (int pour integer)
// Décimaux (float)
// String
// Tableaux
// Objets
// NULL
// Ressources

// ############################################################################

// connaître le type d'une valeur
// string gettype ( mixed $var )

// ############################################################################

// note sur la synaxe des instructions
// En PHP, le point virgule marquant la fin d'une instruction est OBLIGATOIRE !

// ############################################################################
// Variables

$bool = true || false;
$str = 'je suis une string';
$int = 100;
$dec = 1.1;
$arr = array(1, 2, 3, 4); // OU [val1, val2, val3]
$arr_multi_dimension = array(
  "cle_1" => "hello",
  "cle_2" => "world",
  "cle_3" => "PHP",
  "cle_4" => "c'est fun aussi !"
);
$obj = new stdClass();
$obj->prop1 = "ola !";
$obj->prop2 = "salut !";
$obj->prop3 = array("yes", "papa", "!");
$vide = null;

// ############################################################################

// Différences entre guillemets doubles et simples
$v1 = "interprétée...";
$v2 = "non interprétée...";
echo "Avec des guillemets doubles, une variable est $v1";
echo "<br>";
echo 'Avec des guillemets simples, une variable est $v2';
echo "<hr>";

// échapper un caractère
$ma_phrase = 'Je suis un texte contenant une apostrophe t\'as vu';
echo $ma_phrase;

// ############################################################################
// Constantes

define("c1", "je suis la constante c1");
define("foo", "fooooooo");
define("bar", "baaaaaar");
echo "Valeur des constantes => <br>";
echo "<ul>";
  echo "<li>" . c1 . "</li>";
  echo "<li>" . foo . "</li>";
  echo "<li>" . bar . "</li>";
echo "</ul>";

echo "<hr>";

// ############################################################################

// outils de déboguage

// void var_dump ( mixed $expression [, mixed $... ] )
// mixed print_r ( mixed $expression [, bool $return = false ] )


/* TD1 => utiliser print_r et/ou var_dump pour afficher le type des variables
déclarées ci-dessus */

echo "<pre>";
var_dump($bool);
var_dump($str);
var_dump($int);
var_dump($dec);
echo "</pre>";
echo "<hr>";
echo "<pre>";
print_r($bool);
echo "</pre>";
echo "<pre>";
print_r($str);
echo "</pre>";
echo "<pre>";
print_r($int);
echo "</pre>";
echo "<pre>";

// ############################################################################

// les conditions

if (1 >= 23) {
  echo "ça m'étonnerait !!!";

} else if (gettype($obj) === "NULL") {
  echo "rien n'est moins sûr !!!";

} else {
  echo "c'est par ici que ça se passe !<br>";

}

echo "<hr>";

// ############################################################################

// valeur par défaut d'une variables

$non_initialisée;

echo "Par défaut, une variable vaut Undefined. Mais undefined n'est pas un type en PHP";
echo $non_initialisée;
echo "<hr>";

// ############################################################################

// la portée des variables (block scope)

$blok_scoped = "je suis block-scoped";

if (false) {
  $test = "je suis la var test";

} else {
  echo "je suis dans le else";

}

echo 'Valeur de la var $test => ' . $test; //
echo "<hr>";

// testez vous-même en passant le paramètre du if à true ... que se passe-t'il ?

// ############################################################################

// les fonctions

function test() {
  echo "<p>je suis dans le corps de la fonction test !!!</p>";
}

test();

function hello($qui) {
  echo "<p>Hello <b>" . $qui . " </b>!</p>";
}

hello("Johnny");
hello("Karim");
hello("Olga");

function myTimeStamp() {
  return time();
  // une fonction un peu idiote qui retourne la valeur
  // actuelle du temps UNIX
}

// echo myTimeStamp();
$mon_temps_unix_la_maintenant = myTimeStamp();
echo $mon_temps_unix_la_maintenant;
echo "<hr>";

// ############################################################################

// les boucles

// A - while

$c = 0;
while ($c < 25) {
  echo $c . "</br>";
  $c++;
}

echo "<p>fin de la boucle <b>while</b> ...</p>";
echo "<hr>";

// B - do-while

$c2 = 1;

do {
  echo $c2 . "<br>";
  $c2 *= 2;

} while ($c2 <= 100);

echo "<p>fin de la boucle <b>do-while</b> ...</p>";
echo "<hr>";

// C - for

for ($i = 0; $i < 25; $i++) {
  echo $i . "</br>";
}

echo "<p>fin de la boucle <b>for</b> ...</p>";
echo "<hr>";


// D - foreach

foreach ($arr_multi_dimension as $key => $value) {
  echo "la clé: " . $key . " contient la valeur <b>" . $value . "</b><br>";
}

echo "<p>fin de la boucle <b>foreach</b> ...</p>";
echo "<hr>";

// ############################################################################
// conversion de type (cast)

$str1 = "1";
$str1 = "1.23";
$n1 =  (int) $str;
$b1 =  (boolean) NULL;
$f1 =  (float) $str1;
$o1 =  (object) array("type" => "cat", "name" => "kitty", "color" => "white");
// etc ...
var_dump($n1);
echo "<br>";
var_dump($b1);
echo "<br>";
var_dump($f1);
echo "<br>";
var_dump($o1);
