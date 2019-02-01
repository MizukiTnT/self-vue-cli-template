<template>
  <div class="nav-wrapper">
    <nav class="user-nav">
      <el-row :gutter="20" class="body" align="middle" type="flex">
        <el-col :span="6">
          <a href="">
            <img class="lai-icon" src="@/assets/images/logo.png" alt="">
          </a>
        </el-col>
        <el-col :span="12" class="link-wrapper">
          <template v-if="identity != 2
          ">
            <router-link to="/" :class="{active: $route.path === '/index'}" target="_blank"  class="nav-to">首页</router-link>
            <router-link to="/search" :class="{active: $route.path === '/search'}" target="_blank"  class="nav-to">职位</router-link>
          </template>
          <template v-if="identity === 2">
            <router-link to="/companyCenter" :class="{active: $route.path === '/companyCenter'}" target="_blank"  class="nav-to">首页</router-link>
            <router-link to="/manage/jobManage/onlineJob" target="_blank" :class="{active: $route.path === '/manage/jobManage/onlineJob'}" class="nav-to">职位管理</router-link>
            <router-link to="/manage/resumeManage/waitToDeal" :class="{active: $route.path === '/manage/resumeManage/waitToDeal'}" target="_blank" class="nav-to">简历管理</router-link>
            <router-link to="/searchResume" :class="{active: $route.path === '/searchResume'}" target="_blank" class="nav-to">搜索简历</router-link>
          </template>
        </el-col>
        <el-col :span="6" class="align-right">
          <router-link to="" class="back-to-index">
            <i/>
            <span>返回主站</span>
          </router-link>
        </el-col>
      </el-row>
    </nav>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'avatar',
      'name',
      'identity'
    ])
  },
  methods: {
    logout() {
      this.$store.dispatch('LogOut').then(() => {
        this.$router.push({
          path: '/index',
          replace: true
        }) // 为了重新实例化vue-router对象 避免bug
      })
    }
  },
  mounted() {
    console.log(this.$route.path)
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .nav-wrapper {
    position: sticky;
    top: 0px;
    height: 60px;
    background-color: #fafafa;
    border-bottom: 1px solid #e6e6e6;
    z-index: 1000;
    .user-nav {
      height: 100%;
      .body {
        height: 100%;
        .lai-icon {
          height: 40px;
        }
        .link-wrapper {
          height: 100%;
          line-height: 60px;
          .nav-to {
            padding: 0 15px;
            height: 100%;
            display: inline-block;
            font-size: 16px;
            height: 100%;
            &:hover {
              background-color: #fff;
            }
            &.active {
              border-bottom: 2px solid #00b45d;
            }
          }
        }
        .back-to-index {
          color: #999;
        }
      }
    }
  }
</style>

