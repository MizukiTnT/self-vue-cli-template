<template>
  <div class="recruit-service">
    <div class="title">
      <div>填写公司信息</div>
      <div><i class="el-icon-arrow-down"/></div>
    </div>
    <step :currentStep="currentStep" />
    <div class="content">
      <div v-show="currentStep == 0" class="wrapper step1">
        <el-form :model="baseInfo">
          <el-form-item
          label="公司全称"
          required>
            <div class="totalName"></div>
          </el-form-item>

          <el-form-item
          prop="simpleName"
          label="公司简称"
          required>
            <el-input
             v-model="baseInfo.simpleName"
             placeholder="请输入公司简称"
             />
          </el-form-item>
          <el-form-item
          prop="imgUrl"
          label="公司LOGO"
          required>
            <div class="upload-wrapper">
              <el-upload
                class="upload"
                drag
                action="https://jsonplaceholder.typicode.com/posts/"
                multiple>
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                <div class="el-upload__tip" slot="tip">支持jpg、jpeg、png、gif、pdf格式，文件不超过5M</div>
              </el-upload>
              <img v-if="baseInfo.imgUrl" :src="baseInfo.imgUrl" alt="">
            </div>
          </el-form-item>
          <el-form-item
          prop="net"
          label="公司网址"
          required>
            <el-input placeholder="请输入内容" v-model="baseInfo.net">
              <template slot="prepend">http://</template>
            </el-input>
          </el-form-item>
          <el-form-item
          prop=""
          label="所在城市"
          required>
            <el-row :gutter="20">
              <el-col :span="9">
                <el-form-item prop="province"
                required>
                  <el-select v-model="baseInfo.province" placeholder="选择省份">
                    <el-option
                    label="江西"
                    value="31"/>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="9">
                <el-form-item
                prop="city"
                required>
                  <el-select  v-model="baseInfo.city"  placeholder="选择城市">
                    <el-option
                    label="萍乡"
                    value="32"/>
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form-item>
          <el-form-item
          prop="size"
          label="公司规模"
          required>
            <el-select v-model="baseInfo.size">
              <el-option
               v-for="item in companySizeOptions"
               :label="item.label"
               :value="item.value"
               :key="item.value"/>
            </el-select>
          </el-form-item>
          <el-form-item
          prop="state"
          label="发展阶段"
          required>
            <div class="status">
              <span
               v-for="tag in companyTypeOptions"
               @click="baseInfo.state = tag.value"
               class="tags">{{ tag.label }}</span>
            </div>
          </el-form-item>
          <el-form-item
          prop="slogan"
          label="公司标语"
          required>
            <el-input v-model="baseInfo.slogan"
            type="textarea"
            placeholder="一句话概括公司亮点，如公司愿景、领导团队等，限50字" />
          </el-form-item>
        </el-form>
        <div class="oprate">
          <div class="next-step"
            @click="stepOne">下一步</div>
        </div>
      </div>
      <div v-show="currentStep == 1" class="wrapper step2">
        <el-form :model="companyLabel">
          <el-form-item
          prop=""
          label="已添加标签"
          required>
            <div class="label-list">
              <labels :labels="$store.state.recruit.labels" />
            </div>
            <div class="add-label">
              <el-input
               v-model="companyLabel.label"
               placeholder="输入自定义标签" >
                <div
                class="add"
                @click="addLabel"
                 slot="append">贴上</div>
               </el-input>

            </div>
            <div class="label-list">

            </div>
          </el-form-item>
        </el-form>
        <div class="oprate">
          <div class="next-step"
            @click="stepOne">下一步</div>
        </div>
      </div>

      <div v-show="currentStep == 2" class="wrapper step3">
        <el-form :model="companyIntro">
          <el-form-item
          prop="introduction"
          label="公司介绍"
          required>
            <el-input
             type="textarea"
             :rows="5"
             v-model="companyIntro.inroduction"/>
          </el-form-item>

          <el-form-item
          prop="imgUrl"
          label="添加公司照片"
          required>
            <div class="hint">添加公司环境、员工照片，给用户展示更生动的公司全貌</div>
            <el-upload
              class="upload-demo"
              drag
              action="https://jsonplaceholder.typicode.com/posts/"
              multiple>
              <i class="el-icon-upload"></i>
              <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
              <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
          </el-form-item>
        </el-form>
        <div class="oprate">
          <div class="next-step"
            @click="stepOne">下一步</div>
        </div>
      </div>
      <div v-show="currentStep == 3" class="wrapper step4">
        <div class="result">
          <h4>恭喜你，公司信息已填写完善！</h4>
          <p>我们将尽快对您的信息进行审核，通过后您就可以发布职位啦~</p>
          <p>如有任何问题，请联系我们。 邮箱：yaoqin@191.cn 电话：0512-57567191</p>
        </div>
        <div class="oprate">
          <router-link to="/" class="back">回到首页
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 其实这里最好的解决办法是抽出一个类似于tabs的组件 里面有对应的panel 但是在设计阶段没考虑到 已经写了一个页面 只好这样做
import step from './components/steps'
import labels from './components//labels'
import { companySizeOptions, companyTypeOptions } from "@/mixin/options"

