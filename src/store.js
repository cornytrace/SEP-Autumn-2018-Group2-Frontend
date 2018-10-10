import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
import axios from 'axios'

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
})

export default new Vuex.Store({
  state: {
    apiToken: "",
    apiExpire: Date.now(),
    courses: [],
    resetToken: "",
    resetId: "",
    user: {
      courses: [],
    },
    selectedPlatform: "",
    selectedCourse: "",
    filters: {},
  },
  getters: {

  },
  mutations: {
    setToken(state, token) {
      state.apiToken = token;
    },
    setExpire(state, expire) {
      state.apiExpire = expire;
    },
    setCourses(state, courses) {
      state.courses = courses
    },
    setResetToken(state, token) {
      state.resetToken = token
    },
    setResetId(state, id) {
      state.resetId = id
    },
    setUser(state, user) {
      state.user = user;
    },
    setSelectedPlatform(state, platform) {
      state.selectedPlatform = platform;
    },
    setSelectedCourse(state, course) {
      state.selectedCourse = course;
    },
    setFilters(state, filters) {
      state.filters = filters;
    },
  },
  actions: {
    login(context, {
      username,
      password,
    }) {
      return new Promise((resolve, reject) => {
        axios.post(
          process.env.VUE_APP_ROOT_API + "/o/token/",
          new URLSearchParams({
            client_id: process.env.VUE_APP_CLIENT_ID,
            grant_type: "password",
            username: username,
            password: password,
          }),
        )
          .then(response => {
            context.commit('setToken', response.data.access_token);
            context.commit('setExpire', Date.now() + (response.data.expires_in * 1000));
            resolve();
          })
          .catch(function (response) {
            reject(response);
          });
      })
    },

    logout(context) {
      axios.post(
        process.env.VUE_APP_ROOT_API + "/o/revoke_token/",
        new URLSearchParams({
          client_id: process.env.VUE_APP_CLIENT_ID,
          token: context.state.apiToken,
        }),
      );
      context.commit('setToken', "");
      context.commit('setExpire', 0);
    },
  },
  plugins: [vuexLocal.plugin,],
})
