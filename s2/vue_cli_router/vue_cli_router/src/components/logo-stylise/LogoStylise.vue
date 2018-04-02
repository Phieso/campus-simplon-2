<template lang="html">

  <div id="logo_stylise" @click="changeStyle()" :class="{'is-active': isActive}">
    <h1 class="title">{{ title }}</h1>
    <img id="vue_logo" src="./../../assets/logo.png">
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "logo stylisé",
      isActive: false
    }
  },

methods: {
  changeStyle() {
    this.isActive = !this.isActive;
  }
}
}
</script>

<style lang="scss" scoped>
.is-active {
  border: 2px solid orange;
}

.title {
  display: inline-block;
  vertical-align: middle;
  font-size: 1rem;
}

#vue_logo {
  display: inline-block;
  vertical-align: middle;
  max-width: 50px;
}
</style>


