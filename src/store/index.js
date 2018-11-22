import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import getters from './getters'
import  resume from './modules/resume'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user,
    resume
  },
  getters
})

export default store
