import Vue from 'vue'
import {
  shallowMount,
} from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'
import NotificationToggler from '@/views/buttons/NotificationToggler'

Vue.use(BootstrapVue)

describe('Notification.vue', () => {

  // TODO CONTENT

  it('has a name', () => {
    expect(NotificationToggler.name).toMatch('NotificationToggler')
  })
  it('is Vue instance', () => {
    const wrapper = shallowMount(NotificationToggler)
    expect(wrapper.isVueInstance()).toBe(true)
  })
  it('is Register', () => {
    const wrapper = shallowMount(NotificationToggler)
    expect(wrapper.is(NotificationToggler)).toBe(true)
  })
  it('has Button', () => {
    const wrapper = shallowMount(NotificationToggler)
    expect(wrapper.html()).toContain("button")
  })
})
