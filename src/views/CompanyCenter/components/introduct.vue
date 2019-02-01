<template>
  <div class="introduct">
    <div class="title">公司介绍</div>
    <div v-if="!showEdit" class="show_layer">
      <div class="introduction">
        fsdajklfsjadfasdfljasdklklfasdfsfsd
      </div>

      <div @click="show" class="edit-button">
        <i class="el-icon-edit-outline" />
        <span>编辑</span>
      </div>
    </div>
    <div v-if="showEdit" class="edit_layer">

      <el-form>
        <el-form-item label="公司介绍">
          <el-input
          v-model="introduce"
          type="textarea"
          class="textarea"
          maxlength="1000"
          :autosize="{ minRows: 4}"
          placeholder="请分段详细描述公司简介、企业文化等" />
        </el-form-item>
        <div class="hint">您还可以输入{{ lastCount }}个字</div>
      </el-form>
      <div class="operate">
        <span @click="submitIntroduct" class="save">保存并更新</span>
        <span @click="cancelEdit" class="cancel">取消</span>
      </div>
    </div>
  </div>
</template>

<script>
import mixin from './mixin'
export default {
  mixins: [mixin],
  data() {
    return {
      limit: 1000,
      introduce: ''
    }
  },
  computed: {
    lastCount() {
      return this.limit - this.introduce.length
    }
  },
  methods: {
    submitIntroduct() {

    },
    cancelEdit() {

    }
  }
}
</script>

<style lang='scss' scoped>
  .introduct {
    padding-bottom: 40px;
    border-bottom: 1px solid #EAEDF1;
    .show_layer {
      color: #999;
      font-size: 14px;
      line-height: 26px;
      .introduction {
        max-height: 50px;
        overflow-y: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
    .title {
      margin-bottom: 20px;
      color: #595959;
      font-size: 22px;
    }
    .edit_layer {
      padding: 25px 20px;
      background: #F9F9F9;
      .textarea {
        width: 88%;
      }
      .hint {
        text-align: right;
        font-size: 12px;
        color: #999999;
      }
    }
  }
</style>