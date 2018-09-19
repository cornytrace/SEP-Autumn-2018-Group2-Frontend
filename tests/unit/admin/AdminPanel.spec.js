import {
  shallowMount,
  createLocalVue
} from '@vue/test-utils'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import AdminPanel from '@/views/admin/AdminPanel'

const localVue = createLocalVue()
localVue.use(VueRouter)
const router = new VueRouter()

localVue.use(BootstrapVue)

describe('AdminPanel.vue', () => {
  it('has a name', () => {
    expect(AdminPanel.name).toMatch('AdminPanel')
  })
  it('is Vue instance', () => {
    const wrapper = shallowMount(AdminPanel, {
      localVue,
      router,
    })
    expect(wrapper.isVueInstance()).toBe(true)
  })
  it('is AdminPanel', () => {
    const wrapper = shallowMount(AdminPanel, {
      localVue,
      router,
    })
    expect(wrapper.is(AdminPanel)).toBe(true)
  })
})
