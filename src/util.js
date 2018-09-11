import store from '@/store'

export default {
  isAuthenticated() {
    return store.state.apiToken !== "" && store.state.apiExpire > Date.now()
  },

  apiUrl() {
    return store.state.apiUrl;
  },
}
