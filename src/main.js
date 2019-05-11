// IE11 polyfill issue
import '@babel/polyfill';

// App Setting
import 'filters'
import router from './router'
import store from './store'
import VuexRouterSync from 'vuex-router-sync'

import App from 'App'

// vue-router and vuex store in sync.
VuexRouterSync.sync(store, router)

new Vue({
  router,
  store,
  components: {
    'App': App,
  },
  template: '<App ref="app" />',
}).$mount('#app')
