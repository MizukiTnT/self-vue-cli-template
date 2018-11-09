<template>
  <div class="details">
    <cheader :companyInfo="companyInfo"></cheader>
    <div class="container">
      <page-block title="公司信息">
        <div v-html="companyInfo.intro"></div>
      </page-block>
      <page-block title="招聘职位">
        <job-box :jobs="jobs"></job-box>
      </page-block>
    </div>
  </div>
</template>

<script>
import { cheader, PageBlock, JobBox } from './components'
export default {
  data() {
    return {
      input: "",
      companyInfo: {
        img: '',
        name: '江西多发发时发生的发生大',
        location: '南昌',
        size: '20-90人',
        type: '小微企业',
        index: "http://www.baidu.com",
        intro: '今天是个好日子,吉祥的事儿都来寻',
        require: 4,
        id: ''
      },
      recruit: [
        {
          job: '产品',
          salary: '6k-15k',
          location: '萍乡',
          exp: '3-5年',
          background: '本科',
          label: ['餐补', '五险一金', '年假', '上市公司']
        },
        {
          job: '产品',
          salary: '6k-15k',
          location: '萍乡',
          exp: '3-5年',
          background: '本科',
          label: ['餐补', '五险一金', '年假', '上市公司']
        },
        {
          job: '产品',
          salary: '6k-15k',
          location: '萍乡',
          exp: '3-5年',
          background: '本科',
          label: ['餐补', '五险一金', '年假', '上市公司']
        },
        {
          job: '产品',
          salary: '6k-15k',
          location: '萍乡',
          exp: '3-5年',
          background: '本科',
          label: ['餐补', '五险一金', '年假', '上市公司']
        }
      ],
      jobs: [
        {
          name: '产品',
          location: '郑州',
          exp: '3-4年',
          scholar: '本科',
          salary: '10-15k',
          welfare: [
            '餐补',
            '带薪年假',
            '五险一金',
            '上市公司',
            '节假福利'
          ],
          time: '最新'
        },
        {
          name: '产品',
          location: '郑州',
          exp: '3-4年',
          salary: '10-15k',
          scholar: '本科',
          welfare: [
            '餐补',
            '带薪年假',
            '五险一金',
            '上市公司',
            '节假福利'
          ],
          size: '90-100人',
          type: '民营',
          time: '最新'
        },
        {
          name: '产品',
          location: '郑州',
          exp: '3-4年',
          salary: '10-15k',
          scholar: '本科',
          welfare: [
            '餐补',
            '带薪年假',
            '五险一金',
            '上市公司',
            '节假福利'
          ],
          time: '最新'
        }
      ]
    }
  },
  components: {
    cheader,
    PageBlock,
    JobBox
  },
  watch: {
    // input(v) {
    //   this.input = v.replace(/[\n\r]/g,'<br>')
    // }
  },
  mounted() {

  }
}
</script>

<style lang="scss" scoped>
  .details {
    .container {
      width: 1100px;
      margin: 0 auto;
      padding: 0 20px;
    }
  }
</style>
