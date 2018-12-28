<template>
    <ul class="job_wrapper">
      <li v-for="job in jobList" :key="job.id" class="job_box">
        <router-link to="" class="job_name">{{ job.name }}</router-link>
        <div class="job_detail">
          <span class="salary">{{ job.monthSalary }}</span>
          <span class="detail">
            <span>{{ job.address }}</span>
            <span>{{ job.nature }}</span>
            <span>{{ job.workYear }}</span>
            <span>{{ job.education }}</span>
          </span>
          <router-link to="" class="resume">应聘简历[{{ job.count }}]</router-link>
        </div>
        <div class="output">
          <span class="job_output_time">
            发布时间{{ job.time }}
          </span>
          <div class="job_operate">
            <span v-if="job.status == 3" @click="pushAgain(job.id)">再发布</span>
            <span v-if="job.status == 2" @click="deleteJob(job.id)">删除</span>
          </div>
        </div>
      </li>
    </ul>
</template>

<script>
export default {
  props: ['jobList'],
  methods: {
    pushAgain(id) {},
    deleteJob(id) {}
  }
}
</script>

<style lang='scss' scoped>
  .job_wrapper {
    margin: 0 0 40px;
    .job_box {
      margin-bottom: 15px;
      padding: 18px 20px;
      border: 1px solid #E4E4E4;
      transition: all .25s;
      &:hover {
        box-shadow: 0 0 8px 0 rgba(232,237,250,.6), 0 2px 4px 0 rgba(232,237,250,.5);
      }
      .job_name {
        display: block;
        margin-bottom: 10px;
        font-weight: 600;
        font-size: 16px;
      }
      .job_detail {
        padding-bottom: 13px;
        border-bottom: 1px solid  #EDEDED;
        font-size: 16px;
        vertical-align: baseline;
        .salary {
          margin-right: 30px;
          color: #FE5958;
        }
        .detail {
          font-size: 14px;
          color: #696969;
          > span {
            padding: 0 10px;
            border-right: 1px solid #D7D7D7;
            &:last-child {
              border-right: none;
            }
          }
        }
      }
      .resume {
        float: right;
      }
    }
    .output {
      margin-top: 16px;
      vertical-align: baseline;
      .job_output_time {
        color: #A4A4A4;
        font-size: 12px;
      }
      .job_operate {
        float: right;
        font-size: 14px;
        color: #00B35D;
        cursor: pointer;
      }
    }
  }
</style>