export default {
  mixins: [ companySizeOptions, companyTypeOptions ],
  components: { step, labels },
  data() {
    return {
      currentStep: 3,
      baseInfo: {
        baseInfo: '',
        simpleName: '',
        imgUrl: '',
        province: '',
        city: '',
        size: '',
        slogan: '',
        net: '',
        state: ''
      },
      companyLabel: {
        label: ''
      },
      companyIntro: {
        introduction: '',
        imgUrl: null
      },
      select: ''
    }
  },
  methods: {
    stepOne() {
      this.currentStep++
    },
    addLabel() {
      if(!this.companyLabel.label) {
        this.$message({
          message: '标签不能为空',
          type: 'warning'
        })
        return
      }
      this.$store.commit('ADD_LABEL', this.companyLabel.label)
      this.companyLabel.label = ''
    },

  },
  mounted() {

  }
}
</script>

<style lang='scss' scoped>
  .recruit-service /deep/ {
    margin: 56px auto;
    width: 560px;
    .title {
      text-align: center;
      font-size: 20px;
      font-weight: 600;
      color: #333333;
      div {
        &:first-child {
          margin-bottom: 8px;
        }
        &:last-child {
          font-size: 28px;
          font-weight: 600;
        }
      }
    }
    .content {
      .next-step {
        margin-top: 40px;
        width: 140px;
        height: 40px;
        font-size: 16px;
        color: #F0FBF8;
        background-color: #00B35D;
        border-radius: 4px;
        text-align: center;
        line-height: 40px;
        cursor: pointer;
      }
      .step1 {
        .tags {
          padding: 10px;
          margin-right: 14px;
          color: #999;
          background: #F8F8F8;
          border-radius: 4px;
          cursor: pointer;
          &.active {
            color: #fff;
            background-color: #10B76C;
          }
          &:hover {
            color: #fff;
            background-color: #10B76C;
          }
        }
      }
      .step2 {
        .add-label {
          .el-input-group__append {
            color: #fff;
            background-color: #10B76C;
            cursor: pointer;
            padding: 0;
          }
          .add {
            width: 69px;
            height: 40px;
            text-align: center;
            line-height: 40px;
          }
        }
      }
      .step3 {
        .el-upload__tip {
          margin-top: 0;
          line-height: 12px;
        }
        .hint {
          font-size: 14px;
          color: #B8B8B8;
        }
      }
      .step4 {
        margin-top: 60px;
        .result {
          h4 {
            margin: 15px 0 20px 0;
            font-size: 24px;
            font-weight: 400;
            color: #646464;
          }
          p {
            font-size: 15px;
            color: #7F7F7F;
          }
        }
        .oprate {
          margin-top: 40px;
          text-align: center;
          .back {
            padding: 11px 52px;
            font-size: 18px;
            background: #00B38A;
            border-radius: 8px;
            color: #fff;
            &:hover {
              background-color:#00b38ac9;
            }
          }
        }
      }
    }
    .el-input__inner {
      background-color: #F8F8F8;
      border-radius: 4px;
    }
    .el-input-group__append, .el-input-group__prepend {
      background-color: #fff;
    }
    .el-form-item__label {
      float:none;
    }
    .upload {
      .el-upload-dragger {
        width: 200px;
        height: 200px;
        background-color: #f8f8f8;
      }
      .el-upload__tip {
        line-height: 12px;
        margin-top: 0;
      }
      .el-upload__text {
        font-size: 12px;
      }
      .el-upload-dragger .el-icon-upload {
        font-size: 55px;
      }
    }
  }
</style>