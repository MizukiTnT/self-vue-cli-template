<template>
  <div class="locations">
    <ul>
      <li>
        <span class="label">城市:</span>
        <span v-show="!showEdit" class="cur">xxx</span>
        <span v-show="showEdit" class="edit">
          <el-row>
            <el-col :span="11">
              <el-select v-model="province" placeholder="省">
                <el-option value="1"
                label="px"/>
              </el-select>
            </el-col>
            <el-col :offset="2" :span="11">
              <el-select v-model="city" placeholder="市">
                <el-option value="2"
                label="x"/>
              </el-select>
            </el-col>
          </el-row>
        </span>
      </li>
      <li>
        <span class="label">规模:</span>
        <span v-show="!showEdit" class="cur">222</span>
        <span v-show="showEdit" class="edit">
          <el-select v-model="size" placeholder="规模">
            <el-option v-for="size in companySizeOptions"
            :key="size.value"
            :value="size.value"
            :label="size.label"/>
          </el-select>
        </span>
      </li>
      <li>
        <span class="label">网址:</span>
        <span v-show="!showEdit" class="cur">232j</span>
        <span v-show="showEdit" class="edit">
          <el-input placeholder="请输入网址" v-model="website">
            <template slot="prepend">Http://</template>
          </el-input>
        </span>
      </li>
    </ul>
    <div class="title">发展阶段</div>
    <div class="state">
      <div class="company_state">
        <span class="label">目前阶段:</span>
        <span v-show="!showEdit" class="cur">rewrw</span>
        <span v-show="showEdit" class="edit">
          <el-select v-model="state" placeholder="阶段">
            <el-option v-for="type in companyTypeOptions"
            :key="type.value"
            :value="type.value"
            :label="type.label"/>
          </el-select>
        </span>
      </div>
      <div v-if="showEdit" class="operate">
        <span class="save">保存并更新</span>
        <span class="cancel">取消</span>
      </div>
    </div>
    <div v-if="!showEdit" @click="show" class="edit-button">编辑</div>
  </div>
</template>

<script>
import mixin from './mixin'
import { companyTypeOptions, companySizeOptions } from '@/mixin/options'
export default {
  mixins: [ mixin, companyTypeOptions, companySizeOptions ],
  data() {
    return {
      province: '',
      city: '',
      size: '',
      website: '',
      state: ''
    }
  }
}
</script>

<style lang='scss' scoped>
  .locations {
    position: relative;
    &:hover {
      .edit-button {
        display: block;
      }
    }
    ul {
      padding: 13px 20px;
      border: 1px solid #e4e4e4;
      transition: all .25s;
      li {
        padding: 5px 0;
        display: table;
        margin-bottom: 5px;
        >span {
          display: table-cell;
          line-height: 40px;
          &.label {
            white-space: nowrap;
            width: 1px;
            padding-right: 10px;
          }
        }
      }
    }
    .title {
      margin-bottom: 20px;
      color: #595959;
      font-size: 22px;
    }
    .state {
      background-color: #F9F9F9;
      padding: 13px 20px;
      .company_state {
        display: table;
        margin-bottom: 30px;
        span {
          display: table-cell;
        }
        .label {
          width: 1px;
          padding-right: 10px;
          white-space: nowrap;
        }
      }
      .operate {
        margin: 10px 0;
        .save {
          margin-right: 20px;
          padding: 7px 17px;
          background: #30BE7A;
          border-radius: 17px;
          color: #fff;
          cursor: pointer;
          &:hover {
            background-color: #30be7ad9;
          }
        }
        .cancel {
          font-size: 14px;
          color: #AAA;
          cursor: pointer;
        }
      }
    }
    .edit-button {
      display: none;
      position: absolute;
      right: 20px;
      top: 15px;
      font-size: 14px;
      cursor: pointer;
      color: #999;
    }
  }
</style>