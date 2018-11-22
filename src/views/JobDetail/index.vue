<template>
  <div class="job-detail">
    <div class="detail-warpper">
      <!-- 头部 -->
      <div class="header-wrapper">
        <div class="header">
          <el-row :gutter="20" align="top" type="flex">
            <el-col :span="10">
              <div class="time">{{ jobInfo.outputTime }}</div>
              <div class="job-name">{{ jobInfo.name }}</div>
            </el-col>
            <el-col :span="8">
              <div class="salary">{{ jobInfo.salary }}</div>
              <div class="details">
                <span>{{ jobInfo.location }}</span>
                <span>{{ jobInfo.exp }}</span>
                <span>{{ jobInfo.scholar }}</span>
                <span>{{ jobInfo.type }}</span>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="apply">
                <router-link to="">立即申请</router-link>
              </div>
              <div class="store">
                <router-link to=""><i class="el-icon-document"></i>完善简历</router-link>
                <router-link to=""><i class="el-icon-star-off"></i>收藏</router-link>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
      <!-- 头部 -->
      <!-- 主体 -->
      <div class="main">
        <el-row >
          <!-- 职位信息 -->
          <el-col :span="15">
            <div class="container">
              <page-block title="职位亮点">
                <welfare :welfare="jobInfo.highlight"></welfare>
              </page-block>
              <page-block title="职位信息">
                <div v-html="jobInfo.jobDescribe" class=""></div>
              </page-block>
            </div>
          </el-col>
          <!-- 职位信息 -->
          <!-- 公司信息 -->
          <el-col :span="6" :push="3">
            <div class="aside-bar">
              <div class="img-box">
                <img src="" alt="">
              </div>
              <div class="company">
                <div class="title">{{ jobInfo.companyInfo.name }}</div>
                <div class="name">{{ jobInfo.companyInfo.name }}</div>
                <div class="type">{{ jobInfo.companyInfo.type }}</div>
                <div class="site">{{ jobInfo.companyInfo.site }}</div>
              </div>
              <div class="title b">工作地址</div>
              <div class="loc"><i class="el-icon-location"></i>{{ jobInfo.companyInfo.location }}</div>
              <div class="more-company">
                <el-tabs>
                  <el-tab-pane label="相似职位">
                    <div class="similar-job" v-for="item in jobInfo.similarJob">
                      <el-row :gutter="10" align="top" type="flex">
                        <el-col :span="7">
                          <img :src="item.imgUrl" class="similar-img">
                        </el-col>
                        <el-col :span="17" class="right">
                          <div>
                            <router-link to="" class="name">{{ item.name }}</router-link>
                          </div>
                          <div>
                            <div class="salary">{{ item.salary }}</div>
                          </div>
                          <div>
                            <router-link to="" class="company">{{ item.cName }}</router-link>
                          </div>
                        </el-col>
                      </el-row>
                    </div>
                  </el-tab-pane>
                </el-tabs>
              </div>
            </div>
          </el-col>
          <!-- 公司信息 -->
        </el-row>
      </div>
      <!-- 主体 -->
    </div>
  </div>
</template>

