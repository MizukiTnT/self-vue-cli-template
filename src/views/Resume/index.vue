<template>
  <div class="resume">
    <div class="main" ref="wrapper">
      <el-row :gutter="10">
        <el-col :span="18">
          <div class="body">
            <div class="block" id="char">
              <charactor/>
            </div>
            <div class="block" id="will">
              <willing />
            </div>
            <div class="block" id="exp">
              <div class="resume-title">工作经验</div>
              <div @click="experShow = true" class="add-button">
                <i class="el-icon-plus"/>
                <span>添加工作经验</span>
              </div>
              <exp v-if="info.expers.length > 0 && info.expers" v-for="(exper, index) in info.expers"
              :index="index"
              :experData="exper" :key="exper.id" />
              <div v-show="experShow" class="hide-view">
                <el-form
                :model="modifiedExp"
                ref="exper"
                :rules="expRules"
                label-width="95px"
                label-position="left"
                >
                  <el-form-item label="公司名称" prop="companyName">
                    <el-input v-model="modifiedExp.companyName"
                    placeholder="公司名称"/>
                  </el-form-item>
                  <el-form-item label="职位名称" prop="positionName">
                      <el-input type="text" placeholder="职位名称" v-model="modifiedExp.positionName"></el-input>
                  </el-form-item>
                  <el-form-item label="在职时间" prop="linkTime">
                  <el-date-picker
                    v-model="modifiedExp.linkTime"
                    placeholder="选择范围"
                    format="yyyy 年 M 月"
                    type="daterange"
                    value-format="yyyy-MM"
                    />
                </el-form-item>
                  <el-form-item label="工作描述" prop="describes">
                    <el-input v-model="modifiedExp.describes"
                    type="textarea"
                    :maxlength="500"
                    :minlength="10"
                    :autosize="{ minRows: 5}"
                    placeholder="工作描述"/>
                  </el-form-item>
                </el-form>
                <div class="control">
                  <el-button :loading="expLoading" @click="submitExper" class="submit">保存并更新</el-button>
                  <div @click="cancelModify" class="cancel">取消</div>
                </div>
              </div>
            </div>
            <div class="block" id="edu-exp">
              <div class="resume-title">教育经历</div>
              <div @click="educationShow = true" class="add-button">
                <i class="el-icon-plus"/>
                <span>添加教育经验</span>
              </div>
              <education-exp v-if="info.educations.length > 0 && info.educations" v-for="(education, index) in info.educations" :education="education" :index="index"
              :key="index"/>
              <div v-show="educationShow" class="hide-view">
                <el-form
                  :model="modifiededucation"
                  ref="education"
                  :rules="educationRule"
                  label-width="95px"
                  label-position="left"
                >
                  <el-form-item label="学校名称" prop="school">
                    <el-input v-model="modifiededucation.school"
                    placeholder="学校名称"/>
                  </el-form-item>
                  <el-form-item label="学历" prop="education">
                    <el-select v-model="modifiededucation.education" placeholder="选择学历">
                      <el-option v-for="educate in educationOptions" :label="educate.label" :value="educate.value"
                      :key="educate.label"></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="就读时间" prop="time">
                  <el-date-picker
                    v-model="modifiededucation.time"
                    placeholder="就读时间"
                    format="yyyy 年 M 月"
                    type="daterange"
                    value-format="yyyy-MM"
                    />
                </el-form-item>
                  <el-form-item label="专业名称" prop="major">
                    <el-input v-model="modifiededucation.major"
                    type="text"
                    placeholder="专业名称"/>
                  </el-form-item>
                </el-form>
                <div class="control">
                  <el-button :loading="educateLoading" @click="submitEducation" class="submit">保存并更新</el-button>
                  <div @click="cancelEducationModify" class="cancel">取消</div>
                </div>
              </div>

            </div>
            <div class="self-evaluation" id="self">
              <div class="resume-title">自我评价</div>
              <evaluation :self="info.selfEvaluation"/>
            </div>
          </div>
        </el-col>
        <!-- 右侧边栏 -->
        <el-col :span="6">
          <div class="resume-nav">
            <div class="header">
              <aside-block :uid="resumeData.uid" :abandonCompanyCount="resumeData.abandonCompanyCount"
              :likeCompanyCount="resumeData.likeCompanyCount" />
            </div>
            <div class="float">
              <float-board/>
            </div>
          </div>
        </el-col>
        <!-- 右侧边栏 -->
      </el-row>
    </div>
  </div>
