import {
  shallowMount,
  createLocalVue,
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
  it('sets the correct default data', () => {
    expect(typeof AdminPanel.data).toMatch('function')
    const defaultData = AdminPanel.data()
    expect(defaultData.users.length).toBe(0)
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
  it('updates the users list', () => {
    const wrapper = shallowMount(AdminPanel, {
      localVue,
      router,
    })
    const user = {
      pk: 1,
      email: "test@example.org",
    }
    wrapper.vm.onUpdateUsers(user)
    expect(wrapper.vm.users.length).toBe(1)
    expect(wrapper.vm.users[0]).toBe(user)
  })
})
