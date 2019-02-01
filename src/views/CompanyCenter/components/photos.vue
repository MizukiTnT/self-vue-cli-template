<template>
  <div class="photos">
    <div class="title">公司照片</div>
    <div v-show="photos" class="photo-list">
      <div v-for="(item, index) in photos"
      :key="item.imgId"
      @click="preview(item.imgUrl)"
      class="photo">
        <img v-if="item.imgUrl" :src="item.imgUrl">
        <div @click.stop="deleteImg(item.id, index)" class="delete-button">删除</div>
      </div>
      <div class="add-photo">
        <el-upload
          class="photos-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload">
          <svg-icon
          icon-class="upload"
          class="avatar-uploader-icon "/>
          <div class="el-upload__text">支持jpg、jpeg、png格式，文件不超过5M</div>
        </el-upload>
      </div>
    </div>
    <el-dialog :visible.sync="showDialog">
      <div class="img-wrapper">
        <img :src="previewUrl">
      </div>
    </el-dialog>
  </div>
</template>

<script>

export default {
  data() {
    return {
      photos: [
        {
          imgUrl: 'https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/home/img/qrcode/zbios_efde696.png',
          imgId: '2321'
        }
      ],
      showDialog: false,
      previewUrl: ''
    }
  },
  methods: {
    handleAvatarSuccess() {

    },
    beforeAvatarUpload() {

    },
    deleteImg(id, index) {

    },
    preview(url) {
      this.showDialog = true
      this.previewUrl = url
    }
  }
}
</script>

<style lang='scss' scoped>
  .photos /deep/ {
    .title {
      margin-bottom: 20px;
      color: #595959;
      font-size: 22px;
    }
    .photo-list {
      margin: 20px 0;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      .photo {
        position: relative;
        flex: 0 auto;
        width: 180px;
        height: 180px;
        margin-right: 20px;
        cursor: pointer;
        &:hover {
          .delete-button {
            display: block;
          }
        }
        img {
          width: 100%;
          height: 100%;
        }
        .delete-button {
          display: none;
          position: absolute;
          padding: 5px;
          width: 100%;
          color: #fff;
          font-size: 14px;
          text-align: center;
          background-color:rgba(0,0,0,.5);
          bottom: 0;
          left: 0;
          z-index: 5;
          cursor: pointer;
        }
      }
      .add-photo {
        flex: 0 auto;
        width: 180px;
        height: 180px;
        background-color: #F8F8F8 ;
        .photos-uploader {
          width: 100%;
          height: 100%;

          .el-upload {
            padding: 46px 20px 0;
            &:hover {
              .el-upload__text  {
                color: #00B35D;
              }
            }
            .avatar-uploader-icon {
              margin-bottom: 10px;
              font-size: 24px;
            }
            .el-upload__text {
              font-size: 14px;
              color: #aaa;
            }

          }
        }
      }
    }
    .img-wrapper {
      text-align: center;
      img {
        width: auto;
      }
    }


  }
</style>