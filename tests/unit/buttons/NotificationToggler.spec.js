import Vue from 'vue'
import {
  shallowMount,
  mount,
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
    const wrapper = mount(NotificationToggler, {
      propsData: {
        navItems: [{
            name: 'Settings',
            icon: 'icon-settings',
            url: '/settings',
          },
          {
            name: 'Contact',
            icon: 'icon-envelope-open',
            url: '/contact',
          },
        ],
        display: "lg",
        mobile: false,
      },
    })
    wrapper.find('button').trigger('click')
  })
})
