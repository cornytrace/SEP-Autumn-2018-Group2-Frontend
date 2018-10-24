import Vuex from 'vuex'
import {
  mount,
  createLocalVue
} from '@vue/test-utils'
import * as mockUtils from '../mockUtils'

import BootstrapVue from 'bootstrap-vue'
import Home from '@/views/Home'

import strings from '@/strings'
import moxios from 'moxios'
import util from '@/util'

const localVue = createLocalVue()
localVue.use(BootstrapVue)
localVue.use(Vuex)

describe('Home.vue', () => {
  let store

  beforeEach(function () {
    store = mockUtils.mockStore()
    moxios.install()
  })

  afterEach(function () {
    moxios.uninstall()
  })

  let mountComponent = () => {
    return mount(Home, {
      localVue,
      store,
    })
  }

  it('has a name', () => {
    expect(Home.name).toMatch('home')
  })
  it('has a created hook', () => {
    expect(typeof Home.data).toMatch('function')
  })
  it('sets the correct default data', () => {
    expect(typeof Home.data).toMatch('function')
  })
  it('is Vue instance', () => {
    const wrapper = mountComponent();
    expect(wrapper.isVueInstance()).toBe(true)
  })
  it('is Home', () => {
    const wrapper = mountComponent();
    expect(wrapper.is(Home)).toBe(true)
  })
  it('Test if the homepage shows correct statistics for separate courses, and combined statistics are correct.', (done) => {
    moxios.stubRequest(util.apiUrl() + '/api/course-analytics/', {
      status: 200,
      response: [{
        enrolled_learners: 6,
        finished_learners: 4,
        leaving_learners: 234,
        name: "test_name",
        // Not shown on homepage
        paying_learners: 324,
        slug: "test-name",
        ratings: [[8.45, 4,],],
      },
      {
        enrolled_learners: 7,
        finished_learners: 5,
        leaving_learners: 43253,
        name: "test_name",
        paying_learners: 324,
        slug: "test-name",
        ratings: [[1, 0,],],
      },],
    });
    const wrapper = mountComponent();
    moxios.wait(function () {
      return wrapper.vm.$nextTick().then(() => {
        expect(wrapper.html()).toContain('Coursera')
        expect(wrapper.html()).toContain('test_name')
        // Test enrolled learner separate and combined.
        expect(wrapper.html()).toContain("6")
        expect(wrapper.html()).toContain("7")
        expect(wrapper.html()).toContain("13")

        // Test finished learner separate and combined.
        expect(wrapper.html()).toContain("4")
        expect(wrapper.html()).toContain("5")
        expect(wrapper.html()).toContain("9")


        expect(wrapper.html()).toContain("234")
        expect(wrapper.html()).toContain("43253")
        done();
      })
    })
  })
})
