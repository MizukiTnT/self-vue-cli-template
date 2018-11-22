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
    redirect: '/index',
    children: [
      {
        path: 'index',
        name: 'home',
        component: () => import('@/views/home')
      },
      {
        path: 'company',
        name: 'company',
        component: () => import('@/views/companyDetail')
      },
      {
        path: 'search',
        name: 'search',
        component: () => import('@/views/Search')
      },
      {
        path: 'jobDetail',
        name: 'jobDetail',
        component: () => import('@/views/JobDetail')
      },
      {
        path: 'resume',
        name: 'resume',
        component: () => import('@/views/Resume'),
        meta: {
          keepAlive: true
        }
      }
    ]
  },
  { path: '*', redirect: '/404' }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
