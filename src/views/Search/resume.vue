<template>
  <div class="search">
    <search-bar/>
    <div class="result-wrapper">
      <el-row :gutter="20">
        <el-col :span="5">
          <option-bar @transOptions="getOptions"/>
        </el-col>
        <el-col :span="19">
          <employee/>
          <div class="pagination">
            <el-pagination
              @current-change="handleCurrentChange"
              :current-page.sync="currentPage"
              :page-size="100"
              layout="prev, pager, next, jumper"
              :total="1000">
            </el-pagination>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { SearchBar, OptionBar, JobBox, employee } from '@/views/Search/components'
export default {
  data() {
    return {
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
      ],
      currentPage: 1
    }
  },
  components: {
    SearchBar,
    OptionBar,
    employee
  },
  watch: {
    '$route': 'getSearch'
  },
  methods: {
    getOptions(options) {

    },
    handleCurrentChange() {

    }
  }
}
</script>

<style lang="scss" scoped>
  .result-wrapper {
    width: 1100px;
    padding: 30px 20px 40px;
    margin: 0 auto;
    .pagination {
      margin-top: 60px;
      text-align: right;
    }
  }
</style>
