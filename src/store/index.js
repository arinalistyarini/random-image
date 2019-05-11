import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

const apiURL = 'https://randomuser.me/api/';
const RESULTS = 5;

export const state = {
  users: [],
  seed: '',
  isLoading: false,
  errorMessage: '',
}

export const mutations = {
  SET_USERS (state, users) {
    state.users = users;
  },
  // generate same set of users
  // https://randomuser.me/documentation#seeds
  SET_SEED (state, seed) {
    state.seed = seed;
  },
  SET_APPEND_USERS (state, users) {
    for(let i = 0; i < users.length; i++) {
      state.users.push(users[i]);
    }
  },
  SET_LOADING (state, isLoading) {
    state.isLoading = isLoading;
  },
  SET_ERROR_MESSAGE (state, errorMessage) {
    state.errorMessage = errorMessage;
  },
}

export const getters = {
  USERS: state => {
    return state.users;
  },
  IS_LOADING: state => {
    return state.isLoading;
  },
  ERROR_MESSAGE: state => {
    return state.errorMessage;
  },
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions: {
	  loadUsers ({ commit }) {
      // show loading
      commit('SET_LOADING', true);

      // off error message
      commit('SET_ERROR_MESSAGE', '');

      const fetchURL = `${apiURL}?results=${RESULTS}`;
      axios
        .get(fetchURL)
        .then(r => {
          // generate same set of users
          // https://randomuser.me/documentation#seeds
          commit('SET_SEED', r.data.info.seed);
          return r.data.results;
        })
        .then(users => {
          commit('SET_USERS', users);

          // hide loading
          commit('SET_LOADING', false);
        }).catch(error => {
          commit('SET_ERROR_MESSAGE', error.toString());
          
          // hide loading
          commit('SET_LOADING', false);
        });
    },
    appendUsers({ commit }, dispatchObject) {
      // show loading
      commit('SET_LOADING', true);

      // off error message
      commit('SET_ERROR_MESSAGE', '');

      const seed = state.seed;
      const fetchURL = `${apiURL}?seed=${seed}&results=${RESULTS}&page=${dispatchObject.page}`;
      axios
        .get(fetchURL)
        .then(r => r.data.results)
        .then(users => {
          commit('SET_APPEND_USERS', users);

          // hide loading
          commit('SET_LOADING', false);
        }).catch(error => {
          commit('SET_ERROR_MESSAGE', error.toString());

          // hide loading
          commit('SET_LOADING', false);
        });
    },
  },
  strict: process.env.NODE_ENV !== 'production',
})
