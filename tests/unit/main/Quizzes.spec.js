import Vue from 'vue'
import {
  shallowMount
} from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'
import Quizzes from '@/views/platforms/coursera/Quizzes'

Vue.use(BootstrapVue)

describe('Quizzes.vue', () => {

  // TODO CONTENT

  it('has a name', () => {
    expect(Quizzes.name).toMatch('Quizzes')
  })
  // it('is Vue instance', () => {
  //   const wrapper = shallowMount(Quizzes)
  //   expect(wrapper.isVueInstance()).toBe(true)
  // })
  // it('is Register', () => {
  //   const wrapper = shallowMount(Quizzes)
  //   expect(wrapper.is(Quizzes)).toBe(true)
  // })
})
