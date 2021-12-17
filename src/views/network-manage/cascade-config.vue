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

.cascade-form-wrapper {
  padding-top: 10px;
  display: flex;
  justify-content: space-between;
}

.cascade-item-wrapper button {
  margin-left: 10px;
}
</style>
