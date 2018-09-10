import Vue from 'vue'
import {
  shallowMount,
} from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'
import Users from '@/views/users/Users'

Vue.use(BootstrapVue)

describe('Users.vue', () => {

  // TODO CONTENT

  it('has a name', () => {
    expect(Users.name).toMatch('Users')
  })
  it('is Vue instance', () => {
    const wrapper = shallowMount(Users)
    expect(wrapper.isVueInstance()).toBe(true)
  })
  it('is Register', () => {
    const wrapper = shallowMount(Users)
    expect(wrapper.is(Users)).toBe(true)
  })
  it('has Users', () => {
    const wrapper = shallowMount(Users)
    expect(wrapper.html()).toContain("Users")
  })
})
