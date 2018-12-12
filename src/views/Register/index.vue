<template>
  <div class="login">
    <block>
      <div class="adv" slot="adv">
        <img src="" alt="">
      </div>
      <div class="operation" slot="operation">
        <div class="title">快速注册</div>
        <el-form :model="registerData" :rules="rules" ref="registerForm" label-width="0">
          <el-form-item prop="mobile">
            <el-input v-model="registerData.mobile" placeholder="请输入手机号"
            maxlength="11"
            />
          </el-form-item>
          <el-form-item prop="code">
            <el-input v-model="registerData.code" placeholder="请输入验证码">
              <el-button slot="append" @click="getCode" :disabled="disabled" class="code">{{ codeText }}</el-button>
            </el-input>
          </el-form-item>
          <el-form-item prop="name">
            <el-input v-model="registerData.name" placeholder="请输入账号"/>
          </el-form-item>
          <el-form-item prop="password">
            <el-input       v-model="registerData.password"
             placeholder="请输密码"
             :type="inputType">
              <div slot="append" class="i-input_icons">
                <div v-show="!showpass" @click="toggleShow">
                  <svg-icon icon-class="hidepass" class="icon" />
                </div>
                <div v-show="showpass" @click="toggleShow">
                  <svg-icon icon-class="showpass" class="icon" />
                </div>
              </div>
            </el-input>
          </el-form-item>
        </el-form>


        <el-button :loading="loading" @click="register" class="button">立即注册</el-button>
        <div class="nav">
          <el-checkbox v-model="checked"/>
          我已阅读并接受
          <router-link to="">《使用协议》</router-link>
        </div>
        <div class="nav">已有账号, 请<router-link to="">登录</router-link></div>
      </div>
    </block>
  </div>
</template>

<script>
import block from '@/components/LoginBlock'

export default {
  name: 'register',
  components: {
    block
  },
  data() {
    return {
      showpass: false,
      checked: true, // 是否同意用户协议
      sendCode: false, // 是否发送过验证码
      loading: false, // 正在提交数据
      disabled: false, // 是否禁用验证码按钮
      codeText: '获取验证码', // 验证码按钮内容
      interval: '', // 定时器变量
      timeLimit: 60, // 下次点击时间
      registerData: {
        mobile: '',
        password: '',
        code: '',
        name: ''
      },
      rules: {
        mobile: [
          { required: true, message: '手机号不能为空', trigger: 'blur' },
          { len:11, message: '手机号格式不正确', trigger: 'blur' }
        ],
        // code: [
        //   { required: true, message: '验证码不能为空', trigger: 'blur' }
        // ],
        name: [
          { required: true, message: '账号不能为空', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '密码不能为空', trigger: 'blur' }
        ]
      },
      inputType: 'password', // 控制密码输入框类型
    }
  },
  methods: {
    // 转换密码输入框类型
    toggleShow() {
      this.showpass = !this.showpass
      this.inputType = this.showpass ? 'text' : 'password'
    },
    // 获取验证码
    sendSrvCode() {

    },
    getCode() {
      let time = this.timeLimit
      if(this.registerData.mobile === '') { // 判断手机号是否输入
        this.$refs.registerForm.fields[0]._props.error = '手机号不能为空'
        return
      }
      if(!this.sendCode) this.sendCode = true // 只要点击过就变成true
      this.disabled = true
      this.$store.dispatch('GetCode', {
        type: '1',
        mobile: this.registerData.mobile
      }).catch(error => {
        this.$refs.registerForm.fields[1].error = error
        clearInterval(this.interval)
        this.codeText = '获取验证码'
        this.disabled = false
      })
      this.interval = setInterval(() => {
        this.codeText = `${time--}秒后可重新获取`
        if(time === 0) {
          this.disabled = false
          this.codeText = '获取验证码'
          clearInterval(this.interval)
        }
      } ,1000)
    },
    register() {
      this.$refs.registerForm.validate((valid) => {
        if (valid) {
          if (this.checked) { // 判断是否同意用户协议
            this.loading = true
            if(this.sendCode) { // 判断是否真的点击验证码
              this.$store.dispatch('Register', this.registerData).then(() => {
                this.loading = false
                this.$store.dispatch('GetUserInfo')
                console.log(this.$store.state)
                this.$router.push('/index')
              }).catch((err) => {
                this.loading = false
              })
            } else {
              this.$refs.registerForm.fields[1].error = "请先获取验证码"
              this.loading = false
            }
          } else {
            this.$notify.warning({
              title: '提示',
              message: '请同意用户协议'
            })
          }

        } else {
          return false
        }
      })
    }
  },
  mounted() {
    console.log(this.$refs.registerForm.fields[1])
  },
}
</script>

<style lang="scss" scoped>
  .login  {

    .title {
      margin-bottom: 30px;
      padding-left: 10px;
      border-left: 4px solid #00B35D;
      font-size: 18px;

    }
    .adv {
      height: 100%;
      background-color: #F4F4F4;

    }
    .operation {
      padding: 30px 40px;
      background-color: #fff;
      border: 1px solid #E0F1E7;
      border-radius: 4px;
      .code_button {
        color: #606266;
        font-size: 14px;
        cursor: pointer;
        transition: all .35s;
        &:hover {
          color: #00B35D;
        }
      }
    }
    .button {
      margin-bottom: 30px;
      width: 100%;
      color: #fff;
      background-color: #01B363;
      text-align: center;
      font-size: 14px;
      cursor: pointer;
      border-radius: 4px;
    }
    .nav {
      color: #AFAFAF;
      font-size: 12px;
      text-align: center;
      &:last-child {
        margin-top: 20px;
      }
      a {
        color: #00B35D;
      }
    }
  }
</style>
