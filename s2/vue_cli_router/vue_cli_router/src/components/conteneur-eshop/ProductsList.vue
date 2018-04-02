<template lang="html">
  <main id="main" class="eshop">

      <ul id="tshirts" class="list">
          <li v-for="tshirt in tshirts" class="item">
            {{ tshirt.reference }} <br> <img :src="tshirt.image"> <br> {{ tshirt.prix }}€
          </li>
        </ul>

  </main>
</template>

<script>

import axios from "axios";
export default {
  data() {
    return{
        tshirts: null,
    }
    },
    created() {
      axios({
        method: "get",
        url: "http://localhost:3000/produits"
      })
      .then(res => {
        this.tshirts = res.data;
      })
      .catch(err => {
        console.log(err);
      })
    },
}
</script>

<style lang="scss" scoped>

li {
  text-align: center;
  border: 1px solid black;
  margin-bottom: 20px;
}
#tshirts {
  display: grid;
  grid-template-columns: repeat(3, minmax(110px, 1fr));
  grid-template-rows: auto;
}

</style>



