import { login, logout, regist, getUserInfo, getCode, companyLogout, getImgCode, checkImgCode } from '@/api/user'
import { getToken, setToken, removeToken, setIdentity, removeIdentity } from '@/utils/auth'

const user = {
  state: {
    token: getToken(),
    name: '',
    avatar: '',
    mobile: '',
    id: '',
    identity: '',
    userInfo: {}
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
    },
    SET_IDENTITY: (state, identity) => {
      state.identity = identity
    },
    SET_USERINFO: (state, userInfo) => {
      state.userInfo = userInfo
    }
  },

  actions: {
    // 登录
    Login({ commit }, userInfo) {
      const username = userInfo.username.trim()
      return new Promise((resolve, reject) => {
        login(username, userInfo.password, userInfo.code, userInfo.uid).then(res => {
          setToken(res.token)
          commit('SET_TOKEN', res.token)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    Register({commit}, registInfo) {
      return new Promise((resolve, reject) => {
        regist(registInfo.mobile, registInfo.code, registInfo.name, registInfo.password ).then((res) => {
          setToken(res.token)
          commit('SET_TOKEN', res.token)
          resolve()
        }).catch(err => {
          reject(err)
        })
      })
    },

    GetUserInfo({commit}) {
      return new Promise((resolve, reject) => {
        getUserInfo().then((res) => {
          setIdentity(res.identity)
          commit('SET_IDENTITY', res.identity)
          commit('SET_NAME', res.info.name)
          commit('SET_USERINFO', res.info.userInfo)
          commit('SET_AVATAR', res.info.headImage)
          commit('SET_MOBILE', res.info.mobile)
          resolve()
        }).catch(error => {
          reject(error)
        })

      })
    },
    // 获取验证码
    GetCode({}, payload) {
      return new Promise((resolve, reject) => {
        getCode(payload.mobile, payload.type).then(resolve()).catch(error => {
          console.log(error)
          reject(error)
        })
      })
    },
    // 获取图形验证码
    GetImgCode({}, uid) {
      return new Promise((resolve, reject) => {
        getImgCode('2', uid).then(res => {
          resolve(res)
        }).catch(err => {
          console.log(err)
          reject(err)
        })
      })
    },

    // 登出
    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        if(state.identity === 1) {
          logout(state.token).then(() => {
            commit('SET_TOKEN', '')
            commit('SET_IDENTITY', '')
            removeToken()
            removeIdentity()
            resolve()
          }).catch(error => {
            reject(error)
          })
        } else if (state.identity === 2) {
          companyLogout(state.token).then(() => {
            commit('SET_TOKEN', '')
            commit('SET_IDENTITY', '')
            removeToken()
            removeIdentity()
            resolve()
          }).catch(error => {
            reject(error)
          })
        }

      })
    },

    // 前端 登出
    FedLogOut({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        commit('SET_IDENTITY', '')
        removeIdentity()
        removeToken()
        resolve()
      })
    }
  }
}


export default user
