// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable */
import Vue from 'vue'
import App from './App'
import router from './router'
import config from './config.js'
import VueResource from 'vue-resource'
import { firestorePlugin } from 'vuefire'
import VueCarousel from 'vue-carousel'

Vue.use(VueCarousel);
Vue.use(firestorePlugin)
Vue.use(VueResource)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})