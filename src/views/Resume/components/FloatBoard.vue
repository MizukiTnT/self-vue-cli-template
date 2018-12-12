<template>
  <div class="scroll-bar" ref="wrapper" :class="{float: float}">
    <div class="navi">
      <div class="ver-line"></div>
      <ul>
        <li v-for="(item, index) in naviItem" :class="{active: index === activeIndex}">
          <span @click="scrollTo(item.id, index)">{{ item.label }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      naviItem: [
        {
          id: '#char',
          label: '基本信息'
        },
        {
          id: '#will',
          label: '求职意向'
        },
        {
          id: '#exp',
          label: '工作经验'
        },
        {
          id: '#edu-exp',
          label: '教育经历'
        },
        {
          id: '#self',
          label: '自我评价'
        }
      ],
      activeIndex: 0,
      floatLimit: 362,
      float: false,
      left: 0,
      scrollTop: 0
    }
  },
  methods: {
    scrollTo(id, index) {
      let el = document.querySelector(id)
      el.scrollIntoView()
      this.activeIndex = index
    }
  }
}
</script>

<style lang="scss" scoped>
.scroll-bar {
  position: sticky;
  top: 10px;
  margin-top: 15px;
  padding: 30px 35px;
  border: 1px solid #E0F1E7;
  .navi {
    position: relative;
    .ver-line {
      position: absolute;
      left: 0;
      top: 0;
      width: 1px;
      height: 100%;
      background-color: #D8D8D8;
    }
  }
  ul {
    li {
      margin-bottom: 42px;
      height: 20px;
      &:last-child {
        margin-bottom: 0;
      }
      &:hover {
        color: #00B35D;
        border-left: 3px solid #00B35D;
      }
      &.active {
        border-left: 3px solid #00B35D;
        span {
          color: #00B35D;
        }
      }
      span {
        position: absolute;
        left: 55px;
        color: #555;
        cursor: pointer;
        &:hover {
          color: #00B35D;
        }
      }
    }
  }

}
</style>
