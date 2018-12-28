<template>
  <div class="willing">
    <div class="resume-title">求职意向</div>
    <!-- 求职意向 -->
    <div v-show="!hiddenShow" class="view">
      <div class="content">
        <el-row class="will-items-wrapper">
          <el-col :span="12" class="will-items">
            <el-row>
              <el-col :span="8" class="label">求职状态:</el-col>
              <el-col :span="16" class="content">
                {{ modifiedWill.workStatus | conditionFilter }}
              </el-col>
            </el-row>
          </el-col>
          <el-col :span="12" class="will-items">
            <el-row>
              <el-col :span="8" class="label">期望工作地点:</el-col>
              <el-col :span="16" class="content">
                {{ modifiedWill.expectCity }}
              </el-col>
            </el-row>
          </el-col>
          <el-col :span="12" class="will-items">
            <el-row>
              <el-col :span="8" class="label">期望从事行业:</el-col>
              <el-col :span="16" class="content">
                <div v-for="job in  modifiedWill.expectIndustryName" :key="job">{{ job | jobFilter }}</div>
              </el-col>
            </el-row>
          </el-col>
          <el-col :span="12" class="will-items">
            <el-row>
              <el-col :span="8" class="label">期望从事职业:</el-col>
              <el-col :span="16" class="content">{{ modifiedWill.expectPositionName }}</el-col>
            </el-row>
          </el-col>
          <el-col :span="12" class="will-items">
            <el-row>
              <el-col :span="8" class="label">期望薪资:</el-col>
              <el-col :span="16" class="content">
                {{ modifiedWill.expectMonthSalary | salaryFilter }}
              </el-col>
            </el-row>
          </el-col>
          <el-col :span="12" class="will-items">
            <el-row>
              <el-col :span="8" class="label">期望工作性质:</el-col>
              <el-col :span="16" class="content">{{ modifiedWill.expectNature | typeFilter }}</el-col>
            </el-row>
          </el-col>
        </el-row>
      </div>
    </div>

    <div class="operation"               @click="showHidden">
      <i class="el-icon-edit-outline"></i>
      <span>编辑</span>
    </div>
    <!-- 求职意向 -->
    <!-- 编辑意向 -->
    <transition name="el-fade-in-linear">
      <div v-show="hiddenShow" class="hide-view">
        <el-form
        :model="modifiedWill"
        ref="will"
        label-width="100px"
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
          <el-row :gutter="20" class="locate">
            <el-col :span="10">
              <el-form-item label="期望工作省份" prop="expectProvinceId">
                <el-select v-model="modifiedWill.expectProvinceId" placeholder="省">
                  <el-option label="江西" value="1"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="4">
              <div class="dec-line"></div>
            </el-col>
            <el-col :span="110">
              <el-form-item prop="expectCityId">
                <el-select v-model="modifiedWill.expectCityId" placeholder="市">
                  <el-option label="萍乡" value="1"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>

          <el-form-item label="目前状况" prop="workStatus">
            <el-select v-model="modifiedWill.workStatus" placeholder="选择目前状况">
              <el-option label="目前暂无跳槽打算" value="1"></el-option>
              <el-option label="已离职" value="2"></el-option>
              <el-option label="在职 可立即上岗" value="3"></el-option>
              <el-option label="在职 会考虑更好的工作" value="4"></el-option>
              <el-option label="应届毕业生" value="5"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="期望从事职业" prop="expectPositionName">
            <el-input
              v-model="modifiedWill.expectPositionName"
              placeholder="期望职业">
            </el-input>
          </el-form-item>
          <el-form-item label="期望从事行业" prop="expectIndustryName">
            <el-select
              v-model="modifiedWill.expectIndustryName"
              multiple
              collapse-tags
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
        </el-form>
        <div class="control">
          <div @click="" class="submit">保存并更新</div>
          <div @click="cancelModify" class="cancel">取消</div>
        </div>
      </div>
    </transition>
    <!-- 编辑意向 -->
  </div>
</template>

<script>
import mixin from './mixin'
import { typeFilter, salaryFilter, jobFilter, conditionFilter } from '@/mixin/filters'
import { expectWork, salaryOptions, industryOptions, radioOptions } from '@/mixin/options'
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
  props: {
    will: {
      type: Object
    }
  },
  data() {
    return {
      // 记录更改内容对象
      modifiedWill: {},
    }
  },
  methods: {
    cancelModify() {
      this.modifiedWill = JSON.parse(JSON.stringify(this.will))
      this.hiddenShow = false
    }
  },
  beforeMount() {
    this.modifiedWill = JSON.parse(JSON.stringify(this.will))
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
