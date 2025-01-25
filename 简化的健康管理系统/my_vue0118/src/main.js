import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios' //引入axios
import store from './store'

import './assets/styles.css';

Vue.prototype.$http = axios
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');