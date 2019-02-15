<template>
  <div class="recruit-service">
    <div class="title">
      <div>填写公司信息</div>
      <div><i class="el-icon-arrow-down"/></div>
    </div>
    <step :currentStep="currentStep" />
    <div class="content">
      <div v-show="currentStep == 0" class="wrapper step1">
        <el-form :model="baseInfo" :rules="rules" ref="infos">
          <el-form-item
          label="公司全称"
          >
            <div class="totalName"></div>
          </el-form-item>

          <el-form-item
          prop="simpleName"
          label="公司简称"
          required>
            <el-input
             v-model.trim="baseInfo.simpleName"
             placeholder="请输入公司简称"
             />
          </el-form-item>
          <el-form-item
          prop="headImage"
          label="公司LOGO"
          required>
            <div class="upload-wrapper">
              <el-upload
                class="avatar-uploader"
                :action="baseApi +'/file/uploadImage'"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload">
                <div class="el-upload__tip"slot="tip">支持jpg、jpeg、pnggif格式，文件不超过5M</div>
                <img v-if="baseInfo.headImage" :src="calImage" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </div>
          </el-form-item>
          <el-form-item
          prop="homeUrl"
          label="公司网址"
          >
            <div class="table-wrapper">
              <div class="prepend-select">
                <el-select v-model="urlHead">
                  <el-option
                    label="http://"
                    :value="1">
                  </el-option>
                  <el-option
                    label="https://"
                    :value="2">
                  </el-option>
                </el-select>
              </div>
              <el-input v-model.trim="baseInfo.homeUrl"  placeholder="请输入网址" class="cell-input">
              </el-input>
            </div>
          </el-form-item>
          <el-form-item
          label="所在城市"
          required
          >
            <el-row :gutter="20">
              <el-col :span="9">
                <el-form-item prop="provinceId"
                required>
                  <el-select v-model="baseInfo.provinceId" @change="fetchCities" placeholder="选择省份">
                    <el-option
                    v-for="item in provinces"
                    :key="item.value"
                    :label="item.name"
                    :value="item.value"/>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="9">
                <el-form-item
                prop="cityId"
                >
                  <el-select v-model="baseInfo.cityId" placeholder="选择城市">
                    <el-option
                    v-for="item in cities"
                    :label="item.name"
                    :value="item.value"
                    :key="item.value"/>
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form-item>
          <el-form-item
          prop="scale"
          label="公司规模"
          required>
            <el-select v-model="baseInfo.scale">
              <el-option
               v-for="item in companySizeOptions"
               :label="item.label"
               :value="item.value"
               :key="item.value"/>
            </el-select>
          </el-form-item>
          <el-form-item
          prop="type"
          label="发展阶段"
          required>
            <div class="status">
              <span
               v-for="(tag, index) in companyTypeOptions"
               @click="baseInfo.type = tag.value"
               :class="{ active: (index + 1 ) === baseInfo.type }"
               class="tags">{{ tag.label }}</span>
            </div>
          </el-form-item>
          <el-form-item
          prop="slogan"
          label="公司标语"
          required>
            <el-input v-model.trim="baseInfo.slogan"
            type="textarea"
            placeholder="一句话概括公司亮点，如公司愿景、领导团队等，限50字" />
          </el-form-item>
        </el-form>
        <div class="oprate">
          <el-button :loading="loading"
          @click="stepOne" class="next-step">下一步</el-button>
        </div>
      </div>
      <div v-show="currentStep == 1" class="wrapper step2">
        <el-form :model="companyLabel">
          <el-form-item
          prop=""
          label="已添加标签"
          required>
            <div class="label-list">
              <labels :labels="$store.state.recruit.labels" />
            </div>
            <div class="add-label">
              <el-input
               v-model="companyLabel.label"
               placeholder="输入自定义标签" >
                <div
                class="add"
                @click="addLabel"
                 slot="append">贴上</div>
               </el-input>

            </div>
            <div class="label-list">

            </div>
          </el-form-item>
        </el-form>
        <div class="oprate">
          <el-button :loading="loading" @click="stepTwo" class="next-step">下一步</el-button>
        </div>
      </div>

      <div v-show="currentStep == 2" class="wrapper step3">
        <el-form :model="companyIntro" :rules="introRule" ref="intro">
          <el-form-item
          prop="introduce"
          label="公司介绍"
          required>
            <el-input
             type="textarea"
             :rows="5"
             v-model.trim="companyIntro.introduce"/>
          </el-form-item>

          <el-form-item
          prop="images"
          label="添加公司照片"
          required>
            <div class="hint">添加公司环境、员工照片，给用户展示更生动的公司全貌</div>
            <el-upload
              class="upload-demo"
              drag
              :action="baseApi +'/file/uploadImage'"
              :before-upload="beforeAvatarUpload"
              :on-preview="handlePreview"
              :on-exceed="handleExceed"
              :on-remove="handleRemove"
              :on-success="handlePicSuccess"
              :limit="4"
              multiple>
              <i class="el-icon-upload"></i>
              <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
              <div class="el-upload__tip" slot="tip">只能上传jpg/png/gif文件，且不超过5M</div>
            </el-upload>
          </el-form-item>
        </el-form>
        <div class="oprate">
          <el-button
           :loading="loading"
           @click="stepThree"
           class="next-step">下一步</el-button>
        </div>
      </div>
      <div v-show="currentStep == 3" class="wrapper step4">
        <div class="result">
          <h4>恭喜你，公司信息已填写完善！</h4>
          <p>我们将尽快对您的信息进行审核，通过后您就可以发布职位啦~</p>
          <p>如有任何问题，请联系我们。 邮箱：yaoqin@191.cn 电话：0512-57567191</p>
        </div>
        <div class="oprate">
          <router-link to="/" class="back">回到首页
          </router-link>
        </div>
      </div>
    </div>
    <el-dialog
      title="预览"
      center
      width="60%"
      lock-scroll
      :visible.sync="dialogVisible"
      @close="handlePreviewClose"
      >
      <div style="width:100%;text-align: center">
        <img :src="preview" style="max-width: 100%">
      </div>
    </el-dialog>
  </div>
