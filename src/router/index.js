import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Home from '@/pages/home/Index.vue'
import Search from '@/pages/search/Index.vue'
import Location from '@/pages/location/CitiesList'



export default new Router({
  routes: [
    {
      path: '/home',
      alias: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/location',
      name: 'location',
      component: Location
    },
  ]  
})
