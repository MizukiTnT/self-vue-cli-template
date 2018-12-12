<template>
  <div class="employee">
    <div class="employee-wrapper">
      <div v-for="(employee, index) in employees" :key="index" class="box">
        <div class="person">
          <div class="name">{{ employee.name }}</div>
          <div class="details">
            <span>{{ employee.sex }}</span>
            <span>{{ employee.age }}</span>
            <span>{{ employee.workYear }}</span>
            <span>{{ employee.education }}</span>
          </div>
        </div>
        <div class="pre-job">
          <span class="details">
            <span><svg-icon icon-class="bag"/>{{ employee.jobName }}</span>
            <span><svg-icon icon-class="house"/><router-link to="">{{ employee.companyName }}</router-link></span>
          </span>
          <span class="time">{{ employee.time }}</span>
        </div>
        <router-link class="infos" to=""><svg-icon icon-class="mobile"/> 查看联系方式</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    employees: {
      type: Array,
      default: () => {
        return [
          {
            name: '东想西想',
            sex: '男',
            age: '13',
            workYear: '23',
            education: '本科',
            jobName: '销售代表',
            companyName: '发酵粉卡视角',
            time: '2018-10-23 13'
          },
          {
            name: '东想西想',
            sex: '男',
            age: '13',
            workYear: '23',
            education: '本科',
            jobName: '销售代表',
            companyName: '发酵粉卡视角',
            time: '2018-10-23 13'
          },
          {
            name: '东想西想',
            sex: '男',
            age: '13',
            workYear: '23',
            education: '本科',
            jobName: '销售代表',
            companyName: '发酵粉卡视角',
            time: '2018-10-23 13'
          },
          {
            name: '东想西想',
            sex: '男',
            age: '13',
            workYear: '23',
            education: '本科',
            jobName: '销售代表',
            companyName: '发酵粉卡视角',
            time: '2018-10-23 13'
          }
        ]
      }
    }
  }
}
</script>

<style lang='scss' scoped>
.employee {
  .employee-wrapper {
    margin-bottom: 30px;
    .box {
      position: relative;
      margin-bottom: 15px;
      border: 1px solid#E4E4E4;
      padding:24px;
      transition: all .25s;
      &:hover {
        box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
      }
      .person {
        margin-bottom: 15px;
        display: flex;
        align-items: center;
        .name {
          margin-right: 5px;
          display: inline-block;
          font-size: 18px;
          color: #363636;
        }
        .details {
          display: inline-block;
          span {
            padding: 0 15px;
            color: #696969;
            font-size: 14px;
            border-right: 1px solid #D7D7D7;
            &:last-child {
              border-right: none;
            }
          }
        }
      }
      .pre-job {
        .details {
          color: #363636;
          font-size: 14px;
          span {
            margin-right: 17px;
            svg {
              margin-right: 8px;
              font-size: 16px;
            }
          }
        }
        .time {
          font-size: 12px;
          color: #A4A4A4;
        }
      }
      .infos {
        position: absolute;
        top: 42px;
        right: 25px;
        font-size: 16px;
        color: #00B35D;
        &:hover {
          color: #00B35D;
        }
      }
    }
  }
}
</style>