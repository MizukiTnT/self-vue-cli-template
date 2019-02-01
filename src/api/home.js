import request from '@/utils/request'
export function getHomeData() {
  return request({
    url: '/personnel/home/home',
    method: 'POST'
  })
}

export function test() {
  return request({
    url: '/test',
    method: 'POST'
  })
}