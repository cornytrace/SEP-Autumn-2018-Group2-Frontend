import Vue from 'vue'
import Vuex from 'vuex'
import {
  shallowMount,
  mount,
  createLocalVue
} from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'
import VideoDetail from '@/views/platforms/coursera/VideoDetail'

import mockUtils from '../mockUtils'
import router from '@/router'

const localVue = createLocalVue()
localVue.use(BootstrapVue)
localVue.use(Vuex)

describe('VideoDetail.vue', () => {
  mockUtils.initUtils()
  let store

  beforeEach(function () {
    store = mockUtils.mockStore()
  })

  let mountComponent = () => {
    return mount(VideoDetail, {
      localVue,
      store,
      router,
      stubs: ['LineGraph',

      ],
    })
  }

  it('is Vue instance', () => {
    const wrapper = mountComponent()
    expect(wrapper.isVueInstance()).toBe(true)
  })
  it('is Register', () => {
    const wrapper = mountComponent()
    expect(wrapper.is(VideoDetail)).toBe(true)
  })
})
