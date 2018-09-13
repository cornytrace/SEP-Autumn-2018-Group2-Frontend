import Vue from 'vue'
import {
  shallowMount
} from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'
import Videos from '@/views/platforms/coursera/Videos'

Vue.use(BootstrapVue)

describe('Video.vue', () => {

  // TODO CONTENT

  it('has a name', () => {
    expect(Videos.name).toMatch('Videos')
  })
  it('is Vue instance', () => {
    const wrapper = shallowMount(Videos)
    expect(wrapper.isVueInstance()).toBe(true)
  })
  it('is Register', () => {
    const wrapper = shallowMount(Videos)
    expect(wrapper.is(Videos)).toBe(true)
  })
  it('has Video', () => {
    const wrapper = shallowMount(Videos)
    expect(wrapper.html()).toContain("Video")
  })
})
