import Vuex from 'vuex'
import store from '@/store'

export default {
  initUtils: () => {
    Element.prototype.scrollTo = () => { }
  },
  mockStore: () => {
    let actions = {
      login: jest.fn().mockResolvedValue(),
      logout: jest.fn().mockResolvedValue(),
    }
    return new Vuex.Store({
      state: {
        user: {
          courses: [{
            course_name: "test",
            course_slug: "test",
            course_id: "1",
            pk: 1,
          }, {
            course_name: "test2",
            course_slug: "test2",
            course_id: "2",
            pk: 2,
          },],
        },
      },
      actions,
      mutations: {
        setToken: jest.fn(),
        setExpire: jest.fn(),
        setCourses: jest.fn(),
        setUser: jest.fn(),
        setSelectedPlatform: jest.fn(),
        setSelectedCourse: jest.fn(),
      },
    })
  },
}
