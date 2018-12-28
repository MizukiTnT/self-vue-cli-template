<template>
  <div class="companyCenter">
    <div class="content">
      <el-row>
        <el-col :span="16">
          <div class="company_header wrapper">
            <baseInfo />
          </div>
          <div class="company_introdution wrapper">
            <introduct/>
          </div>
          <div class="company_photo wrapper">

          </div>
          <div class="conpany_job wrapper">
            <div class="show_layer">

              <div class="edit-button">
                <i class="el-icon-edit-outline" />
                <span>编辑</span>
              </div>
            </div>
            <div class="edit_layer">

            </div>
          </div>
        </el-col>
        <el-col :offset="1" :span="7"></el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import baseInfo from './components/base'
import introduct from './components/introduct'
export default {
  components: {
    baseInfo,
    introduct
  },
  data() {
    return {
      editIntroduction: false,

      introduction: {
        introduct: ''
      }
    }
  },
  methods: {

  }
}
</script>

<style lang='scss' scoped>
  .companyCenter /deep/ {

    .content {
      width: 1100px;
      padding: 0 20px;
      margin: 35px auto 65px;
      .wrapper {
        padding: 30px 0;
        .show_layer {
          position: relative;
          &:hover {
            .edit-button {
              display: block;
            }
          }
          .edit-button {
            display: none;
            position: absolute;
            color: #595959;
            font-size: 14px;
            top: 5px;
            right: 0;
            cursor: pointer;
          }
        }
        .edit_layer {
          .operate {
            font-size: 14px;
            margin-top: 25px;
            text-align: center;
            .save {
              padding: 7px 17px;
              background-color: #30BE7A;
              color: #fff;
              border-radius: 17px;
              margin-right: 60px;
              cursor: pointer;
              &:hover {
                background-color: #30be7acc;
              }
            }
            .cancel {
              color: #AAA;
              cursor: pointer;
              &:hover {
                color: #666;
              }
            }
          }
        }
      }
      .company_header {
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
      .company_introdution {

      }
      .company_photo {

      }
      .conpany_job {

      }

    }
  }
</style>