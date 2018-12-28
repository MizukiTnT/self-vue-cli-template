import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import getters from './getters'
import  resume from './modules/resume'
import recruit from './modules/recruit'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user,
    resume,
    recruit
  },
  getters
})

export default store
