import store from '@/store'
import axios from 'axios'

export default {
  isAuthenticated() {
    return store.state.apiToken !== "" && store.state.apiExpire > Date.now()
  },

  apiUrl() {
    return process.env.VUE_APP_ROOT_API;
  },

  authHeader(headers = {}) {
    return Object.assign({}, headers, {
      Authorization: "Bearer " + store.state.apiToken,
    });
  },

  testAuth() {
    return axios
      .get(this.apiUrl() + "/api/testview/", {
        headers: this.authHeader(),
      })
  },

  getUsers() {
    return axios
      .get(this.apiUrl() + "/api/users/", {
        headers: this.authHeader(),
      })
  },

  createUser(data) {
    return axios
      .post(this.apiUrl() + "/api/users/", data, {
        headers: this.authHeader(),
      })
  },
}
