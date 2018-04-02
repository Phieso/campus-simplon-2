<template lang="html">
  <main id="main" class="eshop">
    <h1 class="title">TEE-SHIRT CHALLENGE</h1>
    <div id="contenu">
      <sidebar></sidebar>
      <products-list></products-list>
    </div>

  </main>
</template>

<script>
import Sidebar from "./../conteneur-eshop/Sidebar.vue";
import ProductsList from "./../conteneur-eshop/ProductsList.vue";

export default {
  components: {
    Sidebar,
    ProductsList
  },

}
</script>

<style lang="scss" scoped>
ul {
  display: flex;
  flex-direction: column;
}
li {
  text-align: center;
}
#contenu {
  display: grid;
  grid-template-columns: 1fr 3fr;
}

</style>



