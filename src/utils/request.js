import axios from 'axios'
import qs from 'qs'
import { Message, Notification } from 'element-ui'
import store from '../store'
import { getToken, removeToken, removeIdentity } from '@/utils/auth'
import router from '../router'



// 创建axios实例
// axios.defaults.withCredentials = true
const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  timeout: 5000, // 请求超时时间
  withCredentials: true,
  crossDomain: true
})

// request拦截器
service.interceptors.request.use(
  config => {
    console.log(config)
    if(config.method === 'post') {
      config.data = qs.stringify(config.data) // 处理post请求参数
    }

    if (store.getters.token) {
      config.headers['token'] = getToken() // 让每个请求携带自定义token
    }
    return config
  },
  error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
  }
)

// respone拦截器
service.interceptors.response.use(
  response => {

    const res = response.data
    /**
     * code为200 成功
     */
    console.log(res)
    if (res.code === 200) {
      return res
    }
    if (res.code === 500) {
      Notification({
        title: '警告',
        message: res.msg,
        type: 'warning'
      })
      return Promise.reject(res.msg)
    }
    if (res.code === 404) {
      router.replace('/404')
      return
    }
    /**
     * code为11 登录超时
     */
    if (res.code === -11) { // 超时则把store和cookie中的id和token删除 并跳转登录页面(后期可增加一个错误处理页面 作为跳的中转)
      router.replace('/login')
      removeToken()
      removeIdentity()
      store.user.commit('SET_TOKEN', '')
      store.user.commit('SET_IDENTITY', '')
      location.reload()
      return
    }
    /**
     * code为-1 各种意义上的错误 包括密码错误等
     */
    if (res.code === -1) {
      Notification({
        title: '警告',
        message: res.msg,
        type: 'warning'
      })
      return Promise.reject(res.msg)
    }

    /**
     * code -30 跳转开通招聘服务第一步
     * code-31 跳到开通招聘服务第二步
     * code -32 跳到验证邮箱页面
     * code -33 填写公司基本信息
     * code -34 填写公司标签
     * code -35 填写公司介绍
     * code -36 公司信息待审核
     * code -37 审核失败
     */
    if (res.code === -30) {
      router.push({
        path: '/account/open',
        query: {
          page: 0
        }
      })
      return
    }
    if (res.code === -31) {
      router.push({
        path: '/account/open',
        query: {
          page: 1
        }
      })
      return
    }

    if (res.code === -32) {
      router.push({
        path: '/account/open',
        query: {
          page: 2
        }
      })
      return
    }

    if (res.code === -33) {
      router.push({
        path: '/recruitService',
        query: {
          page: 0
        }
      })
      return
    }

    if (res.code === -34) {
      router.push({
        path: '/recruitService',
        query: {
          page: 1
        }
      })
      return
    }
    if (res.code === -35) {
      router.push({
        path: '/recruitService',
        query: {
          page: 2
        }
      })
      return
    }

    if (res.code === -36) {
      router.push({
        path: '/recruitService',
        query: {
          page: 3
        }
      })
      return
    }

    if (res.code === -37) {
      router.push({
        path: '/recruitService',
        query: {
          page: 1
        }
      })
      return
    }

    /**
     * 转buffer为图片
     */
    if (response.headers['content-type'] === 'image/jpeg') {
      return 'data:image/png;base64,' + btoa(
        new Uint8Array(response.data).reduce((data, byte) => data + String.fromCharCode(byte), '')
      )
    }

  },
  // 还需一个错误页面
  error => {
    // router.replace('/404')

    return Promise.reject(error)
  }
)

export default service
