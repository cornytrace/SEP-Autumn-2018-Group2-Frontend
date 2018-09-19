import BootstrapVue from 'bootstrap-vue'
import {
  mount,
  createLocalVue
} from '@vue/test-utils'
import VueRouter from 'vue-router'
import DefaultContainer from '@/containers/DefaultContainer'

import router from '@/router'
import mockUtils from '../mockUtils'

const localVue = createLocalVue()
localVue.use(VueRouter)

localVue.use(BootstrapVue)

describe('DefaultContainer.vue', () => {
  let store

  beforeEach(() => {
    store = mockUtils.mockStore()
  })

  it('has a name', () => {
    expect(DefaultContainer.name).toMatch('full')
  })
  it('has a created hook', () => {
    expect(typeof DefaultContainer.data).toMatch('function')
  })
  it('sets the correct default data', () => {
    expect(typeof DefaultContainer.data).toMatch('function')
    const defaultData = DefaultContainer.data()
    expect(typeof defaultData.top_nav).toMatch('object')
  })
  it('is Vue instance', () => {
    const wrapper = mount(DefaultContainer, {
      localVue,
      router,
      store,
      mocks: {
        $route: {
          matched: [{
            meta: {
              label: "",
            },
          }, ],
        },
      },
    })
    expect(wrapper.isVueInstance()).toBe(true)
  })
})
