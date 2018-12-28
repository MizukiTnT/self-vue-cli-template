<template>
  <div class="open-account">
    <div class="title">
      <div>开通招聘服务</div>
      <div><i class="el-icon-arrow-down"/></div>
    </div>
    <step :currentStep="currentStep" />
    <div class="content">
      <div v-show="currentStep == 0" class="step">
        <el-form :model="connect">
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
           @click="stepOne"
           class="next-step">下一步</el-button>
        </div>
        <div class="hint warm">如有其它问题，请编辑问题发送至 yaoqin@191.cn ，我们会尽快为您解决。</div>
      </div>
      <div v-show="currentStep == 1" class="step">
        <el-form :model="company">
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
               prop="lisence"
               label="营业执照"
               required
               >
                <el-upload
                  class="upload-demo"
                  drag
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :on-success="handleLisenceSuccess"
                  :before-upload="beforeLisenceUpload"
                  multiple>
                  <i class="el-icon-upload"></i>
                  <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                  <div class="el-upload__tip" slot="tip">支持jpg、jpeg、png、gif、pdf格式，文件不超过5M</div>
                </el-upload>

              </el-form-item>
            </el-col>
            <el-col :offset="2" :span="6">
              <el-form-item
               label="营业执照"
               required
              >
                <img :src="previewImg" alt="">
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
        <div class="button">
          <el-button
           @click="stepTwo"
           class="next-step">下一步</el-button>
           <span
            @click="backToStepOne"
            class="back"
            >返回上一步</span>
        </div>
      </div>
      <div v-show="currentStep == 2" class="step">
        <h3>验证邮件已发送至：</h3>
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
  </div>
</template>

<script>
import step from './components/step'
export default {
  components: {
    step
  },
  data() {
    return {
      currentStep: 0,
      previewImg: undefined,
      newMail: undefined,
      connect: {
        mobile: '',
        mail: ''
      },
      company: {
        name: '',
        imgUrl: ''
      },

    }
  },
  methods: {
    // 处理图片传输后回调
    handleLisenceSuccess(res, file) {

    },
    // 限制图片内容
    beforeLisenceUpload(file) {
      const isJPG = file.type === 'image/jpeg/png/gif/pdf';
      const isLt2M = file.size / 1024 / 1024 < 5;

      if (!isJPG) {
        this.$message.error('上传图片格式不正确!');
      }
      if (!isLt2M) {
        this.$message.error('上传图片大小不能超过 5MB!');
      }
      return isJPG && isLt2M;
    },
    // 重新发送
    tryAgain() {

    },
    // 第一步点击下一步处理
    stepOne() {
      this.currentStep++
    },
    // 第二步完结
    stepTwo() {
      this.currentStep++
    },
    // 回到第一步
    backToStepOne() {},
    // 改变邮箱
    changeMail() {}
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