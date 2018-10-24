import Vuex from 'vuex'
import {
  mount,
  createLocalVue
} from '@vue/test-utils'
import * as mockUtils from '../mockUtils'

import BootstrapVue from 'bootstrap-vue'
import CourseDetail from '@/views/platforms/coursera/CourseDetail'

import strings from '@/strings'
import moxios from 'moxios'
import util from '@/util'

const localVue = createLocalVue()
localVue.use(BootstrapVue)
localVue.use(Vuex)

describe('CourseDetail.vue', () => {
  let store

  beforeEach(function () {
    store = mockUtils.mockStore()
    moxios.install()
  })

  afterEach(function () {
    moxios.uninstall()
  })

  let mountComponent = () => {
    return mount(CourseDetail, {
      localVue,
      store,
      mocks: {
        $route: {
          params: {
            courseid: "test",
          },
        },
      },
      stubs: [
        'Chart',
      ],
    })
  }

  it('has a name', () => {
    expect(CourseDetail.name).toMatch('CourseDetail')
  })

  it('sets the correct default data', () => {
    expect(typeof CourseDetail.data).toMatch('function');
  })

  it('sets the correct default data', (done) => {
    moxios.stubRequest(util.apiUrl() + '/api/course-analytics/1/', {
      status: 200,
      response: {
        assignments: 13,
        average_time: 56.3453,
        average_time_per_module: [
          [1, 0,],
          [2, 10,],
          [3, 14,],
        ],
        cohort_list: [
          ["2016-07-11T07:00:00", "2016-08-22T06:59:59",],
        ],
        cohorts: 5,
        enrolled_learners: 453,
        finished_learners: 4364,
        finished_learners_over_time: [
          [1, 0,],
          [2, 10,],
          [3, 14,],
        ],
        geo_data: ["NGA", "Nigeria", 58,],
        leaving_learners: 43253,
        leaving_learners_per_module: [
          [1, 0,],
          [2, 10,],
          [3, 14,],
        ],
        modules: 5,
        name: "test_name",
        paying_learners: 324,
        quizzes: 345,
        ratings: [
          [1, 0,],
          [2, 10,],
          [3, 14,],
        ],
        slug: "test-name",
        videos: 3254,
      },
    });

    moxios.stubRequest(util.apiUrl() + '/actions/coursera/1/', {
      status: 200,
      response: [{ course: "1", date: "2017-02-06", description: "", title: "test action", pk: 1, },],
    });
    const wrapper = mountComponent();
    moxios.wait(function () {

      return wrapper.vm.$nextTick().then(() => {
        expect(wrapper.vm.courseName).toBe("test_name")
        expect(wrapper.html()).toContain("453")
        expect(wrapper.html()).toContain("4364")
        expect(wrapper.html()).toContain("43253")
        expect(wrapper.html()).toContain("345")
        expect(wrapper.html()).toContain("3254")
        expect(wrapper.html()).toContain("5")
        // Test cohorts
        expect(wrapper.html()).toContain("2016-08-22")
        expect(wrapper.html()).toContain("2016-07-11")
        done();
      })
    })
  })

  it('test bad request', (done) => {
    moxios.stubRequest(util.apiUrl() + '/api/course-analytics/1/', {
      status: 403,
      response: {
        test: "test",
        name: "test_name",
        ratings: [
          [1, 0,],
          [2, 10,],
          [3, 14,],
        ],
        finished_learners_over_time: [
          [1, 0,],
          [2, 10,],
          [3, 14,],
        ],
        leaving_learners_per_module: [
          [1, 0,],
          [2, 10,],
          [3, 14,],
        ],
        average_time_per_module: [
          [1, 0,],
          [2, 10,],
          [3, 14,],
        ],
        average_time: 348923048,
      },
    });

    moxios.stubRequest(util.apiUrl() + '/actions/coursera/1/', {
      status: 403,
      response: [{ course: "1", date: "2017-02-06", description: "", title: "test action", pk: 1, },],
    });
    const wrapper = mountComponent();
    moxios.wait(function () {
      expect(wrapper.html()).toContain(strings.connection_error)
      done();
    })
  })

  it('test router update', (done) => {
    moxios.stubRequest(util.apiUrl() + '/api/course-analytics/1/', {
      status: 200,
      response: {
        test: "test",
        name: "test_name",
        ratings: [
          [1, 0,],
          [2, 10,],
          [3, 14,],
        ],
        finished_learners_over_time: [
          [1, 0,],
          [2, 10,],
          [3, 14,],
        ],
        leaving_learners_per_module: [
          [1, 0,],
          [2, 10,],
          [3, 14,],
        ],
        average_time_per_module: [
          [1, 0,],
          [2, 10,],
          [3, 14,],
        ],
        average_time: 348923048,
      },
    });

    moxios.stubRequest(util.apiUrl() + '/actions/coursera/1/', {
      status: 200,
      response: [{ course: "1", date: "2017-02-06", description: "", title: "test action", pk: 1, },],
    });

    const wrapper = mountComponent();

    moxios.wait(function () {
      expect(wrapper.vm.courseName).toBe("test_name")
      done();
    })

    let next = jest.fn();
    wrapper.vm.$options.beforeRouteUpdate.call(wrapper.vm, {
      params: {
        courseid: 2,
      },
    }, {}, next)

    // TODO ADD TEST AFTER ROUTER UPDATE
  })
})
