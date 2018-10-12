import Vue from 'vue'
import {
  shallowMount
} from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'
import Courses from '@/views/platforms/coursera/Courses'

import * as mockUtils from '../mockUtils'

Vue.use(BootstrapVue)

describe('Courses.vue', () => {
  let store

  beforeEach(() => {
    store = mockUtils.mockStore()
  })

  it('has a name', () => {
    expect(Courses.name).toMatch('Courses')
  })

  // TODO FIX

  it('is Vue instance', () => {
    const wrapper = shallowMount(Courses, {
      store,
    })
    expect(wrapper.isVueInstance()).toBe(true)
  })
  it('is Register', () => {
    const wrapper = shallowMount(Courses, {
      store,
    })
    expect(wrapper.is(Courses)).toBe(true)
  })
  it('sets the correct default data', () => {
    expect(typeof Courses.data).toBe('function')
    const defaultData = Courses.data()
    expect(defaultData.show).toBe(true)
  })
})
