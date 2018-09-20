import Vuex from 'vuex'
import {
  shallowMount,
  mount,
  createLocalVue
} from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'
import Login from '@/views/pages/Login'
import {
  doesNotReject
} from 'assert';
import axios from 'axios'
import moxios from 'moxios'

import mockUtils from '../mockUtils'

import util from '@/util'

const localVue = createLocalVue()
localVue.use(BootstrapVue)
localVue.use(Vuex)

describe('Login.vue', () => {
  let store

  beforeEach(function () {
    store = mockUtils.mockStore()
    moxios.install()
  })

  afterEach(function () {
    moxios.uninstall()
  })

  it('has a name', () => {
    expect(Login.name).toMatch('Login')
  })
  it('is Vue instance', () => {
    const wrapper = mount(Login, {
      localVue,
    })
    expect(wrapper.isVueInstance()).toBe(true)
  })
  it('is Login', () => {
    const wrapper = mount(Login, {
      localVue,
    })
    expect(wrapper.is(Login)).toBe(true)
  })
  it('should render correct content', () => {
    const wrapper = mount(Login, {
      localVue,
    })
    expect(wrapper.find('h1').text()).toMatch('Login')
  })
  it('login empty', () => {
    const wrapper = mount(Login, {
      store,
      localVue,
    })
    wrapper.setData({
      username: '',
      password: '',
    })
    wrapper.find('#loginbutton').trigger('click')
    return wrapper.vm.$nextTick().then(() => {
      expect(wrapper.find('#errorAlert').exists()).toBe(true)
    })
  })
  // This is just for debugging, and tested for coverage.
  it('login test', () => {
    const push = jest.fn()
    const wrapper = mount(Login, {
      store,
      localVue,
      mocks: {
        $router: {
          push: push,
        },
      },
    })
    wrapper.setData({
      username: 'test',
      password: '',
    })
    wrapper.find('#loginbutton').trigger('click')
    return wrapper.vm.$nextTick().then(() => {
      expect(push).toHaveBeenCalledWith("/")
    })
  })
  it('login then if ', (done) => {
    const push = jest.fn()
    const wrapper = mount(Login, {
      localVue,
      store,
      mocks: {
        $route: {
          query: {
            redirect: "/test",
          },
        },
        $router: {
          push: push,
        },
      },
    })
    wrapper.setData({
      username: 'admin',
      password: '1234',
    })
    moxios.stubRequest(util.apiUrl() + '/api/users/', {
      status: 200,
      response: {
        pk: 1,
        email: "test@test.nl",
        role: "",
        courses: [],
      },
    })
    wrapper.find('#loginbutton').trigger('click')
    moxios.wait(function () {
      expect(push).toHaveBeenCalledWith("/test")
      done()
    })
  })

  it('login then else if ', (done) => {
    const push = jest.fn()
    const wrapper = mount(Login, {
      localVue,
      store,
      mocks: {
        $route: {
          query: {
            redirect: undefined,
          },
        },
        $router: {
          push: push,
        },
      },
    })
    wrapper.setData({
      username: 'admin',
      password: '1234',
    })
    moxios.stubRequest(util.apiUrl() + '/api/users/', {
      status: 200,
      response: {
        pk: 1,
        email: "test@test.nl",
        role: "",
        courses: [],
      },
    })
    wrapper.find('#loginbutton').trigger('click')
    moxios.wait(function () {
      expect(push).toHaveBeenCalledWith("/admin")
      done()
    })
  })

  it('login then else', () => {
    const push = jest.fn()
    const wrapper = mount(Login, {
      localVue,
      store,
      mocks: {
        $route: {
          query: {
            redirect: undefined,
          },
        },
        $router: {
          push: push,
        },
      },
    })
    wrapper.setData({
      username: 'notadmin',
      password: '1234',
    })
    moxios.stubRequest(util.apiUrl() + '/api/users/', {
      status: 200,
      response: {
        pk: 1,
        email: "test@test.nl",
        role: "",
        courses: [],
      },
    })
    wrapper.find('#loginbutton').trigger('click')
    moxios.wait(function () {
      expect(push).toHaveBeenCalledWith("/")
    })
  })

  //Not working yet
  it('login dispatch catch if', () => {
    const wrapper = mount(Login, {
      localVue,
      mocks: {
        $store: {
          dispatch: jest.fn().mockRejectedValue({
            response: {
              status: 401,
            },
          }),
        },
        $router: {
          push: function () {},
        },
        $route: {
          query: {
            redirect: undefined,
          },
        },
      },
    })
    wrapper.setData({
      username: 'admin',
      password: '1234',
    })
    wrapper.find('#loginbutton').trigger('click')
    return wrapper.vm.$nextTick().then(() => {
      expect(wrapper.find('#errorAlert').exists()).toBe(true)
    })
  })

  it('login dispatch catch else', () => {
    const wrapper = mount(Login, {
      localVue,
      mocks: {
        $store: {
          dispatch: jest.fn().mockRejectedValue({
            response: {
              status: 404,
            },
          }),
        },
        $router: {
          push: function () {},
        },
        $route: {
          query: {
            redirect: undefined,
          },
        },
      },
    })
    wrapper.setData({
      username: 'admin',
      password: '1234',
    })
    wrapper.find('#loginbutton').trigger('click')
    return wrapper.vm.$nextTick().then(() => {
      expect(wrapper.find('#errorAlert').exists()).toBe(true)
    })
  })
})
