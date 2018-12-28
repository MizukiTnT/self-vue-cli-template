<template>
  <div class="setMail">
    <div class="page-title">修改接收简历邮箱</div>
    <div class="container">
      <div class="hint">修改完成后，新收到的简历都将发送到新的接收简历邮箱中</div>
      <div class="mail">
        <span>当前接收简历邮箱：</span>
        <span>442704028@qq.com</span>
      </div>
      <div class="setmail">
        <span>修改简历邮箱：</span>
        <el-input
         v-model="mail"
         :disabled="disabled"
         class="input"/>
      </div>
      <div class="buttons">
        <el-button
        :loading="loading"
         @click="mailSubmit"
         class="change">保存并更新</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      disabled: false,
      loading: false,
      mail: ''
    }
  },
  methods:{
    mailSubmit() {
      if(this.mail.trim() == '') {
        this.$notify({
          title: '警告',
          message: '新邮箱不能为空',
          type: 'warning'
        })
        return
      }
      this.disabled = true
      this.loading = true
    }
  }
}
</script>

<style lang='scss' scoped>
  .setMail {
    .container {
      width: 60%;
      padding: 20px;
      color: #999;
      background-color: #F9F9F9;
      .hint{
        padding: 0 3px 10px;
        font-size: 14px;
        border-bottom: 1px solid #E5E5E5;
      }
      .mail {
        margin-top: 20px;
        span {
          &:last-child {
            color: #6B6B6B;
          }
        }
      }
      .setmail {
        display: flex;
        margin-top: 20px;
        flex-wrap: nowrap;
        align-items: center;
        span {
          margin-right: 20px;
        }
        .input {
          flex: 1;

        }
      }
      .buttons {
        margin-top: 20px;
        text-align: center;
        .change {
          width: 30%;
          color: #fff;
          background-color: #30BE7A;

          &:hover {
            background-color: #30be7ab8;
          }
        }
      }
    }
  }
</style>