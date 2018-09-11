import {
  shallowMount,
  createLocalVue,
} from '@vue/test-utils'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import Statistics from '@/views/Statistics'

const localVue = createLocalVue()
localVue.use(VueRouter)
const router = new VueRouter()

localVue.use(BootstrapVue)

describe('Statistics.vue', () => {
  it('has a name', () => {
    expect(Statistics.name).toMatch('Statistics')
  })
  it('has a created hook', () => {
    expect(typeof Statistics.data).toMatch('function')
  })
  it('sets the correct default data', () => {
    expect(typeof Statistics.data).toMatch('function')
    const defaultData = Statistics.data()
    expect(defaultData.selected).toEqual("Month")
  })
  it('is Vue instance', () => {
    const wrapper = shallowMount(Statistics, {
      localVue,
      router,
    })
    expect(wrapper.isVueInstance()).toBe(true)
  })
  it('is Statistics', () => {
    const wrapper = shallowMount(Statistics, {
      localVue,
      router,
    })
    expect(wrapper.is(Statistics)).toBe(true)
  })
})
