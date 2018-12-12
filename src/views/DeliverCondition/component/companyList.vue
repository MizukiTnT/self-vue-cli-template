<template>
  <ul class="company-list">
    <li v-for="company in searchResult" :key="company.id" @click="confirm(company)">{{ company.name }}</li>
  </ul>
</template>

<script>
export default {
  props: ['searchResult'],
  methods: {
    confirm(company) {
      this.$confirm(`是否将${company.name}加入屏蔽名单`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'info'
      }).then(() => {
        this.$emit('addShieldCompany', company.id)
      })
      .catch(() => {})
    }
  }
}
</script>

<style lang="scss" scoped>
  .company-list {
    li {
      padding: 7px;
      font-size: 16px;
      cursor: pointer;
      transition: all .15s;
      &:hover {
        background-color: #eee;
        color: #00B35D ;
      }
    }
  }
</style>
