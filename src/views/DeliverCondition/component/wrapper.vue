<template>
  <div class="box-wrapper">
    <div v-for="item in list" :key="item.id" class="box">
      <div class="jobname">
        <router-link to="">{{ item.positionName }}</router-link>
        <span class="salary">{{ item.monthSalary }}</span>
      </div>
      <div class="location">
        <div class="locate">{{ item.address }}</div>
        <div class="time">{{ item.createTime }}</div>
      </div>
      <div class="companyname">
        <router-link to="">{{ item.companyName }}</router-link>
        <span v-if="item.status" class="result">{{ item.status | parseResult}}</span>
        <span v-if="item.workYear" class="result">
          <span class="cancel">取消收藏</span>
          <span class="drop">投个简历</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array
    }
  },
  filters: {
    parseResult(status) {
      return status === '1' ? '投递成功' :
      status === '2' ? '被查看' :
      status === '3' ? '通知面试' :
      status === '4' ? '不合适' : ''
    }
  }
}
</script>

<style lang="scss" scoped>
  .box-wrapper {
    margin-top: 35px;
    .box {
      margin-bottom: 20px;
      padding: 30px 26px 35px 30px;
      border: 1px solid #E4E4E4;
      transition: all .25s;
      &:hover {
        box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
      }
      .jobname {
        margin-bottom: 10px;
        a {
          margin-right: 30px;
          font-size: 20px;
          color: #363636;
        }
        .salary {
          color: #FE5958;
          font-size: 20px;
        }
      }
      .location {
        position: relative;
        padding-bottom: 10px;
        border-bottom: 1px solid#EDEDED;
        color: #B0B0B0 ;
        font-size: 16px;
        .time {
          position: absolute;
          right: 0;
          top: 0;
        }
      }
      .companyname {
        position: relative;
        margin-top: 15px;
        a {
          font-size: 16px;
          color: #363636;
        }
        .result {
          position: absolute;
          top: 0;
          right: 0;
          color: #15B86A;
          .cancel {
            color: #888;
            padding: 0 15px;
            border-right: 1px solid #EDEDED;
            cursor: pointer;
            transition: all .5s;
            &:hover {
              color: #FE5958;
            }
          }
          .drop {
            color: #888;
            padding: 0 15px;
            cursor: pointer;
            transition: all .5s;
            &:hover {
              color: #00B35D;
            }
          }
        }
      }
    }
  }
</style>
