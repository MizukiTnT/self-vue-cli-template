<template>
  <div class="labels">
    <span
     v-for="(label, index) in labels"
     class="label">{{ label }}
      <i
       @click="deleteLabel(index)"
       class="el-icon-close close"/>
     </span>
  </div>
</template>

<script>
export default {
  props: ['labels'],
  methods: {
    deleteLabel(index) {
      this.$store.commit('DELETE_LABEL', index)
    }
  }
}
</script>

<style lang='scss' scoped>
  .labels {
    margin-bottom: 20px;
    .label {
      display: inline-block;
      margin: 0 15px 10px 0;
      padding: 0 20px;
      font-size: 16px;
      background-color: #10B76C;
      color: #fff;
      border-radius: 4px;
      position: relative;
      cursor: pointer;
      &:hover {
        .close {
          display: inherit;
        }
      }
      .close {
        display: none;
        font-size: 11px;
        color: #fff;
        position: absolute;
        right: 3px;
        top: 3px;
      }
    }
  }
</style>