<template>
  <div class="login-block">
    <div class="container">
      <div class="advertise">
        <slot name="adv"></slot>
      </div>
      <div class="operations">
        <slot name="operation"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .login-block /deep/ {
    width: 100%;
    .is-checked .el-checkbox__inner {
      background-color: #00B35D;
      border-color: #00B35D;
    }
    .el-checkbox__inner:hover {
      border-color: #00B35D;
    }
    .el-input-group__append {
      background-color: #fff;
      cursor: pointer;
    }
    .code {
      color: #C0C0C0;
      &:hover {
        color: #00B35D;
      }
    }
    .icon {
      font-size: 22px;
      cursor: pointer;
    }
    .container {
      display: flex;
      width: 1100px;
      padding: 60px;
      margin: 0 auto;
      .advertise {
        width: 564px;
        height: 458px;
        margin-right: 40px;
      }
      .operations {
        width: 362px;
      }
    }
  }
</style>
