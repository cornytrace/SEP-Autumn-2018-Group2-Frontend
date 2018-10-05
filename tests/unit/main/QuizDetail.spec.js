import Vuex from 'vuex'
import {
  mount,
  createLocalVue,
  shallowMount
} from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'
import QuizDetail from '@/views/platforms/coursera/QuizDetail'

import mockUtils from '../mockUtils'
import router from '@/router'

const localVue = createLocalVue()
localVue.use(BootstrapVue)
localVue.use(Vuex)

describe('QuizDetail.vue', () => {
  let store

  beforeEach(function () {
    store = mockUtils.mockStore()
  })

  let mountComponent = () => {
    return mount(QuizDetail, {
      localVue,
      store,
      router,
      stubs: ['LineGraph',
        'ScatterGraph',
        'BarGraph',
        'DoughnutGraph',
        'PolarAreaGraph',
        'RadarGraph',
        'Chart',
      ],
    })
  }

  it('is Vue instance', () => {
    const wrapper = mountComponent()
    expect(wrapper.isVueInstance()).toBe(true)
  })
  it('is Register', () => {
    const wrapper = mountComponent()
    expect(wrapper.is(QuizDetail)).toBe(true)
  })
})
