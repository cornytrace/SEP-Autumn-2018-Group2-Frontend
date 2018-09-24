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
  mockUtils.initUtils();
  let store

  beforeEach(() => {
    store = mockUtils.mockStore()
  })

  let mountComponent = (components) => {
    store.user = {
      pk: 1,
      email: "test@qdt.com",
      role: "qdt",
      courses: [{
        course_id: "c2",
        course_name: "Corse 2",
        course_slug: "course2",
        pk: 2,
      }, ],
    };
    return mount(DefaultContainer, {
      localVue,
      router,
      store,
      components,
    })
  }

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
    const wrapper = mountComponent()
    expect(wrapper.isVueInstance()).toBe(true)
  })

  it('updates navigation on load', () => {
    const spy = jest.spyOn(DefaultContainer.methods, "setNavigation");
    mountComponent()
    expect(spy).toHaveBeenCalled()
    spy.mockRestore()
  })

  it('updates navigation on router push', () => {
    const wrapper = mountComponent()
    wrapper.vm.setNavigation = jest.fn()
    wrapper.vm.$router.push("/coursera")
    expect(wrapper.vm.setNavigation).toHaveBeenCalled()
  })
})
