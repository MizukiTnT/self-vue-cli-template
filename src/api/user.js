import request from '@/utils/request'

export function login(name, password, code, uId) {
  return request({
    url: '/user/login',
    method: 'POST',
    data: { name, password, code, uId }
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

export function getCode(mobile, type, uId) {
  console.log(mobile, type)
  return request({
    url: '/sms/sendCode',
    method: 'POST',
    data: { mobile, type, uId }
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

export function getImgCode(type, uId) {
  return request({
    url: '/signCode/get',
    method: 'GET',
    params: { type, uId },
    responseType: 'arraybuffer'
  })
}

 // 企业端
 export function companyLogout(token) {
  return request({
    url: '/personnel/company/exitLogin',
    method: 'POST',
    data: { token }
  })
 }

