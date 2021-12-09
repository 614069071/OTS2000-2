<template>
  <div class="equip-overview-view-wrapper view-wrapper">
    <div class="inner-header-wrapper">
      <div class="inner-container-title equip-overview-title-wrapper">
        设备框图
        <div>自动刷新剩余时间：60秒 <el-button size="mini" type="primary">立即刷新</el-button></div>
      </div>
      <div class="veneer-block-diagram-wrapper">
        <!-- 设备框图 -->
      </div>
    </div>

    <div class="inner-container-wrapper banner-list">
      <div class="inner-container-title">系统信息</div>
      <div class="system-info-wrapper"></div>
      <div class="inner-container-title">系统性能</div>
      <div class="system-performance-wrapper"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "equip-overview",
  data() {
    return {
      dataForm: {},
      inquireLoading: false,
    };
  },
  methods: {},
};
</script>

<style scoped lang="scss">
.equip-overview-title-wrapper {
  display: flex;
  justify-content: space-between;
}
.veneer-block-diagram-wrapper {
  width: 80%;
  height: 200px;
  background-color: grey;
  background: url("../../../assets/images/machine1.png") center/contain no-repeat;
  margin: 0 auto;
}
</style>
