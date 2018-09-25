import Vue from 'vue'
import {
  shallowMount
} from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'
import Videos from '@/views/platforms/coursera/Videos'

import mockUtils from '../mockUtils'

Vue.use(BootstrapVue)

describe('Video.vue', () => {
  mockUtils.initUtils()

  // TODO CONTENT

  it('has a name', () => {
    expect(Videos.name).toMatch('Videos')
  })
  it('is Vue instance', () => {
    const wrapper = shallowMount(Videos, {
      mocks: {
        $route: {
          path: "",
        },
      },
    })
    expect(wrapper.isVueInstance()).toBe(true)
  })
  it('is Register', () => {
    const wrapper = shallowMount(Videos, {
      mocks: {
        $route: {
          path: "",
        },
      },
    })
    expect(wrapper.is(Videos)).toBe(true)
  })
  it('has Video', () => {
    const wrapper = shallowMount(Videos, {
      mocks: {
        $route: {
          path: "",
        },
      },
    })
    expect(wrapper.html()).toContain("Video")
  })
})
