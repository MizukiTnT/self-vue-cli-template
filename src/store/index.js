import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import getters from './getters'
import  resume from './modules/resume'
import recruit from './modules/recruit'
import base from './modules/base'
import search from './modules/search'
import company from './modules/company'


Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user,
    resume,
    recruit,
    base,
    search,
    company
  },
  getters
})

export default store
