<template>
  <div class="spread-board">
    <el-row :gutter="20">
      <el-col :span="6">
        <div class="board-controller">
          <ul>
            <li v-for="item in listData" :key="item.value" @mouseenter="showLayer(item.value)" @mouseleave="closeLayer">
              <span>{{ item.text }}</span>
              <i class="el-icon-arrow-right"/>
            </li>

          </ul>
        </div>
      </el-col>
      <el-col :span="18">
        <div class="board-stage">
          <div class="board-swiper">
            <el-carousel :interval="5000" height="370px" indicator-position="outside" arrow="never">
              <el-carousel-item v-for="item in 4" :key="item">
                <h3>{{ item }}</h3>
              </el-carousel-item>
            </el-carousel>
          </div>
          <transition name="el-fade-in">
            <div class="board-layer" v-show="show">
              <ul class="type-wrapper">
                <li v-for="item in layerData" :key="item.title" class="type">
                  <h4>{{ item.title }}</h4>
                  <ul class="item-wrapper">
                    <li v-for="(i, index) in item.list" :key="i.id + index" class="items">
                      <router-link to="">{{ i.name }}</router-link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </transition>
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
      ],
      layerData: [
        {
          title: '家电',
          list: [
            {
              name: '电视',
              id: 12354
            },
            {
              name: '电视',
              id: 12354
            },
            {
              name: '电视',
              id: 12354
            },
            {
              name: '电视',
              id: 12354
            }
          ]
        },
        {
          title: '电脑',
          list: [
            {
              name: '电视',
              id: 12354
            },
            {
              name: '电视',
              id: 12354
            },
            {
              name: '电视',
              id: 12354
            },
            {
              name: '电视',
              id: 12354
            }
          ]
        },
        {
          title: '手机',
          list: [
            {
              name: '电视',
              id: 12354
            },
            {
              name: '电视',
              id: 12354
            },
            {
              name: '电视',
              id: 12354
            },
            {
              name: '电视',
              id: 12354
            }
          ]
        },
        {
          title: '平板',
          list: [
            {
              name: '电视',
              id: 12354
            },
            {
              name: '电视',
              id: 12354
            },
            {
              name: '电视',
              id: 12354
            },
            {
              name: '电视',
              id: 12354
            }
          ]
        }
      ],
      show: false
    }
  },
  methods: {
    showLayer(value) {
      this.show = true
    },
    closeLayer() {
      this.show = false
    }
  }
}
</script>

<style lang="scss" scoped>
  .spread-board {
    padding: 23px 0;
    .board-controller {
      ul {
        li {
          position: relative;
          padding: 15px 0;
          color: #4B4742;
          font-size: 16px;
          cursor: pointer;
          i {
            float: right;
          }
        }
      }
    }
    .board-stage {
      position: relative;
      height: 410px;
      .board-swiper {
        height: 100%;
      }
      .board-layer {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        padding: 15px;
        border: 2px solid #556675;
        z-index: 10;
        background-color: #fff;
        .type-wrapper {
          .type {
            margin-bottom: 10px;
            h4 {
              margin: 0 10px 0 0;
              color: #556675;
              font-size: 16px;
            }
            .item-wrapper {
              .items {
                display: inline-block;
                margin: 8px 5px;
                a {
                  font-size: 13px;
                }
                &.hot {
                  color: #fd5353;
                }
              }
            }
          }
        }
      }
    }
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
