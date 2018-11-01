<template>
  <div class="spread-board">
    <el-row :gutter="20">
      <el-col :span="6">
        <div class="board-controller">
          <ul>
            <li v-for="item in listData" class="" @mouseenter="showLayer(item.value)">
              <span>{{ item.text }}</span>
              <i class="el-icon-arrow-right"/>
            </li>

          </ul>
        </div>
      </el-col>
      <el-col :span="18">
        <div class="board-stage">
          <div class="board-swiper">
            <el-carousel :interval="5000" indicator-position="outside" arrow="hover">
              <el-carousel-item v-for="item in 4" :key="item">
                <h3>{{ item }}</h3>
              </el-carousel-item>
            </el-carousel>
          </div>
          <div class="board-layer">

          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listData: [
        {
          text: '互联网农业',
          value: 0
        },
        {
          text: '金融',
          value: 1
        },
        {
          text: '研发生产',
          value: 2
        },
        {
          text: '销售管理',
          value: 3
        },
        {
          text: '人事行政',
          value: 4
        },
        {
          text: '服务业',
          value: 5
        },
        {
          text: '服务业',
          value: 6
        }
      ]
    }
  },
  methods: {
    showLayer() {
      console.log(1)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
