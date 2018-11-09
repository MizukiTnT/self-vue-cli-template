<template>
  <div class="c-header">
    <div class="header-wrapper">
      <el-row :gutter="20" type="flex" align="middle">
        <el-col :span="5">
          <img src="companyInfo.img" class="c-img">
        </el-col>
        <el-col :span="17" class="c-info">
          <h4>{{ companyInfo.name }}</h4>
          <div class="sub">
            <span>{{ companyInfo.location }}</span>
            <span>{{ companyInfo.size }}</span>
            <span>{{ companyInfo.type }}</span>
          </div>
          <div class="sub">
            {{ companyInfo.index }}
          </div>
        </el-col>
        <el-col :span="2" class="wanting">
          <router-link to="">{{ companyInfo.require }}</router-link>
          <div class="sub">在招职位</div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    companyInfo: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
  .c-header {
    margin: 0 auto;
    padding: 60px 0 100px;
    background-color: #F2F7F4;
    .header-wrapper {
      width: 1100px;
      margin: 0 auto;
      padding: 0 20px;
      .c-img {
        width: 181px;
        height: 115px;
      }
      .c-info {
        h4 {
          margin: 0;
          font-size: 22px;
          color: #2D2D2D;
          font-weight: 400;
        }
        .sub {
          margin-top: 10px;
          color: #7E7F80;
          font-size: 14px;
        }
      }
      .wanting {
        text-align: center;
        a {
          font-size: 24px;
          &:hover {
            text-decoration: underline;
          }
        }
        .sub {
          margin-top: 5px;
          color: #6B6B6B;
          font-size: 14px;
        }
      }
    }

  }
</style>
