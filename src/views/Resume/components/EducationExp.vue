<template>
  <div class="educate-exp">
    <div class="wrapper" @mouseenter="hide = true" @mouseleave="hide = false">
      <!-- 显示层 -->
      <div class="view">
        <div class="universe">{{ education.school }}</div>
        <div class="duration">{{ education.major }}</div>
        <div class="background">{{ education.education | educateFilter}}</div>
        <div class="specialty">
          <div class="time">
            {{ education.startTime | timeFilter }} - {{ education.endTime | timeFilter }}
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
          :model="modifiedEducation"
          ref="education"
          :rules="educationRule"
          label-width="95px"
          label-position="left"
          >
            <el-form-item label="学校名称" prop="school">
              <el-input v-model="modifiedEducation.school"
              placeholder="学校名称"/>
            </el-form-item>
            <el-form-item label="学历" prop="education">
              <el-select v-model="modifiedEducation.education" placeholder="选择学历">
                <el-option v-for="educate in educationOptions" :label="educate.label" :value="educate.value"
                :key="educate.label"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="就读时间" prop="linkTime">
            <el-date-picker
              v-model="modifiedEducation.linkTime"
              placeholder="就读时间"
              format="yyyy 年 MM 月"
              type="daterange"
              value-format="yyyy-MM"
              />
          </el-form-item>
            <el-form-item label="专业名称" prop="major">
              <el-input v-model="modifiedEducation.major"
              type="text"
              placeholder="专业名称"/>
            </el-form-item>
          </el-form>
          <div class="control">
            <el-button :loading="loading" @click="submit" class="submit">保存并更新</el-button>
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
import { educateFilter } from '@/mixin/filters'
import { educationOptions } from '@/mixin/options'

export default {
  mixins: [educationOptions, educateFilter],
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
      loading: false,
      educationRule: {
        school: [{ required: true, message: '请填写毕业院校', trigger: ['blur', 'change'] }],
        education: [{ required: true, message: '请选择学历', trigger: ['blur', 'change'] }],
        major: [{ required: true, message: '请填写专业', trigger: ['blur', 'change'] }],
        linkTime: [{ required: true, message: '请选择就读时间', trigger: ['blur', 'change'] }],
      },
    }
  },
  computed: {
    show() {
      return this.$store.state.resume.educationActive === this.index
    }
  },
  methods: {
    cancelModify() {
      this.$store.dispatch('ChangeEducationActive', '')
      this.initData()
      this.loading = false
    },
    showHidden() {
      this.$store.dispatch('ChangeEducationActive', this.index)
    },
    submit() {
      this.$refs.education.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('UpdateEducation', {
            school: this.modifiedEducation.school,
            education: this.modifiedEducation.education,
            startTime: this.modifiedEducation.linkTime[0],
            endTime: this.modifiedEducation.linkTime[1],
            major: this.modifiedEducation.major,
            id: this.education.id
          }).then(res => {
            this.$store.dispatch('GetMyResume').then(() => {
              this.cancelModify()
            })
          },err => {
            this.loading = false
          })
        } else {
          return  false
        }
      })
    },
    initData() {
      this.modifiedEducation = {
        school: this.education.school,
        education: this.education.education,
        linkTime: [ this.education.startTime, this.education.endTime ],
        major: this.education.major
      }
    }
  },
  beforeMount() {
    this.initData()
  },
  filters: {
    timeFilter(time) {
      let parseTime = new Date(time).getTime()
      parseTime = new Date(parseTime)
      let y = parseTime.getFullYear()
      let m = parseTime.getMonth() + 1
      return y + "." + m
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
