<template>
  <block title="我屏蔽的企业">
    <div class="dislike-refuse">
      <div class="dislike-hint">提示：被屏蔽的企业将无法搜索到您的简历。</div>
      <div class="dislike-refuse-list">
        <tags :tags="tagList" @deleteTag="deleteTag"/>
      </div>
      <div class="dislike-search-bar">
        <el-input v-model="searchItem" class="search-input" placeholder="搜索公司"></el-input>
        <el-button class="do-search">搜索</el-button>
      </div>
      <div v-show="searchResult" class="dislike-search-result">
        <company-list :searchResult="searchResult" @addShieldCompany="addShieldCompany" />
        <div class="pages" slot="pagination">
          <el-pagination
            background
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage"
            :page-size="pagesize"
            layout="prev, pager, next, jumper"
            :total="count">
          </el-pagination>
        </div>
      </div>
    </div>
  </block>

</template>

<script>
import block from './component/block'
import boxlist from './component/wrapper'
import tags from './component/tags'
import companyList from './component/companyList'

export default {
  components: {
    block,
    boxlist,
    tags,
    companyList
  },
  data() {
    return {
      currentPage: 0,
      pagesize: 10,
      count: 10,
      isLoading: false,
      uid: '321312',
      searchItem: '',
      tagList: [
        {
          id: '3232',
          name: '今天是个好日子科技公司'
        },
        {
          id: '2432',
          name: '今天周末 但是我没有丝毫的开心'
        }
      ],
      searchResult: [
        {
          companyId: '2323',
          name: '江西省萍乡市后院煤矿长'
        },
        {
          companyId: '2434',
          name: '南昌市发大沙发沙发'
        },
        {
          companyId: '23223',
          name: '江西省萍乡市后院煤矿长'
        },
        {
          companyId: '24434',
          name: '南昌市发大沙发沙发'
        }
      ]
    }
  },
  computed: {
    showPagination() {
      return this.count > this.pagesize && !this.isLoading
    }
  },
  methods: {
    handleCurrentChange() {},
    updateList() {},
    deleteTag(id) {

    },
    addShieldCompany(id) {
      this.tagList.push({
        id: id,
        name: 'jianxi'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .deliver /deep/ {
    position: relative;
    height: inherit;
    .dislike-refuse {
      border-top: 1px solid #E8E8E8;
      padding-top: 30px;
      .dislike-hint {
        font-size: 16px;
        color: #7C7C7C;
        letter-spacing: 0.18px;
      }
      .dislike-search-bar {
        display: flex;
        .do-search {
          width: 120px;
          height: 40px;
          border: none;
          background-color: #00B35D;
          color: #fff;
          border-radius: 0;
          font-size: 16px;
        }
        .search-input {
          flex: 0 1 auto;
          .el-input__inner {
            height: 40px;
            &:focus {
              border-color: #666;
              border-radius: 0;
            }
          }
        }
      }
      .dislike-search-result {
        padding: 20px 0;
        background-color: #fafafa;
      }

      .el-pagination.is-background .el-pager li:not(.disabled).active {
        background-color: #00B35D;
      }
      .el-pagination.is-background .btn-next, .el-pagination.is-background .btn-prev, .el-pagination.is-background .el-pager li {
        background-color: #5adc9e9e;
        color: #fff;
      }
      .el-pagination.is-background .el-pager li:not(.disabled):hover {
        background-color: #00B35D;
        color: #fff;
      }
    }
    .pages {
      text-align: right;
    }
  }
</style>
