import Vuex from 'vuex'
import {
  shallowMount,
  createLocalVue
} from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'
import DefaultHeaderDropdownAccnt from '@/containers/DefaultHeaderDropdownAccnt'

import * as mockUtils from '../mockUtils'

const localVue = createLocalVue()
localVue.use(BootstrapVue)
localVue.use(Vuex)

describe('DefaultHeaderDropdownAccnt.vue', () => {
  let store

  beforeEach(() => {
    store = mockUtils.mockStore()
  })

  it('has a name', () => {
    expect(DefaultHeaderDropdownAccnt.name).toMatch('DefaultHeaderDropdownAccnt')
  })
  it('has a created hook', () => {
    expect(typeof DefaultHeaderDropdownAccnt.data).toMatch('function')
  })
  it('sets the correct default data', () => {
    expect(typeof DefaultHeaderDropdownAccnt.data).toMatch('function')
    const defaultData = DefaultHeaderDropdownAccnt.data()
    expect(defaultData.itemsCount).toBe(42)
  })
  it('sets the correct default data', () => {
    expect(typeof DefaultHeaderDropdownAccnt.data).toMatch('function')
    const defaultData = DefaultHeaderDropdownAccnt.data()
    expect(defaultData.itemsCount).toBe(42)
  })
  it('login admin', () => {
    const wrapper = shallowMount(DefaultHeaderDropdownAccnt, {
      store,
      localVue,
      mocks: {
        $router: {
          push: function () {},
        },
      },
    })
    wrapper.vm.doLogout();
  })
})
