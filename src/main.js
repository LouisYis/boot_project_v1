// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import Vuex from 'vuex'
import store from './vuex/store.js'
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
/* eslint-disable no-new */

Vue.use(VueResource)
Vue.use(Element)
Vue.use(Vuex)

global.host = 'http://192.168.25.102:80'
global.authdata = ''

Vue.http.interceptors.push((request, next) => {
  request.headers.set('Authorization', global.authdata)
  request.headers.set('Content-Type', 'application/json;charset=UTF-8')
  next((response) => {
    console.log(response.status)
    return response
  })
})

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
