<template>
  <div class="online-job">
    <job-box :jobList="jobList"/>
    <div class="pagination-warpper">
      <el-pagination
        background
        layout="prev, pager, next"
        @prev-click="decrementCount"
        @next-click="incrementCount"
        :pager-count="5"
        :total="total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import jobBox from './components/jobBox'
export default {
  components: { jobBox },
  data() {
    return {
      currentPage: 1,
      total: 100, // 这里需要是number类型
      pageCount: '5',
      jobList: [
        {
          name: '前端',
          monthSalary: '14-16k',
          address: '江西银行发送空地方即可',
          nature: '全职',
          education: '本科',
          workYear: '3-4年',
          count: '2',
          time: '23-233',
          status: '3'
        },
        {
          name: '前端',
          monthSalary: '14-16k',
          address: '江西银行发送空地方即可',
          nature: '全职',
          education: '本科',
          workYear: '3-4年',
          count: '2',
          time: '23-233',
          status: '3'
        },
        {
          name: '前端',
          monthSalary: '14-16k',
          address: '江西银行发送空地方即可',
          nature: '全职',
          education: '本科',
          workYear: '3-4年',
          count: '2',
          time: '23-233',
          status: '3'
        },
        {
          name: '前端',
          monthSalary: '14-16k',
          address: '江西银行发送空地方即可',
          nature: '全职',
          education: '本科',
          workYear: '3-4年',
          count: '2',
          time: '23-233',
          status: '3'
        },
        {
          name: '前端',
          monthSalary: '14-16k',
          address: '江西银行发送空地方即可',
          nature: '全职',
          education: '本科',
          workYear: '3-4年',
          count: '2',
          time: '23-233',
          status: '3'
        },
      ]
    }
  },
  methods: {
    decrementCount() {

    },
    incrementCount() {}
  }
}
</script>

<style lang='scss' scoped>
  .online-job /deep/ {
    .pagination-warpper {
      text-align: center;
      margin-bottom: 65px;
    }
  }
</style>