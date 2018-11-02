<template>
  <div class="box-wrapper">
    <div v-for="item in boxList" class="box">
      <router-link to="" class="job">{{ item.job }}</router-link>
      <div class="right">
        <router-link to="" class="company">
          <span>{{ item.company }}</span>
          <span>{{ item.location }}</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    boxList: {
      required: true,
      type: Array,
      default: [
        {
          links: '',
          job: '产品经理',
          company: '江西来融金服',
          location: '萍乡'
        },
        {
          links: '',
          job: '产品经理',
          company: '江西来融金服',
          location: '萍乡'
        },
        {
          links: '',
          job: '产品经理',
          company: '江西来融金服',
          location: '萍乡'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
