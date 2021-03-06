import BootstrapVue from 'bootstrap-vue'
import {
  mount,
  createLocalVue
} from '@vue/test-utils'
import VueRouter from 'vue-router'
import DefaultContainer from '@/containers/DefaultContainer'

import router from '@/router'
import * as mockUtils from '../mockUtils'
import util from '@/util'

import settings from '@/settings'
import strings from '@/strings'
import moxios from 'moxios'

const localVue = createLocalVue()
localVue.use(VueRouter)

localVue.use(BootstrapVue)

describe('DefaultContainer.vue', () => {
  let store

  beforeEach(() => {
    store = mockUtils.mockStore()
    moxios.install();
  })

  afterEach(function () {
    moxios.uninstall()
  })

  let mountComponent = (components) => {
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

  // Check different levels
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

  it('Check videos in nav', (done) => {
    moxios.stubRequest(util.apiUrl() + '/api/video-analytics/1/', {
      status: 200,
      response: [{
        name: "video1",
        item_id: "id1",
      }, ],
    });
    const wrapper = mountComponent()
    wrapper.vm.setNavigation("/coursera/test/videos")

    moxios.wait(function () {
      expect(wrapper.vm.top_nav[3].length).not.toBe(0)
      expect(wrapper.vm.top_nav[3][0].name).toContain("video1")
      done();
    })
  })

  it('Check videos rejected', (done) => {
    // For coverability, nothing is done here, nav remains empty
    moxios.stubRequest(util.apiUrl() + '/api/video-analytics/1/', {
      status: 403,
      response: {
        "Error": "Error occurred",
      },
    });
    const wrapper = mountComponent()
    wrapper.vm.setNavigation("/coursera/test/videos")

    moxios.wait(function () {
      expect(wrapper.vm.top_nav[3].length).toBe(0)
      done();
    })
  })

  it('Check quizzes in nav', (done) => {
    moxios.stubRequest(util.apiUrl() + '/api/quiz-analytics/1/', {
      status: 200,
      response: [{
        name: "quiz 1",
        base_id: "id1",
        version: 1,
      }, ],
    });
    const wrapper = mountComponent()
    wrapper.vm.setNavigation("/coursera/test/quizzes")

    moxios.wait(function () {
      expect(wrapper.vm.top_nav[3].length).not.toBe(0)
      expect(wrapper.vm.top_nav[3][0].name).toContain("quiz 1")
      done();
    })
  })

  it('Check quizzes rejected', (done) => {
    moxios.stubRequest(util.apiUrl() + '/api/quiz-analytics/1/', {
      status: 403,
      response: {
        "Error": "Error occurred",
      },
    });
    const wrapper = mountComponent()
    wrapper.vm.setNavigation("/coursera/test/quizzes")

    moxios.wait(function () {
      expect(wrapper.vm.top_nav[3].length).toBe(0)
      done();
    })
  })

  it('Navigation check over max level without videos or quizzes', () => {
    const wrapper = mountComponent()
    // Add router that is 3 longer than the max nav level
    var x = ""
    for (var i = 0; i < settings.max_nav_level + 3; i++) {
      x += "/a";
    }
    wrapper.vm.setNavigation(x)
    expect(wrapper.vm.level).toBe(1)
  })

  // Dropdowns
  it('Platform dropdown select changes page', () => {
    const wrapper = mountComponent()
    const push = jest.fn();
    wrapper.vm.$router.push = push;
    wrapper.find("#platform-select").setValue("coursera");
    return wrapper.vm.$nextTick().then(function () {
      expect(push).toHaveBeenCalled();
    })
  })

  it('Course dropdown select changes page', () => {
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
    // TODO TEST CASE
    // Problem: route mocking in order to test it
    // is hard to do.
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
  it('Test authentication', (done) => {
    moxios.stubRequest(util.apiUrl() + '/testview/', {
      status: 200,
      response: {
        "success": "You have a valid access token",
      },
    });
    const wrapper = mountComponent()
    moxios.wait(function () {
      expect(wrapper.vm.apiStatus).toBe(strings.ok)
      done()
    });
  })

  it('Test authentication decline', (done) => {
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

  // Actions modal
  it('action button click shows actions modal and contains right content', (done) => {
    moxios.stubRequest(util.apiUrl() + '/actions/coursera/1/', {
      status: 200,
      response: [{
        title: "action 1",
        description: "description 1",
      }, ],
    });
    const wrapper = mountComponent()
    wrapper.vm.setNavigation("/coursera/test");

    moxios.wait(function () {
      expect(wrapper.vm.showActionsModal).toBe(false)
      expect(wrapper.find("#actionsModal").isVisible()).toBe(false)
      wrapper.find("#actions-button").trigger('click')
      expect(wrapper.vm.showActionsModal).toBe(true)
      return wrapper.vm.$nextTick().then(() => {
        expect(wrapper.find("#actionsModal").isVisible()).toBe(true)
        expect(wrapper.html()).toContain("action 1")
        done();
      })
    });
  })

  it('action button click shows actions modal and shows error', (done) => {
    moxios.stubRequest(util.apiUrl() + '/actions/coursera/1/', {
      status: 403,
      response: {
        error: "error",
      },
    });
    const wrapper = mountComponent()
    wrapper.vm.setNavigation("/coursera/test");

    moxios.wait(function () {
      expect(wrapper.vm.showActionsModal).toBe(false)
      expect(wrapper.find("#actionsModal").isVisible()).toBe(false)
      wrapper.find("#actions-button").trigger('click')
      expect(wrapper.vm.showActionsModal).toBe(true)
      return wrapper.vm.$nextTick().then(() => {
        expect(wrapper.find("#actionsModal").isVisible()).toBe(true)
        expect(wrapper.html()).toContain(strings.connection_error)
        done();
      })
    });
  })

  // Add action modal
  it('Add action modal is reachable', (done) => {
    moxios.stubRequest(util.apiUrl() + '/actions/coursera/1/', {
      status: 200,
      response: [{
        title: "action 1",
        description: "description 1",
      }, ],
    });
    const wrapper = mountComponent()
    wrapper.vm.setNavigation("/coursera/test");

    moxios.wait(function () {
      expect(wrapper.vm.showActionsModal).toBe(false)
      expect(wrapper.find("#actionsModal").isVisible()).toBe(false)
      wrapper.find("#actions-button").trigger('click')
      expect(wrapper.vm.showActionsModal).toBe(true)
      wrapper.find("#add-action-button").trigger("click")


      return wrapper.vm.$nextTick().then(() => {
        expect(wrapper.find("#addActionModal").isVisible()).toBe(true)
        expect(wrapper.html()).toContain("action 1")
        done();
      })
    });
  })

  it('Test if adding a action works', (done) => {
    moxios.stubRequest(util.apiUrl() + '/actions/', {
      status: 200,
      response: {
        success: "success",
      },
    });
    const wrapper = mountComponent()
    wrapper.vm.setNavigation("/coursera/test");

    moxios.wait(function () {
      expect(wrapper.vm.showActionsModal).toBe(false)
      expect(wrapper.find("#actionsModal").isVisible()).toBe(false)
      wrapper.find("#actions-button").trigger('click')
      expect(wrapper.vm.showActionsModal).toBe(true)
      wrapper.find("#add-action-button").trigger('click')
      expect(wrapper.vm.showAddActionModal).toBe(true)
      wrapper.vm.action = {
        title: "title",
        description: "",
        date: new Date("2018-10-10"),
      }
      wrapper.find("#action-save-button").trigger('click');
      expect(wrapper.vm.showAddActionModal).toBe(false)
      done();
    });
  })

  it('Test if adding an empty action shows an error message', (done) => {
    moxios.stubRequest(util.apiUrl() + '/actions/', {
      status: 200,
      response: {
        success: "success",
      },
    });
    const wrapper = mountComponent()
    wrapper.vm.setNavigation("/coursera/test");

    moxios.wait(function () {
      expect(wrapper.vm.showActionsModal).toBe(false)
      expect(wrapper.find("#actionsModal").isVisible()).toBe(false)
      wrapper.find("#actions-button").trigger('click')
      expect(wrapper.vm.showActionsModal).toBe(true)
      wrapper.find("#add-action-button").trigger('click')
      expect(wrapper.vm.showAddActionModal).toBe(true)
      wrapper.vm.action = {
        title: "title",
        description: "",
        date: null,
      }
      wrapper.find("#action-save-button").trigger('click')

      expect(wrapper.vm.showAddActionModal).toBe(true)
      expect(wrapper.vm.showAddActionAlert).toBe(true)
      done();
    });
  })

  // Delete action modal
  it('Test if an action can be deleted', (done) => {
    moxios.stubRequest(util.apiUrl() + '/actions/coursera/1/', {
      status: 200,
      response: [{
        pk: 1,
        course: "1",
        date: "2018-01-01",
        title: "action 1",
        description: "description 1",
      }, ],
    });
    moxios.stubRequest(util.apiUrl() + '/actions/1/', {
      status: 204,
      response: {},
    });
    const wrapper = mountComponent()
    wrapper.vm.setNavigation("/coursera/test");

    moxios.wait(function () {
      expect(wrapper.vm.showActionsModal).toBe(false)
      expect(wrapper.find("#actionsModal").isVisible()).toBe(false)
      wrapper.find("#actions-button").trigger('click')
      expect(wrapper.vm.showActionsModal).toBe(true)
      wrapper.find("#action-delete-button").trigger("click")


      return wrapper.vm.$nextTick().then(() => {
        expect(wrapper.find("#deleteActionModal").isVisible()).toBe(true)
        expect(wrapper.html()).toContain("action 1")
        wrapper.find("#delete-save-button").trigger("click")
        moxios.wait(function () {
          wrapper.vm.$nextTick().then(() => {
            expect(wrapper.vm.showDeleteActionModal).toBe(false)
            done();
          });
        })
      })
    });
  })

  // Filters modal
  it('filter button click shows filter modal', () => {
    const wrapper = mountComponent()
    expect(wrapper.vm.showFilterModal).toBe(false)
    expect(wrapper.find("#filterModal").isVisible()).toBe(false)
    wrapper.find("#filterButton").trigger('click')
    expect(wrapper.vm.showFilterModal).toBe(true)
    return wrapper.vm.$nextTick().then(() => {
      expect(wrapper.find("#filterModal").isVisible()).toBe(true)
    })
  })

  it('filter modal cancel button hides the modal', () => {
    const wrapper = mountComponent()
    wrapper.vm.showFilterModal = true;
    return wrapper.vm.$nextTick().then(() => {
      wrapper.find("#filter-cancel-button").trigger("click");
      expect(wrapper.vm.showFilterModal).toBe(false);
    })
  })

  it('filter modal save button hides the modal', () => {
    const wrapper = mountComponent()
    wrapper.vm.showFilterModal = true;
    return wrapper.vm.$nextTick().then(() => {
      wrapper.find("#filter-save-button").trigger("click");
      expect(wrapper.vm.showFilterModal).toBe(false);
    })
  })

  it('filter modal save updates date state', () => {
    const wrapper = mountComponent();
    const curdate = new Date(Date.now());
    curdate.setMilliseconds(0);
    wrapper.vm.showFilterModal = true;
    wrapper.vm.fromDate = curdate;
    wrapper.vm.toDate = curdate;
    wrapper.find("#filter-save-button").trigger("click");
    return wrapper.vm.$nextTick().then(() => {
      expect(mockUtils.mutations.setFilters).toHaveBeenCalled();
    })
  })

  it('filter modal cancel doesn\'t update date state', () => {
    const wrapper = mountComponent();
    const curdate = new Date(Date.now());
    wrapper.vm.showFilterModal = true;
    const dateArray = wrapper.findAll(".vdp-datepicker")
    dateArray.setProps({
      value: curdate,
    })
    wrapper.find("#filter-cancel-button").trigger("click");
    return wrapper.vm.$nextTick().then(() => {
      expect(store.state.filters.from).toBe(null);
      expect(store.state.filters.to).toBe(null);
    })
  })

  it('filter modal loads existing state', () => {
    const curdate = new Date(Date.now());
    curdate.setMilliseconds(0);
    store.state.filters.from = curdate;
    store.state.filters.to = curdate;
    const wrapper = mountComponent();
    wrapper.vm.showFilterModal = true;
    expect(wrapper.vm.fromDate.toUTCString()).toBe(curdate.toUTCString());
    expect(wrapper.vm.toDate.toUTCString()).toBe(curdate.toUTCString());
  })

  it('filter modal reset button resets state', () => {
    const curdate = new Date(Date.now());
    curdate.setMilliseconds(0);
    store.state.filters.from = curdate;
    store.state.filters.to = curdate;
    const wrapper = mountComponent();
    wrapper.vm.showFilterModal = true;
    wrapper.find("#filter-reset-button").trigger("click");
    expect(wrapper.vm.fromDate).toBe(null);
    expect(wrapper.vm.toDate).toBe(null);
  })
})
