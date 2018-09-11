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
  it('click Button', () => {
    const wrapper = shallowMount(NotificationToggler)
    wrapper.find('button').trigger('click')
  })
  // Not working, but is needed
  it('click Button 2', () => {
    const wrapper = shallowMount(NotificationToggler, {
      mocks: {
        display: true,
        mobile: false,
        checkBreakpoint: function () {
          return true
        },
      },
    })
    wrapper.find('button').trigger('click')
  })
})
