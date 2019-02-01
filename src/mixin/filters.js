/* ----------  过滤器mixin ---------- */

// 工作经验过滤器
export const expFilter = {
  filters: {
    expFilter(exp) {
      return exp === 1 ? '应届毕业生' :
      exp === 2 ? '1-2年' :
      exp === 3 ? '3-4年' :
      exp === 4 ? '5-9年' :
      exp === 5 ? '10年以上' :
      ''
    }
  }
}

// 企业类型过滤器

export const companyType = {
  filters: {
    companyType(type) {
      return type === 1 ? '创业型' :
      type === 2 ? '发展型' :
      type === 3 ? '成熟型' : ''
    }
  }
}


// 企业规模过滤器

export const companyScale = {
  filters: {
    companyScale(exp) {
      return exp === 1 ? '0-49人' :
      exp === 2 ? '50-99人' :
      exp === 3 ? '100人以上' :
      ''
    }
  }
}

// 学历过滤器
export const educateFilter = {
  filters: {
    educateFilter(educate) {
      return educate === 1 ? '大专' :
      educate === 2 ? '本科' :
      educate === 3 ? '硕士' :
      educate === 4 ? '博士' :
      educate === 5 ? '高中/高中以下' :
      ''
    }
  }
}


// 工作状态过滤器
export const conditionFilter = {
  filters: {
    conditionFilter(state) {
      return state === 1 ? '目前暂无跳槽打算' :
      state === 2 ? '已离职' :
      state === 3 ? '在职 可立即上岗' :
      state === 4 ? '在职 会考虑更好的工作' :
      state === 5 ? '应届毕业生' :
      ''
    }
  }
}


// 性别过滤器
export const sexFilter = {
  filters: {
    sexFilter(sex) {
      return sex === 1 ? '男' :
      sex === 2 ? '女' :
      ''
    }
  }
}

// 工作过滤器
export const jobFilter = {
  filters: {
    jobFilter(type) {
      return type === 1 ? '研发生产' :
      type === 2 ? '市场服务' :
      type === 3 ? '销售管理' :
      type === 4 ? '人事行政' :
      type === 5 ? '其它' :
      ''
    }
  }
}

// 薪水过滤器
export const salaryFilter = {
  filters: {
    salaryFilter(type) {
      return type === 1 ? '面议' :
      type === 2 ? '2k以下' :
      type === 3 ? '2-5k' :
      type === 4 ? '5-10k' :
      type === 5 ? '10k-15k' :
      type === 6 ? '15k-25k' :
      type === 7 ? '25k-50k' :
      type === 8 ? '50k以上' :
      ''
    }
  }
}

// 工作性质过滤器
export const typeFilter = {
  filters: {
    typeFilter(type) {
      return type === 1 ? '全职' :
      type === 2 ? '兼职' :
      type === 3 ? '实习' : ''
    }
  }
}



/**
 * 公用的过滤器
 */

 export const timeParser = {
   filters: {
     timeParser(time) {
      let count = new Date(time).getTime()
      time = new Date(count)
      let now = new Date().getTime()

      let y = time.getFullYear(),
      m = ("0" + (time.getMonth() + 1)).slice(-2),
      d = ("0" + time.getDate()).slice(-2),
      h = time.getHours(),
      min = time.getMinutes()
      if ((now.getFullYear === time.getFullYear) && (now.getDate() === time.getDate()) && (now.getHours() === time.getHours()) ) {
        return h + ':' + min
      } else {
        return y + "-" + m + "-" + d + " " + h + ':' + min
      }
   }
 }
}