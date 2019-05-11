<template lang="pug">
  #app
    Header
    main(role="main")
      router-view
    Footer
</template>

<script>
  // import { mapState, mapGetters, mapMutations } from 'vuex'
  // import Settings from 'config/settings'
  import Header from 'components/Header';
  import Footer from 'components/Footer';

  export default {
    name: 'App',
    components: {
      Header,
      Footer,
    },
    data() {
      return {}
    },
    computed: {
    },
    created() {
    },
    methods: {
    },
  }
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Nunito+Sans:400,700');

  html {
    margin: 0;
  }
  
  body {
    font-size: 16px;
    color: #212121;
    margin: 0;
    font-family: 'Nunito Sans', sans-serif;

    main[role="main"] {
      // avoid hanging footer
      min-height: calc(100vh - 109px); // minus by header & footer
    }
  }

  h4 {
    font-size: 24px;
    font-weight: 700;
  }
</style>
