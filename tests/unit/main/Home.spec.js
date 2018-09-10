import {
  shallowMount,
  mount,
  createLocalVue,
} from '@vue/test-utils'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import Home from '@/views/Home'

const localVue = createLocalVue()
localVue.use(BootstrapVue)
localVue.use(VueRouter)
const router = new VueRouter()


describe('Home.vue', () => {
  it('has a name', () => {
    expect(Home.name).toMatch('home')
  })
  it('has a created hook', () => {
    expect(typeof Home.data).toMatch('function')
  })
  it('sets the correct default data', () => {
    expect(typeof Home.data).toMatch('function')
    const defaultData = Home.data()
    expect(defaultData.selected).toMatch('Month')
  })
  it('is Vue instance', () => {
    const wrapper = shallowMount(Home, {
      localVue,
      router,
    })
    expect(wrapper.isVueInstance()).toBe(true)
  })
  it('is Home', () => {
    const wrapper = shallowMount(Home, {
      localVue,
      router,
    })
    expect(wrapper.is(Home)).toBe(true)
  })
  it('should render correct content', () => {
    const wrapper = mount(Home, {
      localVue,
      router,
    })
    expect(wrapper.html()).toContain('Coursera')
  })
})
