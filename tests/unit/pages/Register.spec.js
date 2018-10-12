import Vue from 'vue'
import {
  shallowMount,
  mount
} from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'
import Register from '@/views/pages/Register'

import util from '@/util'

jest.mock('@/util')
import * as mockUtils from '../mockUtils'

Vue.use(BootstrapVue)

describe('Register.vue', () => {
  let store

  beforeEach(() => {
    store = mockUtils.mockStore()
  })

  let mountComponent = (components) => {
    return mount(Register, {
      store,
      components,
    })
  }

  it('has a name', () => {
    expect(Register.name).toMatch('Register')
  })
  it('is Vue instance', () => {
    const wrapper = mountComponent()
    expect(wrapper.isVueInstance()).toBe(true)
  })
  it('is Register', () => {
    const wrapper = mountComponent()
    expect(wrapper.is(Register)).toBe(true)
  })
  it('should render correct content', () => {
    const wrapper = mountComponent()
    expect(wrapper.find('h1').text()).toMatch('Register')
  })

  // Check if the warning shows
  it('check warning', () => {
    const wrapper = mountComponent()
    wrapper.setData({
      email: "",
    })
    wrapper.vm.doRegister()
    expect(wrapper.find('#email-warning').classes()).not.toContain('hidden')
  })

  // Check if courses get parses properly
  it('check courses', () => {
    const wrapper = mountComponent()
    wrapper.setData({
      email: "test@test.nl",
      selectedCourses: ["Course 1", "Course 2", ],
    })
    wrapper.vm.doRegister()
    expect(wrapper.find('#email-warning').classes()).toContain('hidden')
  })

  // Check if the promise resolves
  it('check register resolve', () => {
    const wrapper = mountComponent()
    util.createUser = jest.fn().mockResolvedValueOnce("test");
    wrapper.setData({
      email: "test@test.nl",
      selectedCourses: ["Course 1", "Course 2", ],
      role: "qdt",
    })

    wrapper.find('#registerbutton').trigger('click')
    return wrapper.vm.$nextTick().then(() => {
      expect(util.createUser).toHaveBeenCalledTimes(1);
    })
  })

  // Check for error display on promise reject
  it('check register reject', () => {
    const wrapper = mountComponent()
    util.createUser = jest.fn().mockRejectedValueOnce({
      response: {
        data: {
          error: ["error message", ],
        },
      },
    })
    wrapper.setData({
      email: "test@test.nl",
      selectedCourses: ["Course 1", "Course 2", ],
      role: "qdt",
      warningText: "",
    })
    wrapper.find('#registerbutton').trigger('click')
    return wrapper.vm.$nextTick().then(() => {
      expect(util.createUser).toHaveBeenCalledTimes(1);
      expect(wrapper.find('#email-warning').classes()).not.toContain('hidden')
    })
  })
})
