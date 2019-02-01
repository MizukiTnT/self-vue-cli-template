import Vue from 'vue'
import store from '../store'
import Router from 'vue-router'
Vue.use(Router)
import NProgress from 'nprogress'


// 注: 部分公用页面 比如 简历预览和职位详情等页面 需要页面自带id进入 但是如果直接redirect的话 不同身份直接进入如/preview或者/preview/这样的页面需要返回的主页是不同的 所以加了beforeEnter对identity进行判断

export const asyncRouteMap = {
  individual: [
    {
      path: '/resume',
      component: Layout,
      children: [
        {
          path: '',
          name: 'resume',
          component: () => import('@/views/Resume')
        }
      ],
      meta: {
        title: '我的简历'
      }
    },
    {
      path: '/deliver',

      component: Layout,
      children: [
        {
          path: '',
          name: 'deliver',
          component: () => import('@/views/DeliverCondition')
        }
      ],
      meta: {
        title: '投递简历'
      }
    },
    {
      path: '/collectJob',
      component: Layout,
      children: [
        {
          path: '',
          name: 'collectJob',
          component: () => import('@/views/DeliverCondition/collect')
        }
      ],
      meta: {
        title: '收藏职位'
      }
    },
    {
      path: '/dislike',
      component: Layout,
      children: [
        {
          path: '',
          name: 'dislike',
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
      component: Layout,
      children: [
        {
          path: '',
          name: 'searchResume',
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
              name: 'onlineJob',
              component: () => import('@/views/ManageLayout/pages/jobManage/online'),
              meta: {
                title: '有效职位'
              },
            },
            {
              path: 'offlineJob',
              name: 'offlineJob',
              component: () => import('@/views/ManageLayout/pages/jobManage/offline'),
              meta: {
                title: '已下线职位'
              },
            },
            {
              path: 'newJob',
              name: 'newJob',
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
              name: 'waitToDeal',
              component: () => import('@/views/ManageLayout/pages/resumeManage/waitToDeal'),
              meta: {
                title: '待处理'
              }
            },
            {
              path: 'reported',
              name: 'reported',
              component: () => import('@/views/ManageLayout/pages/resumeManage/reported'),
              meta: {
                title: '已通知面试'
              }
            },
            {
              path: 'unsatisfide',
              name: 'unsatisfide',
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
              name: 'setInfo',
              component: () => import('@/views/ManageLayout/pages/accountManage/setInfo'),
              meta: {
                title: '个人信息'
              }
            },
            {
              path: 'setEmail',
              name: 'setEmail',
              component: () => import('@/views/ManageLayout/pages/accountManage/setEmail'),
              meta: {
                title: '接收简历邮箱'
              }
            }
          ]
        }
      ]
    },
    {
      path: '/account',
      redirect: '/account/open',
      component: Layout,
      meta: {
        title: '账户'
      },
      children: [
        {
          path: 'open',
          name: 'openAccount',
          component: () => import('@/views/Account/open'),
          meta: {
            title: '开通账户'
          }
        }
      ]
    },
    {
      path: '/recruitService',
      component: Layout,
      children: [
        {
          path: '',
          name: 'recruitService',
          component: () => import('@/views/Recruit'),
          meta: {
            title: '开通招聘服务'
          }
        }
      ]
    },
    {
      path: '/companyIndex',
      component: Layout,
      children: [
        {
          path: '',
          name: 'companyIndex',
          component: () => import('@/views/CompanyHome'),
          meta: {
            title: '概况'
          }
        }
      ]
    },
    {
      path: '/companyCenter',
      component: Layout,
      children: [
        {
          path: '',
          name: 'companyCenter',
          component: () => import('@/views/CompanyCenter'),
          meta: {
            title: '公司主页'
          }
        }
      ]
    },
  ],
  errPage: [
    { path: '*', redirect: '/404' }
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
    component: Layout,
    meta: {
      title: '首页'
    },
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('@/views/home')
      }
    ]
  },

  {
    path: '/company',
    component: Layout,
    redirect: '/404',
    children: [
      {
        path: '',
        name: 'company',
        component: () => import('@/views/companyDetail'),
        meta: {
          title: '公司详情'
        }
      }
    ]
  },

  {
    path: '/search',
    component: Layout,
    children: [
      {
        path: '',
        name: 'search',
        component: () => import('@/views/Search'),
        meta: {
          title: '搜索职位'
        }
      }
    ]
  },

  {
    path: '/jobDetail',
    component: Layout,
    redirect: '/404',
    children: [
      {
        path: ':id',
        name: 'jobDetail',
        component: () => import('@/views/JobDetail'),
        props: true,
        meta: {
          title: '职位详情'
        }
      }
    ]
  },

  {
    path: '/login',
    component: Layout,
    children: [
      {
        path: '',
        name: 'login',
        component: () => import('@/views/Login'),
        meta: {
          title: '登录'
        }
      }
    ]
  },

  {
    path: '/register',

    component: Layout,
    children: [
      {
        path: '',
        name: 'register',
        component: () => import('@/views/Register'),
        meta: {
          title: '注册'
        }
      }
    ]
  },
  {
    path: '/preview',
    component: Layout,
    redirect: '/404',
    children: [
      {
        path: ':id',
        props: true,
        name: 'preview',
        component: () => import('@/views/PreviewResume')
      }
    ],
    meta: {
      title: '简历预览'
    }
  },
  { path: '/404', component: () => import('@/views/404') }
]


export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    ...constantRouterMap,
  ]
})
