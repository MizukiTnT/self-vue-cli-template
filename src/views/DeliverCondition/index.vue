<template>
  <block title="已投递简历状态">
    <div class="content">
      <el-tabs v-model="active" @tab-click="updateList"
      >
        <el-tab-pane label="全部" name="1">
          <boxlist :list="listData" v-if="active == 1" />
        </el-tab-pane>
        <el-tab-pane label="投递成功" name="2">
          <boxlist :list="listData" v-if="active == 2"/>
        </el-tab-pane>
        <el-tab-pane label="被查看" name="3">
          <boxlist :list="listData" v-if="active == 3"/>
        </el-tab-pane>
        <el-tab-pane label="通知面试" name="4">
          <boxlist :list="listData" v-if="active == 4"/>
        </el-tab-pane>
        <el-tab-pane label="不合适" name="5">
          <boxlist :list="listData" v-if="active == 5"/>
        </el-tab-pane>
      </el-tabs>
      <div class="pages">
        <el-pagination
          v-show="showPagination"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage"
          :page-size="pagesize"
          layout="prev, pager, next, jumper"
          :total="count">
        </el-pagination>
      </div>
    </div>
  </block>
</template>

<script>
import boxlist from './component/wrapper'
import block from './component/block'
export default {
  data() {
    return {
      active: '2',
      currentPage: 0,
      pagesize: 10,
      count: 10,
      isLoading: false,
      listData: [
        {
          positionId: '12312',
          positionName: '产品经理',
          monthSalary: '14k-15k',
          createTime: '231231',
          address: '四川',
          status: '1',
          companyName: '江西省来融金融信息服务有限公司',
          companyId: '546',
          id: '789',
          companyId: '5454'
        },
        {
          positionId: '12312',
          positionName: '产品经理',
          monthSalary: '14k-15k',
          createTime: '231231',
          address: '四川',
          status: '2',
          companyName: '江西省来融金融信息服务有限公司',
          companyId: '546',
          id: '4789',
          companyId: '5454'
        },
        {
          positionId: '12312',
          positionName: '产品经理',
          monthSalary: '14k-15k',
          createTime: '231231',
          address: '四川',
          status: '3',
          companyName: '江西省来融金融信息服务有限公司',
          companyId: '546',
          id: '7819',
          companyId: '5454'
        }
      ],
      uid: '321312'
    }
  },
  components: {
    boxlist,
    block
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

