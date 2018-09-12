import store from '@/store'
import axios from 'axios'

export default {
  isAuthenticated() {
    return store.state.apiToken !== "" && store.state.apiExpire > Date.now()
  },

  apiUrl() {
    return store.state.apiUrl;
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
}
