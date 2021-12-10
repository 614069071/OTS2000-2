<template>
  <div class="cascade-config-view-wrapper view-wrapper">
    <div class="inner-header-wrapper">
      <div class="inner-container-title">设备框图</div>
      <div class="cascade-config-diagram-wrapper">
        <!-- 设备框图 -->
      </div>
    </div>

    <div class="inner-container-wrapper banner-list">
      <div class="inner-container-title">IP地址配置</div>
      <el-form :model="dataForm" label-width="96px" :inline="true">
        <el-form-item label="级联选择">
          <el-select v-model="dataForm.name1" placeholder="请选择订单状态">
            <el-option label="清除级联" value="1"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="网元">
          <el-select v-model="dataForm.name2" placeholder="请选择订单状态">
            <el-option label="主网元" value="1"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="">
          <el-button type="primary">确认</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "cascade-config",
  data() {
    return {
      dataForm: {},
    };
  },
  methods: {},
};
</script>

<style scoped>
.cascade-config-diagram-wrapper {
  width: 80%;
  height: 200px;
  background-color: grey;
  background: url("../../assets/images/machine1.png") center/contain no-repeat;
  margin: 0 auto;
}
</style>
