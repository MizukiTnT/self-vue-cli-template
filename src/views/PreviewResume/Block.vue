<template>
  <div class="block">
    <div class="title">{{ title }}</div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
  .block {
    margin-bottom: 80px;
    .title {
      margin-bottom: 30px;
      padding-left: 15px;
      border-left: 6px solid #00B35D;
      font-size: 24px;
      color: #262A2F;
    }
  }
</style>
