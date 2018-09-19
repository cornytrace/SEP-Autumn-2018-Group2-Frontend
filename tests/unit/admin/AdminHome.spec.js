import {
  shallowMount,
  mount,
  createLocalVue
} from '@vue/test-utils'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import AdminHome from '@/views/admin/AdminHome'
import util from '@/util'

jest.mock('@/util')

const localVue = createLocalVue()
localVue.use(VueRouter)
const router = new VueRouter()

localVue.use(BootstrapVue)

describe('AdminHome.vue', () => {
  let mountComponent = (components) => {
    return mount(AdminHome, {
      localVue,
      components,
    })
  }

  it('has a name', () => {
    expect(AdminHome.name).toMatch('AdminHome')
  })
  it('sets the correct default data', () => {
    expect(typeof AdminHome.data).toMatch('function')
    const wrapper = mountComponent({
      router,
    })
    expect(wrapper.vm.users.length).toBe(0)
    expect(wrapper.vm.selectedEmail).toBe("")
    expect(wrapper.vm.errorReason).toBe("")
  })
  it('is Vue instance', () => {
    const wrapper = mountComponent()
    expect(wrapper.isVueInstance()).toBe(true)
  })
  it('is AdminHome', () => {
    const wrapper = mountComponent()
    expect(wrapper.is(AdminHome)).toBe(true)
  })

  it('Check if alert box shows after no user is selected', () => {
    const wrapper = mountComponent()
    wrapper.find('#savebutton').trigger('click')
    expect(wrapper.vm.showAlert).toBe(true);
    expect(wrapper.find('#alertbox').exists()).toBe(true)
  })

  it('Check if save resolve works', () => {
    const wrapper = mountComponent()
    util.updateUser = jest.fn().mockResolvedValueOnce("test");

    wrapper.setData({
      selectedUser: 1,
      selectedEmail: "test@test.nl",
      selectedCourses: [1, ],
      courses: [{
        course_id: "c1",
        course_name: "Course 1",
        course_slug: "course1",
        pk: 1,
      }, ],
    });

    wrapper.find('#savebutton').trigger('click')

    return wrapper.vm.$nextTick().then(() => {
      expect(wrapper.vm.showAlert).toBe(false);
      expect(wrapper.vm.showSuccess).toBe(true);
      expect(wrapper.find('#alertbox').exists()).toBe(false);
      expect(wrapper.find('#successbox').exists()).toBe(true);
    })
  })

  it('Check if save reject works', () => {
    const wrapper = mountComponent()
    util.updateUser = jest.fn().mockRejectedValueOnce({
      response: {
        data: {
          error: ["error message", ],
        },
      },
    });
    util.getUsers = jest.fn().mockResolvedValueOnce({
      users: [{
        courses: [{
          course_id: "c1",
          course_name: "Course 1",
          course_slug: "course1",
          pk: 1,
        }, ],
        email: "amdin@AdminHome.com",
        pk: 1,
        role: "qdt",
      }, ],
    });
    util.getCourses = jest.fn().mockResolvedValueOnce({
      courses: [
        [{
          course_id: "c1",
          course_name: "Course 1",
          course_slug: "course1",
          pk: 1,
        }, ],
      ],
    });

    wrapper.setData({
      selectedUser: 1,
      selectedEmail: "test@test.nl",
    });

    wrapper.find('#savebutton').trigger('click')

    return wrapper.vm.$nextTick().then(() => {
      expect(wrapper.vm.showAlert).toBe(true);
      expect(wrapper.vm.showSuccess).toBe(false);
      expect(wrapper.find('#alertbox').exists()).toBe(true);
      expect(wrapper.find('#successbox').exists()).toBe(false);
    })
  })

  it('100% Coverage', () => {
    const wrapper = mountComponent()
    util.updateUser = jest.fn().mockRejectedValueOnce({
      response: {
        data: {
          error: ["error message", ],
        },
      },
    });
    util.getUsers = jest.fn().mockRejectedValueOnce({
      users: [{
        courses: [{
          course_id: "c1",
          course_name: "Course 1",
          course_slug: "course1",
          pk: 1,
        }, ],
        email: "amdin@AdminHome.com",
        pk: 1,
        role: "qdt",
      }, ],
    });
    util.getCourses = jest.fn().mockRejectedValueOnce({
      courses: [
        [{
          course_id: "c1",
          course_name: "Course 1",
          course_slug: "course1",
          pk: 1,
        }, ],
      ],
    });

    wrapper.setData({
      selectedUser: 1,
      selectedEmail: "test@test.nl",
    });

    wrapper.find('#savebutton').trigger('click')

    return wrapper.vm.$nextTick().then(() => {
      expect(wrapper.vm.showAlert).toBe(true);
      expect(wrapper.vm.showSuccess).toBe(false);
      expect(wrapper.find('#alertbox').exists()).toBe(true);
      expect(wrapper.find('#successbox').exists()).toBe(false);
    })
  })

  it('Check change user function', () => {
    const wrapper = mountComponent()

    wrapper.setData({
      selectedUser: 1,
      selectedEmail: "test@test.nl",
      users: [{
        courses: [{
          course_id: "c1",
          course_name: "Course 1",
          course_slug: "course1",
          pk: 1,
        }, ],
        email: "amdin@AdminHome.com",
        pk: 1,
        role: "qdt",
      }, ],
      courses: [{
        course_id: "c1",
        course_name: "Course 1",
        course_slug: "course1",
        pk: 1,
      }, ],
    });

    wrapper.vm.click(1)

    return wrapper.vm.$nextTick().then(() => {
      expect(wrapper.vm.showAlert).toBe(false);
      expect(wrapper.vm.showSuccess).toBe(false);
      expect(wrapper.find('#alertbox').exists()).toBe(false);
      expect(wrapper.find('#successbox').exists()).toBe(false);
    })
  })

  it('100% Coverage', () => {
    const wrapper = mountComponent()
    util.updateUser = jest.fn().mockRejectedValueOnce({
      response: {
        data: {
          error: ["error message", ],
        },
      },
    });
    util.getUsers = jest.fn().mockRejectedValueOnce({
      users: [{
        courses: [{
          course_id: "c1",
          course_name: "Course 1",
          course_slug: "course1",
          pk: 1,
        }, ],
        email: "amdin@AdminHome.com",
        pk: 1,
        role: "qdt",
      }, ],
    });
    util.getCourses = jest.fn().mockRejectedValueOnce({
      courses: [
        [{
          course_id: "c1",
          course_name: "Course 1",
          course_slug: "course1",
          pk: 1,
        }, ],
      ],
    });

    wrapper.setData({
      selectedUser: 1,
      selectedEmail: "test@test.nl",
    });

    wrapper.find('#savebutton').trigger('click')

    return wrapper.vm.$nextTick().then(() => {
      expect(wrapper.vm.showAlert).toBe(true);
      expect(wrapper.vm.showSuccess).toBe(false);
      expect(wrapper.find('#alertbox').exists()).toBe(true);
      expect(wrapper.find('#successbox').exists()).toBe(false);
    })
  })
});
