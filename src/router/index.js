import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)


export const asyncRouteMap = {
  individual: [
    {
      path: '/resume',
      name: 'resume',
      component: Layout,
      children: [
        {
          path: '',
          component: () => import('@/views/Resume'),
          meta: {
            keepAlive: true
          }
        }
      ],
      meta: {
        title: '我的简历'
      }
    },
    {
      path: '/deliver',
      name: 'deliver',
      component: Layout,
      children: [
        {
          path: '',
          component: () => import('@/views/DeliverCondition')
        }
      ],
      meta: {
        title: '投递简历'
      }
    },
    {
      path: '/preview',
      name: 'preview',
      component: Layout,
      children: [
        {
          path: '',
          component: () => import('@/views/PreviewResume')
        }
      ],
      meta: {
        title: '简历预览'
      }
    },
    {
      path: '/collectJob',
      name: 'collectJob',
      component: Layout,
      children: [
        {
          path: '',
          component: () => import('@/views/DeliverCondition/collect')
        }
      ],
      meta: {
        title: '收藏职位'
      }
    },
    {
      path: '/dislike',
      name: 'dislike',
      component: Layout,
      children: [
        {
          path: '',
          component: () => import('@/views/DeliverCondition/dislike')
        }
      ],
      meta: {
        title: '屏蔽职位'
      }
    }
  ],
  company: [

    {
      path: '/searchResume',
      name: 'searchResume',
      component: Layout,
      children: [
        {
          path: '',
          component: () => import('@/views/search/resume')
        }
      ],
      meta: {
        title: '搜索简历'
      }
    },
    {
      path: '/manage',
      name: 'manage',
      redirect: '/manage/jobManage',
      component: Layout,
      children: [
        {
          path: 'jobManage',
          redirect: '/manage/jobManage/onlineJob',
          component: () => import('@/views/ManageLayout'),
          meta: {
            title: '职位管理'
          },
          children: [
            {
              path: 'onlineJob',
              component: () => import('@/views/ManageLayout/pages/jobManage/online'),
              meta: {
                title: '有效职位'
              },
            },
            {
              path: 'offlineJob',
              component: () => import('@/views/ManageLayout/pages/jobManage/offline'),
              meta: {
                title: '已下线职位'
              },
            },
            {
              path: 'newJob',
              component: () => import('@/views/ManageLayout/pages/jobManage/newJob'),
              meta: {
                title: '发布新职位'
              },
            }
          ]
        },
        {
          path: 'resumeManage',
          redirect: '/manage/resumeManage/waitToDeal',
          component: () => import('@/views/ManageLayout'),
          meta: {
            title: '简历管理'
          },
          children: [
            {
              path: 'waitToDeal',
              component: () => import('@/views/ManageLayout/pages/resumeManage/waitToDeal'),
              meta: {
                title: '待处理'
              }
            },
            {
              path: 'reported',
              component: () => import('@/views/ManageLayout/pages/resumeManage/reported'),
              meta: {
                title: '已通知面试'
              }
            },
            {
              path: 'unsatisfide',
              component: () => import('@/views/ManageLayout/pages/resumeManage/unsatisfide'),
              meta: {
                title: '不合适'
              }
            }
          ]
        },
        {
          path: 'accountManage',
          redirect: '/manage/accountManage/setInfo',
          component: () => import('@/views/ManageLayout'),
          meta: {
            title: '账号设置'
          },
          children: [
            {
              path: 'setInfo',
              component: () => import('@/views/ManageLayout/pages/accountManage/setInfo'),
              meta: {
                title: '个人信息'
              }
            },
            {
              path: 'setEmail',
              component: () => import('@/views/ManageLayout/pages/accountManage/setEmail'),
              meta: {
                title: '接收简历邮箱'
              }
            }
          ]
        }
      ]
    }
  ]
}


/* Layout */
import Layout from '../views/layout/Layout'

export const constantRouterMap = [
  {
    path: '/',
    component: Layout,
    redirect: '/index'
  },
  {
    path: '/index',
    name: 'home',
    component: Layout,
    meta: {
      title: '首页'
    },
    children: [
      {
        path: '',
        component: () => import('@/views/home')
      }
    ]
  },

  {
    path: '/company',
    name: 'company',
    component: Layout,
    children: [
      {
        path: '',
        component: () => import('@/views/companyDetail'),
        meta: {
          title: '公司详情'
        }
      }
    ]
  },

  {
    path: '/search',
    name: 'search',
    component: Layout,
    children: [
      {
        path: '',
        component: () => import('@/views/Search'),
        meta: {
          title: '搜索职位'
        }
      }
    ]
  },

  {
    path: '/jobDetail',
    name: 'jobDetail',
    component: Layout,
    children: [
      {
        path: '',
        component: () => import('@/views/JobDetail'),
        meta: {
          title: '职位详情'
        }
      }
    ]
  },

  {
    path: '/login',
    name: 'login',
    component: Layout,
    children: [
      {
        path: '',
        component: () => import('@/views/Login'),
        meta: {
          title: '登录'
        }
      }
    ]
  },

  {
    path: '/register',
    name: 'register',
    component: Layout,
    children: [
      {
        path: '',
        component: () => import('@/views/Register'),
        meta: {
          title: '注册'
        }
      }
    ]
  },
  { path: '/404', component: () => import('@/views/404') },
  { path: '*', redirect: '/404' }
]




export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
