<template>
  <div class='option-bar'>
    <div v-for='(item, key) in searchOptions' :key='key' class='options-wrapper'>
      <div class='name'>{{ key === 'workYears' ? '工作经验' : key === 'education' ? '学历要求' : key === 'monthSalarys' ? '月薪范围' : key === 'nature' ? '工作性质' : key === 'type' ? '职位类别' : '' }}:</div>
      <div v-for='option in item' class='option'>
        <span @click='handleSelect( option.value, key)' :class='{active: trans[key] === option.value}'>{{ option.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchOptions: {
        workYears: '',
        education: '',
        monthSalarys: '',
        nature: '',
        type: ''
      },
      trans: {
        workYears: 0,
        education: 0,
        monthSalarys: 0,
        nature: 0,
        type: 0
      }
    }
  },
  methods:{
    // 提交选项
    handleSelect(value, key) {
      this.trans[key] = value
      let obj = {}
      Object.keys(this.trans).map(key => {
        if(this.trans[key] != 0) {
          obj[key] = this.trans[key]
        }
      })
      this.$store.commit('COMMIT_ITEM', obj)
    }
  },
  // 拉取数据并且赋值 不这样视图没办法和数据绑定
  beforeMount() {
    // 因为传过来的结果没带不限的选项 而在dom中需要出现
    if (Object.keys(this.$store.state.search.searchOptions).length > 0) {
      this.searchOptions = this.$store.state.search.searchOptions
    } else {
      this.$store.dispatch('GetOptions').then((res) => {
        this.searchOptions.workYears = res.workYears
        this.searchOptions.education = res.educations
        this.searchOptions.monthSalarys = res.monthSalarys
        this.searchOptions.nature = res.companyScales
        this.searchOptions.type = res.companyTypes
        Object.keys(this.searchOptions).map(item => {
          this.searchOptions[item].unshift({
            name: '不限',
            value: 0
          })
        })
        this.$store.commit('COMMIT_OPTIONS', this.searchOptions)
      })
    }
  }
}
</script>

<style lang='scss' scoped>
  .option-bar {
    padding: 20px;
    border: 1px solid #EAEAEA;
    background-color: #F9F9F9;
    .options-wrapper {
      margin-bottom: 20px;
      .name {
        margin-bottom: 10px;
        font-size: 16px;
        font-weight: 600;
        color: #4B4B4B;
      }
      .option {
        margin-bottom: 6px;
        font-size: 14px;
        color: #4B4B4B;
        >span {
          display: inline-block;
          padding: 5px;
          cursor: pointer;
          &.active {
            color: #fff;
            background-color: #00B35D;
          }
        }
      }
    }
  }
</style>
