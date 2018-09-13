import {
  shallowMount,
  createLocalVue
} from '@vue/test-utils'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import CourseDetail from '@/views/platforms/coursera/CourseDetail'

const localVue = createLocalVue()
localVue.use(VueRouter)
const router = new VueRouter()

localVue.use(BootstrapVue)

describe('CourseDetail.vue', () => {
  it('is Vue instance', () => {
    const wrapper = shallowMount(CourseDetail, {
      localVue,
      router,
    })
    expect(wrapper.isVueInstance()).toBe(true)
  })
})
