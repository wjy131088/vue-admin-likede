<template>
  <div class="dashboard-container">
    <div class="dashboard-text">
      <div class="top" style="">
        <div class="top-left">
          <el-row :gutter="10">
            <el-col :span="13">
              <div class="grid-content bg-purple order-statistics">
                <!-- =工单统计 -->
                <order-total-img />
              </div>
            </el-col>
            <el-col :span="11">
              <!-- 销售统计 -->
              <div class="grid-content bg-purple sales-statistics">
                <sales-total-img />
              </div>
            </el-col>
          </el-row>
          <div class="Chart">
            <Echart />
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
import OrderTotalImg from './components/OrderTotalImg.vue'
import SalesTotalImg from './components/SalesTotalImg.vue'
import Echart from './components/Echart.vue'
export default {
  components: {
    OrderTotalImg,
    SalesTotalImg,
    Echart
  }
}
</script>

<style lang="scss" scoped>
.dashboard-text{
  min-width: 1200px !important;
}
.dashboard {
  &-container {
    // margin: 15px;
    .el-row {
    margin-bottom: 15px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 15px;
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
      margin-right: 10px;
      flex: 17;
    }
    .top-right{flex: 7;}
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
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
