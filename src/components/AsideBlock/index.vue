<template>
  <div class="inline-block">
    <div class="shield">
      <div class="count">
        <router-link to="">{{ abandonCompanyCount }}</router-link>
        <span>家</span>
        <div class="ps">屏蔽企业</div>
      </div>
    </div>
    <div class="restore">
      <div class="count">
        <router-link to="">{{ likeCompanyCount }}</router-link>
        <span>条</span>
        <div class="ps">收藏夹</div>
      </div>
    </div>
    <div class="list">
      <slot></slot>
      <div class="item">
        <router-link to="">
          <img src="">
          <p>我的简历</p>
        </router-link>
      </div>
      <div class="item">
        <router-link to="">
          <img src="">
          <p>投递箱</p>
        </router-link>
      </div>
      <div class="item">
        <router-link to="">
          <img src="">
          <p>收藏夹</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['abandonCompanyCount', 'likeCompanyCount', 'uid']
}
</script>


<style lang="scss" scoped>
  .inline-block {
    padding: 30px 30px 35px;
    background-color: #fff;
    border: 1px solid #E0F1E7;
    border-radius: 4px;
    text-align: center;
    .shield {
      margin-right: 45px;
    }
    .shield,.restore {
      display: inline-block;
      .count {
        a {
          color: #00B35D;
          font-size: 32px;
        }
        span {
          color: #707070;
          font-size: 12px;
        }
        .ps {
          margin-top: 5px;
          color: #3F3F3F;
          font-size: 12px;
        }
      }
    }
    .list {
      margin-top: 25px;
      .item {
        width: 48px;
        display: inline-block;
        margin-right: 25px;
        font-size: 12px;
        color: #3F3F3F;
        &:last-child {
          margin-right: 0;
        }
        img {
          width: 48px;
          height: 48px;
          border-radius: 50%;
        }
      }
    }
  }
</style>
