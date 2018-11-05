<template>
  <div class="home">
    <search-bar/>

    <div class="container">
      <board/>
      <!-- 品牌招聘 -->
      <div class="tab-wrapper">
        <el-tabs>
          <el-tab-pane label="品牌企业招聘">

          </el-tab-pane>
        </el-tabs>
      </div>

      <!-- 品牌招聘 -->
      <!-- 热门职位 -->
      <div class="tab-wrapper">
        <el-tabs>
          <el-tab-pane label="热门职位">
            <box :boxList="boxList"></box>
          </el-tab-pane>
          <el-tab-pane label="推荐职位">
            <box :boxList="boxList"></box>
          </el-tab-pane>
        </el-tabs>
      </div>
      <!-- 热门职位 -->
      <!-- 应届生招聘 -->
      <div class="tab-wrapper">
        <el-tabs>
          <el-tab-pane label="热门职位">
            <box :boxList="boxList"></box>
          </el-tab-pane>
          <el-tab-pane label="推荐职位">
            <box :boxList="boxList"></box>
          </el-tab-pane>
        </el-tabs>
      </div>
      <!-- 应届生招聘 -->
      <div class="tab-warpper hr">
        <el-tabs>
          <el-tab-pane label="最新人才">
            <hr-page :tableList="tableList"></hr-page>
          </el-tab-pane>
        </el-tabs>
      </div>
      <!-- 友情链接 -->
      <div class="tab-warpper links">
        <el-tabs>
          <el-tab-pane label="友情链接">
            <dropdown></dropdown>
          </el-tab-pane>
        </el-tabs>
      </div>
      <!-- 友情链接 -->
    </div>
  </div>
</template>

<script>
import { SearchBar, Board, Box, HrPage, Dropdown } from './components'

export default {
  data() {
    return {
      boxList: [
        {
          links: '',
          job: '产品经理',
          company: '江西来融金服',
          location: '萍乡'
        },
        {
          links: '',
          job: '产品经理',
          company: '江西来融金服',
          location: '萍乡'
        },
        {
          links: '',
          job: '产品经理',
          company: '江西来融金服',
          location: '萍乡'
        },
        {
          links: '',
          job: '产品经理',
          company: '江西来融金服',
          location: '萍乡'
        },
        {
          links: '',
          job: '产品经理',
          company: '江西来融金服',
          location: '萍乡'
        },
        {
          links: '',
          job: '产品经理',
          company: '江西来融金服',
          location: '萍乡'
        },
        {
          links: '',
          job: '产品经理',
          company: '江西来融金服',
          location: '萍乡'
        },
        {
          links: '',
          job: '产品经理',
          company: '江西来融金服',
          location: '萍乡'
        },
        {
          links: '',
          job: '产品经理',
          company: '江西来融金服',
          location: '萍乡'
        }
      ],
      tableList: [
        {
          name: '聂航斌',
          gender: '男',
          age: '30',
          exp: '10年以上',
          scholar: '本科',
          will: '市场'
        },
        {
          name: '聂航斌',
          gender: '男',
          age: '30',
          exp: '10年以上',
          scholar: '本科',
          will: '市场'
        },
        {
          name: '聂航斌',
          gender: '男',
          age: '30',
          exp: '10年以上',
          scholar: '本科',
          will: '市场'
        },
        {
          name: '聂航斌',
          gender: '男',
          age: '30',
          exp: '10年以上',
          scholar: '本科',
          will: '市场'
        },
        {
          name: '聂航斌',
          gender: '男',
          age: '30',
          exp: '10年以上',
          scholar: '本科',
          will: '市场'
        }
      ]
    }
  },
  components: {
    SearchBar,
    Board,
    Box,
    HrPage,
    Dropdown
  }
}
</script>

<style lang="scss">

.home {
  padding-bottom: 80px;
  .container {
    width: 1100px;
    margin: 0 auto;
    padding: 0 20px;
    .tab-wrapper {
      margin-top: 20px;
    }
    .links {
      margin-top: 20px;
    }
    .hr {
      margin-top: 20px;
    }
    .el-tabs__active-bar {
      background-color:#00B35D;
    }
    .el-tabs__item {
      font-size: 16px;
      color: #9F9F9F;
    }
    .el-tabs__item.is-active {
      color: #333333;
    }
  }
}

</style>
