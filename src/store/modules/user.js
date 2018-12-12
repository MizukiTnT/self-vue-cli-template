import { login, logout, regist, getUserInfo, getCode } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'

const user = {
  state: {
    token: getToken(),
    name: '',
    avatar: '',
    mobile: '',
    id: '',
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_MOBILE: (state, mobile) => {
      state.mobile = mobile
    },
    SET_ID: (state, id) => {
      state.id = id
    }
  },

  actions: {
    // 登录
    Login({ commit }, userInfo) {
      const username = userInfo.username.trim()
      return new Promise((resolve, reject) => {
        login(username, userInfo.password, userInfo.code).then(response => {
          const data = response.info
          setToken(data.token)
          commit('SET_TOKEN', data.token)
          resolve()
        }).catch(error => {
          console.log(error)
          reject(error)
        })
      })
    },

    Register({commit}, registInfo) {
      return new Promise((resolve, reject) => {
        regist(registInfo.mobile, registInfo.code, registInfo.name, registInfo.password ).then((res) => {
          console.log(res)
          setToken(res.token)
          commit('SET_TOKEN', res.token)
          resolve()
        }).catch(err => {
          reject(err)
        })
      })
    },

    // 获取用户信息
    // UpdateUserInfo({ commit, state }) {
    //   return new Promise((resolve, reject) => {
    //     getInfo(state.token).then(res => {
    //       commit('SET_NAME', res.name)
    //       commit('SET_AVATAR', res.avatar)
    //       console.log(res)
    //       resolve(response)
    //     }).catch(error => {
    //       reject(error)
    //     })
    //   })
    // },

    GetUserInfo({commit}) {
      return new Promise((resolve, reject) => {

        getUserInfo().then((res) => {
          console.log(res)
          commit('SET_NAME', res.info.name)
          commit('SET_AVATAR', res.info.headImage)
          commit('SET_MOBILE', res.info.mobile)
        }).catch(error => {
          reject(error)
        })

      })
    },

    GetCode({}, payload) {
      console.log(payload)
      return new Promise((resolve, reject) => {
        getCode(payload.mobile, payload.type).then(resolve()).catch(error => {
          console.log(error)
          reject(error)
        })
      })
    },

    // 登出
    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        logout(state.token).then(() => {
          commit('SET_TOKEN', '')
          removeToken()
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 前端 登出
    FedLogOut({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        removeToken()
        resolve()
      })
    }
  }
}

export default user
