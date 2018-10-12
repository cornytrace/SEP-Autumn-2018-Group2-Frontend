import Vue from 'vue'
import {
  mount
} from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'
import ForgotPassword from '@/views/pages/ForgotPassword'

import util from '@/util'
jest.mock('@/util')
import * as mockUtils from '../mockUtils'

Vue.use(BootstrapVue)

describe('ForgotPassword.vue', () => {
  let store

  beforeEach(() => {
    store = mockUtils.mockStore()
  })

  let mountComponent = (components) => {
    return mount(ForgotPassword, {
      store,
      components,
    })
  }

  it('has a name', () => {
    expect(ForgotPassword.name).toMatch('ForgotPassword')
  })
  it('is Vue instance', () => {
    const wrapper = mountComponent()
    expect(wrapper.isVueInstance()).toBe(true)
  })
  it('is ForgotPassword', () => {
    const wrapper = mountComponent()
    expect(wrapper.is(ForgotPassword)).toBe(true)
  })
  it('should render correct content', () => {
    const wrapper = mountComponent()
    expect(wrapper.find('h1').text()).toMatch('Forgot password')
  })

  // Check if the warning shows
  it('check warning empty email', () => {
    const wrapper = mountComponent()
    wrapper.setData({
      email: "",
    })
    wrapper.find('#submitbutton').trigger('click')
    return wrapper.vm.$nextTick().then(function () {
      expect(wrapper.find('#errorAlert').exists()).toBe(true)
    })
  })

  // Check if resolve works
  // TODO: Fix
  /*it('check email push call', () => {
    const push = jest.fn()
    util.sendPasswordReset = jest.fn().mockResolvedValue()
    const wrapper = mountComponent({
      mocks: {
        $router: {
          push: push,
        },
      },
    })
    wrapper.setData({
      email: "test@test.nl",
    })
    wrapper.find('#submitbutton').trigger('click')
    return wrapper.vm.$nextTick().then(() => {
      expect(push).toHaveBeenCalledWith("/pages/login")
      expect(wrapper.vm.showAlert).toBe(false)
    })
  })*/

  // Check if the warning shows
  it('check email push reject', () => {
    const push = jest.fn()
    util.sendPasswordReset = jest.fn().mockRejectedValueOnce({
      response: {
        data: {
          error: ["error message", ],
        },
      },
    });
    const wrapper = mountComponent({
      mocks: {
        $router: {
          push: push,
        },
      },
    })
    wrapper.setData({
      email: "test@test.nl",
    })
    wrapper.find('#submitbutton').trigger('click')
    return wrapper.vm.$nextTick().then(function () {
      expect(wrapper.find('#errorAlert').exists()).toBe(true);
    })
  })


})
