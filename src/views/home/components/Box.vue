<template>
  <div class="box-wrapper">
    <router-link to="" v-for="(item, index) in boxList" :key="index" class="box">
      <span to="" class="job">{{ item.job }}</span>
      <span>{{ item.company }}</span>
      <span>{{ item.location }}</span>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    boxList: {
      required: true,
      type: Array,
      default: [
        {
          links: '',
          job: '产品经理',
          company: '江西来融金服',
          location: '萍乡'
        },
        {
          links: '',
          job: '产品经理',
          company: '江西来融金服',
          location: '萍乡'
        },
        {
          links: '',
          job: '产品经理',
          company: '江西来融金服',
          location: '萍乡'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .box-wrapper {
    margin-top: 15px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    .box {
      height: 68px;
      margin: 0 1% 14px 0;
      padding: 0 20px;
      display: flex;
      flex: 0 0 32.33%;
      border: 1px solid#E4E4E4;
      line-height: 68px;
      transition: all .5s;
      align-items: center;
      &:hover {
        border-color: #00B35D;
      }
      &.box:nth-child(3n) {
        margin-right: 0;
      }
      >span {
        display: inline-block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        &:first-child {
          width: 120px;
          font-size: 17px;
        }
        &:nth-child(2) {
          width: 149px;
          color: #363636;
          font-size: 13px;
        }
        &:last-child {
          width: 35px;
          font-size: 12px;
          text-align: center;
          color: #696969;
        }
      }
    }
  }
</style>
