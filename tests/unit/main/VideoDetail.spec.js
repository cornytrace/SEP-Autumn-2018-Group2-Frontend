import * as mockUtils from '../mockUtils'
import Vuex from 'vuex'
import {
  mount,
  createLocalVue
} from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'
import VideoDetail from '@/views/platforms/coursera/VideoDetail'
import moxios from 'moxios'
import util from '@/util'
import strings from '@/strings'

const localVue = createLocalVue()
localVue.use(BootstrapVue)
localVue.use(Vuex)

describe('VideoDetail.vue', () => {
  let store

  beforeEach(function () {
    store = mockUtils.mockStore()
    moxios.install()
  })

  afterEach(function () {
    moxios.uninstall()
  })

  let mountComponent = () => {
    return mount(VideoDetail, {
      localVue,
      store,
      stubs: [],
      mocks: {
        $route: {
          params: {
            courseid: "test",
            videoid: "test2",
          },
        },
      },
    })
  }

  it('is Vue instance', () => {
    const wrapper = mountComponent()
    expect(wrapper.isVueInstance()).toBe(true)
  })
  it('is Register', () => {
    const wrapper = mountComponent()
    expect(wrapper.is(VideoDetail)).toBe(true)
  })
  it('sets Correct Data', (done) => {
    moxios.stubRequest(util.apiUrl() + '/api/video-analytics/1/test2/', {
      status: 200,
      response: {
        branch: 1,
        finished_video: 1,
        id: 1,
        item_id: "asdf",
        lesson: 1,
        name: "name",
        optional: false,
        order: 1,
        type: 1,
        video_comments: 1,
        video_dislikes: 1,
        video_likes: 1,
        views_over_runtime: [],
        watched_video: 1,
        next_item: {
          item_id: "fgfg",
          type: 1,
          category: "lecture",
        },
        next_video: {
          item_id: "fgfg",
          type: 1,
          category: "lecture",
        },
      },
    });
    const wrapper = mountComponent();
    moxios.wait(function () {
      expect(wrapper.html()).toContain("name")
      done();
    })

  })

  it('show next quiz button and fraction', (done) => {
    moxios.stubRequest(util.apiUrl() + '/api/video-analytics/1/test2/', {
      status: 200,
      response: {
        branch: 1,
        finished_video: 1,
        id: 1,
        item_id: "asdf",
        lesson: 1,
        name: "name",
        optional: false,
        order: 1,
        type: 1,
        video_comments: 0,
        video_dislikes: 0,
        video_likes: 0,
        views_over_runtime: [
          [0, 1, ],
          [1, 2, ],
        ],
        watched_video: 1,
        next_item: {
          item_id: "fgfg",
          type: 4,
          category: "quiz",
          assessment_id: "fjhwkjfg",
          assessment_version: 2,
        },
      },
    });
    const wrapper = mountComponent();
    moxios.wait(function () {
      expect(wrapper.html()).toContain("name")
      expect(wrapper.html()).toContain("Next item")
      done();
    })

  })

  it('setsError', (done) => {
    moxios.stubRequest(util.apiUrl() + '/api/video-analytics/1/test2/', {
      status: 403,
      response: {
        branch: 1,
        finished_video: 1,
        id: 1,
        item_id: "asdf",
        lesson: 1,
        name: "name",
        optional: false,
        order: 1,
        type: 1,
        video_comments: 1,
        video_dislikes: 1,
        video_likes: 1,
        views_over_runtime: [],
        watched_video: 1,
        next_item: {
          item_id: "fgfg",
          type: 4,
          category: "quiz",
        },
      },
    });
    const wrapper = mountComponent();
    moxios.wait(function () {
      expect(wrapper.html()).toContain(strings.connection_error)
      done();
    })

  })
})
