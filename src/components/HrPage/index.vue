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
        label="姓名">
        <template slot-scope="scope">
          <router-link :to="'preview/' + scope.row.id">{{ scope.row.name }}</router-link>
        </template>
      </el-table-column>
      <el-table-column
        prop="sex"
        label="性别"
        :formatter="formatterSex"
      >
      </el-table-column>
      <el-table-column
        prop="age"
        label="年龄"
        :formatter="formatterAge">
      </el-table-column>
      <el-table-column
        prop="workYear"
        label="工作年限"
        :formatter="formatterYear">
      </el-table-column>
      <el-table-column
        prop="education"
        label="学历"
        :formatter="formatterEducation">
      </el-table-column>
      <el-table-column
        prop="expectPositionName"
        label="意向职位">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { sexFilter, expFilter, timeParser} from '@/mixin/filters'
import bus from '@/utils/bus'
export default {
  data() {
    return {
      formatterDate: []
    }
  },
  props: {
    tableList: {
      required: true
    }
  },
  methods: {
    formatterSex(row) {
      switch(row.sex) {
        case 1:
        return '女';
        break;
        case 2:
        return '男';
        break
        default:
        return ''
      }
    },
    formatterAge(row) {
      let birth = new Date(row.birthDate).getTime()
      let now = new Date().getTime()
      let age = new Date(now - birth).getFullYear()
      return new Date().getFullYear() - age
    },
    formatterYear(row) {
      switch(row.workYear) {
        case 1:
        return '应届毕业生';
        break;
        case 2:
        return '1-2年';
        break
        case 3:
        return '3-4年';
        break;
        case 4:
        return '5-9年';
        break
        case 5:
        return '10年以上';
        break;
        default:
        return ''
      }
    },
    formatterEducation(row) {
      switch(row.education) {
        case 1:
        return '大专';
        break;
        case 2:
        return '本科';
        break
        case 3:
        return '硕士';
        break;
        case 4:
        return '博士';
        break
        default:
        return '高中/高中以下'
      }
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
