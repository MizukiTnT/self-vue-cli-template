import request from '@/utils/request'

const resumeApi = {
  // 更新个人基本信息
  updateBaseInfo(baseInfo) {
    return request({
      url: '/personnel/resume/addOrUpdate',
      method: 'POST',
      data: baseInfo
    })
  },
  // 更行教育信息
  updateEducation(education) {
    return request({
      url: '/personnel/resume/addOrUpdateEducation',
      method: 'POST',
      data: education
    })
  },

  // 更新期望共奏
  updateExpectWork(expectWork) {
    return request({
      url: '/personnel/resume/addOrUpdateExpect',
      method: 'POST',
      data: { expectWork }
    })
  },

  // 更新工作经验
  updateExp(exp) {
    return request({
      url: '/personnel/resume/addOrUpdateExper',
      method: 'POST',
      data: exp
    })
  },

  getResumeData(token) {
    return request({
      url: '/personnel/resume/myResume',
      method: 'POST',
      data: { token }
    })
  }
}

export default baseApi