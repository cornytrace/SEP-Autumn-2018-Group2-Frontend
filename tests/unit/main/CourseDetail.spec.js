import Vuex from 'vuex'
import {
  mount,
  createLocalVue
} from '@vue/test-utils'
import mockUtils from '../mockUtils'

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
      stubs: ['LineGraph',
        'ScatterGraph',
        'BarGraph',
        'DoughnutGraph',
        'PolarAreaGraph',
        'RadarGraph',
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
        test: "test",
        name: "test_name",
        ratings: [
          [1, 0, ],
          [2, 10, ],
          [3, 14, ],
        ],
        finished_learners_over_time: [
          [1, 0, ],
          [2, 10, ],
          [3, 14, ],
        ],
        leaving_learners_per_module: [
          [1, 0, ],
          [2, 10, ],
          [3, 14, ],
        ],
        average_time_per_module: [
          [1, 0, ],
          [2, 10, ],
          [3, 14, ],
        ],
        average_time: 348923048,
      },
    });
    const wrapper = mountComponent();
    moxios.wait(function () {
      expect(wrapper.vm.courseName).toBe("test_name")
      done();
    })
  })

  it('test bad request', (done) => {
    moxios.stubRequest(util.apiUrl() + '/api/course-analytics/1/', {
      status: 403,
      response: {
        test: "test",
        name: "test_name",
        ratings: [
          [1, 0, ],
          [2, 10, ],
          [3, 14, ],
        ],
        finished_learners_over_time: [
          [1, 0, ],
          [2, 10, ],
          [3, 14, ],
        ],
        leaving_learners_per_module: [
          [1, 0, ],
          [2, 10, ],
          [3, 14, ],
        ],
        average_time_per_module: [
          [1, 0, ],
          [2, 10, ],
          [3, 14, ],
        ],
        average_time: 348923048,
      },
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
          [1, 0, ],
          [2, 10, ],
          [3, 14, ],
        ],
        finished_learners_over_time: [
          [1, 0, ],
          [2, 10, ],
          [3, 14, ],
        ],
        leaving_learners_per_module: [
          [1, 0, ],
          [2, 10, ],
          [3, 14, ],
        ],
        average_time_per_module: [
          [1, 0, ],
          [2, 10, ],
          [3, 14, ],
        ],
        average_time: 348923048,
      },
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
