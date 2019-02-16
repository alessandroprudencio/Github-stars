import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login/login'

import Vuetify from 'vuetify'

import VeeValidate from 'vee-validate'

Vue.use(VeeValidate)
Vue.use(Vuetify,{
  iconfont: 'mdi' // 'md' || 'mdi' || 'fa' || 'fa4'

})

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
