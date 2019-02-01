<template>
  <div class="exper">
    <div class="wrapper" @mouseenter="hide = true" @mouseleave="hide = false">
      <!-- 显示层 -->
      <div class="view">
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
        <div class="desc" v-html="experData.describes"></div>
      </div>
      <!-- 显示层 -->
      <!-- 编辑层 -->
      <transition name="el-fade-in-linear">
        <div v-show="show" class="hide-view">
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
              autosize
              placeholder="工作描述"/>
            </el-form-item>
          </el-form>
          <div class="control">
            <el-button @click="submit" :loading="loading" class="submit">保存并更新</el-button>
            <div @click="cancelModify" class="cancel">取消</div>
          </div>
        </div>
      </transition>
      <!-- 编辑层 -->
    </div>
  </div>
</template>

<script>
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
      hide: false,
      loading: false,
      expRules: {
        companyName: [{ required: true, message: '请填写公司名称', trigger: ['blur', 'change'] }],
        positionName: [{ required: true, message: '请填写职位名称', trigger: ['blur', 'change'] }],
        linkTime: [{ required: true, message: '请选择在职时间', trigger: ['blur', 'change'] }],
        describes: [{ required: true, message: '请填写工作描述', trigger: ['blur', 'change'] }],
      },
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
      this.initData()
    },
    showHidden() {
      this.$store.dispatch('ChangeActive', this.index)
    },
    initData() {
      this.modifiedExp = {
        companyName:  this.experData.companyName,
        positionName:   this.experData.positionName,
        linkTime: [ this.experData.startTime,   this.experData.endTime ],
        describes: this.experData.describes.replace(/<br\/>/g, "\n")
      }
    },
    submit() {
      this.$refs.exper.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('UpdateExp', {
            companyName: this.modifiedExp.companyName,
            positionName: this.modifiedExp.positionName,
            startTime: this.modifiedExp.linkTime[0],
            endTime: this.modifiedExp.linkTime[1],
            describes: this.modifiedExp.describes.replace(/\r\n/g, '<br/>').replace(/\n/g, '<br/>').replace(/\s/g, ' '),
            id: this.experData.id
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
