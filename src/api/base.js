import request from '@/utils/request'

  //获取市接口
  export function getProvinces() {
    return request({
      url: '/personnel/option/getProvinces',
      method: 'POST'
    })
  }
  // 获取省份接口
export function getCities(id) {
    return request({
      url: '/personnel/option/getCitys',
      method: 'POST',
      data: {
        provinceId: id
      }
    })
  }

  export function search(payload) {
    return request({
      url: '/personnel/position/search',
      method: 'POST',
      data: payload
    })
  }

  export function getOptions() {
    return request({
      url: '/personnel/option/initOption',
      method: 'POST'
    })
  }