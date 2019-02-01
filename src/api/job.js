import request from '@/utils/request'
export function addJob(info) {
  return request({
    url: '/personnel/position/add',
    method: 'POST',
    data: info
  })
}

export function deleteJob(id) {
  return request({
    url: '/personnel/position/delete',
    method: 'POST',
    data: { id }
  })
}

export function editJob(info) {
  return request({
    url: '/personnel/position/edit',
    method: 'POST',
    data: info
  })
}

export function queryJob(id) {
  return request({
    url: '/personnel/position/queryDetail',
    method: 'POST',
    data: { id }
  })
}
export function queryCompanyJob(info) {
  return request({
    url: '/personnel/position/queryListPage',
    method: 'POST',
    data: info
  })
}

export function queryCompanyJob(info) {
  return request({
    url: '/personnel/position/queryListPage',
    method: 'POST',
    data: info
  })
}

export function changeStatus(info) {
  return request({
    url: '/personnel/position/updateStatus',
    method: 'POST',
    data: info
  })
}