import Vue from 'vue'
import {
  shallowMount,
  mount
} from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'
import BottombarNav from '@/views/sidebars/BottombarNav'

import mockUtils from '../mockUtils'

Vue.use(BootstrapVue)

describe('BottombarNav.vue', () => {
  mockUtils.initUtils()

  let mountComponent = (components) => {
    return mount(BottombarNav, {
      components,
      propsData: {
        navItems: [],
      },
    })
  }

  // TODO CONTENT

  it('has a name', () => {
    expect(BottombarNav.name).toMatch('BottombarNav')
  })
  it('is Vue instance', () => {
    const wrapper = mountComponent()
    expect(wrapper.isVueInstance()).toBe(true)
  })
  it('is Register', () => {
    const wrapper = mountComponent()
    expect(wrapper.is(BottombarNav)).toBe(true)
  })
})
