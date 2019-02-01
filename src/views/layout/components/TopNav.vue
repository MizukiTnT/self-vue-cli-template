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
          <!-- 个人用户 -->
          <el-dropdown v-if="identity == 1">
            <span class="el-dropdown-link">
              <span>{{ name }}</span>
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
                <router-link to="/collectJob">收藏夹</router-link>
              </el-dropdown-item>
              <el-dropdown-item>
                <div @click="logout">退出</div>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <!-- 企业用户 -->
          <el-dropdown v-if="identity == 2">
            <span class="el-dropdown-link">
              <span>{{ name }}</span>
              <i class="el-icon-arrow-down el-icon--right"/>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>
                <router-link to="/manage/jobManage/newJob">发布职位</router-link>
              </el-dropdown-item>
              <el-dropdown-item>
                <router-link to="/manage/accountManage/setInfo">账号设置</router-link>
              </el-dropdown-item>
              <el-dropdown-item @click="logout">退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <!-- 未登录 -->
        </span>

        <span v-else class="navis">
          <span>
            <router-link to="/login">登录</router-link>
          </span>
          <span>
            <router-link to="/register">注册</router-link>
          </span>
        </span>

        <span>
          <svg-icon icon-class="tel" class="icon" />
          <span>400-886-97979</span>
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
       'name',
       'identity'
     ])
   },
  methods: {
    async logout() {
      await this.$store.dispatch('LogOut')
      location.reload()
    },
    companyLogout() {

    }
  },
  mounted() {

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
  a {
    &:hover {
      color: #fff;
    }
  }
  .navbar-black-nav {

    .to-company {
      display: inline-block;
    }
    .user-options {
      float: right;
      .navis {
        span {
          padding: 0 20px;
          &:first-child {
            border-right: 1px solid #fff;
          }
        }
      }
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