<script>
import PageBlock from '@/components/PageBlock'
import Welfare from '@/components/Welfare'
export default {
  data() {
    return {
      jobInfo: {
        name: '全栈工程师',
        outputTime: '十分钟前',
        salary: '5000-8000元/月',
        location: '萍乡',
        exp: '1-3年',
        scholar: '大专',
        type: '全职',
        id: '1325',
        highlight: [
          '餐补',
          '带薪年假',
          '节日福利',
          '上市公司',
          '周末双休'
        ],
        jobDescribe: '粉丝的看法就是多空分水岭房山看房',
        companyInfo: {
          name: '江西xxx有限公司',
          type: '初创型公司',
          size: '100-200人',
          site: 'http://www.baidu.com',
          location: '江西省南昌市青山湖取xxxx'
        },
        similarJob: [
          {
            name: '销售总监',
            salary: '面议',
            cName: '江西xx有限公司',
            imgUrl: '',
            jobId: 141563,
            companyId: 454653,
            imgUrl: ''
          },
          {
            name: '销售总监',
            salary: '面议',
            cName: '江西xx有限公司',
            imgUrl: '',
            jobId: 141563,
            companyId: 454653,
            imgUrl: ''
          },
          {
            name: '销售总监',
            salary: '面议',
            cName: '江西xx有限公司',
            imgUrl: '',
            jobId: 141562,
            companyId: 454652,
            imgUrl: ''
          },
          {
            name: '销售总监',
            salary: '面议',
            cName: '江西xx有限公司',
            imgUrl: '',
            jobId: 141561,
            companyId: 454651,
            imgUrl: ''
          }
        ]
      }
    }
  },
  components: {
    Welfare,
    PageBlock
  }
}
</script>

<style lang="scss">
  .job-detail {
    .el-tabs__active-bar {
      background-color:#00B35D;
    }
    .el-tabs__item {
      font-size: 16px;
      color: #9F9F9F;
    }
    .el-tabs__item.is-active {
      color: #333333;
    }
    .detail-warpper {
      .header-wrapper {
        padding: 50px 0;
        background-color: #F2F7F4;
        .header {
          width: 1100px;
          margin: 0 auto;
          padding: 0 20px;
          .time {
            margin-bottom: 18px;
            font-size: 14px;
            color: #707070;
          }
          .job-name {
            font-size: 25px;
            color: #2D2D2D;
          }
          .salary {
            margin-bottom: 18px;
            font-family: PingFangSC-Semibold;
            font-size: 26px;
            color: #FD6265;
            letter-spacing: 1px;
          }
          .details {
            >span {
              color: #7E7F80;
              font-size: 14px;
              padding: 0 15px;
              border-right: 1px solid #DCDCDC;
              &:first-child {
                padding-left: 0;
              }
              &:last-child {
                border-right: none;
              }
            }
          }
          .apply {
            a {
              display: inline-block;
              width: 100%;
              padding: 15px 0;
              margin-bottom: 18px;
              font-size: 18px;
              color: #fff;
              text-align: center;
              background-color: #00B35D;
              border-radius: 5px;
            }
          }
          .store {
            a {
              color: #7E7F80;
              font-size: 16px;
              margin-right: 30px;
              i {
                margin-right: 7px;
              }
              &:hover {
                color: #409EFF;
              }
            }
          }
        }
      }
      .main {
        width: 1100px;
        margin: 0 auto;
        padding: 35px 20px;
        .aside-bar {
          padding-top: 24px;
          .img-box {
            height: 110px;
            margin-bottom: 20px;
            background-color: #f7f7f7;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .title {
            margin-bottom: 20px !important;
            font-size: 18px !important;
            color: #333 !important;
            &.b {
              margin-top: 15px;
            }
          }
          .loc {
            color: #4A4A4A;
            font-size: 14px;
            i {
              margin-right: 10px;
            }
          }
          .company {
            >div {
              color: #8C8C8C ;
              font-size: 14px;
              margin-bottom: 15px;
            }
          }
          .more-company {
            margin-top: 25px;
            .similar-job {
              margin-top: 15px;
              padding-bottom: 12px;
              border-bottom: 1px dashed #E5E5E5;
              .right {
                >div {
                  margin-bottom: 3px;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                  &:last-child {
                    margin-bottom: 0;
                  }
                  >a {
                    &:hover {
                      text-decoration: underline;
                    }
                  }
                  .name {
                    font-size: 14px;
                  }
                  .salary {
                    font-size: 14px;
                    color: #FD6265;
                  }
                  .company {
                    color: #999;
                    font-size: 12px;
                  }
                }
              }
              .similar-img {
                width: 70px;
                height: 70px;
              }
            }
          }
        }
      }
    }
  }
</style>
