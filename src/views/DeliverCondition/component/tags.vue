<template>
  <div class="tags-wrapper">
    <router-link to="" v-for="company in tags" :key="company.id">
      <span>{{ company.name }}</span>
      <i class="el-icon-close" @click="deleteTag(company.id)"/>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ['tags'],
  methods: {
    deleteTag(id) {
      this.$emit('deletTag', id)
    }
  }
}
</script>

<style lang="scss" scoped>
  .tags-wrapper {
    margin: 20px 0 40px;
    display: flex;
    flex-wrap: wrap;
    a {
      margin: 10px 10px 0 0;
      background: #00b39e99;
      padding: 5px 10px;
      font-size: 14px;
      &:hover {
        background-color: #00b39e;
      }
      span {
        color: #fff;
        margin-right: 35px;
      }
      i {
        color: #fff
      }
    }
  }
</style>
