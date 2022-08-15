import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import AppIndex from '@/components/home/AppIndex'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/index',
      name: 'AppIndex',
      render: h => h(AppIndex),
      component: AppIndex,
      meta: {
        requireAuth: true
      }
    }
  ]
})
