<template>
  <div class="icon-wrapper">
    <div v-for="item in welfare" :key="item" class="icon">{{ item }}</div>
  </div>
</template>

<script>
export default {
  props: {
    welfare: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
  .icon {
    display: inline-block;
    margin-right: 15px;
    padding: 4px 10px;
    font-size: 14px;
    border: 1px solid #efefef;
    user-select: none;
  }
</style>
