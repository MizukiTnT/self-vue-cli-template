import Mock from 'mockjs'
import loginAPI from './login'

/*
  审核信息接
*/

Mock.mock('/user/login', 'post', loginAPI.login) // 登录接口
Mock.mock('/user/info', 'get', loginAPI.userInfo) // 获取用户信息
Mock.mock('/user/logout', 'post', loginAPI.logout) // 前端登出（清除缓存）

export default Mock
