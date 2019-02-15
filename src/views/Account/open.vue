<template>
  <div class="open-account">
    <div class="title">
      <div>开通招聘服务</div>
      <div><i class="el-icon-arrow-down"/></div>
    </div>
    <step :currentStep="currentStep" />
    <div class="content">
      <div v-show="currentStep == 0" class="step">
        <el-form :model="connect" :rules="ruleOne" ref="one">
          <el-form-item prop="mobile"
          label="联系电话" required>
            <el-input v-model="connect.mobile"
            placeholder="请输入手机号"/>
            <div class="hint">请填写真实有效的电话号码，方便系统校验使用</div>
          </el-form-item>
          <el-form-item prop="mail"
          label="接收简历邮箱" required>
            <el-input v-model="connect.mail"
            placeholder="请输入公司邮箱"/>
            <div class="hint">该邮箱为公司邮箱，审核通过后不可更改</div>
          </el-form-item>
        </el-form>
        <div class="button">
          <el-button
           :loading="loading"
           @click="stepOne"
           class="next-step">下一步</el-button>
        </div>
        <div class="hint warm">如有其它问题，请编辑问题发送至 yaoqin@191.cn ，我们会尽快为您解决。</div>
      </div>
      <div v-show="currentStep == 1" class="step">
        <el-form :model="company" :rules="ruleTwo" ref="two">
          <el-form-item
           prop="name"
           label="公司全称"
           required>
            <el-input
              v-model="company.name"
              placeholder="请输入名称"
             />
             <div class="hint">请输入与公司营业执照一致的公司全称，审核通过后不可更改</div>
          </el-form-item>
          <el-row>
            <el-col :span="16">
              <el-form-item
               prop="images"
               label="营业执照"
               required
               >
                <el-upload
                  drag
                  class="avatar-uploader"
                  :action="baseApi + '/file/uploadImage'"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess"
                  :before-upload="beforeLisenceUpload">
                  <i class="el-icon-upload"></i>
                  <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                  <div class="el-upload__tip" slot="tip">支持jpg、jpeg、png、gif格式，文件不超过5M</div>
                </el-upload>

              </el-form-item>
            </el-col>
            <el-col :offset="2" :span="6">
              <el-form-item
               label="图片预览"
              >
                <img @click="showImage" class="preview" :src="calImage" >
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
        <div class="button">
          <el-button
           :loading="loading"
           @click="stepTwo"
           class="next-step">下一步</el-button>
           <span
            @click="backToStepOne"
            class="back"
            >返回上一步</span>
        </div>
      </div>
      <div v-show="currentStep == 2" class="step">
        <h3>验证邮件已发送至：{{ connect.mail }}</h3>
        <p class="makesure">请点击邮件内的链接完成确认，确认后即可发布职位登录邮箱点击邮件内的链接，验证后即可发布职位</p>
        <h3>没有收到确认邮件，怎么办？
          <span class="try-again" @click="tryAgain">重新发送</span>
        </h3>

        <p>修改简历邮箱</p>
        <el-input v-model="newMail">
          <div @click="changeMail" slot="append">提交</div>
        </el-input>
      </div>
    </div>
    <el-dialog
      title="预览"
      center
      width="60%"
      lock-scroll
      :visible.sync="dialogVisible"
      >
      <div style="width:100%;text-align: center">
        <img :src="calImage" style="max-width: 100%">
      </div>
    </el-dialog>
    <el-dialog
      title="提示"
      :visible.sync="makesure"
      width="50%"
      >
      <span>您是否确定内容填写正确, 提交后若发现内容错误可在编辑完公司信息后去公司信息页编辑</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="makesure = false">取 消</el-button>
        <el-button type="primary" @click="sendMail">确 定</el-button>
      </span>
    </el-dialog>


  </div>
</template>

