const resumeMixin = {
  data() {
    return {
      hiddenShow: false
    }
  },
  methods: {
    showHidden() {
      this.hiddenShow = true
    }
  }
}

module.exports =  resumeMixin