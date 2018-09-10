import Vue from 'vue'
import {
  shallowMount,
} from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'
import Courses from '@/views/Courses'

Vue.use(BootstrapVue)

describe('Courses.vue', () => {

  // TODO

  it('has a name', () => {
    expect(Courses.name).toMatch('course-overview')
  })
  it('is Vue instance', () => {
    const wrapper = shallowMount(Courses)
    expect(wrapper.isVueInstance()).toBe(true)
  })
  it('is Register', () => {
    const wrapper = shallowMount(Courses)
    expect(wrapper.is(Courses)).toBe(true)
  })
  it('sets the correct default data', () => {
    expect(typeof Courses.data).toBe('function')
    const defaultData = Courses.data()
    expect(defaultData.show).toBe(true)
  })
})