<script>
import step from './components/step'
let baseApi = process.env.BASE_API
export default {
  components: {
    step
  },
  data() {
    return {
      currentStep: 0, // 当前步数
      previewImg: undefined, // 预览图片
      newMail: undefined, // 新的企业邮箱
      baseApi: baseApi, // 请求url
      makesure: false, // 确定发送验证信息flag
      connect: { // 第一步form
        mobile: '',
        mail: ''
      },
      company: { // 第二步form
        name: '',
        images: ''
      },
      ruleOne: { // 第一步rule
        mobile: [
          { required: true, message: '请输入手机号', trigger: [ 'blur', 'change' ] }
        ],
        mail: [
          { required: true, message: '请输入邮箱', trigger: [ 'blur', 'change' ] }
        ]
      },
      ruleTwo: { // 第二步rule
        name: [
          { required: true, message: '请输入公司名称', trigger: [ 'blur', 'change' ] }
        ],
        images: [
          { required: true, message: '请提交营业执照', trigger: [ 'blur', 'change' ] }
        ]
      },
      loading: false,
      dialogVisible: false
    }
  },
  computed: {
    calImage() {
      return this.previewImg ? this.baseApi + '/file/showImage?fileName=' + this.previewImg : ''
    }
  },
  methods: {
    // 限制图片内容
    beforeLisenceUpload(file) {
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
    showImage() {
      this.dialogVisible = true
    },
    // 第一步点击下一步处理
    stepOne() {
      this.$refs.one.validate((valid) => {
        if(valid) {
          this.loading = true
          this.$store.dispatch('CompanyRegisterOne', this.connect).then(() => {
            this.loading = false
            this.current = 1
          },() => {
            this.loading = false
          })
        } else {
          return false
        }
      })
    },
    // 第二步完结
    stepTwo() {
      this.$refs.two.validate((valid) => {
        if(valid) {
          this.makesure = true
        } else {
          return false
        }
      })
    },
    sendMail() {// 第二步结束 提交数据并向邮箱发送信息
      this.makesure = false
      this.loading = true
      this.$store.dispatch('CompanyRegisterTwo', this.company).then((res) => {
        this.loading = false
        this.currentStep = 2
      }, (err) => {
        this.loading = false
      })
    },
    tryAgain() { // 重新向邮箱发送信息

    },
    // 回到第一步
    backToStepOne() {
      this.$refs.two.resetFields()
      this.currentStep = 0
    },
    // 改变邮箱
    async changeMail() {
      await this.$store.dispatch('UpadateMail', this.newMail)
      this.$notify({
        title: '成功',
        message: '更改邮箱成功',
        type: 'success'
      })
    },
    // 处理图片上传完毕回调
    handleAvatarSuccess(res, file) {
      this.previewImg = res.info
      this.company.images = res.info
    }
  },
  beforeMount() { // 其他页面进入该页面会带字段名为page的query 如果没带 则可以判断是通过url进入的 则在页面请求状态码接口由回request处理跳转
    this.$store.dispatch('GetConditionCode').then(() => {
      this.currentStep = this.$route.query.page
    })
  }
}
</script>

<style lang='scss' scoped>
  .open-account /deep/ {
    margin: 56px auto 63px;
    width: 480px;
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
      .step {
        .preview {
          width: 100%;
          cursor: pointer;
        }
        .button {
          .next-step {
            padding: 10px 56px;
            color: #fff;
            font-size: 16px;
            background-color: #00B35D;
            &:hover {
              background-color:#00b35dd6
            }
          }
          .back {
            color: #999;
            font-size: 16px;
            margin-left: 44px;
            cursor: pointer;
          }
        }
        .avatar-uploader {
          .el-upload__tip {
            line-height: 12px;
          }
        }
        .hint {
          font-size: 12px;
          color: #BABABA;
          line-height: 12px;
          margin-top: 10px;
          &.warm {
            margin-top: 40px;
          }
        }
        .el-upload {
          width: 100%;
          .el-upload-dragger {
            background-color: #F8F8F8 ;
            width: 100%;
          }
        }
        h3 {
          margin-bottom: 20px;
          font-size: 16px;
          color: #4D4D4D;
          font-weight: 400;
        }
        p {
          font-size: 12px;
          color: #4D4D4D;
          &.makesure {
            padding-bottom: 30px;
            border-bottom: 1px solid#D8D8D8;
          }
        }
        .try-again {
          margin-left: 25px;
          cursor: pointer;
          color: #00B35D;
        }
      }
    }

    .el-input__inner {
      background-color: #F8F8F8;
    }
    .el-input-group__append, .el-input-group__prepend {
      background-color: #06B28B;
      color: #fff;
      cursor: pointer;
    }

  }
</style>