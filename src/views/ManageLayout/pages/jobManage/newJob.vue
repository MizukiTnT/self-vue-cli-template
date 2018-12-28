<template>
  <div class="new-job">
    <div class="title">发布新职位</div>
    <div v-if="!ispassed" class="edit-job">
      <el-form
      :model="jobData"
      :rules="rules"
      ref="form">
        <el-form-item label="职位类别：" required prop="type">
          <el-select v-model="jobData.type" placeholder="请选择职位">
            <el-option
            v-for="work in expectWork"
            :key="work.value"
            :label="work.label"
            :value="work.value" />
          </el-select>
        </el-form-item>
        <el-form-item label="工作性质：" required prop="nature">
          <el-radio
          v-for="radio in radioOptions"
          :key="radio.value"
          :label="radio.value"
          v-model="jobData.nature">{{ radio.label }}</el-radio>
        </el-form-item>
        <el-form-item label="职位名称：" required prop="name">
          <el-input v-model="jobData.name" placeholder="请输入职位名称，如：产品经理" />
        </el-form-item>
        <el-form-item label="所属部门：" required prop="department">
          <el-input v-model="jobData.department" placeholder="请输入所属部门" />
        </el-form-item>
        <el-form-item label="月薪范围：" required prop="monthSalary">
          <el-select v-model="jobData.monthSalary">
            <el-option
              v-for="salary in salaryOptions"
              :key="salary.value"
              :value="salary.value"
              :label="salary.label"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="工作城市：" required>
          <!-- <el-row>
            <el-col :span="8">
              <el-form-item prop="provinceId">
                <el-select :model="jobData.provinceId" placeholder="省">
                  <el-option
                    v-for="province in provinces"
                    :key="province.id"
                    label="province.label"
                    value="province.value"
                  />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item prop="cityId">
                <el-select :model="jobData.cityId" placeholder="市">
                  <el-option
                    v-for="city in cities"
                    :key="city.id"
                    label="city.label"
                    value="city.value"
                  />
                </el-select>
              </el-form-item>
            </el-col>
          </el-row> -->
        </el-form-item>
        <el-form-item label="工作经验：" required prop="workYear">
          <el-select v-model="jobData.workYear">
            <el-option
              v-for="exp in expOptions"
              :key="exp.value"
              :value="exp.value"
              :label="exp.label"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="学历要求：" required prop="education">
          <el-select v-model="jobData.education">
            <el-option
              v-for="education in educationOptions"
              :key="education.value"
              :value="education.value"
              :label="education.label"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="职位诱惑：" required prop="describes">

        </el-form-item>

        <el-form-item label="工作地址：" required prop="address">
          <el-input v-model="jobData.address" placeholder="请输入详细的工作地址" class="input-large" />
        </el-form-item>

        <el-form-item label="职位描述：" required prop="describes">
          <div class="advice">(建议分条描述工作职责等。请勿输入公司邮箱、联系电话等外链，否则将自动删除)</div>
          <el-input v-model="jobData.describes" type="textarea" placeholder="填写" />
        </el-form-item>

      </el-form>
      <div class="operation">
        <el-button
          @click="submit"
          class="submit">发布职位</el-button>
        <span
          @click="resetForm"
          class="reset">重置</span>
      </div>
    </div>
    <div v-if="ispassed" class="result-page">
      <div class="img">
        <img src="@/assets/images/new-job-success.png" alt="">
      </div>
      <div class="navi">
        <div class="welc">恭喜你，职位发布成功！</div>
        <ul>
          <li>
            <router-link to="">预览职位</router-link>
          </li>
          <li>
            <router-link to="">继续发布新职位</router-link>
          </li>
          <li>
            <router-link to="">进入我的公司主页</router-link>
          </li>
        </ul>


      </div>
    </div>
  </div>
</template>

<script>
import { expectWork, radioOptions, salaryOptions, expOptions, educationOptions } from '@/mixin/options'
export default {
  mixins: [
    expectWork,
    radioOptions,
    salaryOptions,
    expOptions,
    educationOptions
  ],
  data() {
    return {
      rules: { // 表单校验规则
        type: [
          { required: true, message: '请选择职位类别', trigger: 'blur'}
        ],
        department: [
          { required: true, message: '请填写所在部门', trigger: 'blur'}
        ],
        name: [
          { required: true, message: '请填写职位名称', trigger: 'blur'}
        ],
        nature: [
          { required: true, message: '请选择工作性质', trigger: 'blur'}
        ],
        provinceId: [
          { required: true, message: '请选择工作省份', trigger: 'blur'}
        ],
        cityId: [
          { required: true, message: '请选择工作城市', trigger: 'blur'}
        ],
        address: [
          { required: true, message: '请填写工作地址', trigger: 'blur'}
        ],
        monthSalary: [
          { required: true, message: '请选择薪资', trigger: 'blur'}
        ],
        education: [
          { required: true, message: '请选择教育背景', trigger: 'blur'}
        ],
        workYear: [
          { required: true, message: '请选择工作年限', trigger: 'blur'}
        ],
        describes: [
          { required: true, message: '请填写职位描述', trigger: 'blur'}
        ],
        seduction: [
          { required: true, message: '请填写公司福利', trigger: 'blur'}
        ]
      },
      jobData: {
        type: '', // 职位类别
        department: '', // 职位部门
        name: '', // 职位名称
        nature: '1', // 工作性质
        provinceId: '', // 工作省份
        cityId: '', // 工作城市
        address: '', // 工作地址
        monthSalary: '', // 月薪
        education: '', // 学历
        workYear: '', // 工作年限
        describes: '', // 职位描述
        seduction: '' // 职位诱惑
      },
      ispassed: false // 是否发布成功
    }
  },
  methods: {
    submit() {
      this.$refs.form.validate((valid) => {
        if(valid) {
          this.ispassed = true
        } else {
          return false
        }
      })
    },
    resetForm() {
      this.$refs.form.resetFields()
    }
  }
}
</script>

<style lang='scss' scoped>
.new-job /deep/ {
  margin-bottom: 50px;
  .title {
    font-size: 24px;
    color: #595959;
    margin-bottom: 22px;
  }
  .edit-job {
    padding: 35px 35px 70px;
    background-color: #FAFAFA;
    .operation {
      margin-top: 48px;
      text-align: center;
      .submit {
        width: 140px;
        background-color: #30BE7A;
        color: #fff;
        border-radius: 17px;
      }
      .reset {
        margin-left: 50px;
        color: #aaa;
        cursor: pointer;
      }
    }
  }
  .result-page {
    padding: 85px 0 90px;
    background: #FAFAFA;
    display: flex;
    align-items: center;
    justify-content: center;
    .img {
      margin-right: 15px;
    }
    .navi {
      .welc {
        font-size: 22px;
        color: #444444;
      }
      ul {
        li {
          margin-bottom: 5px;
          &:last-child {
            margin-bottom: 0;
          }
          a {
            color: #888888;
            &:hover {
              color: #00B35D;
            }
          }
        }
      }
    }
  }

  .el-radio__input.is-checked .el-radio__inner {
    border-color: #00B35D;
    background: #00B35D;
  }
  .el-radio__input.is-checked+.el-radio__label {
    color: #00B35D;
  }
  .el-input {
    width: 262px;
    &.input-large {
      width: 375px;
    }
    .el-input__inner {
      border-radius: 0;
    }

  }
  .el-textarea__inner {
    height: 120px;
  }
}
</style>