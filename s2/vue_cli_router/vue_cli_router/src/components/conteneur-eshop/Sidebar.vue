<template lang="html">
  <main id="main" class="sidebar">
    <div id="contenu">
      <range></range>
      <reset></reset>
      <brands></brands>
      <colors></colors>
    </div>

  </main>
</template>

<script>
import Range from "./../conteneur-eshop/range/Range.vue";
import Reset from "./../conteneur-eshop/reset/Reset.vue";
import Brands from "./../conteneur-eshop/brands/Brands.vue";
import Colors from "./../conteneur-eshop/colors/Colors.vue";

export default {
  components: {
    Range,
    Reset,
    Brands,
    Colors
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

}

</style>



