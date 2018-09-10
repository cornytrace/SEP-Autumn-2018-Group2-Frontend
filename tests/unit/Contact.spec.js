import Vue from 'vue'
import {
  shallowMount,
} from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'
import Contact from '@/views/Contact'

Vue.use(BootstrapVue)

describe('Contact.vue', () => {

  // TODO CONTENT

  it('has a name', () => {
    expect(Contact.name).toMatch('Contact')
  })
  it('is Vue instance', () => {
    const wrapper = shallowMount(Contact)
    expect(wrapper.isVueInstance()).toBe(true)
  })
  it('is Register', () => {
    const wrapper = shallowMount(Contact)
    expect(wrapper.is(Contact)).toBe(true)
  })
})
