<template>
  <div id="app">
    <header>
      <logo-stylise></logo-stylise>
    <img src="./assets/logo.png">
    <nav-main></nav-main>
    <h1>promo@Sarcelles</h1>
    </header>

    <router-view></router-view>

  </div>
</template>

<script>
import LogoStylise from "./components/logo-stylise/LogoStylise.vue";
import TextBox from "./components/text-box/TextBox.vue";
import NavMain from "./components/nav-main/NavMain.vue";

export default {
  name: 'app',
  components: {
    LogoStylise,
    TextBox,
    NavMain
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

.btn {
  cursor: pointer;
  outline: none;
  min-height: 32px;
  max-width: 220px;
  min-width: 80px;
  margin: 0 auto;
}
.btn:hover,
.btn.is-active {
  background: #314960;
  color: white;
  font-weight: bolder;
}
</style>
