import router from './router'
// import store from './store'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css'// Progress 进度条样式
import { getToken } from '@/utils/auth' // 拿到token
NProgress.configure({ showSpinner: false })


router.beforeEach((to, from, next) => {
  NProgress.start()
  if(getToken()) {
    if (to.path === '/login' || to.path === '/register') { // 如果有tokent跳login和register 则跳转首页
      next({path: '/'})
      NProgress.done()
    } else {

    }
  } else {

  }

  next()
})

router.afterEach((to, from) => {
  console.log(to)
  let title = '来融金服'
  to.matched.map(route => {
    titile += route.matched.title || ''
  })
  document.title = title
  NProgress.done()
})
