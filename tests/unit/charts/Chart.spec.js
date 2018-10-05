import Vuex from 'vuex'
import {
    createLocalVue,
    shallowMount
} from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'
import Chart from '@/views/charts/Chart'

const localVue = createLocalVue()
localVue.use(BootstrapVue)
localVue.use(Vuex)

describe('Chart.vue', () => {
    it('is Vue instance', () => {
        const wrapper = shallowMount(Chart)
        expect(wrapper.isVueInstance()).toBe(true)
    })
})
