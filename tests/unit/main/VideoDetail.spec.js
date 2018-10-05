import mockUtils from '../mockUtils'
import Vuex from 'vuex'
import {
  mount,
  createLocalVue
} from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'
import VideoDetail from '@/views/platforms/coursera/VideoDetail'
import router from '@/router'

const Plotly = jest.mock('plotly.js')

const localVue = createLocalVue()
localVue.use(BootstrapVue)
localVue.use(Vuex)

describe('VideoDetail.vue', () => {
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
    expect(wrapper.is(VideoDetail)).toBe(true)
  })
})
