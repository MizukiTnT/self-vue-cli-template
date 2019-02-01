<template>
  <div class="search-bar">
    <div class="search-wrapper">
      <div class="select-wrapper">
        <el-select v-model="proValue" placeholder="不限省份" @change="getCityData">
          <el-option
            v-for="item in province"
            :key="item.value"
            :label="item.name"
            :value="item.value"/>
        </el-select>
      </div>
      <transition name="el-fade-in">
        <div class="select-wrapper" v-if="cityOptions.length > 0">
          <el-select v-model="cityValue"
          @change="combineLocation" placeholder="不限城市">
            <el-option
              v-for="item in cityOptions"
              :key="item.value"
              :label="item.name"
              :value="item.value"/>
          </el-select>
        </div>
      </transition>
      <el-input v-model="keywords" type="text" class="search-item"/>
      <el-button @click="doSearch" class="do-search">搜索</el-button>
    </div>
  </div>
</template>

<script>
import { getProvinces, getCities } from '@/api/base'
import { uuid } from '@/utils'
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      keywords: '',
      cityOptions: [],
      cityValue: '',
      proValue: '',
      items: {}
    }
  },
  computed: {
    ...mapGetters([
      'province'
    ])
  },
  methods: {
    getCityData(val) {
      this.$store.dispatch('GetCities', val).then((res) => {
        // 判断是否有下一级市 有则赋值 没有则直接合并提交项
        if(res.info.length > 0) {
          this.cityOptions = res.info
        } else {
          Object.assign(this.items, { provinceId: this.proValue })
        }
      })
    },
    // 合并省市信息
    combineLocation() {
      Object.assign(this.items, { provinceId: this.proValue, cityId: this.cityValue })
    },
    // 合并并提交所有信息
    doSearch() {
      Object.assign(this.items, { name: this.keywords.trim() }, this.$store.state.search.searchItem, { key: uuid().substr(0, 8) })
      this.$router.push({
        path: '/search',
        query: this.items
      })
    }
  },
  beforeMount() {
    this.items = Object.assign(this.items, this.searchItem)
    if(this.province.length > 0) {
      return
    } else {
      this.$store.dispatch('GetProvinces')
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
          .el-input__inner {
            border: none;
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
