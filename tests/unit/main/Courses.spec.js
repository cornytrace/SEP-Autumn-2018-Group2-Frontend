import Vuex from 'vuex'
import {
  mount,
  createLocalVue
} from '@vue/test-utils'
import * as mockUtils from '../mockUtils'
import moxios from 'moxios'
import util from '@/util'
import strings from "@/strings"
import BootstrapVue from 'bootstrap-vue'
import Courses from '@/views/platforms/coursera/Courses'

const localVue = createLocalVue()
localVue.use(BootstrapVue)
localVue.use(Vuex)

describe('Courses.vue', () => {
  let store

  beforeEach(() => {
    store = mockUtils.mockStore()
    moxios.install()
  })

  afterEach(function () {
    moxios.uninstall()
  })

  let mountComponent = (components) => {
    return mount(Courses, Object.assign({
      localVue,
      store,
      mocks: {
        $router: {},
      },
      stubs: [],

    }, components))
  }

  it('has a name', () => {
    expect(Courses.name).toMatch('Courses')
  })

  it('is Vue instance', () => {
    const wrapper = mountComponent({
      store,
    })
    expect(wrapper.isVueInstance()).toBe(true)
  })
  it('is Register', () => {
    const wrapper = mountComponent({
      store,
    })
    expect(wrapper.is(Courses)).toBe(true)
  })
  it('sets the correct default data', () => {
    expect(typeof Courses.data).toBe('function')
    const defaultData = Courses.data()
    expect(defaultData.show).toBe(true)
  })
  it('requests and shows the right data', (done) => {
    moxios.stubRequest(util.apiUrl() + "/api/course-analytics/", {
      status: 200,
      response: [{
        "id": "qvkru5bqEeigcQ6ACV18LA",
        "slug": "approximation-algorithms",
        "name": "Approximation Algorithms",
        "specialization": "Advanced Algorithms (Data Science in Action)",
        "level": null,
        "enrolled_learners": 1,
        "leaving_learners": 1,
        "ratings": [
          [1, 0, ],
          [2, 0, ],
          [3, 0, ],
          [4, 0, ],
          [5, 0, ],
          [6, 0, ],
          [7, 0, ],
          [8, 0, ],
          [9, 0, ],
          [10, 0, ],
        ],
        "finished_learners": 0,
        "paying_learners": 0,
      }, ],
    })
    const wrapper = mountComponent()
    moxios.wait(function () {
      expect(wrapper.html()).toContain("Approximation Algorithms");
      done()
    })
  })

  it('handles empty data', (done) => {
    moxios.stubRequest(util.apiUrl() + "/api/course-analytics/", {
      status: 200,
      response: [],
    })
    const wrapper = mountComponent()
    moxios.wait(function () {
      expect(wrapper.html()).toContain(strings.no_courses);
      done()
    })
  })

  it('handles api error', (done) => {
    moxios.stubRequest(util.apiUrl() + "/api/course-analytics/", {
      status: 403,
      response: [],
    })
    const wrapper = mountComponent()
    moxios.wait(function () {
      expect(wrapper.html()).toContain(strings.connection_error);
      done()
    })
  })
})
