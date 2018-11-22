<template>
  <div class="resume">
    <div class="main">
      <el-row :gutter="10">
        <el-col :span="18">
          <div class="body">
            <div class="block" id="char">
              <charactor :charact="resumeData.charact"/>
            </div>
            <div class="block" id="will">
              <willing :will="resumeData.will" />
            </div>
            <div class="block" id="exp">
              <div class="resume-title">工作经验</div>
              <div @click="addExp" class="add-button">
                <i class="el-icon-plus"/>
                <span>添加工作经验</span>
              </div>
              <exp v-for="(exper, index) in newExper"
              :index="index"
              :experData="exper" :key="exper.id" />
            </div>
            <div class="block" id="edu-exp">
              <div class="resume-title">教育经历</div>
              <div @click="addEducate" class="add-button">
                <i class="el-icon-plus"/>
                <span>添加教育经验</span>
              </div>
              <education-exp v-for="(education, index) in newEducation" :education="education" :index="index"
              :key="index"/>
            </div>
            <div class="self-evaluation" id="self">
              <div class="resume-title">自我评价</div>
              <evaluation :self="resumeData.self"/>
            </div>
          </div>
        </el-col>
        <!-- 右侧边栏 -->
        <el-col :span="6">
          <div class="resume-nav">
            <div class="header">
              <aside-blcok :uid="resumeData.uid" :abandonCompanyCount="resumeData.abandonCompanyCount"
              :likeCompanyCount="resumeData.likeCompanyCount" />
            </div>
            <div class="float-board">
              <float-board />
            </div>
          </div>
        </el-col>
        <!-- 右侧边栏 -->
      </el-row>
    </div>
  </div>
</template>

<script>
import {Willing, Exp, Evaluation, EducationExp, Charactor, FloatBoard} from './components'
import AsideBlcok from '@/components/AsideBlock'
export default {
  components: {
    Willing,
    Exp,
    Evaluation,
    EducationExp,
    Charactor,
    AsideBlcok,
    FloatBoard
  },
  data() {
    return {
      resumeData: {
        charact: {
          modifyTime: '2018-10-1',
          name: '聂航斌',
          sex: '1',
          education: '1',
          age: '18',
          birthDate: '',
          headImage: '',
          cityId: '',
          province: '江西',
          city: '萍乡',
          provinceId: '',
          workStatus: {

          },
          workYear: '1',
          status: '1',
          selfEvaluation: 'fsafdsafsa',
          mobile: '17673058233',
          mail: '522178072@qq.com'
        },
        will: {
          expectNature: '1',
          expectProvinceId: '1',
          expectProvince: '江西',
          expectCityId: '1',
          workStatus: '1',
          expectCity: '萍乡',
          expectPositionName: '销售',
          expectMonthSalary: '1',
          expectIndustryName: ['1', '2']
        },
        exper: [
          {
            id: "21321",
            companyName: '广州市xx',
            positionName: '前端',
            startTime: '1538323200000',
            endTime: '1538323300000',
            describes: '音乐的作用 是给你日常的生活 增添色彩'
          },
          {
            id: "213211",
            companyName: '赣州市xx',
            positionName: '前端',
            startTime: '1538323200000',
            endTime: '1538323300000',
            describes: '我拒绝以合群方式来让自己内心获得平静'
          },
          {
            id: "2132231",
            companyName: '萍乡市xx',
            positionName: '前端',
            startTime: '1538323200000',
            endTime: '1538323300000',
            describes: '我不是自视甚高 而只是不喜欢和大家都一样'
          }
        ],
        education: [
          {
            id: '12321',
            school: '江西',
            education: '1',
            major: '环境工程',
            startTime: '1538323200000',
            endTime: '1538323300000'
          },
          {
            id: '123211',
            school: '江西',
            education: '1',
            major: '环境工程',
            startTime: '1538323200000',
            endTime: '1538323300000'
          }
        ],
        self: '法师的开发建设的看法就打算;开放;安分守己法师的罚款就',
        uid: '23232',
        abandonCompanyCount: '5',
        likeCompanyCount: '2'

      },
      showTemp: false,
      newExper: [
        {}
      ],
      newEducation: [
        {}
      ]
    }
  },
  methods: {
    addExp() {
      this.$store.dispatch('ChangeActive', 0)
    },
    addEducate() {
      this.$store.dispatch('ChangeEducationActive', 0)
    }
  },
  beforeMount() {
    this.resumeData.exper.forEach(v => {
      this.newExper.push(v)
    })
    this.newExper.map((v, i) => {
      if (i != 0) {
        v.linkTime = [v.startTime, v.endTime]
      }
    })
    this.resumeData.education.forEach(v=> {
      this.newEducation.push(v)
    })
    this.newEducation.map((v, i) => {
      if (i != 0) {
        v.linkTime = [v.startTime, v.endTime]
      }
    })
  }
}
</script>

<style lang="scss" scoped>
  .resume {
    .main {
      width: 1100px;
      margin: 0 auto;
      .block {
        position: relative;
        padding:  30px 20px 35px;
        margin-bottom: 25px;
        border-bottom: 1px solid #EAEDF1;
        .add-button {
          position: absolute;
          right: 20px;
          top: 23px;
          padding: 5px;
          color: #9C99A5;
          font-size: 14px;
          border: 1px solid #9C99A5;
          border-radius: 10px;
          cursor: pointer;
          transition: all .25s;
          &:hover {
             border: 1px solid #409EFF;
             color: #409EFF;
          }
          i {
            color: #2288F1;
          }
        }
      }
    }
  }
</style>

