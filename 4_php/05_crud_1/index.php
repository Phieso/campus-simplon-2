<?php include "inc/head.php"; ?>
  <p>
    Créer les formulaires pour ajouter / lister / editer / supprimer les users...<br>
    stockés en base de données.<br>
    Les valeurs sont récupérées par le serveur PHP.<br>
    La connexion à la base est assurée par un objet PDO.<br>
    Option conseillée: préparer les requêtes SQL.<br>
    Option: proposer une version asynchrone du programme.
  </p>
  <p>
    Modifier la table users (bdd): ajouter la colonne age.<br>
    La clause ALTER TABLE permet l'exécution en ligne de commande / SQL.<br>
    Ajuster le formulaire en conséquence.<br>
    Option: proposer une version asynchrone du programme.
  </p>
  <p>
    Trouver une solution simple pour que le tableur soit mis à jour<br> à chaque insertion ou suppression.
  </p>
  <h2 class="title">Create</h2>
  <!--  syntaxe alternative de if en PHP, plus adaptée au templating -->
  <?php if (isset($msg_crud)): echo "<p class=\"msg\">$msg_crud</p>"; endif; ?>

  <form method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>" class="create f-col">
    <input name="lastname" type="text" placeholder="nom" required>
    <input name="name" type="text" placeholder="prénom" required>
    <input name="age" type="number" placeholder="âge" class="input" min="1" max="140">
    <input name="email" type="mail" placeholder="mail" class="input">
    <div class="f-row">
      <input name="create_user" type="submit" value="create user !" class="btn">
    </div>
  </form>

  <hr>

  <h2 class="title">Read + Update + Delete</h2>

  <form method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>" class="f-row">
    <input name="get_users" type="submit" value="get users !" class="btn">
  </form>

  <?php if (isset($users)): ?>
  <!--  @nathalie : la ligne ci-dessus doit éviter ton "bug" d'hier fin d'aprem -->
  <!--
    @othman:
    rectification :
    https://www.cloudconnected.fr/2009/04/09/mysql-int11-a-la-meme-taille-que-int3/
    https://dev.mysql.com/doc/refman/5.7/en/integer-types.html
  -->
  <form method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>">
    <table id="users" class="tabler">
        <thead>
          <tr>
            <?php foreach ((array)$users[0] as $prop => $val) {
              echo "<td>$prop</td>";
            } ?>
            <td class="update">
              <span>update</span>
            </td>
            <td class="delete">
              <input type="submit" name="delete_users" value="delete" class="tabler-btn">
            </td>
          </tr>
        </thead>
        <tbody>
          <?php foreach ($users as $user) {
          echo "<tr>";
              foreach ((array)$user as $prop => $val) {
                $col_name = isset($val) ? $val : "N.R";
                echo "<td>" . $col_name . "</td>";
              }
              echo "<td class=\"update\">
                <a class=\"tabler-btn\" href=\"edit-user.php?id=$user->id\">edit</a>
              </td>";
              echo "<td class=\"delete\">
                <input name=\"delete_user_id[]\"
                type=\"checkbox\" value=\"$user->id\" />
              </td>";
            }
          echo "</tr>";
           ?>
        </tbody>
    </table>
  </form>

  <?php endif; ?>
  <!-- route => mon_code/4_php/05_crud_1/index.php -->
<?php include "inc/footer.php"; ?>
