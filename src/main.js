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
import App from './App'
import store from './store'
import router from './router'

Vue.use(VueAxios, axios)
Vue.use(BootstrapVue)

router.beforeEach((to, from, next) => {
  if (!store.state.isAuthenticated && to.path !== "/pages/login") {
    next({
      path: "/pages/login",
      query: {
        redirect: to.fullPath,
      },
    });
  } else {
    next()
  }
});

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
