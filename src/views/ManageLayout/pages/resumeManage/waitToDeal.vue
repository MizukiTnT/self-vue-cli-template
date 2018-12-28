<template>
  <div class="unhandle">
    <div class="page-title">待处理简历</div>
    <list/>
    <div class="pagination">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="total"
        :page-sizes="pagesize"
        @current-change="fetchNewPage"
        >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import list from './components/resumeList'
export default {
  components: {
    list
  },
  data() {
    return {
      total: 100,
      pagesize: 5
    }
  },
  methods: {
    fetchNewPage() {

    }
  }
}
</script>

<style lang='scss' scoped>
  .unhandle {

    .pagination {
      margin-top: 25px;
      text-align: center;
    }


  }
</style>