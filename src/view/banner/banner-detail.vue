<template>
  <div class="container">
    <div class="header">
      <div class="title">Banner详情</div>
      <span @click="onGoBack"><i class="iconfont icon-fanhui"></i> 返回</span>
    </div>
    <el-divider></el-divider>
    <div class="form-container">
      <el-form :model="form" label-width="100px">
        <el-form-item label="名称">
          <el-input v-model="form.name" size="medium"></el-input>
        </el-form-item>
        <el-form-item label="标题">
          <el-input v-model="form.title" size="medium"></el-input>
        </el-form-item>
        <el-form-item label="Banner描述">
          <el-input v-model="form.description" size="medium"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button v-permission="{ permission: '更新Banner', type: 'disabled' }" type="primary" @click="onSubmit"
            >保存</el-button
          >
          <el-button>重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import Banner from '@/model/banner.js'

export default {
  name: 'BannerDetail',
  props: {
    bannerId: {
      type: Number,
    },
  },
  data() {
    return {
      form: {},
    }
  },
  async created() {
    const detail = await this.getDetail()
    this.form = detail
  },
  methods: {
    async getDetail() {
      const detail = await Banner.getDetail(this.bannerId)
      return detail
    },
    onGoBack() {
      this.$emit('detail-close')
    },
    onSubmit() {
      console.log(this.form)
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  padding: 20px 30px 0 30px;
  .title {
    font-size: 16px;
    font-weight: 500;
    color: $theme;
  }
}
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: $theme;
  cursor: pointer;
}
.form-container {
  width: 600px;
}
</style>
