import Vue from 'vue'
import Vuex from 'vuex'
import {
  shallowMount,
  mount,
  createLocalVue
} from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'
import Videos from '@/views/platforms/coursera/Videos'

import mockUtils from '../mockUtils'

const localVue = createLocalVue()
localVue.use(BootstrapVue)
localVue.use(Vuex)

describe('Video.vue', () => {
  let store

  beforeEach(function () {
    store = mockUtils.mockStore()
  })

  // TODO CONTENT

  let mountComponent = () => {
    return mount(Videos, {
      localVue,
      store,
      stubs: [],
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

  it('has Video', () => {
    const wrapper = shallowMount(Videos, {
      mocks: {
        $route: {
          params: {
            courseid: "real-time-systems",
          },
        },
      },
    })
    expect(wrapper.html()).toContain("Video")
  })
})
