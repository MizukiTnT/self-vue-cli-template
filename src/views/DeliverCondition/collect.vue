<template>
  <block title="我收藏的职位">
    <div slot="fresh" class="refresh">刷新</div>
    <boxlist :list="list"/>
    <div class="pages" slot="pagination">
      <el-pagination
        v-show="showPagination"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage"
        :page-size="pagesize"
        layout="prev, pager, next, jumper"
        :total="count">
      </el-pagination>
    </div>
  </block>
</template>

<script>
import block from './component/block'
import boxlist from './component/wrapper'
export default {
  components: {
    block,
    boxlist
  },
  data() {
    return {
      currentPage: 0,
      pagesize: 10,
      count: 10,
      isLoading: false,
      list: [
        {
          positionId: '12312',
          positionName: '产品经理',
          monthSalary: '14k-15k',
          createTime: '231231',
          address: '四川',
          companyName: '江西省来融金融信息服务有限公司',
          companyId: '546',
          id: '789',
          workYear: '3-7年',
          headImage: '1',
          companyId: '5454'
        },
        {
          positionId: '12312',
          positionName: '产品经理',
          monthSalary: '14k-15k',
          createTime: '231231',
          address: '四川',
          companyName: '江西省来融金融信息服务有限公司',
          companyId: '546',
          id: '4789',
          companyId: '5454',
          headImage: 'f',
          workYear: '3-7年'
        },
        {
          positionId: '12312',
          positionName: '产品经理',
          monthSalary: '14k-15k',
          createTime: '231231',
          address: '四川',
          workYear: '3-7年',
          companyName: '江西省来融金融信息服务有限公司',
          companyId: '546',
          id: '7819',
          headImage: '4343',
          companyId: '5454'
        }
      ],
      uid: '321312'
    }
  },
  computed: {
    showPagination() {
      return this.count > this.pagesize && !this.isLoading
    }
  },
  methods: {
    handleCurrentChange() {},
    updateList() {}
  }
}
</script>

<style lang="scss" scoped>
  .collect {
    position: relative;
    height: inherit;
    .refresh {
      position: absolute;
      top: 55px;
      right: 45px;
      color: #444;
      font-size: 20px;
      cursor: pointer;
    }
    .pages {
      text-align: right;
    }
  }
</style>
