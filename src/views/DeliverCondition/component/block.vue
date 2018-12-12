<template>
  <div class="deliver">
    <div class="wrapper">
      <div class="body">
        <div class="title">{{ title }}</div>
        <slot name="fresh"/>
        <slot/>
        <slot name="pagination"/>
      </div>
      <div class="aside">
        <aside-block :uid="uid" :abandonCompanyCount="abandonCompanyCount"
        :likeCompanyCount="likeCompanyCount" />
      </div>
    </div>
  </div>
</template>

<script>
import AsideBlock from '@/components/AsideBlock'
export default {
  props: ['title'],
  data() {
    return {
      abandonCompanyCount: 2,
      likeCompanyCount: 3,
      uid: '321312'
    }
  },
  components: {
    AsideBlock
  }
}
</script>

<style lang="scss" scoped>
  .deliver /deep/ {
    min-height: inherit;
    background-color: #F5F5F5;
    .el-tabs__item {
      font-size: 16px;
      height: 45px;
      &:hover {
        color: #15B86A;
      }
    }
    .el-tabs__item.is-active {
      color: #15B86A;
    }
    .el-tabs__active-bar {
      background-color:#15B86A;
    }
    .wrapper {
      display: flex;
      width: 1100px;
      margin: 0 auto;
      padding: 20px 0;
      .body {
        position: relative;
        height: 100%;
        padding: 45px 65px;
        margin-right: 15px;
        flex: 0 1 75%;
        background-color: #fff;
        .title {
          margin-bottom: 50px;
          font-family: PingFangSC-Medium;
          font-size: 26px;
          color: #444444;
          letter-spacing: 0.32px;
        }
      }
      .aside {
        position: sticky;
        top: 59px;
        height: 100%;
        flex: 0 0 25%;
      }
    }
  }
</style>
