<template>
  <div class="slef-evaluation">
    <div class="view" @mouseenter="hide = true" @mouseleave="hide = false">
      <div v-html="self" class="content"/>
      <div v-show="hide" @click="edit_show = true" class="edit_button">
        <i class="el-icon-edit-outline"/>
        <span>编辑</span>
      </div>
    </div>
    <div v-if="edit_show" class="hide-view">
      <el-input
        type="textarea"
        placeholder="输入自我评价"
        maxlength="300"/>
        <div class="control">
          <div @click="" class="submit">保存并更新</div>
          <div @click="edit_show = false" class="cancel">取消</div>
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
      edit_show: false
    }
  }

}
</script>

<style lang="scss" scoped>
  .slef-evaluation {
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
