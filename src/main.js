// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vueSwiper from 'vue-awesome-swiper'  //引入vue-awesome-swiper
// import 'swiper/dist/css/swiper.css'  //引入样式

import store from './store'

import axios from 'axios'
Vue.prototype.$axios = axios
Vue.use(vueSwiper)

Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
