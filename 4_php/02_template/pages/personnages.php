<div id="personnages" class="personnages">
    <h2 class="title">Personnages</h2>
    <h3 class="title">Données synchrones : </h3>
    <p>
        Ci-dessous, on récupère les infos depuis PHP. Cette procédure est effectuée de manière synchrone : à chaque rechargement, les données sont téléchargées depuis le serveur et affichées lors du "paint" de la page par le navigateur.
    </p>
    <ul class="list persos">
    <?php foreach(getPersos() as $key => $perso) {
        echo "<li class=\"perso\">
                <span class=\"name\">$perso->name</span>
                <span class=\"genre\">$perso->genre</span>
            </li>";
    } ?>
    </ul>
    <h3 class="title">Données asynchrones : </h3>
    <div id="control_ajax" class="controls">
        <input class="input" type="text">
        <input id="get_data_php" class="btn" type="submit" value="get data php">
        <input id="get_data_api" class="btn" type="submit" value="get data api">
        <input id="" class="btn" type="submit" value="post php">
    </div>
</div>
