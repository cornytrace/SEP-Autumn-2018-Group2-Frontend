import Vuex from 'vuex'
import store from '@/store'

export default {
  initUtils: () => {
    Element.prototype.scrollTo = () => {}
  },
  mockStore: () => {
    let actions = {
      login: jest.fn().mockResolvedValue(),
      logout: jest.fn().mockResolvedValue(),
    }
    return new Vuex.Store({
      state: store.state,
      actions,
      mutations: {
        setToken: jest.fn(),
        setExpire: jest.fn(),
        setCourses: jest.fn(),
      },
    })
  },
}
