import Vuex from 'vuex'
import store from '@/store'

export default {
  mockStore: () => {
    let actions = {
      login: jest.fn(),
      logout: jest.fn(),
    }
    return new Vuex.Store({
      state: store.state,
      actions,
    })
  },
}
