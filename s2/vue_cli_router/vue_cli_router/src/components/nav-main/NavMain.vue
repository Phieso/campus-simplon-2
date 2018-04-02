<template lang="html">
  <nav id="nav_main">
    <ul id="list">
      <router-link v-for="(page, n) in pages" :to="{name:page}" :key="n" tag="li" class="item" active-class="is-active" exact>
        <a>{{ page }}</a>
      </router-link>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      pages: [
        "Home",
        "Users",
        "Contact",
        "Geographie",
        "E-Shop"
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  a:hover {
    color: cadetblue;
    font-weight: bold;
  }
  a{
     text-decoration: none;
     color: black;
     font-size: 25px;
  }
</style>



