import Vue from 'vue'
import {
  shallowMount,
} from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'
import Settings from '@/views/Settings'

Vue.use(BootstrapVue)

describe('Settings.vue', () => {

  // TODO CONTENT

  it('has a name', () => {
    expect(Settings.name).toMatch('Settings')
  })
  it('is Vue instance', () => {
    const wrapper = shallowMount(Settings)
    expect(wrapper.isVueInstance()).toBe(true)
  })
  it('is Register', () => {
    const wrapper = shallowMount(Settings)
    expect(wrapper.is(Settings)).toBe(true)
  })
  it('has Class', () => {
    const wrapper = shallowMount(Settings)
    expect(wrapper.find('.switch').exists()).toBeTruthy()
  })
})
