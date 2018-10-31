<template>
  <div class="nav-wrapper">
    <nav class="navbar-black-nav">
      <div class="to-company">
        <i/>
        <router-link to="">进入企业版</router-link>
      </div>
      <div class="user-options">
        <span>欢迎回来</span>
        <!-- 用户下拉菜单 -->
        <el-dropdown>
          <span class="el-dropdown-link">
            <span>小明</span>
            <i class="el-icon-arrow-down el-icon--right"/>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>我的简历</el-dropdown-item>
            <el-dropdown-item>投递箱</el-dropdown-item>
            <el-dropdown-item>收藏夹</el-dropdown-item>
            <el-dropdown-item>退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <!-- 用户下拉菜单 -->
        <span>
          <span>400-886-97979</span>
          <i/>
        </span>
      </div>
    </nav>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.nav-wrapper {
  height: 30px;
  line-height: 30px;
  font-size: 14px;
  color: #f7f7f7;
  background-color: #333;
  .navbar-black-nav {

    .to-company {
      display: inline-block;
    }
    .user-options {
      float: right;
      .el-dropdown {
        margin: 0 40px 0 10px;
        color: #f7f7f7;
      }
      .el-dropdown-link {
        cursor: pointer;
      }
    }
  }
}

</style>
