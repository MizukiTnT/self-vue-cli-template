<template>
  <div class="preview">
    <div class="wrapper">
      <div class="header">
        <div class="name">{{ info.name }}</div>
        <ul class="details">
          <li class="detail">{{ info.birthDate | timeParser }}</li>
          <li class="detail">{{ info.sex | sexFilter }}</li>
          <li class="detail">{{ info.education | educateFilter }}</li>
          <li class="detail">{{ info.workYear | expFilter }}</li>
          <li class="detail">{{ info.city }}</li>
        </ul>
        <div class="info">
          <div class="zt">
            <i class="el-icon-mobile-phone"/>
            <span>{{ info.mobile }}</span>
          </div>
          <div class="zt">
            <i class="el-icon-message"/>
            <span>{{ info.mail }}</span>
          </div>
          <div class="zt">
            <span>{{ info.workStatus | conditionFilter }}</span>
          </div>
        </div>
      </div>
      <block title="期望工作">
        <div class="will">
          <div class="col">
            <div class="topic">工作地址:</div>
            <div class="content">{{ info.expectCity }}</div>
          </div>
          <div class="col">
            <div class="topic">工作性质:</div>
            <div class="content">{{ info.expectPositionType | typeFilter }}</div>
          </div>
          <div class="col">
            <div class="topic">期望职业:</div>
            <div class="content">{{ info.expectPositionName }}</div>
          </div>
          <div class="col">
            <div class="topic">期望月薪:</div>
            <div class="content">{{ info.expectMonthSalary | salaryFilter }}</div>
          </div>
        </div>
      </block>
      <block title="工作经验">
        <div class="exp">
          <div v-for="(exp, index) in info.expers" :key="index" class="exp-wrapper">
            <div class="dot"/>
            <div class="time">{{ exp.startTime | timeParser }} - {{ exp.endTime | timeParser }} </div>
            <div class="content">
              <div class="company-name">{{ exp.positionName }}</div>
              <div class="work-desc" v-html="exp.describes" ></div>
            </div>
          </div>
        </div>
      </block>
      <block title="教育经历">
        <div class="edu-exp">
          <div class="edu-wrapper" v-for="(edu, index) in info.educations" :key="index">
            <el-row>
              <el-col :span="8">{{ edu.school }}</el-col>
              <el-col :span="3">{{ edu.education | educateFilter }}</el-col>
              <el-col :span="5">{{ edu.major }}</el-col>
              <el-col :span="8">{{ edu.startTime | timeParser}} - {{ edu.endTime | timeParser }} </el-col>
            </el-row>
          </div>
        </div>
      </block>
      <block title="自我评价">
        <div class="self-wrapper">
          <div v-html="info.selfEvaluation" class="self"></div>
        </div>
      </block>
      <a href="" class="button">下载简历</a>
    </div>
  </div>
</template>

<script>
import Block from './Block'
import { sexFilter, educateFilter, expFilter, conditionFilter, salaryFilter, typeFilter} from '@/mixin/filters'
import { mapState } from 'vuex'
export default {
  mixins: [
    sexFilter,
    educateFilter,
    expFilter,
    conditionFilter,
    salaryFilter,
    typeFilter
  ],
  components: {
    Block
  },
  props: ['id'],
  data() {
    return {
      info: null
    }
  },
  watch: {
    '$route'() {
      console.log(this.id)
    }
  },
  filters: {
    timeParser(time) {
      let parseTime = new Date(time).getTime()
      parseTime = new Date(parseTime)
      let y = parseTime.getFullYear()
      let m = parseTime.getMonth() + 1
      let d = parseTime.getDay()
      return y + "." + m + '.' + d
    }
  },
  beforeMount() {
    if(this.id === 'myResume') {
      this.$store.dispatch('GetMyResume').then(() => {
        this.info = this.$store.state.resume.userInfo
      })
    } else {

    }
  }
}
</script>

<style lang="scss" scoped>
  .preview {
    padding: 30px 0;
    background: #F5F5F5;

    .wrapper {
      position: relative;
      margin: 0 auto;
      width: 1100px;
      padding: 55px 70px 65px 30px;
      background-color: #fff;
      .header {
        margin-bottom: 60px;
        .name {
          font-size: 40px;
          color: #3C3C3C;
        }
        .details {
          margin: 20px 0 30px;
          .detail {
            display: inline-block;
            padding: 0 30px;
            border-right: 1px solid #BEBEBE;
            font-size: 16px;
            color: #495267;
            &:first-child {
              padding: 0 30px 0 0;
            }
            &:last-child {
              border-right: none;
            }
          }
        }
        .info {
          .zt {
            display: inline-block;
            margin-right: 42px;
            font-size: 18px;
            color: #495267;
            i {
              color: #979797;
            }
          }
        }
      }
      .will {
        display: flex;
        padding-left: 15px;
        flex-wrap: wrap;
        .col {
          flex: 0 0 50%;
          margin-bottom: 40px;
          &:nth-last-child(1) {
            margin-bottom: 0;
          }
          &:nth-last-child(2) {
            margin-bottom: 0;
          }
          .topic {
            display: inline-block;
            padding-right: 15px;
            font-size: 20px;
            color: #797979;
          }
          .content {
            display: inline-block;
            width: 64%;
            font-size: 20px;
            color: #495267;
          }
        }
      }
      .exp {
        padding-left: 20px;
        .exp-wrapper {
          padding-bottom: 50px;
          border-left: 1px solid #E0E0E0;
          position: relative;
          .dot {
            position: absolute;
            top: 5px;
            left: -5px;
            width: 9px;
            height: 9px;
            background-color: #00B35D;
            border-radius: 50%;
          }
          .time {
            padding-left: 15px;
            font-size: 18px;
            color: #757575;
            margin-bottom: 20px;
          }
          .content {
            padding-left: 55px;
            .company-name {
              margin-bottom: 15px;
              font-size: 22px;
              color: #383838;
            }
            .work-desc {
              padding: 20px 20px 35px;
              font-size: 16px;
              color: #8A8A8A;
              background-color: #F4F4F4;
            }
          }
        }
      }
      .edu-exp {
        margin-bottom: 15px;
        padding-left: 20px;
        font-size: 18px;
        color: #757575;
        .edu-wrapper {
          margin-bottom: 15px;
          &:last-child {
            margin-bottom: 0;
          }
        }
      }
      .self-wrapper {
        padding-left: 15px;
        .self {
          padding: 20px 30px;
          font-size: 18px;
          color: #8A8A8A;
          letter-spacing: 1px;
          line-height: 26px;
          background-color: #F4F4F4;
        }
      }
      .button {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 65px;
        line-height: 65px;
        color: #fff;
        background-color: #00B35D;
        text-align: center;
      }
    }
  }
</style>
