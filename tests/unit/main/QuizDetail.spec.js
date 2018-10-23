import Vuex from 'vuex'
import {
  mount,
  createLocalVue
} from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'
import QuizDetail from '@/views/platforms/coursera/QuizDetail'
import * as mockUtils from '../mockUtils'
import moxios from 'moxios'
import util from '@/util'
import strings from "@/strings"

const localVue = createLocalVue()
localVue.use(BootstrapVue)
localVue.use(Vuex)

describe('QuizDetail.vue', () => {
  let store

  beforeEach(function () {
    store = mockUtils.mockStore()
    moxios.install()
  })

  afterEach(function () {
    moxios.uninstall()
  })


  let mountComponent = () => {
    return mount(QuizDetail, {
      localVue,
      store,
      mocks: {
        $router: {},
        $route: {
          params: {
            courseid: "test",
            quizid: "testquiz-1",
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
    expect(wrapper.is(QuizDetail)).toBe(true)
  })

  it('Check if chaning the version dropdown pushes a new url.', (done) => {
    moxios.stubRequest(util.apiUrl() + '/api/quiz-analytics/1/testquiz/1/', {
      status: 200,
      response: {
        id: "dsfdsf",
        base_id: "testquiz",
        type: "in video",
        name: "testname",
        number_of_attempts: [],
        grade_distribution: [],
        correct_ratio_per_question: [],
        last_attempt_grade_distribution: [],
        passing_fraction: 0.7,
        average_grade: 0.53,
        last_attempt_average_grade: 0.87,
      },
    });
    moxios.stubRequest(util.apiUrl() + '/api/quiz-analytics/1/testquiz/', {
      status: 200,
      response: [{ version: 1, }, { version: 2, },],
    });
    const wrapper = mountComponent();

    moxios.wait(function () {
      const push = jest.fn();
      wrapper.vm.$router.push = push;

      return wrapper.vm.$nextTick().then(function () {
        wrapper.find("#version-dropdown").setValue(2);
        expect(push).toHaveBeenCalledWith("/coursera/test/quizzes/testquiz-2");
        done();
      })
    })

  })

  it('Check empty dropdown.', (done) => {
    moxios.stubRequest(util.apiUrl() + '/api/quiz-analytics/1/testquiz/1/', {
      status: 200,
      response: {
        id: "dsfdsf",
        base_id: "testquiz",
        type: "in video",
        name: "testname",
        number_of_attempts: [],
        grade_distribution: [],
        correct_ratio_per_question: [],
        last_attempt_grade_distribution: [],
        passing_fraction: 0.7,
        average_grade: 0.53,
        last_attempt_average_grade: 0.87,
      },
    });
    moxios.stubRequest(util.apiUrl() + '/api/quiz-analytics/1/testquiz/', {
      status: 403,
      response: { "error": "error", },
    });
    const wrapper = mountComponent();

    moxios.wait(function () {
      expect(wrapper.vm.versions.length).toBe(0)
      done();
    })

  })

  it('Test if quiz response data is set in html.', (done) => {
    moxios.stubRequest(util.apiUrl() + '/api/quiz-analytics/1/testquiz/1/', {
      status: 200,
      response: {
        id: "dsfdsf",
        base_id: "testquiz",
        type: "in video",
        name: "testname",
        number_of_attempts: [[1, 2,],],
        grade_distribution: [[1, 3,],],
        correct_ratio_per_question: [[1, 0.5,],],
        last_attempt_grade_distribution: [[1, 4,],],
        passing_fraction: 0.7,
        average_grade: 0.53,
        last_attempt_average_grade: 0.87,
      },
    });
    const wrapper = mountComponent();
    moxios.wait(function () {
      expect(wrapper.vm.name).toBe("testname")
      expect(wrapper.html()).toContain("testname");
      done();
    })
  })

  it('Test empty quiz repsonses.', (done) => {
    moxios.stubRequest(util.apiUrl() + '/api/quiz-analytics/1/testquiz/1/', {
      status: 200,
      response: {
        id: "dsfdsf",
        base_id: "testquiz",
        type: "in video",
        name: "testname",
        number_of_attempts: [[1, 2,],],
        grade_distribution: [[1, 3,],],
        correct_ratio_per_question: [[1, 0.5,],],
        last_attempt_grade_distribution: [[1, 4,],],
        passing_fraction: null,
        average_grade: null,
        last_attempt_average_grade: null,
      },
    });
    const wrapper = mountComponent();
    moxios.wait(function () {
      expect(wrapper.vm.name).toBe("testname")
      expect(wrapper.html()).toContain("testname");
      done();
    })
  })

  it('Check if response error is handled.', (done) => {
    moxios.stubRequest(util.apiUrl() + '/api/quiz-analytics/1/testquiz/1/', {
      status: 403,
      response: { "error": "error", },
    });
    const wrapper = mountComponent();
    moxios.wait(function () {
      expect(wrapper.html()).toContain(strings.connection_error);
      done();
    })
  })

  it('Test if quiz response data is set in html.', (done) => {
    moxios.stubRequest(util.apiUrl() + '/api/quiz-analytics/1/testquiz/1/', {
      status: 200,
      response: {
        id: "dsfdsf",
        base_id: "testquiz",
        type: "in video",
        name: "testname",
        number_of_attempts: [[1, 2,],],
        grade_distribution: [[1, 3,],],
        correct_ratio_per_question: [[1, 0.5,],],
        last_attempt_grade_distribution: [[1, 4,],],
        passing_fraction: 0.7,
        average_grade: 0.53,
        last_attempt_average_grade: 0.87,
      },
    });
    const wrapper = mountComponent();
    moxios.wait(function () {
      let next = jest.fn();
      wrapper.vm.$options.beforeRouteUpdate.call(wrapper.vm, {
        params: {
          courseid: "test",
          quizid: "testquiz-1",
        },
      }, {}, next)
      expect(next).toHaveBeenCalled();
      done();
    })
  })

})
