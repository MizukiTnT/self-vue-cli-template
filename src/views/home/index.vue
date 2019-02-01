<template>
  <div class="home">
    <search-bar url="job" :searchItem="{}"/>

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
            <box :boxList="info.hot"></box>
          </el-tab-pane>
          <el-tab-pane label="推荐职位">
            <box :boxList="info.recommends"></box>
          </el-tab-pane>
        </el-tabs>
      </div>
      <!-- 热门职位 -->
      <!-- 应届生招聘 -->
      <div class="tab-wrapper">
        <el-tabs>
          <el-tab-pane label="应届生招聘专区">
            <box :boxList="info.currents"></box>
          </el-tab-pane>
        </el-tabs>
      </div>
      <!-- 应届生招聘 -->
      <div class="tab-warpper hr">
        <el-tabs>
          <el-tab-pane label="最新人才">
            <hr-page :tableList="info.news"></hr-page>
          </el-tab-pane>
          <el-tab-pane label="应届生">
            <hr-page :tableList="info.graduations"></hr-page>
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
import { getHomeData, test } from '@/api/home'
import bus from '@/utils/bus'
export default {
  data() {
    return {
      info: {}
    }
  },
  components: {
    SearchBar,
    Board,
    Box,
    HrPage,
    Dropdown
  },
  async beforeMount() {
    let res = await getHomeData()
    this.info = res.info
  }
}
</script>

<style lang="scss" scoped>

.home /deep/ {
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
