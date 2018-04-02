<template lang="html">
  <div id="profile_list">
    <ul id="list">
      <li v-for="u in users" class="item">
        <div class="infos">
          <p v-for="(prop, key) in u" class="info">
            {{ key }} : {{ prop }}
          </p>
        </div>
        <button @click="emitActiveUser(u)" class="btn" :class="{'is-active':activeUser === u}">Edit</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  watch: {
    userUpdated(updatedUser) {
      const found = this.users.find(user => {
        return user.id === updatedUser.id;
      });
      Object.assign(found, updatedUser);
    }
  },
  data() {
    return{
      activeUser: null,
      users: [
        {id: 1, mail: "test@test.com", name:"foo"},
        {id: 2, mail: "fake@fake.io", name:"bar"},
        {id: 3, mail: "idea@no-idea.com", name:"baz"},
      ]
    }
  },
  methods: {
    emitActiveUser(user) {
      this.activeUser = user;
      this.$emit("edit-active-user", user)
    }
  },
  props: ["userUpdated"]
}
</script>

<style lang="scss" scoped>

</style>



