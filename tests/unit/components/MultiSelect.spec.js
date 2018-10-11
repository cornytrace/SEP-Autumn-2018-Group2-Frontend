import Vue from 'vue'
import {
  mount
} from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'
import MultiSelect from '@/components/MultiSelect'

jest.mock('@/util')
import mockUtils from '../mockUtils'

Vue.use(BootstrapVue)

describe('MultiSelect.vue', () => {

  let store

  beforeEach(() => {
    store = mockUtils.mockStore()
  })

  /**
   * Check vue functionality
   */
  it('has a name', () => {
    expect(MultiSelect.name).toMatch('MultiSelect')
  })
  it('is Vue instance', () => {
    const wrapper = mount(MultiSelect, {
      propsData: {
        options: [{
          course_name: "Capstone",
          course_slug: "capstone",
          course_id: "sdjflkds",
          pk: 1,
        },],
        vf: "pk",
        tf: "course_name",
      },
      store,
    })
    wrapper.setData({
      selectedOptions: [],
      selectedSelected: [],
      selected: [],
      search1: "",
      search2: "",
    });
    expect(wrapper.isVueInstance()).toBe(true)
  })

  /**
   * Check the functionality of the options list
   */
  it('check filter options', () => {
    // Add two courses
    const wrapper = mount(MultiSelect, {
      propsData: {
        options: [{
          course_name: "Capstone",
          course_slug: "capstone",
          course_id: "sdjflkds",
          pk: 1,
        },
        {
          course_name: "Course",
          course_slug: "couse2",
          course_id: "dfas",
          pk: 2,
        },
        ],
        vf: "pk",
        tf: "course_name",
      },
      store,
    })
    // One course should be removed so length should not be 2 anymore
    wrapper.find('#options-search').setValue("cap");
    expect(wrapper.vm.nonSelectedOptions.length).not.toBe(2)
  })

  /**
   * Check the filter of the selected list.
   */
  it('check filter selected', () => {
    const wrapper = mount(MultiSelect, {
      propsData: {
        options: [],
      },
      store,
    })
    // Add course to the selected array
    wrapper.setData({
      selected: [{
        course_name: "Course",
        course_slug: "couse2",
        course_id: "dfas",
        pk: 2,
      },],
      vf: "pk",
      tf: "course_name",
    });
    // One course should be removed so length should not be 2 anymore
    wrapper.find('#selected-search').setValue("cap");
    expect(wrapper.vm.filteredRight.length).not.toBe(1)
  })

  /**
   * Check functionality of the move to the right button.
   */
  it('check moving right', () => {
    const wrapper = mount(MultiSelect, {
      propsData: {
        options: [{
          course_name: "Course",
          course_slug: "couse2",
          course_id: "dfas",
          pk: 1,
        },],
        vf: "pk",
        tf: "course_name",
      },
      store,
    })
    // Add course to the selected array
    wrapper.setData({
      selectedOptions: [1,],
    });
    wrapper.find("#move-right-button").trigger("click");

    expect(wrapper.vm.filteredRight.length).toBe(1)
    expect(wrapper.vm.nonSelectedOptions.length).not.toBe(1)
  })

  /**
   *  Check functionality of the move to the left button.
   */
  it('check moving left', () => {
    const wrapper = mount(MultiSelect, {
      propsData: {
        options: [{
          course_name: "Course",
          course_slug: "couse2",
          course_id: "dfas",
          pk: 1,
        },],
        vf: "pk",
        tf: "course_name",
      },
      store,
    })

    // Add course to the selected array
    wrapper.setData({
      selected: [{
        course_name: "Course",
        course_slug: "couse2",
        course_id: "dfas",
        pk: 1,
      },],
      vf: "pk",
      tf: "course_name",
      selectedSelected: [1,],
    });

    wrapper.find("#move-left-button").trigger("click");

    expect(wrapper.vm.filteredRight.length).not.toBe(1)
    expect(wrapper.vm.nonSelectedOptions.length).toBe(1)
  })
})
