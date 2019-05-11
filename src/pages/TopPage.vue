<template lang="pug">
  .container
    UserList
    Error(v-if="ERROR_MESSAGE !== ''" :text="ERROR_MESSAGE")
    Loader(v-if="IS_LOADING")
</template>

<script>
  import UserList from '../components/UserList';
  import Loader from '../components/Loader';
  import Error from '../components/Error';
  import { mapGetters } from 'vuex'

  export default {
    name: 'TopPage',
    components: {
      UserList,
      Loader,
      Error,
    },
    data() {
      return {
        scrollIteration: 1,
        maxLoading: 4,
      }
    },
    computed: {
      ...mapGetters(['IS_LOADING', 'ERROR_MESSAGE', 'USERS']),
    },
    mounted() {
      this.$store.dispatch('loadUsers');
      window.scrollTo(0, 0);
      this.scroll();
    },
    methods: {
      scroll() {
        window.onscroll = () => {
          const scrollHeight = document.body.scrollHeight;
          const totalHeight = window.pageYOffset + window.innerHeight;
          let bottomOfWindow = totalHeight >= scrollHeight;
          
          // https://stackoverflow.com/a/46718465
          if (bottomOfWindow && this.scrollIteration < 4 && this.ERROR_MESSAGE === '') {
            // prevent load too fast
            setTimeout(() => {
              this.scrollIteration++;
              this.$store.dispatch({
                type: 'appendUsers',
                page: this.scrollIteration,
              });
            }, 400);
          }
        };
      },
    },
  }
</script>
