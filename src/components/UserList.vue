<template lang="pug">
  ul.user-list
    li.user-item(v-for="user in USERS" :key="user.id.value")
      User(:userData="user")
</template>

<script>
  import User from './User'
  import { mapGetters } from 'vuex'
  

  export default {
    name: 'UserList',
    components: {
      User,
    },
    data() {
      return {}
    },
    computed: {
      ...mapGetters(['USERS']),
    },
    mounted() {},
    methods: {
    },
  }
</script>

<style lang="scss" scoped>
  // ul
  .user-list {
    padding: 0;
    margin: 0;
    list-style-type: none;

    // li
    .user-item {
      padding: 0;
      margin: 10px 0;
    }
  }
</style>
