import Vuex from 'vuex'
import {
  mount,
  createLocalVue
} from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'
import CourseDetail from '@/views/platforms/coursera/CourseDetail'

import mockUtils from '../mockUtils'
import router from '@/router'
import moxios from 'moxios'

const localVue = createLocalVue()
localVue.use(BootstrapVue)
localVue.use(Vuex)

describe('CourseDetail.vue', () => {
  mockUtils.initUtils()
  let store

  beforeEach(function () {
    store = mockUtils.mockStore()
    moxios.install()
  })

  afterEach(function () {
    moxios.uninstall()
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

  it('sets the correct default data', () => {
    const wrapper = mountComponent()
    wrapper.setData({
    })
    expect(typeof CourseDetail.data).toMatch('function')
    // const defaultData = CourseDetail.data()
    // expect(defaultData.selected).toEqual("Month")
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
