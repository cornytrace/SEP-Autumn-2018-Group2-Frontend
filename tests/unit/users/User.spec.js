import Vue from 'vue'
import {
  shallowMount,
} from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'
import User from '@/views/users/User'

Vue.use(BootstrapVue)

describe('User.vue', () => {

  // TODO CONTENT

  it('has a name', () => {
    expect(User.name).toMatch('User')
  })
  // it('is Vue instance', () => {
  //   const wrapper = shallowMount(User)
  //   expect(wrapper.isVueInstance()).toBe(true)
  // })
  // it('is Register', () => {
  //   const wrapper = shallowMount(User)
  //   expect(wrapper.is(User)).toBe(true)
  // })
  // it('has a User', () => {
  //   const wrapper = shallowMount(User)
  //   expect(wrapper.html()).toContain("User")
  // })
})
