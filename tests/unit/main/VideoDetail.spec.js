import Vue from 'vue'
import {
  shallowMount
} from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'
import VideoDetail from '@/views/platforms/coursera/VideoDetail'

Vue.use(BootstrapVue)

describe('VideoDetail.vue', () => {

  // TODO CONTENT

  it('has a name', () => {
    expect(VideoDetail.name).toMatch('VideoDetail')
  })
  it('is Vue instance', () => {
    const wrapper = shallowMount(VideoDetail)
    expect(wrapper.isVueInstance()).toBe(true)
  })
  it('is correct type', () => {
    const wrapper = shallowMount(VideoDetail)
    expect(wrapper.is(VideoDetail)).toBe(true)
  })
})
