<template>
  <div class="option-bar">
    <div v-for="item in searchOptions" :key="item.optionType" class="options-wrapper">
      <div class="name">{{ item.name }}:</div>
      <div v-for="option in item.optionList" class="option">
        <span @click="handleSelect(item, option.value)" :class="{active: option.value == item.active}">{{ option.label }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchOptions: [
        {
          name: "工作经验",
          active: 0,
          optionType: 0,
          optionList: [
            {
              label: "不限",
              value: 0
            },
            {
              label: "应届毕业生",
              value: 1
            },
            {
              label: "三年以下",
              value: 2
            },
            {
              label: "3-5年",
              value: 3
            },
            {
              label: "5-10年",
              value: 4
            },
            {
              label: "10年以上",
              value: 5
            },
            {
              label: "不要求",
              value: 6
            }
          ]
        },
        {
          name: "工作经验",
          active: 0,
          optionType: 1,
          optionList: [
            {
              label: "不限",
              value: 0
            },
            {
              label: "应届毕业生",
              value: 1
            },
            {
              label: "三年以下",
              value: 2
            },
            {
              label: "3-5年",
              value: 3
            },
            {
              label: "5-10年",
              value: 4
            },
            {
              label: "10年以上",
              value: 5
            },
            {
              label: "不要求",
              value: 6
            }
          ]
        },
        {
          name: "工作经验",
          active: 0,
          optionType: 2,
          optionList: [
            {
              label: "不限",
              value: 0
            },
            {
              label: "应届毕业生",
              value: 1
            },
            {
              label: "三年以下",
              value: 2
            },
            {
              label: "3-5年",
              value: 3
            },
            {
              label: "5-10年",
              value: 4
            },
            {
              label: "10年以上",
              value: 5
            },
            {
              label: "不要求",
              value: 6
            }
          ]
        },
        {
          name: "工作经验",
          active: 0,
          optionType: 3,
          optionList: [
            {
              label: "不限",
              value: 0
            },
            {
              label: "应届毕业生",
              value: 1
            },
            {
              label: "三年以下",
              value: 2
            },
            {
              label: "3-5年",
              value: 3
            },
            {
              label: "5-10年",
              value: 4
            },
            {
              label: "10年以上",
              value: 5
            },
            {
              label: "不要求",
              value: 6
            }
          ]
        },
        {
          name: "工作经验",
          active: 0,
          optionType: 4,
          optionList: [
            {
              label: "不限",
              value: 0
            },
            {
              label: "应届毕业生",
              value: 1
            },
            {
              label: "三年以下",
              value: 2
            },
            {
              label: "3-5年",
              value: 3
            },
            {
              label: "5-10年",
              value: 4
            },
            {
              label: "10年以上",
              value: 5
            },
            {
              label: "不要求",
              value: 6
            }
          ]
        }
      ]
    }
  },
  methods:{
    handleSelect(item, value) {
      item.active = value
      this.$emit('transOptions', this.searchOptions)
    }
  }
}
</script>

<style lang="scss" scoped>
  .option-bar {
    padding: 20px;
    border: 1px solid #EAEAEA;
    background-color: #F9F9F9;
    .options-wrapper {
      margin-bottom: 20px;
      .name {
        margin-bottom: 10px;
        font-size: 16px;
        font-weight: 600;
        color: #4B4B4B;
      }
      .option {
        margin-bottom: 6px;
        font-size: 14px;
        color: #4B4B4B;
        >span {
          display: inline-block;
          padding: 5px;
          cursor: pointer;
          &.active {
            color: #fff;
            background-color: #00B35D;
          }
        }
      }
    }
  }
</style>
