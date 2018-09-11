import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
import axios from 'axios'

import util from '@/util'

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
})

export default new Vuex.Store({
  state: {
    apiToken: "",
    apiExpire: Date.now(),
    apiUrl: "http://localhost:8000",
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
  },
  actions: {
    login(context, {
      username,
      password,
    }) {
      return new Promise((resolve, reject) => {
        axios.post(
            util.apiUrl() + "/o/token/",
            "client_id=7fH0JbXMwmhVoW8sb12NiTbeiokwj2LJVWAIhYZt&grant_type=password&username=" +
            username +
            "&password=" +
            password
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
        util.apiUrl() + "/o/revoke_token/",
        "client_id=7fH0JbXMwmhVoW8sb12NiTbeiokwj2LJVWAIhYZt&token=" + context.state.apiToken);
      context.commit('setToken', "");
      context.commit('setExpire', 0);
    },
  },
  plugins: [vuexLocal.plugin, ],
})
