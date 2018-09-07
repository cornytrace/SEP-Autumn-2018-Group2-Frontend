import Vue from 'vue'
import {
  shallowMount,
  mount,
} from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'
import Home from '@/views/Home'

Vue.use(BootstrapVue)

describe('Home.vue', () => {
  it('has a name', () => {
    expect(Home.name).toMatch('home')
  })
  it('has a created hook', () => {
    expect(typeof Home.data).toMatch('function')
  })
  it('sets the correct default data', () => {
    expect(typeof Home.data).toMatch('function')
    const defaultData = Home.data()
    expect(defaultData.selected).toMatch('Month')
  })
  it('is Vue instance', () => {
    const wrapper = shallowMount(Home)
    expect(wrapper.isVueInstance()).toBe(true)
  })
  it('is Home', () => {
    const wrapper = shallowMount(Home)
    expect(wrapper.is(Home)).toBe(true)
  })
  it('should render correct content', () => {
    const wrapper = mount(Home)
    expect(wrapper.html()).toContain('Coursera')
  })
})
