<template>
  <div>
    <!-- 新建弹出窗--新增工单 -->
    <el-dialog
      title="新增工单"
      :visible.sync="newTask"
      width="630px"
      :close-on-click-modal="false"
      :before-close="changeNewTask"
    >
      <el-form ref="form" :model="form" class="myDialog" :rules="rules">
        <!-- 文本框 -->
        <el-form-item label="设备编号：" prop="name" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off" placeholder="请输入" />
        </el-form-item>
        <!-- 补货数量 -->
        <el-form-item style="color:#6487ff;;" label="补货数量：" :label-width="formLabelWidth">
          <span class="el-icon-edit-outline" style="margin-right:5px;font-size:16px" />
          <a style="font-size:15px" @click="changeReplenishmentDetails">补货清单</a>
        <!-- <el-input v-model="form.name" prefix-icon="el-icon-edit-outline" autocomplete="off" /> -->
        </el-form-item>
        <!-- 下拉选择 -->
        <el-form-item label="工单类型：" :label-width="formLabelWidth">
          <el-select v-model="form.region" placeholder="请选择">
            <el-option label="补货工单" value="2" />
          </el-select>
        </el-form-item>
        <!-- 下拉选择 -->
        <el-form-item label="运营人员：" :label-width="formLabelWidth">
          <el-select v-model="form.region" placeholder="请选择">
            <el-option label="补货工单" value="2" />
          </el-select>
        </el-form-item>
        <!-- 文本域 -->
        <el-form-item label="备注：" :label-width="formLabelWidth">
          <el-input v-model="form.name" type="textarea" autocomplete="off" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="changeNewTask">取 消</el-button>
        <el-button type="primary" @click="changeNewTask">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: {
    newTask: {
      type: Boolean,
      default: false
    },
    replenishmentDetails: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      formLabelWidth: '100px',
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    changeNewTask() {
      this.$emit('closeNewTask')
    },
    changeReplenishmentDetails() {
      this.$emit('showReplenishmentDetails')
    }
  }
}
</script>

<style>
.myDialog {
    padding: 30px 60px 30px 40px;
    color: #606266;
    font-size: 14px;
    word-break: break-all;
}
</style>
