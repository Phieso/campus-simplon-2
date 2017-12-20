<?php
include "inc/head.php";
?>

<?php if($user === false): ?>
<p>
  Aucun utilisateur ne correspond à cette requête.
</p>
<?php endif; ?>
<?php if($user !== false): ?>
<form method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>" class="create f-col">
  <input type="hidden" name="id" value="<?php echo $user->id ?>">
  <label for="">Nom</label>
  <input name="lastname" type="text" placeholder="nom"
  value="<?php echo $user->lastname ?>" required>
  <label for="">Prénom</label>
  <input name="name" type="text" placeholder="prénom"
  value="<?php echo $user->name ?>" required>
  <label for="">Age</label>
  <input name="age" type="number" placeholder="âge" value="<?php echo $user->age ?>"
  class="input" value="<?php echo $user->age ?>" min="1" max="140">
  <label for="">Email</label>
  <input name="email" type="mail" placeholder="mail"
  class="input" value="<?php echo $user->email ?>">
  <div class="f-row">
    <input name="update_user" type="submit" value="edit user !" class="btn">
  </div>
</form>
<?php endif; ?>
<?php include "inc/footer.php"; ?>
