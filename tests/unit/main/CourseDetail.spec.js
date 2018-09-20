import Vue from 'vue'
import Vuex from 'vuex'
import {
  shallowMount,
  mount,
  createLocalVue
} from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'
import CourseDetail from '@/views/platforms/coursera/CourseDetail'

import mockUtils from '../mockUtils'
import router from '@/router'

const localVue = createLocalVue()
localVue.use(BootstrapVue)
localVue.use(Vuex)

describe('CourseDetail.vue', () => {
  mockUtils.initUtils()
  let store

  beforeEach(function () {
    store = mockUtils.mockStore()
  })

  let mountComponent = () => {
    return mount(CourseDetail, {
      localVue,
      store,
      router,
      stubs: ['LineGraph',
        'ScatterGraph',
        'BarGraph',
        'DoughnutGraph',
        'PolarAreaGraph',
        'RadarGraph',
      ],
    })
  }

  it('is Vue instance', () => {
    const wrapper = mountComponent()
    expect(wrapper.isVueInstance()).toBe(true)
  })
  it('is Register', () => {
    const wrapper = mountComponent()
    expect(wrapper.is(CourseDetail)).toBe(true)
  })
})
