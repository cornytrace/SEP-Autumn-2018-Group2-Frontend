// This is the first file executed.
// This file creates a new Vue instance, with App.vue as main component.
// It also connects the store and the router to the Vue instance.
import 'core-js/es6/promise'
import 'core-js/es6/string'
import 'core-js/es7/array'

import Vue from 'vue'
import VueAxios from 'vue-axios'
import axios from 'axios';
import BootstrapVue from 'bootstrap-vue'
import VueLocalStorage from 'vue-localstorage'

import App from './App'
import store from './store'
import router from './router'


Vue.use(VueLocalStorage)
Vue.use(VueAxios, axios)
Vue.use(BootstrapVue)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App,
  },
})
