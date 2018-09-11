import Vue from 'vue'
import {
  shallowMount,
} from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'
import BottombarNav from '@/views/sidebars/BottombarNav'

Vue.use(BootstrapVue)

describe('Notification.vue', () => {

  // TODO CONTENT

  it('has a name', () => {
    expect(BottombarNav.name).toMatch('BottombarNav')
  })
  it('is Vue instance', () => {
    const wrapper = shallowMount(BottombarNav)
    expect(wrapper.isVueInstance()).toBe(true)
  })
  it('is Register', () => {
    const wrapper = shallowMount(BottombarNav)
    expect(wrapper.is(BottombarNav)).toBe(true)
  })
})
