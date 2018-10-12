import {
  shallowMount,
  mount,
  createLocalVue
} from '@vue/test-utils'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import Home from '@/views/Home'
import * as mockUtils from '../mockUtils'

const localVue = createLocalVue()
localVue.use(BootstrapVue)
localVue.use(VueRouter)
const router = new VueRouter()


describe('Home.vue', () => {

  let store

  beforeEach(function () {
    store = mockUtils.mockStore()
  })

  it('has a name', () => {
    expect(Home.name).toMatch('home')
  })
  it('has a created hook', () => {
    expect(typeof Home.data).toMatch('function')
  })
  it('sets the correct default data', () => {
    expect(typeof Home.data).toMatch('function')
  })
  it('is Vue instance', () => {
    const wrapper = shallowMount(Home, {
      localVue,
      store,
      router,
    })
    expect(wrapper.isVueInstance()).toBe(true)
  })
  it('is Home', () => {
    const wrapper = shallowMount(Home, {
      localVue,
      store,
      router,
    })
    expect(wrapper.is(Home)).toBe(true)
  })
  it('should render correct content', () => {
    const wrapper = mount(Home, {
      localVue,
      store,
      router,
    })
    expect(wrapper.html()).toContain('Coursera')
  })
})
