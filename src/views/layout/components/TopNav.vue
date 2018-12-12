<template>
  <div class="nav-wrapper">
    <nav class="navbar-black-nav">
      <div class="to-company">
        <i/>
        <router-link to="">进入企业版</router-link>
      </div>
      <div class="user-options">
        <span v-if="name">
          <span>欢迎回来</span>
          <!-- 用户下拉菜单 -->
          <el-dropdown>
            <span class="el-dropdown-link">
              <span>{{ name }}}</span>
              <i class="el-icon-arrow-down el-icon--right"/>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>
                <router-link to="/resume">我的简历</router-link>
              </el-dropdown-item>
              <el-dropdown-item>
                <router-link to="/deliver">投递箱</router-link>
              </el-dropdown-item>
              <el-dropdown-item>
                <router-link to="/collectResume">收藏夹</router-link>
              </el-dropdown-item>
              <el-dropdown-item @click="logout">退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <!-- 用户下拉菜单 -->

        </span>

        <span>

        </span>

        <span>
          <span>400-886-97979</span>
          <i/>
        </span>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
   computed: {
     ...mapGetters([
       'name'
     ])
   }
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
