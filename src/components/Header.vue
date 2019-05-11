<template lang="pug">
  header
    .header-container
      p User List
</template>

<script>
  export default {
    name: 'Header',
    components: {
    },
    data() {
      return {
      }
    },
    methods: {
    },
  }
</script>

<style lang="scss" scoped>
  .header-container {
    background-color: #474747;
    font-size: 20px;
    color: #ffffff;
    padding: 20px 10px;
    font-weight: 700;
    text-transform: uppercase;

    p {
      margin: 0;
    }
  }
</style>
