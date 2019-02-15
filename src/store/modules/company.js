import { goCompany, companyRegisterOne, companyRegisterTwo, upadateMail, getConditionCode, registerCompanyOne, registerCompanyTwo, registerCompanyThree } from '@/api/company'
import router from '@/router'
const company = {
  state: {
    companyInfo: {

    }
  },
  mutations: {

  },
  actions: {
    // 验证是否有开通企业账号
    GoCompany() {
      return new Promise((resolve, reject) => {
        goCompany().then((res) => {
          resolve(res)
        }, () => {
          reject()
        })
      })
    },
    // 企业注册第一步
    CompanyRegisterOne({}, info) {
      return new Promise((resolve, reject) => {
        companyRegisterOne(info).then(() => {
          resolve()
        }, () => {
          reject()
        })
      })
    },
    // 企业注册第二步
    CompanyRegisterTwo({}, info) {
      return new Promise((resolve, reject) => {
        companyRegisterTwo(info).then((res) => {
          resolve(res)
        }, (err) => {
          reject(err)
        })
      })
    },
    // 更新邮箱
    UpadateMail({}, mail) {
      return new Promise((resolve, reject) => {
        upadateMail(mail).then(() => {
          resolve()
        }, () => {
          reject()
        })
      })
    },
    // 获取状态码
    GetConditionCode() {
      return new Promise((resolve, reject) => {
        getConditionCode().then((res) => { // 具体状态码要跳到哪个页面可以去看request文件
          switch(res.info) {
            case -30:
              router.push({
                path: '/account/open',
                query: {
                  page: 0
                }
              })
            break
            case -31:
              router.push({
                path: '/account/open',
                query: {
                  page: 1
                }
              })
            break
            case -32:
              router.push({
                path: '/account/open',
                query: {
                  page: 2
                }
              })
            break
            case -33:
              router.push({
                path: '/recruitService',
                query: {
                  page: 0
                }
              })
            break
            case -34:
              router.push({
                path: '/recruitService',
                query: {
                  page: 1
                }
              })
            break
            case -35:
              router.push({
                path: '/recruitService',
                query: {
                  page: 2
                }
              })
            break
            case -36:
              router.push({
                path: '/recruitService',
                query: {
                  page: 3
                }
              })
            break
          }
          resolve()
        }, () => {
          reject()
        })
      })
    },
    RegisterCompanyOne({}, info) {
      return new Promise((resolve, reject) => {
        registerCompanyOne(info).then(() => {
          resolve()
        }, () => {
          reject()
        })
      })
    },
    RegisterCompanyTwo({}, labels) {
      return new Promise((resolve, reject) => {
        registerCompanyTwo(labels).then(() => {
          resolve()
        }, () => {
          reject()
        })
      })
    },
    RegisterCompanyThree({}, info) {
      return new Promise((resolve, reject) => {
        registerCompanyThree(info).then(() => {
          resolve()
        }, () => {
          reject()
        })
      })
    }
  }
}

export default company