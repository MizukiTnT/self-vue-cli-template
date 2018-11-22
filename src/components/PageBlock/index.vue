<template>
  <div class="dec-title">
    <div class="title">
      <el-row type="flex" align="middle">
        <el-col :span="4" class="content">
          {{ title }}
        </el-col>
        <el-col :span="20" class="line"></el-col>
      </el-row>
      <div class="dec"></div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      require: true
    }
  }
}
</script>

<style lang="scss" scoped>
  .dec-title {
    margin: 35px 0 20px;
    padding-bottom: 30px;
    .title {
      margin-bottom: 35px;
      .content {
        color: #4A4A4A;
        font-size: 18px;
      }
      .line {
        height: 2px;
        background-color: #F0F0F0;
      }
      .dec {
        margin-top: 7px;
        width: 26px;
        height: 3px;
        background-color: #00B35D;
      }
    }
  }
</style>
