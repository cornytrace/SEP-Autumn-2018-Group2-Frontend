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
import Quizzes from '@/views/platforms/coursera/Quizzes'

const localVue = createLocalVue()
localVue.use(BootstrapVue)
localVue.use(Vuex)

describe('Quizzes.vue', () => {
  let store

  beforeEach(function () {
    store = mockUtils.mockStore()
    moxios.install()
  })

  afterEach(function () {
    moxios.uninstall()
  })


  let mountComponent = (components) => {
    return mount(Quizzes, Object.assign({
      localVue,
      store,
      mocks: {
        $router: {},
        $route: {
          params: {
            courseid: "test",
          },
        },
      },
      stubs: [
        'Chart',
      ],

    }, components))
  }

  it('has a name', () => {
    expect(Quizzes.name).toMatch('Quizzes')
  })
  it('is Vue instance', () => {
    const wrapper = mountComponent()
    expect(wrapper.isVueInstance()).toBe(true)
  })
  it('is of the right class', () => {
    const wrapper = mountComponent()
    expect(wrapper.is(Quizzes)).toBe(true)
  })
  it('requests and shows the right data', (done) => {
    moxios.stubRequest(util.apiUrl() + "/api/quiz-analytics/1/", {
      status: 200,
      response: [{
        "id": "3Z22zCJ0EeaAvQ6lv8vWPw@3",
        "base_id": "3Z22zCJ0EeaAvQ6lv8vWPw",
        "version": 3,
        "name": "Tactics",
        "type": "summative",
        "update_timestamp": "2016-08-17T10:00:51.607000Z",
        "passing_fraction": 0.8,
        "graded": true,
      }, ],
    })
    const wrapper = mountComponent()
    moxios.wait(function () {
      expect(wrapper.html()).toContain("Tactics");
      expect(wrapper.html()).toContain("summative");
      done()
    })
  })

  it('handles empty data', (done) => {
    moxios.stubRequest(util.apiUrl() + "/api/quiz-analytics/1/", {
      status: 200,
      response: [],
    })
    const wrapper = mountComponent()
    moxios.wait(function () {
      expect(wrapper.html()).toContain("No quizzes");
      done()
    })
  })

  it('handles api error', (done) => {
    moxios.stubRequest(util.apiUrl() + "/api/quiz-analytics/1/", {
      status: 403,
      response: [],
    })
    const wrapper = mountComponent()
    moxios.wait(function () {
      expect(wrapper.html()).toContain(strings.connection_error);
      done()
    })
  })

  it('handles non-existant course slug', (done) => {
    const wrapper = mountComponent({
      mocks: {
        $router: {},
        $route: {
          params: {
            courseid: "ababab",
          },
        },
      },
    })
    moxios.wait(function () {
      expect(wrapper.html()).toContain(strings.error_course_id);
      done()
    })
  })

})
