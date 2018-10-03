import BootstrapVue from 'bootstrap-vue'
import {
  mount,
  createLocalVue
} from '@vue/test-utils'
import VueRouter from 'vue-router'
import DefaultContainer from '@/containers/DefaultContainer'

import router from '@/router'
import mockUtils from '../mockUtils'

import settings from '@/settings'
import util from '@/util'
import strings from '@/strings'
import moxios from 'moxios'

const localVue = createLocalVue()
localVue.use(VueRouter)

localVue.use(BootstrapVue)

describe('DefaultContainer.vue', () => {
  mockUtils.initUtils();
  let store

  beforeEach(() => {
    store = mockUtils.mockStore()
    moxios.install();
  })

  afterEach(function () {
    moxios.uninstall()
  })

  let mountComponent = (components) => {
    store.user = {
      pk: 1,
      email: "test@qdt.com",
      role: "qdt",
      courses: [{
        course_id: "c2",
        course_name: "Corse 2",
        course_slug: "course2",
        pk: 2,
      },],
    };
    return mount(DefaultContainer, {
      localVue,
      router,
      store,
      components,
    })
  }

  it('has a name', () => {
    expect(DefaultContainer.name).toMatch('full')
  })
  it('has a created hook', () => {
    expect(typeof DefaultContainer.data).toMatch('function')
  })
  it('sets the correct default data', () => {
    expect(typeof DefaultContainer.data).toMatch('function')
    const defaultData = DefaultContainer.data()
    expect(typeof defaultData.top_nav).toMatch('object')
  })
  it('is Vue instance', () => {
    const wrapper = mountComponent()
    expect(wrapper.isVueInstance()).toBe(true)
  })

  it('updates navigation on load', () => {
    const spy = jest.spyOn(DefaultContainer.methods, "setNavigation");
    mountComponent()
    expect(spy).toHaveBeenCalled()
    spy.mockRestore()
  })

  it('updates navigation on router push', () => {
    const wrapper = mountComponent()
    wrapper.vm.setNavigation = jest.fn()
    wrapper.vm.$router.push("/coursera")
    expect(wrapper.vm.setNavigation).toHaveBeenCalled()
  })

  it('Check level 0 platform default', () => {
    const wrapper = mountComponent()
    wrapper.setData({
      level_0: [
        "/home",
      ],
    });
    wrapper.vm.setNavigation("/home");
    expect(wrapper.vm.selectedPlatform).toBe(settings.platform_default)
  })

  it('Check over max level', () => {
    const wrapper = mountComponent()
    // Add router that is 3 longer than the max nav level
    var x = ""
    for (var i = 0; i < settings.max_nav_level + 3; i++) {
      x += "/a";
    }
    console.log(x);
    wrapper.vm.setNavigation(x)
    expect(wrapper.vm.level).toBe(settings.max_nav_level)
  })

  // Dropdowns
  it('Platform dropdown', () => {
    const wrapper = mountComponent()
    const push = jest.fn();
    wrapper.vm.$router.push = push;
    wrapper.find("#platform-select").setValue("coursera");
    return wrapper.vm.$nextTick().then(function () {
      expect(push).toHaveBeenCalled();
    })
  })

  it('Course dropdown', () => {
    const wrapper = mountComponent()
    const push = jest.fn();
    wrapper.vm.$router.push = push;
    wrapper.find("#platform-select").setValue("coursera");
    wrapper.find("#course-select").setValue("course-1");

    return wrapper.vm.$nextTick().then(function () {
      expect(push).toHaveBeenCalled();
    })
  })

  // Level switching
  it('GoUp function works', () => {
    const wrapper = mountComponent()
    wrapper.setData({
      level: 2,
    })
    wrapper.vm.goUp();
    expect(wrapper.vm.level).toBe(1)
  })

  it('GoDown function works', () => {
    const wrapper = mountComponent()
    wrapper.setData({
      level: 1,
    })
    wrapper.vm.goDown();
    expect(wrapper.vm.level).toBe(2)
  })

  // Connection bar
  it('Test auth', (done) => {
    moxios.stubRequest(util.apiUrl() + '/testview/', {
      status: 200,
      response: { "success": "You have a valid access token", },
    });
    const wrapper = mountComponent()
    moxios.wait(function () {
      expect(wrapper.vm.apiStatus).toBe(strings.ok)
      done()
    });
  })

  it('Test auth decline', (done) => {
    moxios.stubRequest(util.apiUrl() + '/testview/', {
      status: 403,
      response: {},
    });
    const wrapper = mountComponent()
    moxios.wait(function () {
      expect(wrapper.vm.apiStatus).toBe(strings.connection_error)
      done()
    });
  })
})
