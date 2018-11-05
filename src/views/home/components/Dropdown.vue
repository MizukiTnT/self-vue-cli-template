<template>
  <div class="dropdown">
    <a v-for="item in dropList" :key="item.url" class="item" href="item.url" target="_blank">{{ item.name }}</a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dropList: [
        {
          name: '网贷天眼',
          url: 'https://www.p2peye.com/'
        },
        {
          name: '网贷之家',
          url: 'https://www.wdzj.com/'
        },
        {
          name: '网贷东方',
          url: 'http://www.wangdaidongfang.com/'
        },
        {
          name: '网贷互联',
          url: 'http://www.wd361.com/'
        },
        {
          name: '金晴理财',
          url: 'http://www.dianpifa.com/'
        },
        {
          name: '51网贷',
          url: 'http://www.51wangdai.com/'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .dropdown {
    margin-top: 10px;
    .item {
      margin-right: 20px;
      font-size: 14px;
      color: #646667;
    }
  }
</style>
