import Vue from 'vue'
import App from './App'
import router from './router'
import Page from './components/common/Page.vue'
Vue.component('page', Page);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
