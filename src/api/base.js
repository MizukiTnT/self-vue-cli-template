import request from '@/utils/request'

const baseApi = {
  // 获取验证码
  getCode(type) {
    return request({
      url: '/signCode/check',
      method: 'GET',
      data: { type }
    })
  },
  // 检查验证码
  checkCode(type, code) {
    return request({
      url: '/signCode/check',
      method: 'POST',
      data: { type, code }
    })
  },

  // 获取图片地址
  getImageUrl(file) {
    return request({
      url: '/file/uploadImage',
      method: 'POST',
      data: { file }
    })
  },

  // 获取图片地址
  getImageUrl(mobile, type, imageCode) {
    return request({
      url: '/sms/sendCode',
      method: 'POST',
      data: { mobile, type, imageCode }
    })
  },
  getPersonHome() {
    return request({
      url: '/personnel/home/home',
      method: 'POST'
    })
  }
}

export default baseApi