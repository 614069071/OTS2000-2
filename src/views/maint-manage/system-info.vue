<template>
  <div class="system-info-view-wrapper view-wrapper">
    <div class="inner-header-wrapper">
      <div class="inner-container-title">设备框图</div>
      <div class="system-info-diagram-wrapper">
        <!-- 设备框图 -->
      </div>
    </div>

    <div class="inner-container-wrapper banner-list">
      <el-form :model="dataForm" label-width="120px" :inline="true">
        <div class="inner-container-title">设置时间</div>
        <el-form-item label="手动设置时间">
          <el-input v-model="dataForm.name2"></el-input>
        </el-form-item>
        <el-form-item label="自动获取时间">
          <el-checkbox v-model="dataForm.name1"></el-checkbox>
        </el-form-item>
        <el-form-item label="系统运行时间">
          <el-input v-model="dataForm.name3"></el-input>
        </el-form-item>
        <div class="inner-container-title">机箱温度</div>

        <el-form-item label="最低温度">
          <el-input v-model="dataForm.name4"></el-input>
        </el-form-item>
        <el-form-item label="最高温度">
          <el-input v-model="dataForm.name4"></el-input>
        </el-form-item>

        <el-form-item label="">
          <el-button type="primary">应用</el-button>
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
      dataTable: [
        {
          name1: "webadmin",
          name2: "串口",
          name3: "修改",
          name4: "2020-2-10",
          name5: "aaa",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style scoped lang="scss">
.system-info-diagram-wrapper {
  width: 80%;
  height: 200px;
  background-color: grey;
  background: url("../../assets/images/machine1.png") center/contain no-repeat;
  margin: 0 auto;
}

.system-info-wrapper {
  display: flex;
  flex-wrap: wrap;
  border-top: 1px solid grey;
  border-left: 1px solid grey;
  .system-info-item {
    width: 50%;
    display: flex;
    align-items: center;

    span {
      height: 48px;
      border-right: 1px solid grey;
      border-bottom: 1px solid grey;
      line-height: 48px;
    }

    span:first-child {
      background-color: #f4f7fa;
      width: 120px;
      text-align: center;
    }
    span:last-child {
      flex: 1;
      padding-left: 15px;
    }
  }
}
</style>
