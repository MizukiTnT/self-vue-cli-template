import router from './router'
import store from './store'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css'// Progress 进度条样式
import { getToken } from '@/utils/auth' // 拿到token
NProgress.configure({ showSpinner: false })
import { Message } from 'element-ui'
import { asyncRouteMap } from './router' // 拿到动态添加表

  let whiteList = [ '/index', '/company', '/search', '/jobDetail', '/login', '/register', '/preview', '/404' ]
  router.beforeEach( (to, from, next) => {
    NProgress.start()
    if(getToken()) { // 有token
      if (to.path === '/login' || to.path === '/register') { // 如果有tokent跳login和register 则跳转首页
        next({path: '/'})
        NProgress.done()

      } else {
        if (store.getters.identity) { // 判断当前操作是否连贯 因为identity存在store中 确定拉取用户信息 所以直接跳转
          next()
        } else { // 如若是保持登录状态后刷新 则重新拉取用户信息 根据identity增加用户表
          store.dispatch('GetUserInfo').then(() => {
            addRoutes()
            next({ ...to, replace: true }) // 注 这里是确保addRoutes完成 因为之前测试刷新页面的时候会出现跳转404 动态添加404之后又会出现空页面的情况 所以才这样做
          }).catch(err => {
            store.dispatch('LogOut').then(() => {
              Message.error('身份验证超时, 请重新登录')
              next({ path: '/login' })
            })
          })
        }
      }
    } else {
      // 没有token的话 检查白名单 没在则跳login

      if(checkWhiteList(to.path)) {
        next()
      } else {
        next({ path: '/login', replace: true })
      }
      NProgress.done()
    }
  })

// 如果去的url里需要带params,则用白名单去找url 并且对于例如/preivew /preview/这种本应带params而不带的url则在路由表里进行了处理
function checkWhiteList(to) {
  let res = false
  whiteList.map(url => {

    if(url === '/jobDetail' || url === '/search' || url === '/company' || url === '/preview') {
      if(to.indexOf(url) !== -1) {
        res = true
      }
    } else {
      if(url.indexOf(to) !== -1) {
        res = true
      }
    }
  })
  return res
}

function addRoutes () { // 判断增加哪张表 后期可能还有更多身份
  let routes = []
  if(store.getters.identity === 1) {
    routes = asyncRouteMap.individual
  } else if (store.getters.identity === 2) {
    routes = asyncRouteMap.company
  }

  routes = [...routes, ...asyncRouteMap.errPage] // 在结尾加上引导 如果不是router里有的页面 全部引到错误页面
  console.log(routes)
  router.addRoutes(routes)
}

router.afterEach((to, from) => {
  let title = '来融农资平台'
  to.matched.map(route => {
    title += route.meta.title ? '-' + route.meta.title : ''
  })
  document.title = title
  NProgress.done()
})
