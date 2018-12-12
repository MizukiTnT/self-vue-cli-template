<template>
  <div class="login">
    <block>
      <div class="adv" slot="adv">
        <img src="" alt="">
      </div>
      <div class="operation" slot="operation">
        <div class="title">密码登录</div>
        <el-form :model="loginData" :rules="rules" ref="loginForm" label-width="0">
          <el-form-item prop="username">
            <el-input v-model="loginData.username" placeholder="请输入手机号/用户名"
            />
          </el-form-item>
          <el-form-item prop="code">
            <el-input v-model="loginData.code" placeholder="请输入图形验证码">
              <div slot="append" class="code">获取验证码</div>
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input       v-model="loginData.password"
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
        <el-button class="button" @click="goLogin">立即登录</el-button>
        <div class="nav">还没注册账号? 请<router-link to="">注册</router-link></div>
      </div>
    </block>
  </div>
</template>

<script>
import block from '@/components/LoginBlock'
export default {
  components: {
    block
  },
  data() {
    return {
      showpass: false,
      loginData: {
        username: '',
        password: '',
        code: ''
      },
      inputType: 'password',
      rules: {
        username: [
          { required: true, message: '用户名不能为空', trigger: 'blur' }
        ],
        code: [
          { required: true, message: '验证码不能为空', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '密码不能为空', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    toggleShow() {
      this.showpass = !this.showpass
      this.inputType = this.showpass ? 'text' : 'password'
    },
    // 获取验证码
    sendSrvCode() {

    },
    goLogin() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          console.log(this.logindata)
          // this.$store.dispatc('Login', this.loginData)
        } else {
          return false
        }
      })
    }
  }

}
</script>

<style lang="scss" scoped>
  .login {
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
    }
    .button {
      margin-bottom: 30px;
      width: 100%;
      height: 40px;
      color: #fff;
      background-color: #01B363;
      text-align: center;
      font-size: 14px;
      cursor: pointer;
      border-radius: 4px;
      transition: all .35s;
      &:hover {
        background-color: #01b363d6;
      }
    }
    .nav {
      color: #AFAFAF;
      font-size: 12px;
      text-align: center;
      a {
        color: #00B35D;
      }
    }
  }
</style>
