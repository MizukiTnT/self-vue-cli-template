import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import getters from './getters'
import  resume from './modules/resume'
import recruit from './modules/recruit'
import base from './modules/base'
import search from './modules/search'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user,
    resume,
    recruit,
    base,
    search
  },
  getters
})

export default store
