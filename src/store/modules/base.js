import { getProvinces, getCities, search, getOptions } from '@/api/base'

const base = {
  state: {
    province: []
  },
  mutations: {
    SET_PROVINCE: (state, province) => {
      state.province = province
    }
  },
  actions: {
    // 拉取省份
    GetProvinces({commit}) {
      return new Promise((resolve, reject) => {
        getProvinces().then(res => {
          commit('SET_PROVINCE', res.info)
          resolve(res.info)
        }).catch(err => {
          console.log(err)
          reject(err)
        })
      })
    },
    // 拉取城市
    GetCities({}, provinceId) {
      return new Promise((resolve, reject) => {
        getCities(provinceId).then((res) => {
          resolve(res)
        }).catch((err) => {
          console.log(err)
          reject(err)
        })
      })
    },
    // 职位搜索
    Search({}, payload) {
      return new Promise((resolve, reject) => {
        search(payload).then((res) => {
          console.log(res)
          resolve(res)
        }).catch((err) => {
          console.log(err)
          reject(err)
        })
      })
    },
    // 获取搜索左侧检索条件
    GetOptions() {
      return new Promise((resolve, reject) => {
        getOptions().then((res) => {
          resolve(res.info)
        }).catch((err) => {
          console.log(err)
          reject(err)
        })
      })
    }
  }
}

export default base