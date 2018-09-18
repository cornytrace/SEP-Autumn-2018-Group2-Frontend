import {
  shallowMount,
  mount,
  createLocalVue
} from '@vue/test-utils'
import Vuex from 'vuex'
import BootstrapVue from 'bootstrap-vue'
import ResetPassword from '@/views/pages/ResetPassword'

import util from '@/util'

jest.mock('@/util')

const localVue = createLocalVue()
localVue.use(BootstrapVue)
localVue.use(Vuex)


describe('ResetPassword.vue', () => {
  let actions
  let store

  beforeEach(() => {
    actions = {
      actionClick: jest.fn(),
      actionInput: jest.fn(),
    }
    store = new Vuex.Store({
      state: {},
      actions,
    })
  })

  it('has a name', () => {
    expect(ResetPassword.name).toMatch('ResetPassword')
  })
  it('is Vue instance', () => {
    const wrapper = mount(ResetPassword, {
      store,
      localVue,
    })
    expect(wrapper.isVueInstance()).toBe(true)
  })
  it('is ResetPassword', () => {
    const wrapper = mount(ResetPassword, {
      store,
      localVue,
    })
    expect(wrapper.is(ResetPassword)).toBe(true)
  })
  it('should render correct content', () => {
    const wrapper = mount(ResetPassword, {
      store,
      localVue,
    })
    expect(wrapper.find('h1').text()).toMatch('Reset Password')
  })

  // Check different passwords
  it('check ResetPassword resolve', () => {
    const wrapper = mount(ResetPassword, {
      store,
      localVue,
    })
    wrapper.setData({
      password: "1234",
      passwordCheck: "123",
    })

    wrapper.find('#resetbutton').trigger('click')
    return wrapper.vm.$nextTick().then(function () {
      expect(wrapper.find('#alertbox').exists()).toBe(true)
    })
  })

  // Check if the promise resolves
  it('check ResetPassword resolve', () => {
    const wrapper = mount(ResetPassword, {
      store,
      localVue,
    })
    util.resetPassword = jest.fn().mockResolvedValueOnce("test");
    wrapper.setData({
      password: "1234",
      passwordCheck: "1234",
    })

    wrapper.find('#resetbutton').trigger('click')
    return wrapper.vm.$nextTick().then(function () {
      expect(wrapper.find('#successbox').exists()).toBe(true)
    })
  })

  // Check for error display on promise reject
  it('check ResetPassword reject', () => {
    const wrapper = mount(ResetPassword, {
      store,
      localVue,
    })
    util.resetPassword = jest.fn().mockRejectedValueOnce({
      response: {
        data: {
          error: ["error message", ],
        },
      },
    })
    wrapper.setData({
      password: "1234",
    })
    wrapper.find('#resetbutton').trigger('click')
    return wrapper.vm.$nextTick().then(function () {
      expect(wrapper.find('#alertbox').exists()).toBe(true)
    })
  })

  // Check for error display on promise reject
  it('check empty token', () => {
    store = new Vuex.Store({
      state: {
        resetToken: "",
      },
      actions,
    })
    const wrapper = mount(ResetPassword, {
      store,
      localVue,
    })
    util.resetPassword = jest.fn().mockRejectedValueOnce({
      response: {
        data: {
          error: ["error message", ],
        },
      },
    })
    wrapper.setData({
      password: "1234",
    })
    wrapper.find('#resetbutton').trigger('click')
    return wrapper.vm.$nextTick().then(function () {
      expect(wrapper.find('#alertbox').exists()).toBe(true)
    })
  })
})
