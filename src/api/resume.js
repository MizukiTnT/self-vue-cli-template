import request from '@/utils/request'

  // 更新个人基本信息
export function updateBaseInfo(baseInfo) {
    return request({
      url: '/personnel/resume/addOrUpdate',
      method: 'POST',
      data: baseInfo
    })
  }
  // 更行教育信息
export function  updateEducation(education) {
    return request({
      url: '/personnel/resume/addOrUpdateEducation',
      method: 'POST',
      data: education
    })
  }

  // 更新期望工作
export function updateExpectWork(expectWork) {
    return request({
      url: '/personnel/resume/addOrUpdateExpect',
      method: 'POST',
      data: expectWork
    })
  }
  // 更新工作经验
export function updateExp(exp) {
    return request({
      url: '/personnel/resume/addOrUpdateExper',
      method: 'POST',
      data: exp
    })
  }

  // 获取自己简历详情
export function getResumeData(token) {
    return request({
      url: '/personnel/resume/myResume',
      method: 'POST'
    })
  }

// 根据id拉取简历详情
export function getResumeById(id) {
  return request({
    url: '/personnel/resume/queryDetail',
    method: 'POST',
    data: { id }
  })
}

// 设定简历是否可见
export function changeResumeState(status) {
  return request({
    url: '/personnel/resume/updateStatus',
    method: 'POST',
    data: { status }
  })
}

// 搜索简历
export function searchResume (querys) {
  return request({
    url: '/personnel/resume/search',
    method: 'POST',
    data: querys
  })
 }

 // 自我评价
export function selfEvaluate(infos) {
  return request({
    url: '/personnel/resume/addOrUpdateSelf',
    method: 'POST',
    data: infos
  })
 }

