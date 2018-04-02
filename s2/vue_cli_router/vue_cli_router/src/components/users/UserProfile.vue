<template lang="html">
  <div v-if="user" id="profile">
    <h2 class="title">Edit User n°{{ user.id }}</h2>
    <input type="text" v-model="user.mail">
    <input type="text" v-model="user.name">
    <button @click="editUser()" class="btn">Edit</button>
  </div>
  <div v-else>
    Sélectionner un user à éditer
  </div>
</template>

<script>
export default {
  methods: {
    editUser() {
      this.$emit("update-active-user", this.user);

    }
  },
  props: ["user"]
}
</script>

<style lang="scss" scoped>

</style>



