<template>
  <div class="willing">
    <div class="resume-title">求职意向</div>
    <!-- 求职意向 -->
    <div v-show="!hiddenShow" class="view">
      <div class="content">
        <el-row class="will-items-wrapper">
          <el-col :span="12" class="will-items">
            <el-row>
              <el-col :span="8" class="label">期望工作地点:</el-col>
              <el-col :span="16" class="content">
                {{ info.expectCity }}
              </el-col>
            </el-row>
          </el-col>
          <el-col :span="12" class="will-items">
            <el-row>
              <el-col :span="8" class="label">期望从事行业:</el-col>
              <el-col :span="16" class="content">
                <div>{{ info.expectPositionType | jobFilter }}
                </div>
              </el-col>
            </el-row>
          </el-col>
          <el-col :span="12" class="will-items">
            <el-row>
              <el-col :span="8" class="label">期望从事职业:</el-col>
              <el-col :span="16" class="content">{{ info.expectPositionName }}</el-col>
            </el-row>
          </el-col>
          <el-col :span="12" class="will-items">
            <el-row>
              <el-col :span="8" class="label">期望薪资:</el-col>
              <el-col :span="16" class="content">
                {{ info.expectMonthSalary | salaryFilter }}
              </el-col>
            </el-row>
          </el-col>
          <el-col :span="12" class="will-items">
            <el-row>
              <el-col :span="8" class="label">期望工作性质:</el-col>
              <el-col :span="16" class="content">{{ info.expectNature | typeFilter }}</el-col>
            </el-row>
          </el-col>
        </el-row>
      </div>
    </div>

    <div class="operation" @click="show">
      <i class="el-icon-edit-outline"></i>
      <span>编辑</span>
    </div>
    <!-- 求职意向 -->
    <!-- 编辑意向 -->
    <div v-show="hiddenShow" class="hide-view">
      <el-form
      :model="modifiedWill"
      ref="will"
      :rules="rules"
      label-width="120px"
      label-position="left"
      >
        <el-form-item label="期望工作性质" prop="expectNature">
          <el-radio
            v-for="option in radioOptions"
            v-model="modifiedWill.expectNature"
            :label="option.value"
            :key="option.value"
          >{{ option.label }}</el-radio>
        </el-form-item>
        <el-row class="locate">
          <el-col :span="11">
            <el-form-item label="期望工作省份" prop="expectProvinceId">
              <el-select v-model="modifiedWill.expectProvinceId" placeholder="省" @change="fecthCity">
                <el-option v-for="pro in province"
                :key="pro.value"
                :label="pro.name" :value="pro.value"/>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="1">
            <div class="dec-line">-</div>
          </el-col>
          <el-col :span="10">
            <el-form-item label-width="0" prop="expectCityId">
              <el-select v-model="modifiedWill.expectCityId" placeholder="市">
                <el-option v-for="city in cities"
                :key="city.value"
                :label="city.name" :value="city.value"/>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>


        <el-form-item label="期望从事行业" prop="expectPositionType">
          <el-select
            v-model="modifiedWill.expectPositionType"
            :multiple-limit="3"
            placeholder="选择行业">
            <el-option
              v-for="industry in industryOptions" :label="industry.label"
              :value="industry.value"
              :key="industry.value"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="期望薪资" prop="expectMonthSalary">
          <el-select v-model="modifiedWill.expectMonthSalary" placeholder="选择薪资">
            <el-option v-for="salary in salaryOptions" :label="salary.label" :value="salary.value"
            :key="salary.value"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="期望从事职业" prop="expectPositionName">
          <el-input
            v-model="modifiedWill.expectPositionName"
            placeholder="期望职业">
          </el-input>
        </el-form-item>
      </el-form>
      <div class="control">
        <el-button @click="submit" :loading="loading" class="submit">保存并更新</el-button>
        <div @click="cancelModify" class="cancel">取消</div>
      </div>
    </div>
    <!-- 编辑意向 -->
  </div>
</template>

<script>
import mixin from './mixin'
import { typeFilter, salaryFilter, jobFilter, conditionFilter } from '@/mixin/filters'
import { expectWork, salaryOptions, industryOptions, radioOptions } from '@/mixin/options'
import { mapGetters } from 'vuex'
export default {
  mixins: [
    mixin,
    typeFilter,
    salaryFilter,
    jobFilter,
    conditionFilter,
    expectWork,
    salaryOptions,
    industryOptions,
    radioOptions
  ],
  data() {
    return {
      // 记录更改内容对象
      modifiedWill: {},
      cities: [],
      loading: false,
      rules: {
        expectNature: [
          { required: true, message: '选择工作性质' }
        ],
        expectProvinceId: [
          { required: true, message: '请选择省', trigger: ['blur', 'change'] }
        ],
        expectCityId: [
          { required: true, message: '请选择市', trigger: ['blur', 'change'] }
        ],
        expectPositionName: [
          { required: true, message: '请填期望职业', trigger: ['blur', 'change'] }
        ],
        expectPositionType: [
          { required: true, message: '请选择行业', trigger: ['blur', 'change'] }
        ],
        expectMonthSalary: [
          { required: true, message: '请选择期望薪资', trigger: [ 'blur', 'change' ] }
        ]
      }
    }
  },
  computed: {
    info() {
      return this.$store.state.resume.userInfo
    },
    ...mapGetters([
      'province'
    ])
  },
  methods: {
    show() {
      this.hiddenShow = true
      this.initData()
    },
    // 并不是我想在接口里再请求接口 而是接口返回的数据内没有city和province的具体名称 只能再请求一次接口
    submit() {
      this.$refs.will.validate((valid) => {
        if(valid) {
          this.loading = true
          this.$store.dispatch('UpdateExpectWork', {...this.modifiedWill}).then(() => {
            this.$store.dispatch('GetMyResume').then(() => {
              this.loading = false
              this.hiddenShow = false
            })
          })
        } else {
          return false
        }
      })
    },
    cancelModify() {
      this.hiddenShow = false
      this.$refs.will.resetFields()
      this.initData()
    },
    initData() {
      this.modifiedWill = {
        expectNature: this.info.expectNature,
        expectProvinceId: this.info.expectProvinceId,
        expectCityId: this.info.expectCityId,
        expectPositionType: this.info.expectPositionType,
        expectPositionName: this.info.expectPositionName,
        expectMonthSalary: this.info.expectMonthSalary
      }
    },
    fecthCity() {
      this.$store.dispatch('GetCities', this.modifiedWill.expectProvinceId).then(res => {
        this.cities = res.info
      })
    }
  },
  mounted() {
    if(this.province.length === 0) {
      this.$store.dispatch('GetProvinces')
    }
  }
}
</script>

<style lang="scss" scoped>
  .willing {
    position: relative;
    .view {
      .content {
        .will-items {
          margin-bottom: 15px;
          .label {
            font-size: 14px;
            color: #595959;
          }
          .content {
            color: #333;
            font-size: 14px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            >div {
              margin-bottom: 10px;
              &:last-child {
                margin-bottom: 0;
              }
            }
          }
        }
      }
    }
    .hide-view {
      .dec-line {
        color: #666;
        text-align: center;
        line-height: 40px;
        user-select: none;
      }
    }
    .operation {
      position: absolute;
      right: 20px;
      top: 8px;
      cursor: pointer;
      &:hover {
        color: #409EFF;
      }
    }
  }
</style>
