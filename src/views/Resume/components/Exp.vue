<template>
  <div class="exper">
    <div class="wrapper" @mouseenter="hide = true" @mouseleave="hide = false">
      <!-- 显示层 -->
      <div v-if="index != 0" class="view">
        <div class="companyname">{{ experData.companyName }}</div>
        <div class="hover">
          <div :class="{ hide : hide }" class="time">
            {{ experData.startTime | timeFilter }} - {{ experData.endTime | timeFilter }}
          </div>
          <div @click="showHidden" class="edit">
            <i class="el-icon-edit-outline"/>
            <span>编辑</span>
          </div>
        </div>
        <div class="jobname">{{ experData.positionName }}</div>
        <div class="desc">{{ experData.describes }}</div>
      </div>
      <!-- 显示层 -->
      <!-- 编辑层 -->
      <transition name="el-fade-in-linear">
        <div v-show="show" class="hide-view">
          <el-form
          :model="modifiedExp"
          ref="charact"
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
            <el-form-item label="在职时间" prop="startTime">
            <el-date-picker
              v-model="modifiedExp.linkTime"
              placeholder="选择范围"
              format="yyyy 年 M 月"
              type="daterange"
              value-format="timestamp"
              />
          </el-form-item>
            <el-form-item label="工作描述" prop="describes">
              <el-input v-model="modifiedExp.describes"
              type="textarea"
              :maxlength="500"
              :minlength="10"
              autosize
              placeholder="工作描述"/>
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
    experData: {
      type: Object
    },
    index: {
      required: true
    }
  },
  data() {
    return {
      modifiedExp: {},
      hide: false
    }
  },
  computed: {
    show() {
      return this.$store.state.resume.active === this.index
    }
  },
  methods: {
    cancelModify() {
      this.$store.dispatch('ChangeActive', '')
      this.modifiedExp = JSON.parse(JSON.stringify(this.experData))
    },
    showHidden() {
      this.$store.dispatch('ChangeActive', this.index)
    }
  },
  beforeMount() {
    this.modifiedExp = JSON.parse(JSON.stringify(this.experData))
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
  .exper {
    margin-bottom: 20px;
    .wrapper {
      margin: 0 0 35px;
      .view {
        position: relative;
        .companyname {
          font-size: 20px;
        }
        .hover {
          position: absolute;
          right: 0;
          top: 0;
          width: 30%;
          .edit {
            position: absolute;
            top: 0;
            right: 0;
            color: #67C23A;
            z-index: 0;
            cursor: pointer;
          }
          .time {
            position: absolute;
            top: 0;
            right: 0;
            color: #909399;
            font-size: 14px;
            background-color: #fff;
            z-index: 1;
            &.hide {
              display: none;
            }
          }
        }
        .jobname {
          margin-top: 10px;
          color: #9C99A5;
          font-size: 16px;
        }
        .desc {
          margin-top: 15px;
          color: #595959;
          font-size: 14px;
        }
      }
      .hide-view {
        margin-top: 20px;
      }
    }
  }
</style>
