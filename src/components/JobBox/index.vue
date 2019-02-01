<template>
  <div class="job-list">
    <div v-for="item in jobs" class="box">
      <div class="links">
        <router-link :to="'jobDetail/' + item.id" class="job">{{ item.name }}</router-link>
        <router-link v-if="item.companyName" to=""class="name">{{ item.companyName }}</router-link>
      </div>
      <div class="detail">
        <el-row :gutter="20">
          <el-col :span="3">
            <div class="salary">{{ item.monthSalary | salaryFilter }}</div>
          </el-col>
          <el-col :span="15">
            <div class="location">
              <span>{{ item.city }}</span>
              <span>{{ item.workYear | expFilter }}</span>
              <span>{{ item.education | educateFilter }}</span>
            </div>
          </el-col>
          <el-col :span="6">
            <div v-if="item.scale" class="size">
              <span>{{ item.companyType | companyType }}</span>
              <span>{{ item.scale | companyScale }}</span>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="trait">
        <wel :welfare="item.seduction"/>
        <div class="time">{{ item.modifyTime | timeParser }}</div>
      </div>
      </div>

    </div>
  </div>
</template>

<script>
import wel from '@/components/Welfare'
import { educateFilter, salaryFilter, typeFilter, companyScale, expFilter, companyType, timeParser } from '@/mixin/filters'
export default {
  mixins: [
    educateFilter,
    salaryFilter,
    typeFilter,
    companyScale,
    expFilter,
    companyType,
    timeParser
  ],
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
      padding: 18px 24px 24px;
      border: 1px solid #e4e4e4;
      transition: box-shadow .15s;
      &:hover {
        box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
      }
      .links {
        margin-bottom: 18px;
        position: relative;
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
        line-height: 14px;
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
