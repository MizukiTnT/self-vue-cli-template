import request from '@/utils/request'

// 去企业版
export function goCompany() {
  return request({
    url: '/personnel/company/goCompany',
    method: 'post'
  })
}
// 企业登出
export function logout() {
  return request({
    url: '/personnel/company/exitLogin',
    method: 'post'
  })
}
// 编辑企业信息
export function editCompany(info) {
  return request({
    url: '/personnel/company/edit',
    method: 'post',
    data: info
  })
}

// 拉取企业版首页信息
export function getHomeInfo() {
  return request({
    url: '/personnel/company/home',
    method: 'post'
  })
}

// 企业登录
export function companyLogin(info) {
  return request({
    url: '/personnel/company/login',
    method: 'post',
    data: info
  })
}

// 企业具体信息
export function companyDetail(info) {
  return request({
    url: '/personnel/company/queryDetail',
    method: 'post',
    data: info
  })
}

// 企业具体信息
export function companyDetail(info) {
  return request({
    url: '/personnel/company/queryDetail',
    method: 'post',
    data: info
  })
}

// 企业注册第一步
export function companyRegister(info) {
  return request({
    url: '/personnel/company/register',
    method: 'post',
    data: info
  })
}

// 企业注册第一步
export function companyRegisterOne(info) {
  return request({
    url: '/personnel/company/register',
    method: 'post',
    data: info
  })
}

// 企业注册第二步
export function companyRegisterTwo(info) {
  return request({
    url: '/personnel/company/updateLabels',
    method: 'post',
    data: info
  })
}

// 企业注册第三步
export function companyRegisterThree(info) {
  return request({
    url: '/personnel/company/updateIntroduce',
    method: 'post',
    data: info
  })
}

// 修改企业联系人
export function changeCommicate(info) {
  return request({
    url: '/personnel/company/updateContact',
    method: 'post',
    data: info
  })
}

// 修改企业邮箱
export function changeMail(info) {
  return request({
    url: '/personnel/company/updateMail',
    method: 'post',
    data: info
  })
}
