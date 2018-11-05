<template>
  <div class="hr-wrapper">
    <el-table
      :data="tableList"
      border
      max-height="482"
      header-cell-class-name="table-head-bg"
      class="table"
      style="width: 100%">
      <el-table-column
        prop="name"
        label="姓名">
      </el-table-column>
      <el-table-column
        prop="gender"
        label="性别">
      </el-table-column>
      <el-table-column
        prop="age"
        label="年龄">
      </el-table-column>
      <el-table-column
        prop="exp"
        label="工作年限">
      </el-table-column>
      <el-table-column
        prop="scholar"
        label="学历">
      </el-table-column>
      <el-table-column
        prop="will"
        label="意向职位">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  props: {
    tableList: {
      type: Array,
      // required: true,
      default: [
        {
          name: '聂航斌',
          gender: '男',
          age: '30',
          exp: '10年以上',
          scholar: '本科',
          will: '市场'
        },
        {
          name: '聂航斌',
          gender: '男',
          age: '30',
          exp: '10年以上',
          scholar: '本科',
          will: '市场'
        },
        {
          name: '聂航斌',
          gender: '男',
          age: '30',
          exp: '10年以上',
          scholar: '本科',
          will: '市场'
        },
        {
          name: '聂航斌',
          gender: '男',
          age: '30',
          exp: '10年以上',
          scholar: '本科',
          will: '市场'
        },
        {
          name: '聂航斌',
          gender: '男',
          age: '30',
          exp: '10年以上',
          scholar: '本科',
          will: '市场'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
  .hr-wrapper {
    .table {
      margin-top: 15px;
      .table-head-bg {
        background-color: #FAFAFA;
      }
    }

  }
</style>
