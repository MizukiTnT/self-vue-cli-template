<template>
  <div class="resume-list">
    <div
     v-for="resume in resumeList"
     :key="resume.id"
     class="resume">
      <div class="job-name">
        <div class="res-job">应聘: {{ resume.positionName }}</div>
        <div class="vote-time">{{ resume.voteTime }}</div>
      </div>
      <div class="resume-body">
        <div class="img">
          <img src="@/assets/images/resume-doc.png" alt="">
        </div>
        <div class="details">
          <div class="person">
            <span>{{ resume.name }}</span>
            <span>{{ resume.sex | sexFilter }}</span>
            <span>{{ resume.workYear | expFilter }}</span>
            <span>
              {{ resume.city }}
              <img v-if="resume.status != 2" src="@/assets/images/resume-unopened.png" alt="未查看">
              <img v-if="resume.status == 2" src="@/assets/images/resume-opened.png" alt="已查看">
            </span>
          </div>
          <div class="job">{{ resume.prePositionName }} · {{ resume.companyName }}</div>
          <div class="background">{{ resume.univercity }} · {{ resume.major }} · {{ resume.education | educateFilter }}</div>
        </div>
        <div class="condition">
          <!-- <span v-if="" class="unwatched">未查看联系方式</span> -->
          <span v-if="" class="watched">已查看联系方式</span>
        </div>
        <div class="operate">
          <div
            v-if="resume.status == 1"
            @click="sendInterview(resume.id)"
            class="button">发送面试通知</div>
          <div
            v-if="resume.status == 1"
            @click="unfit(resume.id)"
            class="button">标记为不合适</div>
          <div
            v-if="resume.status == 4"
            @click="deleteResume(resume.id)"
            class="button">删除</div>
          <!-- <a
            v-if="resume.status == 3"
            href="/preview/2312"
            target="_blank"
            class="button">预览简历</a> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { expFilter, educateFilter, sexFilter } from '@/mixin/filters'
export default {
  mixins: [
    expFilter,
    educateFilter,
    sexFilter
  ],
  props: {
    resumeList: {
      type: Array,
      required: true,
      default: [
        {
          positionName: '产品经理', // 应聘工作
          city: '南京', // 城市
          sex: '1', // 性别
          education: '1', // 学历
          univercity: '上海师范', // 毕业院校
          major: '艺术设计', // 专业
          workYear: '2', // 工作经验
          companyName: '南昌来融金融信息有限公司', // 先前公司
          prePositionName: '设计师', // 先前岗位
          status: '1', // 简历状态
          id: '2323', // 简历id
          voteTime: '2018-12-32', // 投递时间
          name: '聂航' // 应聘者姓名
        }
      ]
    }
  },
  methods: {
    unfit(id) {},
    sendInterview(id) {},
    deleteResume(id) {}
  }
}
</script>

<style lang='scss' scoped>
  .resume-list {
    .resume {
      padding: 22px;
      border: 1px solid #E4E4E4;
      .job-name {
        padding: 13px;
        border-bottom: 1px solid #E4E4E4;
        .res-job {
          font-size: 16px;
          color: #363636;
          display: inline-block;
        }
        .vote-time {
          float: right;
          font-size: 12px;
          color: #A4A4A4;
        }
      }
      .resume-body {
        margin-top: 14px;
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        .img {
          flex: 0;
          margin-right: 15px;
        }

        .details {
          flex: 1 auto;
          .person {
            margin-bottom: 5px;
            span {
              padding: 0 10px;
              border-right: 1px solid #E7E7E7;
              font-size: 14px;
              color: #696969;
              &:first-child {
                padding: 0 15px 0 0;
              }
              &:last-child {
                border-right: none;
              }
              img {
                position: relative;
                top: 5px;
                left: 5px;
              }
            }
          }
          .job {
            margin-bottom: 5px;
            font-size: 14px;
            color: #696969;
          }
          .background {
            font-size: 14px;
            color: #696969;
          }
        }
        .condition {
          margin-right: 70px;
          .unwatched {
            color: #B0B0B0;
          }
          .watched {
            color: #696969;
          }
        }
        .operate {

          .button {
            margin-bottom: 12px;
            padding: 7px 15px;
            background: #F4F4F4;
            border-radius: 2px;
            font-size: 14px;
            color: #696969;
            cursor: pointer;
            &:hover {
              background-color: #00B35D;
              color: #fff;
            }
            &:last-child {
              margin-bottom: 0;
            }
          }
        }
      }

    }
  }
</style>