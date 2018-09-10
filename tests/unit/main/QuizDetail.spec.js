import Vue from 'vue'
import {
  shallowMount,
} from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'
import QuizDetail from '@/views/QuizDetail'

Vue.use(BootstrapVue)

describe('QuizDetail.vue', () => {

  // TODO

  it('is Vue instance', () => {
    const wrapper = shallowMount(QuizDetail)
    expect(wrapper.isVueInstance()).toBe(true)
  })
  it('is Register', () => {
    const wrapper = shallowMount(QuizDetail)
    expect(wrapper.is(QuizDetail)).toBe(true)
  })
})
