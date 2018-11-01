<template>
  <div class="search-bar">
    <div class="search-wrapper">
      <div class="select-wrapper">
        <el-select v-model="proValue" placeholder="不限省份" @change="getCityData">
          <el-option
            v-for="item in proOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"/>
        </el-select>
        <img class="i-dropdown" src="@/assets/images/dropdown.png">
      </div>
      <div class="select-wrapper">
        <el-select v-model="cityValue" placeholder="不限城市">
          <el-option
            v-for="item in cityOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"/>
        </el-select>
        <img class="i-dropdown" src="@/assets/images/dropdown.png">
      </div>
      <el-input type="text" class="search-item"/>
      <el-button class="do-search">搜索</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: '',
      cityOptions: [
        {
          value: 111000,
          label: '萍乡市'
        },
        {
          value: 111001,
          label: '上饶'
        },
        {
          value: 111003,
          label: '南昌市'
        },
        {
          value: 111004,
          label: '景德镇市'
        }
      ],
      cityValue: '',
      proOptions: [
        {
          value: 10000,
          label: '江西'
        },
        {
          value: 10001,
          label: '四川'
        },
        {
          value: 10002,
          label: '重庆'
        }
      ],
      proValue: ''
    }
  },
  methods: {
    getProvinceData() {},
    getCityData(val) {
      console.log(val)
    }
  }
}
</script>

<style lang="scss">
  .search-bar {
    display: flex;
    height: 136px;
    background-color: #F2F7F4;
    justify-content: center;
    align-items: center;
    .search-wrapper {
      width: 920px;
      height: 50px;
      display: flex;
      background-color: #fff;
      border: 1px solid #E4E4E4;
      align-items: center;
      .select-wrapper {
        position: relative;
        display: inline-block;
        cursor: pointer;
        .el-select {
          width: 112px;
          .el-input__inner {
            border: none;
          }
          .el-input__suffix {
            display: none;
          }
        }
        .i-dropdown {
          position: absolute;
          top: 12px;
          right: 10px;
        }
      }
      .search-item {
        height: 100%;
        .el-input__inner{
          height: 100%;
          border: none;
          font-size: 18px;
        }
      }
      .do-search {
        width: 150px;
        height: 50px;
        border: none;
        background-color: #00B35D;
        color: #fff;
        border-radius: 0;
        font-size: 18px;
      }
    }
  }

</style>
