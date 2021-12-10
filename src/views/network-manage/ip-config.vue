<template>
  <div class="veneer-list-view-wrapper view-wrapper">
    <div class="inner-header-wrapper">
      <div class="inner-container-title">设备框图</div>
      <div class="veneer-block-diagram-wrapper">
        <!-- 设备框图 -->
      </div>
    </div>

    <div class="inner-container-wrapper banner-list">
      <div class="inner-container-title">IP地址配置</div>
      <el-form :model="dataForm" label-width="96px" :inline="true">
        <el-form-item label="IP地址">
          <el-input v-model="dataForm.name1"></el-input>
        </el-form-item>
        <el-form-item label="子网掩码">
          <el-input v-model="dataForm.name2"></el-input>
        </el-form-item>
        <el-form-item label="网关">
          <el-input v-model="dataForm.name3"></el-input>
        </el-form-item>
        <el-form-item label="端口">
          <el-input v-model="dataForm.name4"></el-input>
        </el-form-item>
        <el-form-item label="MAC地址">
          <el-input v-model="dataForm.name4"></el-input>
        </el-form-item>

        <el-form-item label="">
          <el-button class="form-btn" type="primary">修改</el-button>
          <el-button type="primary">保存设置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "veneer-list",
  data() {
    return {
      dataForm: {},
    };
  },
  methods: {},
};
</script>

<style scoped>
.veneer-block-diagram-wrapper {
  width: 80%;
  height: 200px;
  background-color: grey;
  background: url("../../assets/images/machine1.png") center/contain no-repeat;
  margin: 0 auto;
}

.form-btn {
  margin-left: 96px;
}
</style>
