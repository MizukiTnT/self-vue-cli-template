<template>
  <div class="preview">
    <div class="wrapper">
      <div class="header">
        <div class="name">{{ resumeData.baseInfo.name }}</div>
        <ul class="details">
          <li class="detail">{{ resumeData.baseInfo.age }}</li>
          <li class="detail">{{ resumeData.baseInfo.sex }}</li>
          <li class="detail">{{ resumeData.baseInfo.education }}</li>
          <li class="detail">{{ resumeData.baseInfo.exp }}</li>
          <li class="detail">{{ resumeData.baseInfo.location }}</li>
        </ul>
        <div class="info">
          <div class="zt">
            <i class="el-icon-mobile-phone"/>
            <span>{{ resumeData.baseInfo.mobile }}</span>
          </div>
          <div class="zt">
            <i class="el-icon-message"/>
            <span>{{ resumeData.baseInfo.mail }}</span>
          </div>
          <div class="zt">
            <span>{{ resumeData.baseInfo.condition }}</span>
          </div>
        </div>
      </div>
      <block title="期望工作">
        <div class="will">
          <div class="col">
            <div class="topic">工作地址:</div>
            <div class="content">{{ resumeData.expectWork.location }}</div>
          </div>
          <div class="col">
            <div class="topic">工作性质:</div>
            <div class="content">{{ resumeData.expectWork.type }}</div>
          </div>
          <div class="col">
            <div class="topic">期望职业:</div>
            <div class="content">{{ resumeData.expectWork.job }}</div>
          </div>
          <div class="col">
            <div class="topic">期望月薪:</div>
            <div class="content">{{ resumeData.expectWork.salary }}</div>
          </div>
        </div>
      </block>
      <block title="工作经验">
        <div class="exp">
          <div v-for="(exp, index) in resumeData.workExp" :key="index" class="exp-wrapper">
            <div class="dot"/>
            <div class="time">{{ exp.time }}</div>
            <div class="content">
              <div class="company-name">{{ exp.name }}</div>
              <div class="work-desc">{{ exp.description }}</div>
            </div>
          </div>
        </div>
      </block>
      <block title="教育经历">
        <div class="edu-exp">
          <div class="edu-wrapper" v-for="(edu, index) in resumeData.educationExp" :key="index">
            <el-row>
              <el-col :span="8">{{ edu.name }}</el-col>
              <el-col :span="3">{{ edu.background }}</el-col>
              <el-col :span="5">{{ edu.major }}</el-col>
              <el-col :span="8">{{ edu.time }}</el-col>
            </el-row>
          </div>
        </div>
      </block>
      <block title="自我评价">
        <div class="self-wrapper">
          <div class="self">{{ resumeData.selfEvaluate }}</div>
        </div>
      </block>
      <a href="" class="button">下载简历</a>
    </div>
  </div>
</template>

<script>
import Block from './Block'
export default {
  components: {
    Block
  },
  props: ['id'],
  data() {
    return {
      resumeData: {
        baseInfo: {
          name: '聂xx',
          age: '20岁',
          sex: '男',
          education: '本科',
          exp: '4年工作经验',
          location: '南昌',
          mobile: '123232323',
          mail: 'fdfasfsad@.com',
          condition: '我已经离职, 可快速到岗'
        },
        expectWork: {
          location: '江西省 南昌市',
          type: '全职',
          salary: '10-12k',
          job: '淘宝'
        },
        workExp: [
          {
            time: '2018-2010',
            name: '江西省xxx',
            description: 'fafl;kasdflksd'
          },
          {
            time: '2018-2010',
            name: '江西省xxx',
            description: 'fafl;kasdflksd'
          },
          {
            time: '2018-2010',
            name: '江西省xxx',
            description: 'fafl;kasdflksd'
          }
        ],
        educationExp: [
          {
            name: '南昌大学',
            major: '信息工程',
            background: '本科',
            time: '2018/2/31-2018/6/32'
          },
          {
            name: '南昌大学',
            major: '信息工程',
            background: '本科',
            time: '2018/2/31-2018/6/32'
          },
          {
            name: '南昌大学',
            major: '信息工程',
            background: '本科',
            time: '2018/2/31-2018/6/32'
          }
        ],
        selfEvaluate: 'fasfkasjkfljdlfjsaflkfskadfasdkfasf'
      }
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
