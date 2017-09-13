// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import vuematerial from 'vue-material'
import 'vue-material/dist/vue-material.css'

Vue.use(vuematerial);

Vue.material.registerTheme('default', {
  primary: 'blue',
  accent: 'green',
  warn: 'red'
})

Vue.prototype.$http = axios.create({
  baseURL: `http://localhost:3000`
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
