<template>
  <div class="container">
    <div class="header">
      <div class="title">Banner列表</div>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="id" label="id" width="100"> </el-table-column>
        <el-table-column prop="img" label="图片" width="200">
          <el-image
            style="max-height:150px;max-width:120px;"
            v-if="scope.row.img"
            slot-scope="scope"
            :src="scope.row.img"
          ></el-image>
        </el-table-column>
        <el-table-column width="120" prop="name" label="名称"> </el-table-column>
        <el-table-column width="150" prop="title" label="标题"> </el-table-column>
        <el-table-column show-overflow-tooltip prop="description" label="描述"> </el-table-column>
        <el-table-column prop="address" label="操作"> </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import Banner from '@/model/banner.js'

export default {
  created() {
    this.getBanners()
  },

  methods: {
    async getBanners() {
      const res = await Banner.getBanners()
      this.tableData = res.items
    },
  },
  data() {
    return {
      tableData: [],
    }
  },
}
</script>

<style lang="scss" scoped>
.container {
  padding: 20px 30px 0 30px;
  .title {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 20px;
    color: $theme;
  }
}
</style>
