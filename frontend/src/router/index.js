import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login/login'

import Vuetify from 'vuetify'

Vue.use(Vuetify)

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})
