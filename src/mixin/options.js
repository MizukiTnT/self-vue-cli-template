
/* ----------  选项框mixin ---------- */

// 工作经验选项框
export const expOptions = {
  data() {
    return {
      expOptions: [
        {
          label: '应届毕业生',
          value: '1'
        },
        {
          label: '1-2年',
          value: '2'
        },
        {
          label: '3-4年',
          value: '3'
        },
        {
          label: '5-9年',
          value: '4'
        },
                {
          label: '10年以上',
          value: '5'
        }
      ]
    }
  }
}

// 教育背景选项框
export const educationOptions = {
  data() {
    return {
      educationOptions: [
        {
          label: '高中/高中以下',
          value: '1'
        },
        {
          label: '大专',
          value: '2'
        },
        {
          label: '本科',
          value: '3'
        },
        {
          label: '硕士',
          value: '4'
        },
                {
          label: '博士',
          value: '5'
        }
      ]
    }
  }
}

// 预期工作选项
export const expectWork = {
  data() {
    return {
      expectWork: [
        {
          label: '研发生产',
          value: '1'
        },
        {
          label: '市场服务',
          value: '2'
        },
        {
          label: '销售管理',
          value: '3'
        },
        {
          label: '人事行政',
          value: '4'
        },
        {
          label: '其他',
          value: '5'
        }
      ]
    }
  }
}

// 预期薪水选项
export const salaryOptions = {
  data() {
    return {
      salaryOptions: [
        {
          value: '1',
          label: '面议'
        },
        {
          value: '2',
          label: '2k以下'
        },
        {
          value: '3',
          label: '2k-5k'
        },
        {
          value: '4',
          label: '5k-10k'
        },
        {
          value: '5',
          label: '10k-15k'
        },
        {
          value: '6',
          label: '15k-25k'
        },
        {
          value: '7',
          label: '25k-50k'
        },
        {
          value: '8',
          label: '50k以上'
        }
      ]
    }
  }
}

// 工作类型选项
export const radioOptions = {
  data() {
    return {
      radioOptions: [
        {
          label: '全职',
          value: '1'
        },
        {
          label: '兼职',
          value: '2'
        },
        {
          label: '实习',
          value: '3'
        }
      ]
    }
  }
}

// 预期行业选项
export const industryOptions = {
  data() {
    return {
      industryOptions: [
        {
          label: '互联网/电子商务',
          value: '1'
        },
        {
          label: '计算机软件',
          value: '2'
        },
        {
          label: '农业相关',
          value: '3'
        },
        {
          label: '销售',
          value: '4'
        }
      ]
    }
  }
}


/**
 * 企业选项
 */

 //企业规模选项
export const companySizeOptions = {
  data() {
    return {
      companySizeOptions: [
        {
          label: '0-49人',
          value: '1'
        },
        {
          label: '50-99人',
          value: '2'
        },
        {
          label: '100人以上',
          value: '3'
        }
      ]
    }
  }
}

 // 企业类型
export const companyTypeOptions = {
  data() {
    return {
      companyTypeOptions: [
        {
          label: '创业型公司',
          value: '1'
        },
        {
          label: '发展型公司',
          value: '2'
        },
        {
          label: '成熟型公司',
          value: '3'
        },
        {
          label: '上市公司',
          value: '4'
        }
      ]
    }
  }
}
