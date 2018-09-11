import {
  shallowMount,
  createLocalVue,
} from '@vue/test-utils'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import CourseDetail from '@/views/CourseDetail'

const localVue = createLocalVue()
localVue.use(VueRouter)
const router = new VueRouter()

localVue.use(BootstrapVue)

describe('CourseDetail.vue', () => {
  it('is Vue instance', () => {
    console.log(router)
    const wrapper = shallowMount(CourseDetail, {
      localVue,
      router,
    })
    console.log(wrapper.html)
    expect(wrapper.isVueInstance()).toBe(true)
  })
})