</template>

<script>
import { Willing, Exp, Evaluation, EducationExp, Charactor, FloatBoard } from './components'
import AsideBlock from '@/components/AsideBlock'
import { educationOptions } from '@/mixin/options'
import { mapState } from 'vuex'
export default {
  mixins: [ educationOptions ],
  components: {
    Willing,
    Exp,
    Evaluation,
    EducationExp,
    Charactor,
    AsideBlock,
    FloatBoard
  },
  computed: mapState({
    info: (state) => state.resume.userInfo
  }),
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
          workStatus: 1,
          workYear: 1,
          status: 1,
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
      experShow: false, // 是否显示工作经验form
      modifiedExp: { // 新的工作经验
        companyName: '',
        positionName: '',
        linkTime: '',
        describes: ''
      },
      expRules: {
        companyName: [{ required: true, message: '请填写公司名称', trigger: ['blur', 'change'] }],
        positionName: [{ required: true, message: '请填写职位名称', trigger: ['blur', 'change'] }],
        linkTime: [{ required: true, message: '请选择在职时间', trigger: ['blur', 'change'] }],
        describes: [{ required: true, message: '请填写工作描述', trigger: ['blur', 'change'] }],
      }, // 工作经验form rules
      expLoading: false,
      educationShow: false,
      modifiededucation: {
        school: '', // 学校
        education: '', // 学历
        major: '', // 专业
        time: []
      },
      educationRule: {
        school: [{ required: true, message: '请填写毕业院校', trigger: ['blur', 'change'] }],
        education: [{ required: true, message: '请选择学历', trigger: ['blur', 'change'] }],
        major: [{ required: true, message: '请填写专业', trigger: ['blur', 'change'] }],
        time: [{ required: true, message: '请选择就读时间', trigger: ['blur', 'change'] }],
      },
      educateLoading: false
    }
  },
  methods: {
    addEducate() {
      this.$store.dispatch('ChangeEducationActive', 0)
    },
    // 新添工作经验
    submitExper() {
      this.$refs.exper.validate(valid => {
        if (valid) {
          this.expLoading = true
          this.$store.dispatch('UpdateExp', {
            companyName: this.modifiedExp.companyName,
            positionName: this.modifiedExp.positionName,
            startTime: this.modifiedExp.linkTime[0],
            endTime: this.modifiedExp.linkTime[1],
            describes: this.modifiedExp.describes.replace(/\r\n/g, '<br/>').replace(/\n/g, '<br/>').replace(/\s/g, ' '),
          }).then(res => {
            this.$store.dispatch('GetMyResume').then(() => {
              this.cancelModify()
            })
          },err => {
            this.expLoading = false
          })
        } else {
          return  false
        }
      })
    },
    // 取消工作经验修改
    cancelModify() {
      this.experShow = false
      this.$refs.exper.resetFields()
    },
    cancelEducationModify() {
      this.educationShow = false
      this.$refs.education.resetFields()
    },
    submitEducation() {
      this.$refs.education.validate(valid => {
        if (valid) {
          this.educateLoading = true
          this.$store.dispatch('UpdateEducation', {
            school: this.modifiededucation.school,
            education: this.modifiededucation.education,
            startTime: this.modifiededucation.time[0],
            endTime: this.modifiededucation.time[1],
            major: this.modifiededucation.major
          }).then(res => {
            this.$store.dispatch('GetMyResume').then(() => {
              this.cancelEducationModify()
            })
          },err => {
            this.educateLoading = false
          })
        } else {
          return  false
        }
      })
    }
  },
  async beforeMount() {
    await this.$store.dispatch('GetMyResume')
    await this.$store.dispatch('GetProvinces')
    console.log(this.info)
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

