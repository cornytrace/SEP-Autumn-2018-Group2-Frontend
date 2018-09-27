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
    //store.state.user.courses = [{ course_slug: "c1", course_id: "1", },]
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

  it('has a name', () => {
    expect(CourseDetail.name).toMatch('CourseDetail')
  })

  // it('is Vue instance', () => {
  //   const wrapper = mountComponent()
  //   wrapper.setData({
  //     courseSlug: "c1",
  //   })
  //   expect(wrapper.isVueInstance()).toBe(true)
  // })
  // it('is Register', () => {
  //   const wrapper = mountComponent()
  //   wrapper.setData({
  //     courseSlug: "c1",
  //   })
  //   expect(wrapper.is(CourseDetail)).toBe(true)
  // })
})
