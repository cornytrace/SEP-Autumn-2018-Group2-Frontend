import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isAuthenticated: true,
  },
  getters: {

  },
  mutations: {
    isAuthenticated(state, payload) {
      state.isAuthenticated = payload.isAuthenticated
    },
  },
  actions: {
    login(context, payload) {
      context.commit('isAuthenticated', {
        isAuthenticated: true,
      })

    },

    logout(context, payload) {
      context.commit('isAuthenticated', {
        isAuthenticated: false,
      })
    },
  },
})
