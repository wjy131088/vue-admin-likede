<template>
  <div class="order-statistics">
    <el-row :gutter="0">
      <el-col :span="5"><div class="grid-content title">销售统计</div></el-col>
      <el-col :span="19"><div class="grid-content data">2022.09.01~2022.09.29</div></el-col>
    </el-row>
    <el-row :gutter="0" class="num">
      <el-col :span="12"><div class="grid-content"><h3>13958</h3></div></el-col>
      <el-col :span="12"><div class="grid-content"><h3>9.02</h3></div></el-col>
    </el-row>
    <el-row class="text" :gutter="0">
      <el-col :span="12"><div class="grid-content">订单量 (个)</div></el-col>
      <el-col :span="12"><div class="grid-content">销售额 (万元)</div></el-col>
    </el-row>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
*{
  padding: 0;
  margin: 0;
}
.el-row {
    margin-bottom: 15px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
.order-statistics{
  padding: 10px 15px 0;
  font-size: 12px;
  background:url('~@/assets/common/pinkpig.png') no-repeat right bottom;
  background-color: #fbefe8;
   border-radius: 10px;
   .title{
      font-size: 16px;
      font-weight: 700;
      line-height: 36px;
    }
    .data{
      color: #b8afaf;
      line-height: 36px;
    }
    .num{
      text-shadow:4px 4px 4px #fccec5;
      text-align: center;
      font-size: 36px;
      color: #ff5757;
    }
    .text{
        color: #e7a9a2;
        text-align: center;
    }
}

</style>

