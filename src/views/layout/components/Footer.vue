<template>
  <div class="footer-wrapper">
    <div class="footer-nav">
      <el-row align="middle" type="flex" class="serve-wrapper">
        <el-col :span="5">
          <div class="code-wrapper">
            <img src="@/assets/images/weixin.jpg" alt="">
          </div>
        </el-col>
        <el-col :span="19" class="nav-wrapper">
          <el-row>
            <el-col :span="7">
              <h4>企业服务</h4>
              <ul>
                <li>
                  <router-link to="">去企业版</router-link>
                </li>
                <li>
                  <router-link to="">去企业版</router-link>
                </li>
              </ul>
            </el-col>
            <el-col :span="7">
              <h4>用户帮助</h4>
              <ul>
                <li>
                  <router-link to="">用户服务协议</router-link>
                </li>
                <li>
                  <router-link to="">帮助中心</router-link>
                </li>
              </ul>
            </el-col>
            <el-col :span="10">
              <h4>联系方式</h4>
              <ul>
                <li>服务热线: 4002 2401 30 (9:00 - 18:00)</li>
                <li>企业邮箱</li>
              </ul>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
    <div class="bottom-nav">
      <ul class="link-wrapper">
        <li class="police">
          <router-link to="">
            <img src="@/assets/images/beian.png" alt="">
            <span>赣公网安备 36010802000187号</span>
          </router-link>
        </li>
        <li>
          <router-link to="">
            <img src="@/assets/images/honor-1.jpg" alt="">
          </router-link>
        </li>
        <li>
          <router-link to="">
            <img src="@/assets/images/honor-2.jpg" alt="">
          </router-link>
        </li>
        <li>
          <router-link to="">
            <img src="@/assets/images/honor-3.jpg" alt="">
          </router-link>
        </li>
        <li>
          <router-link to="">
            <img src="@/assets/images/honor-4.jpg" alt="">
          </router-link>
        </li>
        <li>
          <router-link to="">
            <img src="@/assets/images/honor-5.jpg" alt="">
          </router-link>
        </li>
      </ul>
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

<style lang="scss" scoped>
  .footer-wrapper {
    border-top: 1px solid #e7e7e7;
    .footer-nav {
      height: 215px;
      .serve-wrapper {
        width: 1100px;
        height: 100%;
        padding: 0 20px;
        margin: 0 auto;
        .code-wrapper {
          border-right: 1px solid #E8E8E8;
        }
        .nav-wrapper {
          padding-left: 140px;
          h4 {
            margin: 17px 0;
            font-size: 18px;
            color: #556675;
          }
          ul {
            margin: 0;
            li {
              margin-bottom: 18px;
              font-size: 14px;
              color: #7F7F7F;
              a {
                color: #7F7F7F;
              }
            }
          }
        }
      }
    }
    .bottom-nav {
      height: 100px;
      background-color: #fafafa;
      .link-wrapper {
        width: 1100px;
        height: 100%;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: center;
        li {
          margin-right: 15px;
          &.police {
            margin-right: 40px;
            font-size: 14px;
            color: #7F7F7F;
            img {
              width: 20px;
              height: 20px;
              margin-right: 5px;
              vertical-align: middle;
            }
          }
          a {

            img {
              width: 90px;
              height: 30px;
            }
          }
        }
      }
    }
  }
</style>
