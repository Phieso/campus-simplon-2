<template lang="html">
  <main id="main" class="users">
    <user-list :userUpdated="userActive" @edit-active-user="userActive = $event">
    </user-list>
    <profile :user="getActiveUser()" @update-active-user="userActive = $event">
    </profile>
  </main>
</template>

<script>
import Profile from "./../users/UserProfile.vue";
import UserList from "./../users/UsersList.vue";

export default {
  data() {
    return {
      userActive: null,
    }
  },
  components: {
    Profile,
    UserList
  },
  methods: {
    getActiveUser() {
      return this.userActive ? Object.assign({}, this.userActive) : null;
    },
  }
}
</script>

<style lang="scss" scoped>

</style>



