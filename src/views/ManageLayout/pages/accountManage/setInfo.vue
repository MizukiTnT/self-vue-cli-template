<template>
  <div class="setInfo">
    <div class="page-title">修改接收简历邮箱</div>
    <div class="container">
      <div class="upload row">
        <span>真实头像:</span>
        <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload">
          <img v-if="imageUrl" :src="imageUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          <div class="el-upload__tip" slot="tip">支持jpg、jpeg、gif、png图片文件 图片大小需小于5MB</div>
        </el-upload>
      </div>
      <div class="row">
        <span>真实姓名：</span>
        <el-input
        v-model="name"
         class="suit"
         type="text"
         placeholder="输入姓名" />
      </div>
      <div class="row">
        <span>公司职位：</span>
        <el-input
         v-model="position"
         :disabled="disabled"
         class="suit"
         placeholder="输入职位"/>
      </div>
      <div class="row">
        <span>联系电话：</span>
        <el-input
         v-model="moblie"
         :disabled="disabled"
         class="suit"
         placeholder="输入联系电话"/>
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
      mail: '',
      imageUrl: null,
      name: '',
      position: '',
      mobile: ''
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
    },
    handleAvatarSuccess() {},
    beforeAvatarUpload() {}
  }
}
</script>

<style lang='scss' scoped>
  .setInfo /deep/ {
    margin-bottom: 80px;
    .container {
      width: 60%;
      padding: 20px;
      color: #999;
      background-color: #F9F9F9;
      .row {
        display: flex;
        margin-top: 20px;
        flex-wrap: nowrap;
        align-items: center;
        span {
          flex: 1 0 80px;
          margin-right: 20px;
        }
        .input {
          flex: 0 auto;

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

    .avatar-uploader .el-upload {
      border: 1px dashed #d9d9d9;
      border-radius: 6px;
      cursor: pointer;
      background-color: #fff;
      position: relative;
      overflow: hidden;
    }
    .avatar-uploader .el-upload:hover {
      border-color: #409EFF;
    }
    .avatar-uploader-icon {
      font-size: 28px;
      color: #8c939d;
      width: 120px;
      display: inline-block;
      height: 120px;
      line-height: 120px;
      text-align: center;
    }
    .avatar {
      width: 178px;
      height: 178px;
      display: block;
    }
    .el-upload__tip {
      font-size: 12px;
      color: #606266;
      display: inline-block;
      vertical-align: baseline;
      width: 120px;
      line-height: 20px;
      margin-top: 7px;
      margin-left: 10px;
    }
  }
</style>