import Vuex from 'vuex'
import {
  mount,
  createLocalVue
} from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'
import Settings from '@/views/Settings'
import * as mockUtils from '../mockUtils'
import moxios from 'moxios'
import util from '@/util'
import strings from "@/strings"

const localVue = createLocalVue()
localVue.use(BootstrapVue)
localVue.use(Vuex)

describe('Settings.vue', () => {
  let store

  beforeEach(function () {
    store = mockUtils.mockStore()
    moxios.install()
  })

  afterEach(function () {
    moxios.uninstall()
  })


  let mountComponent = () => {
    return mount(Settings, {
      localVue,
      store,
      stubs: [
        'Chart',
      ],
    })
  }

  // TODO CONTENT

  it('has a name', () => {
    expect(Settings.name).toMatch('Settings')
  })
  it('is Vue instance', () => {
    const wrapper = mountComponent()
    expect(wrapper.isVueInstance()).toBe(true)
  })
  it('is Register', () => {
    const wrapper = mountComponent()
    expect(wrapper.is(Settings)).toBe(true)
  })
  it('has Class', () => {
    const wrapper = mountComponent()
    expect(wrapper.find('.switch').exists()).toBeTruthy()
  })
})
