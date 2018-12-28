<template>
  <div class="manage">
    <div class="wrapper">
      <el-row :gutter="20">
        <el-col :span="6">
          <div v-if="testJob" class="job-navi">
            <div>
              <router-link :to="{name: 'newJob'}" class="newJob">
                <i class="el-icon-plus"/>发布新职位
              </router-link>
              <naviBox :navis="navis.jobs"/>
            </div>
          </div>
          <div v-if="testResume" class="resume-navi">
            <naviBox :navis="navis.resume"/>
          </div>
          <div v-if="testAccount" class="personal-info-navi">
            <naviBox :navis="navis.personal"/>
          </div>
        </el-col>
        <el-col :span="18">
          <router-view/>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import naviBox from './components/naviBox'
export default {
  computed: {
    // 根据路由来判断显示导航
    testJob() {
      return /jobManage/.test(this.$route.fullPath)
    },
    testResume() {
      return /resumeManage/.test(this.$route.fullPath)
    },
    testAccount() {
      return /accountManage/.test(this.$route.fullPath)
    }
  },
  data() {
    return {
      navis: { // 记录不同页面的导航信息
        jobs: {
          title: '我发布的职位',
          nav: [
            {
              name: 'onlineJob',
              title: '有效职位'
            },
            {
              name: 'offlineJob',
              title: '已下线职位'
            }
          ]
        },
        resume: {
          title: '我收到的简历',
          nav: [
            {
              name: 'waitToDeal',
              title: '待处理简历'
            },
            {
              name: 'reported',
              title: '已通知面试简历'
            },
            {
              name: 'unsatisfide',
              title: '不合适简历'
            }
          ]
        },
        personal: {
          title: '帐号设置',
          nav: [
            {
              name: 'setInfo',
              title: '个人信息'
            },
            {
              name: 'setEmail',
              title: '接收简历邮箱'
            }
          ]
        }
      }
    }
  },
  components: {
    naviBox
  }
}
</script>

<style lang='scss' scoped>
  .manage /deep/ {
    padding-top: 30px;
    .wrapper {
      padding: 0 20px;
      margin: 0 auto;
      width: 1100px;
      .job-navi {
        .newJob {
          display: inline-block;
          width: 100%;
          padding: 15px 0;
          margin-bottom: 20px;
          font-size: 18px;
          color: #fff;
          background-color: #13B768;
          text-align: center;
          &:hover {
            background-color: #13b76873;
          }
          i {
            margin-right: 5px;
          }
        }
      }
    }
    .page-title {
      font-size: 24px;
      color: #3D3D3D;
      margin-bottom: 20px;
    }
    .el-pagination.is-background .btn-next, .el-pagination.is-background .btn-prev, .el-pagination.is-background .el-pager li {
      background-color: #fff;
      border: 1px solid #E4E4E4;
    }

    .el-pagination.is-background .el-pager li:not(.disabled):hover {
      color: #00B35D;
    }
    .el-pagination.is-background .el-pager li:not(.disabled).active {
      color: #fff;
      background-color: #00B35D;
      border: none;
    }
  }
</style>