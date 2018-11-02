<template>
  <el-row :gutter="20">
    <el-col :span="17">
      <spread-board/>
    </el-col>
    <el-col :span="7">
      <login></login>
    </el-col>
  </el-row>
</template>

<script>
import SpreadBoard from './SpreadBoard'
import Login from '@/components/Login'
export default {
  components: {
    SpreadBoard,
    Login
  }
}
</script>

<style lang="scss" scoped>

</style>
