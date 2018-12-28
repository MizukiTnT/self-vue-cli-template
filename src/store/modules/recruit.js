const recruit = {
  state: {
    labels: []
  },
  mutations: {
    // 除去label
    DELETE_LABEL: (state, index) => {
      state.labels.splice(index, 1)
    },
    // 增加label
    ADD_LABEL: (state, label) => {
      state.labels.push(label)
    }
  }
}

export default recruit