// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'core-js/es6/promise'
import 'core-js/es6/string'
import 'core-js/es7/array'
// import cssVars from 'css-vars-ponyfill'
import Vue from 'vue'
import VueAxios from 'vue-axios'
import {
  VueAuthenticate,
} from 'vue-authenticate'
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
