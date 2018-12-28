<template>
  <div class="navi-box">
    <div class="title">{{ navis.title }}</div>
    <ul>
      <li v-for="route in navis.nav" :class="{active: route.name === currentRoute}" :key="route.path">
        <router-link :to="{name: route.name}">{{ route.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['navis'],
  computed: {
    currentRoute() {
      return this.$route.name
    }
  }
}
</script>

<style lang='scss' scoped>
  .navi-box {
    border:1px solid #EAEAEA;
    background-color: #FAFAFA;
    color: #4B4B4B;
    .title {
      padding: 15px 20px;
      font-size: 16px;
      font-weight: 600;
      border-bottom: 1px solid #F2F2F2;
    }
    ul {
      li {
        padding: 10px 30px;
        font-size: 14px;
        &:hover {
          background: #F2F2F2;
          a {
            color: #00B35D;
          }
        }
        &.active {
          background: #F2F2F2;
          a {
            color: #00B35D;
          }
        }
        a {
          color: #4B4B4B;
        }
      }
    }
  }
</style>