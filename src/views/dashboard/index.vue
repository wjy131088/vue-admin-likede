<template>
  <div class="dashboard-container">
    <div class="dashboard-text">
      <div class="top" style="">
        <div class="top-left">
          <el-row :gutter="10">
            <el-col :span="12">
              <div class="grid-content bg-purple order-statistics">1</div>
            </el-col>
            <el-col :span="12">
              <div class="grid-content bg-purple sales-statistics">1</div>
            </el-col>
          </el-row>
          <div class="Chart">
            <el-col :span="24"><div class="grid-content bg-purple chart">1</div></el-col>
          </div>
        </div>
        <div class="top-right">
          <el-col :span="24">
            <div class="grid-content bg-purple hot-goods">1</div>
          </el-col>
        </div>
      </div>
      <div class="bottom">
        <el-row :gutter="10">
          <el-col :span="14"><div class="grid-content bg-purple point-img">1</div></el-col>
          <el-col :span="10"><div class="grid-content bg-purple point-img">1</div></el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters([
      // 'name'
    ])
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 10px;
    .el-row {
    margin-bottom: 12px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 10px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 8px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
    .top{
    display: flex;
    margin-bottom: 10px;
    .top-left{
      background-color: #ccc;
      margin-right: 10px;
      flex: 16;
  //     .top-left-total{
  //       display: flex;
  //       .order-statistics{
  //         width: 460px;
  //         height: 170px;
  //       }
  //     }
  //     .Chart{}
    }
    .top-right{flex: 8;}
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }

  // .bottom{
  //   .bottom-left{}
  //   .bottom-right{}
  .order-statistics{
    height: 166px !important;
  }
  .sales-statistics{
    height: 166px !important;
  }
 .chart{
    height: 352px !important;
  }
  .hot-goods{
    height: 538px !important;
  }
  .point-img{
    height: 353px !important;

  }
  }
}
</style>
