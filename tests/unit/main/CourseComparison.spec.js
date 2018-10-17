import Vuex from 'vuex'
import {
    mount,
    createLocalVue
} from '@vue/test-utils'
import * as mockUtils from '../mockUtils'

import BootstrapVue from 'bootstrap-vue'
import CourseComparison from '@/views/platforms/coursera/CourseComparison'

import strings from '@/strings'
import moxios from 'moxios'
import util from '@/util'

const localVue = createLocalVue()
localVue.use(BootstrapVue)
localVue.use(Vuex)

describe('CourseComparison.vue', () => {
    let store

    beforeEach(function () {
        store = mockUtils.mockStore()
        moxios.install()
    })

    afterEach(function () {
        moxios.uninstall()
    })

    let mountComponent = () => {
        return mount(CourseComparison, {
            localVue,
            store,
            mocks: {
                $router: {
                    push: {},
                },
                $route: {
                    params: {
                        courseid: "test",
                        course2id: "test2",
                    },
                },
            },
            stubs: [
                'Chart',
            ],
        })
    }

    it('has a name', () => {
        expect(CourseComparison.name).toMatch('CourseComparison')
    })

    it('sets the correct default data', (done) => {
        expect(typeof CourseComparison.data).toMatch('function');
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
        moxios.stubRequest(util.apiUrl() + '/api/course-analytics/2/', {
            status: 200,
            response: {
                test: "test",
                name: "test_2_name",
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

        const wrapper = mountComponent();
        moxios.wait(function () {
            expect(wrapper.vm.course1.courseName).toBe("test_name")
            expect(wrapper.vm.course2.courseName).toBe("test_2_name")
            done();
        })
    })

    it('test bad request', (done) => {
        moxios.stubRequest(util.apiUrl() + '/api/course-analytics/1/', {
            status: 403,
            response: { "error": "error", },
        });
        moxios.stubRequest(util.apiUrl() + '/api/course-analytics/2/', {
            status: 403,
            response: { "error": "error", },
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

        const wrapper = mountComponent();

        moxios.wait(function () {
            expect(wrapper.vm.course1.courseName).toBe("test_name")
            done();
        })

        let next = jest.fn();
        wrapper.vm.$options.beforeRouteUpdate.call(wrapper.vm, {
            params: {
                courseid: 2,
            },
        }, {}, next)
        expect(next).toHaveBeenCalled();
    })

    it('test router update', () => {
        const wrapper = mountComponent();

        let push = jest.fn();
        wrapper.vm.$router.push = push;

        wrapper.find("#course-selector").setValue("course2")

        return wrapper.vm.$nextTick().then(function () {
            expect(push).toHaveBeenCalled();
        })

    })
})
