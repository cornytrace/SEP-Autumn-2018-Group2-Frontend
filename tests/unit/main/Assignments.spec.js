import Vuex from 'vuex'
import {
    mount,
    createLocalVue
} from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'
import Assignments from '@/views/platforms/coursera/Assignments'
import * as mockUtils from '../mockUtils'
import moxios from 'moxios'
import util from '@/util'
import strings from "@/strings"

const localVue = createLocalVue()
localVue.use(BootstrapVue)
localVue.use(Vuex)

describe('Assignments.vue', () => {
    let store

    beforeEach(function () {
        store = mockUtils.mockStore()
        moxios.install()
    })

    afterEach(function () {
        moxios.uninstall()
    })


    let mountComponent = () => {
        return mount(Assignments, {
            localVue,
            store,
            mocks: {
                $router: {},
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

    it('is Vue instance', () => {
        const wrapper = mountComponent()
        expect(wrapper.isVueInstance()).toBe(true)
    })
    it('is Register', () => {
        const wrapper = mountComponent()
        expect(wrapper.is(Assignments)).toBe(true)
    })

    it('Test if assignment response data is set in html.', (done) => {
        moxios.stubRequest(util.apiUrl() + '/api/assignment-analytics/1/', {
            status: 200,
            response: [{ name: "Assignment 1", }, { name: "Assignment 2", },],
        });
        const wrapper = mountComponent();
        moxios.wait(function () {
            expect(wrapper.html()).toContain("Assignment 1");
            expect(wrapper.html()).toContain("Assignment 2");
            done();
        })
    })

    it('Check if response error is handled.', (done) => {
        moxios.stubRequest(util.apiUrl() + '/api/assignment-analytics/1/', {
            status: 403,
            response: { "error": "error", },
        });
        const wrapper = mountComponent();
        moxios.wait(function () {
            expect(wrapper.html()).toContain(strings.connection_error);
            done();
        })
    })
})
