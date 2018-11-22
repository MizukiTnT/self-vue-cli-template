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
                {{ condition }}
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
export default {
  mixins: [mixin],
  props: {
    will: {
      type: Object
    }
  },
  computed: {
    condition() {
      let state = this.modifiedWill.workStatus
      return state === '1' ? '目前暂无跳槽打算' :
      state === '2' ? '已离职' :
      state === '3' ? '在职 可立即上岗' :
      state === '4' ? '在职 会考虑更好的工作' :
      state === '5' ? '应届毕业生' :
      ''
    }
  },
  data() {
    return {
      // 记录更改内容对象
      modifiedWill: {},
      //工作类型选项
      radioOptions: [
        {
          label: '全职',
          value: '1'
        },
        {
          label: '兼职',
          value: '2'
        },
        {
          label: '实习',
          value: '3'
        }
      ],
      // 预期工作选项
      expectWork: [
        {
          label: '研发生产',
          value: '1'
        },
        {
          label: '市场服务',
          value: '2'
        },
        {
          label: '销售管理',
          value: '3'
        },
        {
          label: '人事行政',
          value: '4'
        },
        {
          label: '其他',
          value: '5'
        }
      ],
      // 预期薪水选项
      salaryOptions: [
        {
          value: '1',
          label: '面议'
        },
        {
          value: '2',
          label: '2k以下'
        },
        {
          value: '3',
          label: '2k-5k'
        },
        {
          value: '4',
          label: '5k-10k'
        },
        {
          value: '5',
          label: '10k-15k'
        },
        {
          value: '6',
          label: '15k-25k'
        },
        {
          value: '7',
          label: '25k-50k'
        },
        {
          value: '8',
          label: '50k以上'
        }
      ],
      // 预期行业选项
      industryOptions: [
        {
          label: '互联网/电子商务',
          value: '1'
        },
        {
          label: '计算机软件',
          value: '2'
        },
        {
          label: '农业相关',
          value: '3'
        },
        {
          label: '销售',
          value: '4'
        }
      ]
    }
  },
  methods: {
    cancelModify() {
      this.modifiedWill = JSON.parse(JSON.stringify(this.will))
      this.hiddenShow = false
    }
  },
  filters: {
    jobFilter(type) {
      return type === '1' ? '研发生产' :
      type === '2' ? '市场服务' :
      type === '3' ? '销售管理' :
      type === '4' ? '人事行政' :
      type === '5' ? '其它' :
      ''
    },
    salaryFilter(type) {
      return type === '1' ? '面议' :
      type === '2' ? '2k以下' :
      type === '3' ? '2-5k' :
      type === '4' ? '5-10k' :
      type === '5' ? '10k-15k' :
      type === '6' ? '15k-25k' :
      type === '7' ? '25k-50k' :
      type === '8' ? '50k以上' :
      ''
    },
    typeFilter(type) {
      return type === '1' ? '全职' :
      type === '2' ? '兼职' :
      type === '3' ? '实习' : ''
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
