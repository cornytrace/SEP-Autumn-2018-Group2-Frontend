import {
  mount,
  createLocalVue
} from '@vue/test-utils'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import AdminPanel from '@/views/admin/AdminPanel'
import mockUtils from '../mockUtils'

const localVue = createLocalVue()
localVue.use(VueRouter)
const router = new VueRouter()

localVue.use(BootstrapVue)
mockUtils.initUtils();
let store

beforeEach(() => {
  store = mockUtils.mockStore()
})

let mountComponent = (components) => {
  return mount(AdminPanel, {
    localVue,
    router,
    store,
    components,
  })
}

describe('AdminPanel.vue', () => {
  it('has a name', () => {
    expect(AdminPanel.name).toMatch('AdminPanel')
  })
  it('is Vue instance', () => {
    const wrapper = mountComponent()
    expect(wrapper.isVueInstance()).toBe(true)
  })
  it('is AdminPanel', () => {
    const wrapper = mountComponent();
    expect(wrapper.is(AdminPanel)).toBe(true)
  })
  it('Check logout functionality', () => {
    const wrapper = mountComponent()
    const push = jest.fn();
    const dispatch = jest.fn().mockResolvedValueOnce();
    wrapper.vm.$router.push = push;
    wrapper.vm.$store.dispatch = dispatch;
    wrapper.find("#logout-button").trigger("click");

    return wrapper.vm.$nextTick().then(function () {
      expect(push).toHaveBeenCalledWith("/pages/login");
      expect(dispatch).toHaveBeenCalledWith("logout");
    })

  })
})
