import Vue from 'vue'
import {
  shallowMount,
} from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'
import VideoDetail from '@/views/VideoDetail'

Vue.use(BootstrapVue)

describe('VideoDetail.vue', () => {

  // TODO CONTENT

  it('has a name', () => {
    expect(VideoDetail.name).toMatch('Video Details')
  })
  it('is Vue instance', () => {
    const wrapper = shallowMount(VideoDetail)
    expect(wrapper.isVueInstance()).toBe(true)
  })
  it('is Register', () => {
    const wrapper = shallowMount(VideoDetail)
    expect(wrapper.is(VideoDetail)).toBe(true)
  })
})
