<template>
  <div class="job-list">
    <div v-for="item in jobs" class="box">
      <div class="links">
        <router-link to="" class="job">{{ item.name }}</router-link>
        <router-link v-if="item.company" to=""class="name">{{ item.company }}</router-link>
      </div>
      <div class="detail">
        <el-row :gutter="20">
          <el-col :span="3">
            <div class="salary">{{ item.salary }}</div>
          </el-col>
          <el-col :span="16">
            <div class="location">
              <span>{{ item.location }}</span>
              <span>{{ item.exp }}</span>
              <span>{{ item.scholar }}</span>
            </div>
          </el-col>
          <el-col :span="5">
            <div v-if="item.size" class="size">
              <span>{{ item.size }}</span>
              <span>{{ item.type }}</span>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="trait">
        <wel :welfare="item.welfare"/>
        <div class="time">{{ item.time }}</div>
      </div>
      </div>

    </div>
  </div>
</template>

<script>
import wel from '@/components/Welfare'
export default {
  props: {
    jobs: {
      type: Array,
      required: true
    }
  },
  components: {
    wel
  }
}
</script>

<style lang="scss" scoped>
  .job-list {
    .box {
      margin-bottom: 20px;
      padding: 24px;
      border: 1px solid #e4e4e4;
      transition: box-shadow .15s;
      &:hover {
        box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
      }
      .links {
        margin-bottom: 5px;
        position: relative;
        line-height: 22px;
        .job {
          font-size: 16px;
        }
        .name {
          position: absolute;
          right: 0;
          font-size: 16px;
        }
      }
      .detail {
        line-height: 22px;
        span {
          display: inline-block;
          padding: 0 14px;
          color: #696969;
          font-size: 14px;
          border-right: 1px solid #A4A4A4;
          &:last-child {
            border-right: none;
          }
        }
        .salary {
          color: #FE5958;
        }
        .location {
        }
        .size {
          text-align: right;
        }
      }
      .trait {
        position: relative;
        margin-top: 25px;
        padding-top: 20px;
        color: #A2A2A2;
        border-top:1px solid #EDEDED;
        .time {
          display: inline-block;
          position: absolute;
          right: 0;
          top: 28px;
          font-size: 12px;
        }
      }
    }
  }
</style>