</template>

<script>
// 其实这里最好的解决办法是抽出一个类似于tabs的组件 里面有对应的panel 但是在设计阶段没考虑到 已经写了一个页面 只好这样做
import step from './components/steps'
import labels from './components//labels'
import { companySizeOptions, companyTypeOptions } from "@/mixin/options"
import { transSpace } from '@/utils'
let baseApi = process.env.BASE_API
export default {
  mixins: [ companySizeOptions, companyTypeOptions ],
  components: { step, labels },
  data() {
    return {
      currentStep: 0, // 当前处于第几步
      baseApi: baseApi, // 网站url
      baseInfo: { // 基本信息
        simpleName: '',
        headImage: '',
        provinceId: '',
        cityId: '',
        scale: '',
        slogan: '',
        homeUrl: '',
        type: ''
      },
      urlHead: 1, // 公司url前缀
      companyLabel: {
        label: ''
      },
      cities: '', // 城市options
      provinces: '', // 省份options
      rules: { // form验证规则
        simpleName: [
          { required: true, message: '请输入企业简称', trigger: ['blur', 'change'] }
        ],
        headImage: [
          { required: true, message: '请选择企业头像', trigger: ['change'] }
        ],
        provinceId: [
          { required: true, message: '请选择所在省份', trigger: ['blur', 'change'] }
        ],
        scale: [
          { required: true, message: '请选择企业规模', trigger: ['blur', 'change'] }
        ],
        slogan: [
          { required: true, message: '请输入企业标语', trigger: ['blur', 'change'] }
        ],
        type: [
          { required: true, message: '请选择发展阶段', trigger: ['blur', 'change'] }
        ],
        homeUrl: [
          { required: true, message: '请输入公司网址', trigger: ['blur', 'change'] }
        ]
      },
      companyIntro: {
        introduce: '',
        images: ''
      },
      imagesWrapper: [],
      loading: false, // 按钮loading显示flag
      introRule: {

      },
      preview: '', // 公司图片预览srcc
      dialogVisible: false, // 是否要显示dialog
      introRule: {
        introduce: [
          { required: true, message: '请输入公司介绍', trigger: ['change', 'blur'] }
        ],
        images: [
          { required: true, message: '请上传公司照片' }
        ]
      }
    }
  },
  computed: {
    calImage() { // 显示图片
      return this.baseInfo.headImage ? this.baseApi + '/file/showImage?fileName=' + this.baseInfo.headImage : ''
    }
  },
  methods: {
    // 提交基本信息
    stepOne() {
      this.$refs.infos.validate((valid) => {
        if(valid) {
          let pre = this.urlHead === 1 ? 'http://' : 'https://'
          this.baseInfo.homeUrl = pre + this.baseInfo.homeUrl
          this.baseInfo.slogan = transSpace(this.baseInfo.slogan)
          this.loading = true
          this.$store.dispatch('RegisterCompanyOne', this.baseInfo).then((res) => {
            this.loading = false
            this.currentStep = 1
          },() => {
            this.loading = false
          })
        } else {
          return false
        }
      })
    },
    // 提交公司标签
    stepTwo() {
      let labels = this.$store.state.recruit.labels
      labels = labels.join(',')
      this.loading = true
      this.$store.dispatch('RegisterCompanyTwo', labels).then(() => {
        this.loading = false
        this.currentStep = 2
      }, () => {
        this.loading = false
      })
    },
    // 删除队列中的照片
    handleRemove(file, fileList) {
      this.imagesWrapper.map((v, i) => {
        if(v === file.response.info) {
          this.imagesWrapper.splice(i, 1)
        }
      })
    },
    // 上传成功后的回调
    handlePicSuccess(file) {
      this.imagesWrapper.push(file.info)
    },
    // 预览图片
    handlePreview(file) {
      this.preview =  this.baseApi + '/file/showImage?fileName=' + file.response.info
      this.dialogVisible = true
    },
    // 超过最大传输数之后显示提示
    handleExceed(files, fileList) {
      this.$message.warning(`当前限制选择 4 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
    },
    // 清空预览的图片
    handlePreviewClose() {
      this.preview = ''
    },
    // 提交公司介绍
    stepThree() {
      this.loading = true
      this.companyIntro.images = this.imagesWrapper.join(',')
      this.$refs.intro.validate(valid => {
        if(valid) {
          this.$store.dispatch('RegisterCompanyThree', { introduce: transSpace(this.companyIntro.introduce), images: this.companyIntro.images }).then(() => {
            this.loading = false
            this.currentStep = 3
          }, () => {
            this.loading = false
          })
        } else {
          return false
        }
      })
    },
    // 增加公司标签
    addLabel() {
      if(!this.companyLabel.label) {
        this.$message({
          message: '标签不能为空',
          type: 'warning'
        })
        return
      }
      this.$store.commit('ADD_LABEL', this.companyLabel.label)
      this.companyLabel.label = ''
    },
    // 处理图片上传完毕回调
    handleAvatarSuccess(res, file) {
      this.baseInfo.headImage = res.info
    },
    // 限制图片内容
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg' ? true : file.type === 'image/png' ? true : file.type === 'image/gif' ? true : false
      const isLt5M = file.size / 1024 / 1024 < 5
      if (!isJPG) {
        this.$message.error('上传头像图片格式错误')
      }
      if (!isLt5M) {
        this.$message.error('上传图片大小不能超过5MB!')
      }
      return isJPG && isLt5M
    },
    // 拉取城市信息
    fetchCities() {
      this.$store.dispatch('GetCities', this.baseInfo.provinceId).then(res => {
        this.cities = res
      })
    },
  },
  beforeMount() { // 进入页面先调状态码 然后跳页面 如果store里存了省份直接用 没有存请求一遍
    this.$store.dispatch('GetConditionCode').then(() => {
      this.currentStep = this.$route.query.page
      if(+this.$route.query.page === 0) {
        if(this.$store.getters.province.length > 0) {
          this.provinces = this.$store.getters.province
        } else {
          this.$store.dispatch('GetProvinces').then(res => {
            this.provinces = res
          })
        }
      }
    })
  }
}
</script>

<style lang='scss' scoped>
  .recruit-service /deep/ {
    margin: 56px auto;
    width: 560px;
    .title {
      text-align: center;
      font-size: 20px;
      font-weight: 600;
      color: #333333;
      div {
        &:first-child {
          margin-bottom: 8px;
        }
        &:last-child {
          font-size: 28px;
          font-weight: 600;
        }
      }
    }
    .content {
      .next-step {
        width: 140px;
        height: 40px;
        font-size: 16px;
        color: #F0FBF8;
        background-color: #00B35D;
        border-radius: 4px;
        text-align: center;
        cursor: pointer;
      }
      .step1 {
        .table-wrapper {
          display: table;
          .prepend-select {
            display: table-cell;
            width: 1px;
            white-space: nowrap;
            .el-input {
              width: 100px;
            }
            .el-input__inner {
              background-color: #fff;
              border-radius: 4;
              border: none;
              border-left: 1px solid #dcdfe6;
              border-top: 1px solid #dcdfe6;
              border-bottom: 1px solid #dcdfe6;
            }
          }
          .cell-input {
            display: table-cell;
          }
        }

        .avatar-uploader .el-upload {
            border: 1px dashed #d9d9d9;
            border-radius: 6px;
            cursor: pointer;
            position: relative;
            overflow: hidden;
          }
          .avatar-uploader .el-upload:hover {
            border-color: #409EFF;
          }
          .avatar-uploader-icon {
            font-size: 28px;
            color: #8c939d;
            width: 178px;
            height: 178px;
            line-height: 178px;
            text-align: center;
          }
          .avatar {
            width: 178px;
            height: 178px;
            display: block;
          }

        .tags {
          padding: 10px;
          margin-right: 14px;
          color: #999;
          background: #F8F8F8;
          border-radius: 4px;
          cursor: pointer;
          &.active {
            color: #fff;
            background-color: #10B76C;
          }
          &:hover {
            color: #fff;
            background-color: #10B76C;
          }
        }
      }
      .step2 {
        .add-label {
          .el-input-group__append {
            color: #fff;
            background-color: #10B76C;
            cursor: pointer;
            padding: 0;
          }
          .add {
            width: 69px;
            height: 40px;
            text-align: center;
            line-height: 40px;
          }
        }
      }
      .step3 {
        .el-upload__tip {
          margin-top: 0;
          line-height: 12px;
        }
        .hint {
          font-size: 14px;
          color: #B8B8B8;
        }
      }
      .step4 {
        margin-top: 60px;
        .result {
          h4 {
            margin: 15px 0 20px 0;
            font-size: 24px;
            font-weight: 400;
            color: #646464;
          }
          p {
            font-size: 15px;
            color: #7F7F7F;
          }
        }
        .oprate {
          margin-top: 40px;
          text-align: center;
          .back {
            padding: 11px 52px;
            font-size: 18px;
            background: #00B38A;
            border-radius: 8px;
            color: #fff;
            &:hover {
              background-color:#00b38ac9;
            }
          }
        }
      }
    }
    .el-input__inner {
      background-color: #F8F8F8;
      border-radius: 4px;
    }
    .el-input-group__append, .el-input-group__prepend {
      background-color: #fff;
    }
    .el-form-item__label {
      float:none;
    }
    .upload {
      .el-upload-dragger {
        width: 200px;
        height: 200px;
        background-color: #f8f8f8;
      }
      .el-upload__tip {
        line-height: 12px;
        margin-top: 0;
      }
      .el-upload__text {
        font-size: 12px;
      }
      .el-upload-dragger .el-icon-upload {
        font-size: 55px;
      }
    }
  }
</style>