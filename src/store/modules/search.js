const search = {
  state: {
    searchItem: {},
    searchOptions: {}

  },
  mutations: {
    // 因为不限的选项是前端自己加上的 所以在提交的时候就过滤了 如果用assign的话 第一次提交为非零 第二次要是已经过滤了 那就无法清除上一次的选项 所以用直接替换
    COMMIT_ITEM: (state, items) => {
      state.searchItem = items
    },
    COMMIT_OPTIONS: (state, options) => {
      state.searchOptions = options
    }
  }
}

export default search