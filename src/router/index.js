import Vue from 'vue'
import Router from 'vue-router'
import JSONView from 'vue-json-viewer'
import Login from '@/components/Login'
import AppIndex from '@/components/home/AppIndex'
import DocGenerate from '@/components/home/DocGenerate'
import Home from '@/components/home/Home'

Vue.use(Router)
Vue.use(JSONView)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      redirect: '/index',
      children: [
        {
          path: '/index',
          name: 'AppIndex',
          render: h => h(AppIndex),
          component: AppIndex,
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/docGenerate',
          name: 'DocGenerate',
          reder: h => h(DocGenerate),
          component: DocGenerate,
          meta: {
            requireAuth: true
          }
        }
      ]
    }
  ]
})
