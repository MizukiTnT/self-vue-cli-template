<template>
  <div class="charact">
    <div class="wrapper">
      <!-- 显示层 -->
      <div v-show="!hiddenShow">
        <div class="view">
          <div class="img-wrapper">
            <img :src="avatar" alt="">
          </div>
          <div class="content-wrapper" >
            <div  class="name">
              <div v-if="info.name">
                <span>{{ info.name }}</span>
                <span>更新时间: 2018-06-07</span>
              </div>
              <div v-else class="placeholder"></div>
            </div>
            <div  class="char">
              <div v-if="info.sex">
                <span>{{ info.sex | sexFilter }}</span>
                <span>{{ info.birthDate }}岁</span>
                <span>{{ info.city }}</span>
                <span>{{ info.education | educateFilter }}</span>
              </div>
              <div v-else class="placeholder"></div>
            </div>
            <div class="condition">
              <div v-if="info.mobile">
                <span>
                  <i class="el-icon-mobile-phone"></i>
                  {{ info.mobile }}
                </span>
                <span>
                  <i class="el-icon-message"></i>
                  {{ info.mail }}
                </span>
                <span>
                  <svg-icon icon-class="tie" class="icon"/>
                  {{ info.workStatus | conditionFilter }}
                  </span>
              </div>
              <div v-else class="placeholder"></div>
            </div>
            <div class="operation" @click="show">
              <i class="el-icon-edit-outline"></i>
              <span>编辑</span>
            </div>
          </div>
        </div>
      </div>
      <!-- 显示层 -->
      <!-- 编辑层 -->
      <div v-show="hiddenShow" class="hide-view">
        <el-form
        :model="modifiedCharact"
        label-width="95px"
        :rules="rules"
        ref="charactForm"
        label-position="left"
        >
          <el-form-item label-width="0">
            <el-row>
              <el-col :span="16">
                <el-form-item label="姓名" prop="name" required class="name">
                  <el-input v-model="modifiedCharact.name"
                  placeholder="输入姓名"/>
                </el-form-item>
              </el-col>
              <el-col :span="4" :offset="2" >
                <el-form-item prop="headImage" class="name">
                  <el-upload
                    class="avatar-uploader"
                    :action="baseApi + '/file/uploadImage'"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess"
                    :before-upload="beforeAvatarUpload">
                    <img v-if="avatar" :src="avatar" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                      <div slot="tip" class="el-upload__tip">只能上传jpg/png/gif文件，且不超过2M</div>
                  </el-upload>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form-item>
          <el-form-item label="性别" prop="sex" required class="">
            <el-select v-model="modifiedCharact.sex" placeholder="选择性别">
              <el-option label="男" :value="1"></el-option>
              <el-option label="女" :value="2"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="学历" prop="education" required>
            <el-select v-model="modifiedCharact.education" placeholder="选择学历">
              <el-option v-for="educate in educationOptions" :label="educate.label" :value="educate.value"
              :key="educate.label"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="工作经验" prop="workYear" required>
            <el-select v-model="modifiedCharact.workYear" placeholder="选择工作经验">
              <el-option v-for="exp in expOptions"
              :label="exp.label" :value="exp.value"
              :key="exp.value"/>
            </el-select>
          </el-form-item>
          <el-form-item label="出生日期" prop="birthDate" required>
            <el-date-picker
              v-model="modifiedCharact.birthDate"
              placeholder="出生日期"
              format="yyyy 年 MM 月"
              type="month"
              value-format="yyyy-MM"
              />
          </el-form-item>
          <el-form-item label="现居地" required>
            <el-row>
              <el-col :span="11">
                <el-form-item prop="provinceId" required>
                  <el-select v-model="modifiedCharact.provinceId"
                  placeholder="请选择省"
                  @change="fetchCities">
                    <el-option v-for="province in provinces"
                    :label="province.name"
                    :key="province.value"
                    :value="province.value"/>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item prop="cityId" required>
                  <el-select v-model="modifiedCharact.cityId"
                  placeholder="请选择市">
                    <el-option v-for="city in citys"
                    :label="city.name"
                    :value="city.value"
                    :key="city.value" />
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form-item>
          <el-form-item label="目前状况" prop="workStatus" required>
            <el-select v-model="modifiedCharact.workStatus" placeholder="选择目前状况">
              <el-option label="目前暂无跳槽打算" :value="1"></el-option>
              <el-option label="已离职" :value="2"></el-option>
              <el-option label="在职 可立即上岗" :value="3"></el-option>
              <el-option label="在职 会考虑更好的工作" :value="4"></el-option>
              <el-option label="应届毕业生" :value="5"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="联系方式" prop="mobile" required>
            <el-input v-model="modifiedCharact.mobile" type="text" maxlength="11"></el-input>
          </el-form-item>
          <el-form-item label="电子邮箱" prop="mail" required>
            <el-input v-model="modifiedCharact.mail" type="text"></el-input>
          </el-form-item>

        </el-form>
        <div class="control">
          <el-button :loading="isLoading" type="success" @click="submit" class="submit">保存并更新</el-button>
          <div @click="cancelModify" class="cancel">取消</div>
        </div>
      </div>
      <!-- 编辑层 -->

    </div>
  </div>
