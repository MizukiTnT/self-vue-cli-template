import request from '@/utils/request'

export function login(name, password, code) {
  return request({
    url: '/user/login',
    method: 'POST',
    data: { name, password, code }
  })
}

export function getInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    data: { token }
  })
}

export function regist(mobile, code, name, password) {
  return request({
    url: '/user/register',
    method: 'POST',
    data: { mobile, code, name, password }
  })
}

export function logout(token) {
  return request({
    url: '/user/exitLogin',
    method: 'POST',
    data: { token }
  })
}

export function getCode(mobile, type) {
  console.log(mobile, type)
  return request({
    url: '/sms/sendCode',
    method: 'POST',
    data: { mobile, type }
  })
 }

export function getUserInfo() {
  return request({
    url: '/user/getInfo',
    method: 'POST'
  })
 }

export function updateUserInfo(token, headImage, nickname) {
  return request({
    url: '/user/updateInfo',
    method: 'POST',
    data: { token, headImage, nickname }
  })
 }