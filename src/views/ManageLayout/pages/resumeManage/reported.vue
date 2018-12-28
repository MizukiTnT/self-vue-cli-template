<template>
  <div class="reported">
    <div class="page-title">已通知面试简历</div>
    <div class="container">
      <div class="line"></div>
      <div v-for="item in list"
       :key="item.date"
       class="date">

        <div class="day">{{ item.date }}</div>
         <div v-for="(resume, index) in item.list" class="resume">
           <div :class="{ active: index == 0 }" class="hour">
             {{ resume.time }}
              <img
                v-if="index == 0"
               src="@/assets/images/resume-time-latest.png" alt="">
              <img
               v-else
               src="@/assets/images/resume-time-before.png" alt="">
           </div>
           <div class="container">
             <div class="img">
               <img src="@/assets/images/resume-doc.png" alt="">
             </div>
             <div class="details">
               <div class="name">
                 <span>
                   <img src="@/assets/images/resume-icon-por.png" alt="">
                   {{ resume.details.name }}
                 </span>
                 <span>
                   <img src="@/assets/images/resume-icon-por.png" alt="">
                   {{ resume.details.mobile }}
                 </span>
               </div>
               <div class="job">应聘: {{ resume.details.jobPosition }}</div>
             </div>
             <div class="operations">
               <span class="button">预览简历</span>
             </div>
           </div>
         </div>
      </div>
    </div>
    <div class="pagination">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="total"
        :page-sizes="pagesize"
        @current-change="fetchNewPage"
        >
      </el-pagination>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      total: 10,
      pagesize: 100,
      list: [
        {
          date: '2018-1811312',
          list: [
            {
              time: '13:00',
              details: {
                id: '23131',
                name: '聂航',
                mobile: '17544444444',
                jodPosition: '产品经理',
                uid: '2323'
              }
            },
            {
              time: '13:00',
              details: {
                id: '23131',
                name: '聂航',
                mobile: '17544444444',
                jobPosition: '产品经理',
                uid: '2323'
              }
            }
          ]
        },
        {
          date: '2018-1811312',
          list: [
            {
              time: '13:00',
              details: {
                id: '23131',
                name: '聂航',
                mobile: '17544444444',
                jodPosition: '产品经理',
                uid: '2323'
              }
            },
            {
              time: '13:00',
              details: {
                id: '23131',
                name: '聂航',
                mobile: '17544444444',
                jobPosition: '产品经理',
                uid: '2323'
              }
            }
          ]
        }
      ]
    }
  },
  methods: {
    fetchNewPage() {}
  }
}
</script>

<style lang='scss' scoped>
  .reported {
    .container {
      margin-top: 15px;
      position: relative;
      .line {
        position: absolute;
        left: 123px;
        top: 17px;
        width: 1px;
        height: 100%;
        background-color: #D8D8D8;
      }
      .date {
        .day {
          margin-bottom: 10px;
          font-size: 16px;
          color: #3D3D3D;
        }
        .resume {
          position: relative;
          margin-left: 145px;
          .hour {
            position: absolute;
            left: -80px;
            top: 0;
            display: flex;
            align-items: center;
            font-weight: 600;
            color: #C1C1C1;
            &.active {
              color: #3D3D3D;
            }
            img {
              margin-left: 10px;
            }
          }
          .container {
            display: flex;
            margin-bottom: 30px;
            padding: 20px 30px;
            flex-wrap: nowrap;
            align-items: center;
            border: 1px solid #E4E4E4;
            .img {
              flex: 0 auto;
              margin-right: 15px;
            }
            .details {
              flex: 1;
              .name {
                margin-bottom: 9px;
                >span {
                  margin-right: 30px;
                  font-size: 16px;
                  color: #363636;
                  img {
                    position: relative;
                    top: 3px;
                    margin-right: 4px;
                  }
                }
              }
              .job {
                font-size: 16px;
                color: #363636;
              }
            }
            .operations {
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
              }
            }
          }
        }
      }

    }
    .pagination {
      margin: 68px 0 50px;
      text-align: center;
    }
  }
</style>