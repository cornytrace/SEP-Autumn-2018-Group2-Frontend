import Vuex from 'vuex'
import {
  shallowMount,
  createLocalVue,
} from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'
import Login from '@/views/pages/Login'

const localVue = createLocalVue()
localVue.use(BootstrapVue)
localVue.use(Vuex)

describe('Login.vue', () => {
  let actions
  let store

  beforeEach(() => {
    actions = {
      login: jest.fn(),
      logout: jest.fn(),
    }
    store = new Vuex.Store({
      state: {},
      actions,
    })
  })

  it('has a name', () => {
    expect(Login.name).toMatch('Login')
  })
  it('is Vue instance', () => {
    const wrapper = shallowMount(Login)
    expect(wrapper.isVueInstance()).toBe(true)
  })
  it('is Login', () => {
    const wrapper = shallowMount(Login)
    expect(wrapper.is(Login)).toBe(true)
  })
  it('should render correct content', () => {
    const wrapper = shallowMount(Login)
    expect(wrapper.find('h1').text()).toMatch('Login')
  })
  it('login empty', () => {
    const wrapper = shallowMount(Login)
    wrapper.setData({
      username: '',
      password: '',
    })
    wrapper.vm.doLogin()
  })

  it('login then if ', () => {
    const wrapper = shallowMount(Login, {
      store,
      localVue,
      mocks: {
        response: {
          response: {
            status: 401,
          },
        },
        $route: {
          query: {
            redirect: "",
          },
        },
        $router: {
          push: function () {},
        },
      },
    })
    wrapper.setData({
      username: 'admin',
      password: '1234',
    })
    wrapper.vm.doLogin();
  })

  it('login then else if ', () => {
    const wrapper = shallowMount(Login, {
      store,
      localVue,
      mocks: {
        response: {
          response: {
            status: 401,
          },
        },
        $route: {
          query: {
            redirect: undefined,
          },
        },
        $router: {
          push: function () {},
        },
      },
    })
    wrapper.setData({
      username: 'admin',
      password: '1234',
    })
    wrapper.vm.doLogin();
  })

  it('login then else', () => {
    const wrapper = shallowMount(Login, {
      store,
      localVue,
      mocks: {
        response: {
          response: {
            status: 401,
          },
        },
        $route: {
          query: {
            redirect: undefined,
          },
        },
        $router: {
          push: function () {},
        },
      },
    })
    wrapper.setData({
      username: 'test',
      password: '1234',
    })
    wrapper.vm.doLogin();
  })

  //Not working yet
  it('login dispatch catch if', () => {
    const wrapper = shallowMount(Login, {
      store,
      localVue,
      mocks: {
        response: {
          response: {
            status: 401,
          },
        },
        $router: {
          push: function () {},
          query: {
            redirect: undefined,
          },
        },
      },
    })
    wrapper.setData({
      username: 'test',
      password: '1234',
    })
    wrapper.vm.doLogin();
  })

  it('login dispatch catch else', () => {
    const wrapper = shallowMount(Login, {
      store,
      localVue,
      mocks: {
        $router: {
          push: function () {},
          query: {
            redirect: undefined,
          },
        },
      },
    })
    wrapper.setData({
      username: 'test',
      password: '1234',
    })
    wrapper.vm.doLogin();
  })
})
