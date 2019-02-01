<template>
  <div class="base-info">
    <div v-if="!showEdit" class="show_layer">
      <div class="header">
        <div class="header_avatar">
          <img src="" alt="">
        </div>
        <div class="header_details">
          <p class="details_name">
            <span class="name">xxxx</span>
            <span class="confirm">
              <i/>
              <i class="icon-confirm">已认证</i>
            </span>
          </p>
          <p class="details_simplename">dddd</p>
          <p class="details_slogan">
            <svg-icon icon-class="message" class="icon" />
            <span>dddd</span>
          </p>
          <div class="details_welfare">
            <span class="welfare">
              xx
            </span>
          </div>
        </div>
      </div>

      <div @click="show" class="edit-button">
        <i class="el-icon-edit-outline" />
        <span>编辑</span>
      </div>
    </div>
    <div v-if="showEdit" class="edit_layer">
      <div class="title">公司信息</div>
      <div class="edit_content">
        <el-form
        ref="baseInfoForm"
        :model="baseInfo"
        label-width="100px"
        label-position="left">
          <el-form-item prop="name"
          label="公司名称:" >
            <el-input v-model="baseInfo.name"
            placeholder="请输入姓名"
            />

          </el-form-item>
          <el-form-item
          prop="slogan"
          label="标语:"
          >
            <el-input v-model="baseInfo.slogan"
            placeholder="输入标语"
            />
          </el-form-item>
          <div class="labels-wrapper">
            <div class="sub-title">已选择标签</div>
            <div class="label-list">
              <span v-for="(label, index) in baseInfo.labels" class="label">{{ label }}
                <i class="el-icon-close close"
                @click="deleteLabel(index)"/>
              </span>
            </div>
            <div class="add-labels">
              <span></span>
              <el-input v-model="baseInfo.label"
              class="inputs"/>
              <div @click="addLabel" class="add">贴上</div>
            </div>
          </div>
          <div class="photo">
            <el-upload
              class="avatar-uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload">
              <div class="el-upload__tip" slot="tip">只能上传jpg/png，小于5M图片</div>
              <img v-if="baseInfo.imageUrl" :src="baseInfo.imageUrl" class="avatar">
              <div
              v-else class="el-upload__text">点击上传</em></div>
            </el-upload>
          </div>
          <div class="operate">
            <span class="save">保存并更新</span>
            <span @click="cancelEdit" class="cancel">取消</span>
          </div>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import mixin from './mixin'
export default {
  mixins: [mixin],
  data() {
    return {
      baseInfo: {
        name: '',
        slogan: '',
        labels: [
          '员工福利',
          '薪酬激励'
        ],
        label: '',
        imgUrl: ''
      },
    }
  },
  methods: {
    // 传输完成回调
    handleAvatarSuccess() {

    },
    // 提前处理读取的图片
    beforeAvatarUpload(file) {
      const isJPG = file.type ==='image/jpeg/png';
      const isLt2M = file.size /1024 / 1024 < 5;

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG/png 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 5MB!');
      }
      return isJPG && isLt2M;
    },
    // 删除标签
    deleteLabel(index) {
      this.baseInfo.labels.splice(index, 1)
    },
    // 添加标签
    addLabel() {
      if(!this.baseInfo.label) {
        this.$message('标签不能为空')
        return
      }
      this.baseInfo.labels.push(this.baseInfo.label)
      this.baseInfo.label = ''
    },
    cancelEdit() {
      this.$refs.baseInfoForm.resetFields()
      this.showEdit = false
    }
  }
}
</script>

<style lang='scss' scoped>
.base-info /deep/{
  padding-bottom: 55px;
  border-bottom: 1px solid #EAEDF1;
  .header {
    display: flex;
    align-items: center;
    .header_avatar {
      flex: 0 auto;
      width: 183px;
      height: 183px;
      margin-right: 20px;
      background-color: #f7f7f7;
    }
    .header_details {
      flex: 1 auto;
      .details_name {
        .name {
          color: #333;
          font-size: 22px;
        }
        .confirm {
          margin-left: 25px;
          vertical-align: baseline;
          .icon-confirm {
            padding: 5px;
            font-size: 14px;
            color: #fff;
            background-color: #00B35D;
            font-style: normal;
            user-select: none;
          }
        }
      }
      .details_simplename {
        color: #595959;
        font-size: 18px;
      }
      .details_slogan {
        .icon {
          font-size: 20px;
        }
        span {
          font-size: 20px;
          color: #495267;
        }
      }
      .details_welfare {
        .welfare {
          margin-right: 15px;
          padding: 3px 5px;
          border: 1px solid #EAEDF1;
          font-size: 18px;
          user-select: none;
        }
      }
    }
  }
  .edit_layer {
    position: relative;
    .title {
      margin-bottom: 20px;
      color: #595959;
    }
    .edit_content {
      position: relative;
      background-color: #F9F9F9;
      padding: 30px 22px;
      .labels-wrapper {
        width: 394px;
        .sub-title {
          margin-bottom: 20px;
          font-size: 22px;
        }
        .label-list {
          margin-bottom: 20px;
          .label {
            position: relative;
            padding: 6px 8px;
            border: 1px solid #999;
            background-color: #fff;
            font-size: 12px;
            margin-right: 15px;
            user-select: none;
            &:last-child {
              margin-right: 0;
            }
            &:hover {
              .close {
                opacity: 1;
              }
            }
            .close {
              opacity: 0;
              font-size: 12px;
              position: absolute;
              right: 0;
              top: 0;
              cursor: pointer;
              transition: all .25s;
            }
          }
        }
        .add-labels {
          display: table;
          .inputs {
            width: 100%;
            display: table-cell;
          }
          .add {
            width: 1px;
            padding: 0 20px;
            background-color: #00B35D;
            color: #fff;
            white-space: nowrap;
            font-size: 14px;
            display: table-cell;
            cursor: pointer;
          }
        }
      }

      .el-input {
        width: 240px;
      }
      .photo {
        position: absolute;
        top: 30px;
        right: 22px;
        .avatar-uploader {
          width: 120px;
          height: 120px;
          .el-upload {
            width: 100%;
            height: 100%;
          }
          .el-upload__text {
            line-height: 120px;
            text-align: center;
            color: #00B35D;
            background-color: #EFEFEF;
          }
        }
      }
    }
  }
}
</style>