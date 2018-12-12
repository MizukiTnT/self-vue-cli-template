<template>
  <div class="app-wrapper">
    <div class="main-container">
      <top-nav/>
      <navbar/>
      <app-main/>
      <footer-nav/>
    </div>
  </div>
</template>

<script>
import { Navbar, AppMain, TopNav, FooterNav } from './components'

export default {
  name: 'Layout',
  components: {
    Navbar,
    AppMain,
    TopNav,
    FooterNav
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .app-wrapper {
    position: relative;
    height: 100%;
    width: 100%;
  }
  .drawer-bg {
    background: #000;
    opacity: 0.3;
    width: 100%;
    top: 0;
    height: 100%;
    position: absolute;
    z-index: 999;
  }
</style>