</template>

<script>
import mixin from './mixin'
import { expOptions, educationOptions } from '@/mixin/options'
import { conditionFilter, educateFilter, sexFilter } from '@/mixin/filters'
import { deepClone } from '@/utils'
import { mapState } from 'vuex'
let baseApi = process.env.BASE_API
export default {
  mixins: [
    mixin,
    expOptions,
    educationOptions,
    conditionFilter,
    educateFilter,
    sexFilter
  ],
  computed: mapState({
    info: state => state.resume.userInfo,
    avatar(state) {
      let src = this.image ? this.image : state.resume.userInfo.headImage
      return this.baseApi + '/file/showImage?fileName=' + src
    },
    provinces: state => state.base.province
  }),
  data() {
    return {
      modifiedCharact: {},
      rules: [],
      citys: [],
      baseApi: '',
      // 验证和提示信息
      rules: {
        name: [
          { required: true, message: '请输入姓名', trigger: ['change', 'blur'] }
        ],
        sex: [
          { required: true, message: '请选择性别', trigger: 'blur' }
        ],
        education: [
          { required: true, message: '请选择学历', trigger: 'blur' }
        ],
        workYear: [
          { required: true, message: '请选择工作经验', trigger: 'blur' }
        ],
        birthDate: [
          { required: true, message: '请选择出生日期', trigger: 'change' }
        ],
        provinceId: [
          { required: true, message: '请选择现居住省/直辖市', trigger: ['change', 'blur'] }
        ],
        cityId: [
          { required: true, message: '请选择现居住市/区', trigger: ['change', 'blur'] }
        ],
        mobile: [
          { required: true, message: '请输入联系方式', trigger: ['change', 'blur'] }
        ],
        mail: [
          { required: true, message: '请输入电子邮箱', trigger: ['change', 'blur'] }
        ],
        workStatus: [
          { required: true, message: '请选择当前状况', trigger: 'blur' }
        ]
      },
      image: '',
      isLoading: false
    }
  },
  methods: {
    // 提交申请
    submit() {
      this.$refs.charactForm.validate((valid) => {
        if (valid) {
          if(this.modifiedCharact.headImage) {
            this.isLoading = true
            console.log(this.modifiedCharact)
            this.$store.dispatch('UpdateBaseInfo', this.modifiedCharact).then(() => {
              this.isLoading = false
              this.$store.dispatch('GetMyResume')
              this.hiddenShow = false
            }).catch(() => {
              this.isLoading = false
            })
          } else {
            this.$notify({
              title: '提示',
              message: '请上传头像',
              typeL: 'warning'
            })
            return false
          }
        } else {
          return false
        }
      })
    },
    // 显示编辑并初始化数据
    show() {
      this.initData()
      if(this.info.cityId) {
        this.$store.dispatch('GetCities', this.info.provinceId).then(cities => {
          this.citys = cities.info
          this.hiddenShow = true
        })
      }
    },
    // 取消修改 初始化内容
    cancelModify() {
      this.hiddenShow = false
      this.initData()
      this.image = ''
    },
    // 获取城市选项
    fetchCities() {
      this.modifiedCharact.cityId = ''
      this.$store.dispatch('GetCities', this.modifiedCharact.provinceId).then(res => {
        this.citys = res.info
      })
    },
    // 处理上传头像回调
    handleAvatarSuccess(res, file) {
      this.image = res.info
      this.modifiedCharact.headImage = res.info
    },
    // 对上传头像进行验证
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg' || 'image/png' || 'image/gif'
      const isLt2M = file.size / 1024 / 1024 < 2
      if (!isJPG) {
        this.$message.error('上传头像图片格式错误')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过2MB!')
      }
      return isJPG && isLt2M
    },
    // 初始化数据
    initData() {
      this.modifiedCharact = {
        name: this.info.name,
        sex: this.info.sex,
        birthDate: this.info.birthDate,
        education: this.info.education,
        city: this.info.city,
        education: this.info.education,
        mobile: this.info.mobile,
        mail: this.info.mail,
        workStatus: this.info.workStatus,
        headImage: this.info.headImage,
        workYear: this.info.workYear,
        cityId: this.info.cityId,
        provinceId: this.info.provinceId
      }
    }
  },
  // 调用省市选项接口 并且拉取require baseApi
  // 因为想不到更好的初始数据处理的办法 接口也定死了 所以数据初始值只能一个一个赋值
  beforeMount() {
    this.baseApi = baseApi
  }
}
</script>

