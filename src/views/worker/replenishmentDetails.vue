<template>
  <div>
    <el-dialog title="补货详情" :visible.sync="replenishmentDetails">
      <el-table :header-cell-style="{'background-color': '#f3f6fb'}">
        <el-table-column property="date" label="货道编号" width="150" />
        <el-table-column property="name" label="商品名称" width="200" />
        <el-table-column property="address" label="当前数量" />
        <el-table-column property="address" label="还可添加" />
        <el-table-column property="address" label="布满数量" />
      </el-table>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: {
    replenishmentDetails: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style>

</style>
