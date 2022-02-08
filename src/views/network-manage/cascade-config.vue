<template>
  <div>
    <div class="inner-container-title">IP地址配置</div>

    <div class="cascade-form-wrapper">
      <div class="cascade-item-wrapper">
        <el-select size="mini" v-model="dataForm.name1" placeholder="请选择订单状态">
          <el-option label="清除级联" value="1"></el-option>
        </el-select>
        <button class="def-btn">确认</button>
      </div>

      <div class="cascade-item-wrapper">
        <el-select size="mini" v-model="dataForm.name2" placeholder="请选择订单状态">
          <el-option label="主网元" value="1"></el-option>
        </el-select>
        <button class="def-btn">确认</button>
      </div>
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
.cascade-form-wrapper {
  padding-top: 10px;
  display: flex;
  justify-content: space-between;
}

.cascade-item-wrapper button {
  margin-left: 10px;
}
</style>
