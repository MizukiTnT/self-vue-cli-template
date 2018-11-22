const resume = {
  state: {
    active: '',
    educationActive: ''
  },
  mutations: {
    SET_ACTIVE(state, index) {
      state.active = index
    },
    SET_EDUCATION_ACTIVE(state, index) {
      state.educationActive = index
    }
  },
  actions: {
    ChangeActive({commit}, index) {
      commit('SET_ACTIVE', index)
    },
    ChangeEducationActive({commit}, index) {
      commit('SET_EDUCATION_ACTIVE', index)
    }
  }
}

export default resume