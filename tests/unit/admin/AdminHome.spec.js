import {
  shallowMount,
  createLocalVue,
} from '@vue/test-utils'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import AdminHome from '@/views/admin/AdminHome'

const localVue = createLocalVue()
localVue.use(VueRouter)
const router = new VueRouter()

localVue.use(BootstrapVue)

describe('AdminHome.vue', () => {
  it('has a name', () => {
    expect(AdminHome.name).toMatch('AdminHome')
  })
  it('sets the correct default data', () => {
    expect(typeof AdminHome.data).toMatch('function')
    const wrapper = shallowMount(AdminHome, {
      localVue,
      router,
      propsData: {
        users: [
          {
            pk: 1,
            email: "test@example.org",
          },
        ],
      },
    })
    expect(wrapper.vm.users.length).toBe(1)
  })
  it('is Vue instance', () => {
    const wrapper = shallowMount(AdminHome, {
      localVue,
      router,
    })
    expect(wrapper.isVueInstance()).toBe(true)
  })
  it('is AdminHome', () => {
    const wrapper = shallowMount(AdminHome, {
      localVue,
      router,
    })
    expect(wrapper.is(AdminHome)).toBe(true)
  })
})
