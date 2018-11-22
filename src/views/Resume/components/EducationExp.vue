<template>
  <div class="educate-exp">
    <div class="wrapper" @mouseenter="hide = true" @mouseleave="hide = false">
      <!-- 显示层 -->
      <div v-if="index != 0" class="view">
        <div class="universe">{{ modifiededucation.school }}</div>
        <div class="duration">{{ modifiededucation.major }}</div>
        <div class="background">{{ background }}</div>
        <div class="specialty">
          <div class="time">
            {{ modifiededucation.startTime | timeFilter }} - {{ modifiededucation.endTime | timeFilter }}
          </div>
        </div>

        <div v-show="hide" @click="showHidden" class="edit">
          <i class="el-icon-edit-outline"/>
          <span>编辑</span>
        </div>
      </div>
      <!-- 显示层 -->
      <!-- 编辑层 -->
      <transition name="el-fade-in-linear">
        <div v-show="show" class="hide-view">
          <el-form
          :model="modifiededucation"
          ref="charact"
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
            <el-form-item label="就读时间" prop="linkTime">
            <el-date-picker
              v-model="modifiededucation.linkTime"
              placeholder="就读时间"
              format="yyyy 年 M 月"
              type="daterange"
              value-format="timestamp"
              />
          </el-form-item>
            <el-form-item label="专业名称" prop="major">
              <el-input v-model="modifiededucation.major"
              type="text"
              placeholder="专业名称"/>
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
import { deepClone } from '@/utils'
export default {
  props: {
    education: {
      type: Object
    },
    index: {
      required: true
    }
  },
  data() {
    return {
      modifiedEducation: {},
      hide: false,
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
    show() {
      return this.$store.state.resume.educationActive === this.index
    },
    background() {
      let education = this.education.education
      return education === '1' ? '高中/高中以下' :
      education === '2' ? '大专' :
      education === '3' ? '本科' :
      education === '4' ? '硕士' :
      education === '5' ? '博士' :
      ''
    },
  },
  methods: {
    cancelModify() {
      this.$store.dispatch('ChangeEducationActive', '')
      this.modifiededucation = JSON.parse(JSON.stringify(this.education))
    },
    showHidden() {
      this.$store.dispatch('ChangeEducationActive', this.index)
    }
  },
  beforeMount() {
    this.modifiededucation = JSON.parse(JSON.stringify(this.education))
  },
  filters: {
    timeFilter(time) {
      let parseTime = new Date(+time)
      return parseTime.getFullYear() + '-' + (parseTime.getMonth() + 1)
    }
  }
}
</script>

<style lang="scss" scoped>
  .educate-exp {
    margin-bottom: 20px;
    .wrapper {
      margin: 0 0 35px;
      .view {
        position: relative;
        display: flex;
        >div {
          color: #9C99A5;
          font-size: 14px;
          display: inline-block;
          &.universe {
            width: 25%;
            font-size: 18px;
            color: #333;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          &.duration {
            width: 20%;
          }
          &.background {
            width: 15%;
          }
        }
        .edit {
          position: absolute;
          top: 0;
          right: 0;
          color: #67C23A;
          z-index: 0;
          cursor: pointer;
        }
      }
      .hide-view {
        margin-top: 20px;
      }
    }
  }
</style>
