import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

export const constantRouterMap = [
  { path: '/404', component: () => import('@/views/404') },
  {
    path: '/',
    component: Layout,
    name: 'index',
    children: [{
      path: 'dashboard',
      component: Layout
    }]
  },
  { path: '*', redirect: '/404' }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
