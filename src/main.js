
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/reset.css'
import './assets/iconfont/iconfont.css'
import fastClick from 'fastclick'

fastClick.attach(document.body)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
