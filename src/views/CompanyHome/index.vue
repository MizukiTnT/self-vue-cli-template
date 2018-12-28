<template>
  <div class="home">
    <div class="wrapper">
      <el-row>
        <el-col :span="18">
          <el-row>
            <el-col :span="11">
              <el-card shadow="hover" class="box-card">
                <div slot="header" class="clearfix">
                  <span>我收到的简历</span>
                </div>
                <div class="content-wrapper">
                  <div class="message">
                    <p>待筛选简历: 个</p>
                    <p>已通知面试简历: <span></span>个</p>
                    <p>不适合建立: <span></span>个</p>
                  </div>
                  <div class="buttons">
                    <span class="yellow">搜索简历</span>
                    <span class="green">管理简历</span>
                  </div>
                </div>
              </el-card>
            </el-col>
            <el-col :span="11" :offset="1">
              <el-card shadow="hover" class="box-card">
                <div slot="header" class="clearfix">
                  <span>我发布的职位</span>
                </div>
                <div class="content-wrapper">
                  <div class="message">
                    <p>有限职位: 个</p>
                    <p>已下线职位: <span></span>个</p>
                  </div>
                  <div class="buttons">
                    <span class="yellow">发布职位</span>
                    <span class="green">管理职位</span>
                  </div>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="6">
          <div class="aside">
            <div class="user">
              <div class="profile">
                <div class="profile_avatar">
                  <img src="" alt="">
                </div>
                <div class="profile_detail">
                  <div class="profile_detail_name">
                    <span class="name">xxx</span>
                    <span class="position">客服</span>
                  </div>
                  <div class="mail">邮箱: 454546545</div>
                </div>
              </div>

              <div class="profile_manage">
                <div class="manage">
                  <p>
                    <span class="count">0</span>
                    <span>条</span>
                  </p>
                  <p>待筛选简历</p>
                  <p>
                    <router-link to="">去筛选>></router-link>
                  </p>
                </div>
                <div class="manage">
                  <p>
                    <span class="count">0</span>
                    <span>条</span>
                  </p>
                  <p>有效职位</p>
                  <p>
                    <router-link to="">去查看>></router-link>
                  </p>
                </div>
              </div>

            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  }
}
</script>

<style lang='scss' scoped>
  .home {
    .wrapper {
      width: 1100px;
      margin: 40px auto 150px;
      padding: 0 20px;
      .box-card {
        .content-wrapper {
          position: relative;
          height: 164px;
          .message {
            p {
              color: #646464;
              span {
                color: #00B35D;
              }
            }

          }
          .buttons {
            position: absolute;
            bottom: 20px;
            left: 0;
            .yellow {
              margin-right: 10px;
              padding: 6px 17px;
              background-color: #FFDD57;
              color: #4A4A4A;
              cursor: pointer;
              border-radius: 4px;
            }
            .green {
              padding: 6px 17px;
              border-radius: 4px;
              background-color: #00B35D;
              color: #fff;
              cursor: pointer;
            }
          }
        }

      }
      .aside {
        padding: 30px 20px;
        border: 1px solid #E0F1E7;
        .user {
          .profile {
            display: flex;
            align-items: center;
            .profile_avatar {
              margin-right: 10px;
              flex: 0 auto;
              width: 60px;
              height: 60px;
              border-radius: 50%;
              img {
                width: 100%;
                height: 100%;
                border-radius: 50%;
              }
            }
            .profile_detail {
              margin-bottom: 23px;
              .profile_detail_name {
                vertical-align: bottom;
                .name {
                  margin-right: 10px;
                  color: #4B4742;
                  font-size: 16px;
                }
                .position {
                  color: #ABABAB;
                  font-size: 12px;
                }
              }
              .mail {
                margin-top: 5px;
                color: #ABABAB;
                font-size: 12px;
              }
            }
          }
          .profile_manage {
            display: flex;
            justify-content: center;
            .manage {
              text-align: center;
              p {
                margin: 10px 0;
                &:nth-child(2) {
                  color: #3F3F3F;
                  font-size: 14px;
                }
                .count {
                  font-size: 36px;
                  color: #00B35D;
                }
                a {
                  font-size: 12px;
                  color: #00B35D;
                }
              }
              &:first-child {
                margin-right: 50px;
              }
            }
          }
        }
      }
    }
  }
</style>