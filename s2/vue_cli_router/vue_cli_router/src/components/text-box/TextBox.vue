<template lang="html">

  <div id="text_box" :style="`color: ${_color}; background: ${_bg}`"> {{ msg }}

  </div>
</template>
<script>
export default {
  created() {
    this.msg = this.message || this.msg;
    this._bg = this.bg || this._bg;
    this._color = this.color || this._color;

  },
  data() {
    return {
      _bg: "white",
      _color: "black",
      msg: "message par défaut",
    }
  },
  props: ["message", "bg", "color"]

}
</script>

<style lang="scss" scoped>
#text_box {
  border: 2px solid black;
  border-radius: .4rem;

}

</style>


