import Vuex from 'vuex'
import {
  mount,
  createLocalVue
} from '@vue/test-utils'
import util from "@/util";
import BootstrapVue from 'bootstrap-vue'
import Videos from '@/views/platforms/coursera/Videos'
import moxios from 'moxios'

import mockUtils from '../mockUtils'
import strings from "@/strings"

const localVue = createLocalVue()
localVue.use(BootstrapVue)
localVue.use(Vuex)

describe('Video.vue', () => {
  let store

  beforeEach(function () {
    store = mockUtils.mockStore()
    moxios.install()
  })

  afterEach(function () {
    moxios.uninstall()
  })

  // TODO CONTENT

  let mountComponent = () => {
    return mount(Videos, {
      localVue,
      store,
      stubs: [],
      mocks: {
        $route: {
          params: {
            courseid: "test",
          },
        },
      },
    })
  }

  it('has a name', () => {
    expect(Videos.name).toMatch('Videos')
  })

  it('is Vue instance', () => {
    const wrapper = mountComponent()
    expect(wrapper.isVueInstance()).toBe(true)
  })

  it('is Register', () => {
    const wrapper = mountComponent()
    expect(wrapper.is(Videos)).toBe(true)
  })

  it('sets proper Video content', (done) => {
    moxios.stubRequest(util.apiUrl() + '/api/video-analytics/1/', {
      status: 200,
      response: [{
        branch: 1,
        id: 1,
        item_id: 1,
        lesson: 1,
        name: "name",
        optional: false,
        order: 1,
        type: 1,
      },],
    });

    const wrapper = mountComponent()
    moxios.wait(function () {
      expect(wrapper.html()).toContain("name")
      done();
    })

  })

  it('sets Video content error', (done) => {
    moxios.stubRequest(util.apiUrl() + '/api/video-analytics/1/', {
      status: 403,
      response: [{
        branch: 1,
        id: 1,
        item_id: 1,
        lesson: 1,
        name: "name",
        optional: false,
        order: 1,
        type: 1,
      },],
    });
    const wrapper = mountComponent()
    moxios.wait(function () {
      expect(wrapper.html()).toContain(strings.connection_error)
      done();
    })
  })

})
