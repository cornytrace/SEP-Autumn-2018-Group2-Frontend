import Vuex from 'vuex'
import {
  mount,
  createLocalVue
} from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'
import AssignmentDetail from '@/views/platforms/coursera/AssignmentDetail'
import * as mockUtils from '../mockUtils'
import moxios from 'moxios'
import util from '@/util'
import strings from "@/strings"

const localVue = createLocalVue()
localVue.use(BootstrapVue)
localVue.use(Vuex)

describe('AssignmentDetail.vue', () => {
  let store

  beforeEach(function () {
    store = mockUtils.mockStore()
    moxios.install()
  })

  afterEach(function () {
    moxios.uninstall()
  })


  let mountComponent = () => {
    return mount(AssignmentDetail, {
      localVue,
      store,
      mocks: {
        $router: {},
        $route: {
          params: {
            courseid: "test",
            assignmentid: "assignment1",
          },
        },
      },
      stubs: [
        'Chart',
      ],
    })
  }

  it('is Vue instance', () => {
    const wrapper = mountComponent()
    expect(wrapper.isVueInstance()).toBe(true)
  })
  it('is Register', () => {
    const wrapper = mountComponent()
    expect(wrapper.is(AssignmentDetail)).toBe(true)
  })

  it('Test if assignment response data is set in html.', (done) => {
    moxios.stubRequest(util.apiUrl() + '/api/assignment-analytics/1/assignment1/', {
      status: 200,
      response: {
        id: "dsfdsf",
        name: "testname",
        average_grade: 0.87,
        submissions: 34,
        submission_ratio: 0.63,
        next_item: {
          item_id: "gffg",
          type: 1,
          category: "lecture",
        },
      },
    });
    const wrapper = mountComponent();
    moxios.wait(function () {
      expect(wrapper.vm.assignment_title).toBe("testname")
      expect(wrapper.html()).toContain("testname");
      expect(wrapper.html()).toContain("0.87");
      expect(wrapper.html()).toContain("34");
      expect(wrapper.html()).toContain("63");
      done();
    })
  })

  it('Check if response error is handled.', (done) => {
    moxios.stubRequest(util.apiUrl() + '/api/assignment-analytics/1/assignment1/', {
      status: 403,
      response: {
        "error": "error",
      },
    });
    const wrapper = mountComponent();
    moxios.wait(function () {
      expect(wrapper.html()).toContain(strings.connection_error);
      done();
    })
  })

  it('Test update on router update.', (done) => {
    moxios.stubRequest(util.apiUrl() + '/api/assignment-analytics/1/assignment1/', {
      status: 200,
      response: {
        id: "dsfdsf",
        name: "testname",
        average_grade: 0.87,
        submissions: 34,
        submission_ratio: 0.63,
        next_item: {
          item_id: "gffg",
          type: 4,
          category: "quiz",
        },
        next_assignment: {
          item_id: "gffg",
          type: 6,
          category: "peer",
        },
      },
    });
    moxios.stubRequest(util.apiUrl() + '/api/assignment-analytics/1/assignment2/', {
      status: 200,
      response: {
        id: "dsfdsf",
        name: "testname2",
        average_grade: 0.87,
        submissions: 34,
        submission_ratio: 0.63,
      },
    });
    const wrapper = mountComponent();
    let next = jest.fn();
    wrapper.vm.$options.beforeRouteUpdate.call(wrapper.vm, {
      params: {
        courseid: "test",
        assignmentid: "assignment2",
      },
    }, {}, next)
    moxios.wait(function () {
      expect(wrapper.vm.assignment_title).toBe("testname2")
      expect(wrapper.html()).toContain("testname2");
      done();
    })
  })
})
