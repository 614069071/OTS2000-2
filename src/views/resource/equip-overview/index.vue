<template>
  <div class="equip-overview-view-wrapper view-wrapper">
    <div class="inner-header-wrapper">
      <div class="inner-container-title">设备框图</div>
      <div class="veneer-block-diagram-wrapper">
        <!-- 设备框图 -->
      </div>
    </div>

    <div class="inner-container-wrapper banner-list">
      <div class="inner-container-title">系统信息</div>
      <div></div>
      <div class="inner-container-title">系统性能</div>
      <div></div>
    </div>

    <div class="inner-pagination-wrapper">
      <el-pagination background layout="prev, pager, next, jumper" :total="1000" />
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

<style>
.veneer-block-diagram-wrapper {
  width: 80%;
  height: 200px;
  background-color: grey;
  background: url("../../../assets/images/machine1.png") center/contain no-repeat;
  margin: 0 auto;
}
</style>
