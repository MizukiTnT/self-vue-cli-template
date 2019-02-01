<template>
  <div class="slef-evaluation">
    <div class="view" @mouseenter="hide = true" @mouseleave="hide = false">
      <div v-html="$store.state.resume.userInfo.selfEvaluation" class="content"/>
      <div v-show="hide" @click="show" class="edit_button">
        <i class="el-icon-edit-outline"/>
        <span>编辑</span>
      </div>
    </div>
    <div v-if="edit_show" class="hide-view">
      <el-input
        v-model="newSelf"
        type="textarea"
        placeholder="输入自我评价"
        :autosize="{ minRows: 5}"
        maxlength="300"/>
        <div class="control">
          <el-button :loading="loading" @click="submit" class="submit">保存并更新</el-button>
          <div @click="cancel" class="cancel">取消</div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['self'],
  data() {
    return {
      hide: false,
      edit_show: false,
      newSelf: '',
      loading: false
    }
  },
  methods: {
    cancel() {
      this.edit_show = false
      this.newSelf = this.self.replace(/<br\/>/g, "\n")
    },
    show() {
      this.newSelf = this.self.replace(/<br\/>/g, "\n")
      this.edit_show = true
    },
    submit() {
      this.loading = true
      this.$store.dispatch('SelfEvaluate', {
        self: this.newSelf.replace(/\r\n/g, '<br/>').replace(/\n/g, '<br/>').replace(/\s/g, ' ')
      }).then(() => {
        this.$store.dispatch('GetMyResume').then(() => {
          this.edit_show = false
          this.loading = false
        })
      }).catch(() => {
        this.loading = false
      })
    }
  }

}
</script>

<style lang="scss" scoped>
  .slef-evaluation {
    padding-left: 20px;
    margin-bottom: 50px;
    position: relative;
    .edit_button {
      position: absolute;
      top: 0;
      right: 0;
      color: #67C23A;
      z-index: 0;
      cursor: pointer;
    }
    .hide-view {
      margin: 30px 0;
    }
    .control {
      margin-top: 25px;
    }
  }
</style>
