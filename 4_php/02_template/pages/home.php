<h1 class="title"><?php echo $page->title ?></h1>
<h2 class="title">TP Burger</h2>
<p class="intro">
    <b>Intro :</b> Modifier le CSS pour rendre le header fixe.<br><br>
    <b>Coder deux modules</b> navbar et burger (HTML/CSS/JS).<br> Les intégrer à votre copie du template.<br><br> Un click sur l'icône burger toggle une navigation.<br>L'icône burger à un état actif et non-actif (JS/CSS).<br><br> Utiliser une transition CSS pour afficher/masquer l'élément.
    <br><br>
    <b>structure des modules :</b><br>
    <span>modules/burger/burger.html</span><br>
    <span>modules/burger/burger.js</span><br>
    <span>modules/burger/burger.css</span><br>
    <span>modules/navbar/nav.php</span><br>
    <span>modules/navbar/nav.js</span><br>
    <span>modules/navbar/nav.css</span>
</p>
<h2 class="title">TP Carrousel</h2>
<p class="intro">
    Coder un module Carrousel en forme constructeur.<br>
    Il sera donc possible d'instancier plusieurs carrousels sur la même page.<br><br>
    Ce module est minimaliste. On remplace, au click, la source d'une balise image <b>unique</b>, en déplaçant un curseur sur les indices d'un array JS.<br>Cet array contient les chemins des images du carrousel.<br> On peut avancer ou reculer dans la liste d'images.<br>Le défilement est infini.
    <br><br> Le <b>contructeur</b> Carrousel contient les propriétés suivantes:<br>
    <span>&nbsp;&nbsp;parent - objet html dans lequel on insère le nouveau carrousel</span><br>
    <span>&nbsp;&nbsp;id - l'id du module html contenant le carrousel.</span><br>
    <span>&nbsp;&nbsp;images - un array de strings</span>

    <br><br> Le <b>prototype</b> de Carrousel contient les méthodes suivantes:<br>
    <span>&nbsp;&nbsp;createCarrousel() - Créé un module HTML et l'insère dans this.parent.</span><br>
    <span>&nbsp;&nbsp;ecouterClick() - event listener/handler pour le defilement des images</span><br>
    <span>&nbsp;&nbsp;next() - avance à l'image suivante</span><br>
    <span>&nbsp;&nbsp;prev() - recule à l'image précédente</span><br>
    <span></span><br>
</p>
