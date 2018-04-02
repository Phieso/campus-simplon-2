<template lang="html">
  <main id="main" class="geographie">
    <h1 class="title">GEOGRAPHIE</h1>
      <p v-if="!departements">Effectuer une requête AJAX GET pour récupérer la liste des départements français.<br>
      On va utiiser la librairie axios :
      <code>npm i --save axios</code>
      </p>

      <button @click="getDepartements()" class="btn">
        <span>Get departements</span>
      </button>
      <input v-if="departements" type="text" @input="filterDepts($event)" id="search" class="input" placeholder="Filtrer">
      <ul id="departements" class="list">
        <li v-for="d in filtered || departements" class="item">
          {{ d.departement_code }} : {{ d.departement_nom }}
        </li>
      </ul>

  </main>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      departements: null,
      filtered: null,
    }
  },
  methods: {
    filterDepts (e) {
      const needle = e.target.value.toLocaleLowerCase();
      this.filtered = this.departements.filter(d => {
        let nom = d.departement_nom.toLocaleLowerCase();
        return nom.match(needle) || d.departement_code.match(needle);
      })
    },
    getDepartements() {
      axios({
        method: "get",
        url: "http://localhost:3000/departement"
      })
      .then(res => {
        this.departements = res.data;
      })
      .catch(err => {
        console.log(err);
      })
    },

  }
}
</script>

<style lang="css" scoped>
ul {
  display: flex;
  flex-direction: column;
}
li {
  text-align: center;
}
li:nth-child(even) {
  background: cadetblue;
}
</style>



