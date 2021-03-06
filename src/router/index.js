import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Index from '../views/index'

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      meta: {
        requireAuth: false
      },
      component: Index
    }
  ]
})