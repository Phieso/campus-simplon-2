<h1 class="title"><?php echo $page->title ?></h1>
<h2 class="title">I - Données synchrones : </h2>
<p>
    Ci-dessous, on récupère les infos depuis PHP.<br> Cette requête http est effectuée de manière synchrone : à chaque rechargement, les données sont téléchargées depuis le serveur et affichées lorsque le navigateur "render" la page.
</p>
<h3 class="title">Personnages</h3>
<ul class="list persos">
<?php foreach(getPersos() as $key => $perso) {
    echo "<li class=\"perso\">
            <span class=\"name\">$perso->name</span>
            <span class=\"genre\">$perso->genre</span>
        </li>";
} ?>
</ul>

<h2 class="title">II - Données asynchrones</h2>
<!-- Modules de travail en asynchrone => -->

<?php include("modules/personnages/persos.html"); ?>

<hr>

<?php include("modules/cafes/cafes.html"); ?>
