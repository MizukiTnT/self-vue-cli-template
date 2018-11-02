<template>
  <div class="home">
    <search-bar/>

    <div class="container">
      <board/>
      <!-- 品牌招聘 -->
      <el-tabs style="height: 200px;">
        <el-tab-pane label="品牌企业招聘">

        </el-tab-pane>
      </el-tabs>
      <!-- 品牌招聘 -->
      <!-- 热门职位 -->
      <el-tabs style="height: 200px;">
        <el-tab-pane label="热门职位">

        </el-tab-pane>
        <el-tab-pane label="推荐职位">配置管理</el-tab-pane>
      </el-tabs>
      <!-- 热门职位 -->

      <el-tabs style="height: 200px;">
        <el-tab-pane label="热门职位">

        </el-tab-pane>
        <el-tab-pane label="推荐职位">配置管理</el-tab-pane>
      </el-tabs>

    </div>

  </div>
</template>

<script>
import { SearchBar, Board } from './components'

export default {
  components: {
    SearchBar,
    Board
  }
}
</script>

<style lang="scss" scoped>
  .container {
    width: 1100px;
    margin: 0 auto;
  }
</style>
