<template>
  <div class="search">
    <search-bar/>
    <div class="result-wrapper">
      <el-row :gutter="20">
        <el-col :span="5">
          <option-bar/>
        </el-col>
        <el-col :span="19">
          <div v-loading="isLoading">
            <job-box :jobs="jobs"/>
          </div>
          <div class="pagination">
            <el-pagination
              @current-change="handleCurrentChange"
              :current-page.sync="pageIndex"
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
import { SearchBar, OptionBar, JobBox } from '@/views/Search/components'
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

      pageIndex: 1,
      isLoading: false
    }
  },
  components: {
    SearchBar,
    OptionBar,
    JobBox
  },
  watch: {
    '$route': 'getSearch'
  },
  methods: {
    handleCurrentChange() {

    },
    getSearch() {
      let items = {}
      this.isLoading = true
      // 筛选出key 不作为参数上传 key用于重复检索时刷新页面
      Object.keys(this.$route.query).map(key => {
        if (key != 'key') {
          items[key] = this.$route.query[key]
        }
      })
      Object.assign(items, { pageIndex: this.pageIndex })
      this.$store.dispatch('Search', items).then((res) => {
        this.isLoading = false
        this.jobs = res.info.list
      })
    }
  },
  mounted() {
    this.getSearch()
  },
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
