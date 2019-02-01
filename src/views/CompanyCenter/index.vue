<template>
  <div class="companyCenter">
    <div class="content">
      <el-row>
        <el-col :span="16">
          <div class="company_header wrapper">
            <baseInfo />
          </div>
          <div class="company_introdution wrapper">
            <introduct/>
          </div>
          <div class="company_photo wrapper">
            <photots/>
          </div>
          <div class="conpany_job wrapper">
            <div class="title">招聘职位</div>
            <job-box :jobs="jobs" />
          </div>
        </el-col>
        <el-col :offset="1" :span="7">
          <locations/>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import BaseInfo from './components/base'
import Introduct from './components/introduct'
import Photots from './components/photos'
import JobBox from '@/components/JobBox'
import Locations from './components/locations'
export default {
  components: {
    BaseInfo,
    Introduct,
    Photots,
    JobBox,
    Locations
  },
  data() {
    return {
      editIntroduction: false,

      introduction: {
        introduct: ''
      },
      jobs: [
        {
          name: '产品',
          location: '郑州',
          exp: '3-4年',
          scholar: '本科',
          salary: '10-15k',
          welfare: [
            '餐补',
            '带薪年假',
            '五险一金',
            '上市公司',
            '节假福利'
          ],
          time: '最新'
        },
        {
          name: '产品',
          location: '郑州',
          exp: '3-4年',
          salary: '10-15k',
          scholar: '本科',
          welfare: [
            '餐补',
            '带薪年假',
            '五险一金',
            '上市公司',
            '节假福利'
          ],
          size: '90-100人',
          type: '民营',
          time: '最新'
        },
        {
          name: '产品',
          location: '郑州',
          exp: '3-4年',
          salary: '10-15k',
          scholar: '本科',
          welfare: [
            '餐补',
            '带薪年假',
            '五险一金',
            '上市公司',
            '节假福利'
          ],
          time: '最新'
        }
      ]
    }
  },
  methods: {

  }
}
</script>

<style lang='scss' scoped>
  .companyCenter /deep/ {

    .content {
      width: 1100px;
      padding: 0 20px;
      margin: 35px auto 65px;
      .wrapper {
        padding: 30px 0;
        .title {
          margin-bottom: 20px;
          color: #595959;
          font-size: 22px;
        }
        .show_layer {
          position: relative;
          &:hover {
            .edit-button {
              display: block;
            }
          }
          .edit-button {
            display: none;
            position: absolute;
            color: #595959;
            font-size: 14px;
            top: 5px;
            right: 0;
            cursor: pointer;
          }
        }
        .edit_layer {
          .operate {
            font-size: 14px;
            margin-top: 25px;
            text-align: center;
            .save {
              padding: 7px 17px;
              background-color: #30BE7A;
              color: #fff;
              border-radius: 17px;
              margin-right: 60px;
              cursor: pointer;
              &:hover {
                background-color: #30be7acc;
              }
            }
            .cancel {
              color: #AAA;
              cursor: pointer;
              &:hover {
                color: #666;
              }
            }
          }
        }
      }

      .conpany_job {
        border-top: 1px solid #F0F0F0;
      }

    }
  }
</style>