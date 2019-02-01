import { getResumeData, updateBaseInfo, updateExpectWork, updateExp, updateEducation, selfEvaluate } from '@/api/resume'
const resume = {
  state: {
    userInfo: undefined,
    active: '',
    educationActive: ''
  },
  mutations: {
    SET_ACTIVE(state, index) {
      state.active = index
    },
    SET_EDUCATION_ACTIVE(state, index) {
      state.educationActive = index
    },
    SET_BASE_INFO(state, info) {
      state.userInfo = info
    }
  },
  actions: {
    GetMyResume({commit}) {
      return new Promise((resolve, reject) => {
        getResumeData().then(res => {
          console.log(res.info)
          commit('SET_BASE_INFO', res.info)
          resolve()
        }).catch(err => {
          console.log(err)
          reject()
        })
      })
    },
    UpdateExp({}, info) {
      updateExp(info).then(res => {
        console.log(res.info)
        resolve()
      }).catch(err => {
        console.log(err)
        reject()
      })
    },
    UpdateBaseInfo({commit}, info) {
      return new Promise((resolve, reject) => {
        updateBaseInfo(info).then(res => {
          commit('SET_BASE_INFO', res.info)
          resolve()
        }).catch(err => {
          console.log(err)
          reject()
        })
      })
    },
    UpdateExpectWork({}, expect) {
      return new Promise((resolve, reject) => {
        updateExpectWork(expect).then(res => {
          resolve(res)
        }).catch(err => {
          reject(err)
        })
      })
    },
    ChangeActive({commit}, index) {
      commit('SET_ACTIVE', index)
    },
    ChangeEducationActive({commit}, index) {
      commit('SET_EDUCATION_ACTIVE', index)
    },
    UpdateEducation({}, educations) {
      return new Promise((resolve, reject) => {
        updateEducation(educations).then(() => {
          resolve()
        }).catch(err => {
          reject(err)
        })
      })
    },
    SelfEvaluate({}, infos) {
      return new Promise((resolve, reject) => {
        selfEvaluate(infos).then(() => {
          resolve()
        }).catch(err => {
          reject(err)
        })
      })
    }
  }
}

export default resume