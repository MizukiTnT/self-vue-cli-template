<template>
  <div class="steps">
    <div
     v-for="(step, index) in steps"
     :class="{ visited: index <= currentStep }"
     class="step">
      <h4>{{ step.value }}</h4>
      <p>{{ step.label }}</p>
    </div>
    <div class="line">
      <div class="left"></div>
      <div class="right"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['currentStep'],
  data() {
    return {
      steps: [
        {
          value: '01',
          label: '填写联系方式'
        },
        {
          value: '02',
          label: '填写公司名称'
        },
        {
          value: '03',
          label: '验证公司邮箱'
        }
      ]
    }
  }
}
</script>

<style lang='scss' scoped>
  .steps {
    position: relative;
    display: flex;
    flex-wrap: nowrap;
    align-content: space-between;
    margin-bottom: 40px;
    .step {
      flex: 0 auto;
      position: relative;
      z-index: 1;
      text-align: center;
      &:nth-child(2) {
        position: absolute;
        left: 50%;
        transform: translate(-50%);
        flex: 1 100%;
      }
      &:nth-child(3) {
        position: absolute;
        right: 0;
      }
      &.visited {
        h4 {
          color: #01B363;
        }
        p {
          color: #5F5F5F;
        }
      }
      h4 {
        margin: 0;
        padding: 0 20px 12px 20px ;
        color: #BBB;
        font-size: 24px;
        user-select: none;
      }
      p {
        margin: 0;
        font-size: 14px;
        color: #BBB;
        user-select: none;
      }
    }
    .line {
      position: absolute;
      height: 1px;
      width: 100%;
      div {
        position: absolute;
        height: 100%;
        top: 14px;
        background-color: #D8D8D8;
      }
      .left {
        width: 24%;
        left: 79px;
      }
      .right {
        right: 79px;
        width: 24%;
      }
    }
  }
</style>