<style lang="scss" scoped>
.charact /deep/{
  .wrapper {
    .view {
      display: flex;
      position: relative;
      align-items: center;
      .img-wrapper {
        flex: 0 0 116px;
        height: 116px;
        margin-right: 22px;
        background-color: #f7f7f7;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .placeholder {
        background-color: #f7f7f7;
        height: 20px;
      }
      .content-wrapper {
        flex: 1 1 auto;
        .name {
          margin-bottom: 15px;
          vertical-align: bottom;
          .placeholder {
            width: 75%;
          }
          span {
            &:first-child {
              margin-right: 20px;
              font-size: 26px;
            }
            &:last-child {
              font-size: 14px;
              color: #9C99A5;
            }
          }
        }
        .char {
          margin-bottom: 11px;
          .placeholder {
            width: 60%;
          }
          span {
            padding: 0 25px;
            font-size: 14px;
            color: #595959;
            border-right: 1px solid #DCDCDC;
            &:first-child {
              padding: 0 25px 0 0;
            }
            &:last-child {
              border-right: none;
            }
          }
        }
        .condition {
          color: #595959;
          .placeholder {
            width: 70%;
          }
          span {
            margin-right: 30px;
            font-size: 14px;
            &:last-child {
              font-size: 16px;
              color: #495267;
            }
            i {
              margin-right: 10px;
            }
          }
        }
        .operation {
          position: absolute;
          right: 20px;
          top: 8px;
          cursor: pointer;
          &:hover {
            color: #409EFF;
          }
        }
      }
    }
    .avatar-uploader {
      position: absolute;
      z-index: 15;
      .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
        &:hover {
          border-color: #409EFF;
        }
      }
      .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 130px;
        height: 130px;
        line-height: 130px;
        text-align: center;
      }
      .avatar {
        width: 130px;
        height: 130px;
        display: block;
      }
      .el-upload__tip {
        margin-top: 0;
        line-height: 14px;
      }
    }
  }
}

</style>
