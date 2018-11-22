<template>
  <div class="charact">
    <div class="wrapper">
      <!-- 显示层 -->
      <div v-show="!hiddenShow" class="view">
        <div class="img-wrapper">
          <img src="" alt="">
        </div>
        <div class="content-wrapper">
          <div class="name">
            <span>{{ charact.name }}</span>
            <span>更新时间: 2018-06-07</span>
          </div>
          <div class="char">
            <span>{{ sex }}</span>
            <span>{{ charact.age }}岁</span>
            <span>{{ charact.city }}</span>
            <span>{{ exp }}</span>
          </div>
          <div class="condition">
            <span>
              <i class="el-icon-mobile-phone"></i>
              {{ charact.phone }}
            </span>
            <span>
              <i class="el-icon-message"></i>
              {{ charact.mail }}
            </span>
            <span>{{ condition }}</span>
          </div>
          <div class="operation"               @click="showHidden">
            <i class="el-icon-edit-outline"></i>
            <span>编辑</span>
          </div>
        </div>
      </div>
      <!-- 显示层 -->
      <!-- 编辑层 -->
      <transition name="el-fade-in-linear">
        <div v-show="hiddenShow" class="hide-view">
          <el-form
          :model="modifiedCharact"
          ref="charact"
          label-width="95px"
          label-position="left"
          >
            <el-form-item label="姓名" prop="name">
              <el-input v-model="modifiedCharact.name"
              placeholder="输入姓名"/>
            </el-form-item>
            <el-form-item label="性别" prop="sex" class="">
              <el-select v-model="modifiedCharact.sex" placeholder="选择性别">
                <el-option label="男" value="1"></el-option>
                <el-option label="女" value="2"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="学历" prop="education">
              <el-select v-model="modifiedCharact.education" placeholder="选择学历">
                <el-option v-for="educate in educationOptions" :label="educate.label" :value="educate.value"
                :key="educate.label"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="工作经验" prop="workYear">
              <el-select v-model="modifiedCharact.workYear" placeholder="选择工作经验">
                <el-option v-for="exp in expOptions"
                :label="exp.label" :value="exp.value"
                :key="exp.value"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="出生日期" prop="age">
              <el-date-picker
                v-model="modifiedCharact.age"
                placeholder="出生日期"
                format="yyyy 年 M 月"
                type="month"
                value-format="timestamp"
                />
            </el-form-item>

            <el-form-item label="现居地" prop="location">
              <el-select v-model="modifiedCharact.province">

              </el-select>
              <el-select v-model="modifiedCharact.city"></el-select>
            </el-form-item>

            <el-form-item label="联系方式" prop="mobile">
              <el-input v-model="modifiedCharact.mobile" type="text" maxlength="11"></el-input>
            </el-form-item>
            <el-form-item label="电子邮箱" prop="mail">
              <el-input v-model="modifiedCharact.mail" type="text"></el-input>
            </el-form-item>
          </el-form>
          <div class="control">
            <div @click="" class="submit">保存并更新</div>
            <div @click="cancelModify" class="cancel">取消</div>
          </div>
        </div>
      </transition>
      <!-- 编辑层 -->

    </div>
  </div>
</template>

<script>
import mixin from './mixin'
import { deepClone } from '@/utils'
export default {
  mixins: [mixin],
  props: {
    charact: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      modifiedCharact: {},
      rules: [],
      citys: [],
      provinces: [],
      expOptions: [
        {
          label: '应届毕业生',
          value: '1'
        },
        {
          label: '1-2年',
          value: '2'
        },
        {
          label: '3-4年',
          value: '3'
        },
        {
          label: '5-9年',
          value: '4'
        },
                {
          label: '10年以上',
          value: '5'
        }
      ],
      educationOptions: [
        {
          label: '高中/高中以下',
          value: '1'
        },
        {
          label: '大专',
          value: '2'
        },
        {
          label: '本科',
          value: '3'
        },
        {
          label: '硕士',
          value: '4'
        },
                {
          label: '博士',
          value: '5'
        }
      ]
    }
  },
  computed: {
    exp() {
      let education = this.charact.education
      return education === '1' ? '应届毕业生' :
      education === '2' ? '1-2年' :
      education === '3' ? '3-4年' :
      education === '4' ? '5-9年' :
      education === '5' ? '10年以上' :
      ''
    },
    educate() {
      let workState = this.charact.education
      return workState === '1' ? '大专' :
      workState === '2' ? '本科' :
      workState === '3' ? '硕士' :
      workState === '4' ? '博士' :
      ''
    },
    condition() {
      let state = this.modifiedCharact.workStatus
      return state === '1' ? '目前暂无跳槽打算' :
      state === '2' ? '已离职' :
      state === '3' ? '在职 可立即上岗' :
      state === '4' ? '在职 会考虑更好的工作' :
      state === '5' ? '应届毕业生' :
      ''
    },
    sex() {
      let gender = this.charact.sex,res
      return gender === '1' ? '男' :
      gender === '2' ? '女' :
      ''
    },

  },
  methods: {
    handleSubmit() {

    },
    cancelModify() {
      this.hiddenShow = false
      this.modifiedCharact = deepClone(this.charact)
    }
  },
  mounted() {
    this.modifiedCharact = deepClone(this.charact)
  }
}
</script>

<style lang="scss" scoped>
.charact {
  .wrapper {
    .view {
      display: flex;
      position: relative;
      align-items: center;
      .img-wrapper {
        flex: 0 0 116px;
        height: 116px;
        margin-right: 22px;
        background-color: #f7f7f7;
      }
      .content-wrapper {
        flex: 0 1 auto;
        .name {
          margin-bottom: 15px;
          vertical-align: bottom;
          span {
            &:first-child {
              margin-right: 20px;
              font-size: 26px;
            }
            &:last-child {
              font-size: 14px;
              color: #9C99A5;
            }
          }
        }
        .char {
          margin-bottom: 8px;
          >span {
            padding: 0 25px;
            font-size: 14px;
            color: #595959;
            border-right: 1px solid #DCDCDC;
            &:first-child {
              padding: 0 25px 0 0;
            }
            &:last-child {
              border-right: none;
            }
          }
        }
        .condition {
          color: #595959;
          >span {
            margin-right: 30px;
            font-size: 14px;
            &:last-child {
              font-size: 16px;
              color: #495267;
            }
            i {
              margin-right: 10px;
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
    }

  }
}

</style>
