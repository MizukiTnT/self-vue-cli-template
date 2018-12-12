import {baseRoute, asyncRouteMap} from '@/router'


const permission = {
  state: {
    routes: baseRoute
  },
  mutations: {
    SET_ROUTE: (state, route) => {
      state.children.concat(route)

    }
  },
  actions: {
    GenerateRoutes({commit}, role) {
      return new Promise((resolve, reject) => {
        let route = asyncRouteMap[role]
        if(route) {
          commit('SET_ROUTE', route)
          resolve()
        } else {
          reject()
        }
      })
    }
  }
}

export default permission