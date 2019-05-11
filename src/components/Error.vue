<template lang="pug">
  .error-message
    h4 {{ text }}
</template>

<script>
  export default {
    name: 'Error',
    components: {
    },
    props: {
      text: {
        type: String,
        required: true,
      },
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
  .error-message {
    width: calc(100% - 60px);
    background-color: #e4e4e4;
    padding: 20px;
    margin: 10px auto;

    h4 {
      margin-top: 0;
      margin-bottom: 0;
    }
  }
</style>
