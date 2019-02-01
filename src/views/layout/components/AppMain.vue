<template>
  <section class="app-main">
    <router-view/>
  </section>
</template>

<script>
export default {
  name: 'AppMain'
}
</script>

<style scoped>
.app-main {
  /*50 = navbar  */
  min-height: calc(100vh - 365px);
  position: relative;
}
</style>
