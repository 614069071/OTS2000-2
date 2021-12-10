<template>
  <div class="port-info-view-wrapper view-wrapper">
    <div class="inner-header-wrapper">
      <div class="inner-container-title">设备框图</div>
      <div class="port-info-diagram-wrapper">
        <!-- 设备框图 -->
      </div>
    </div>

    <div class="inner-container-wrapper banner-list">
      <div class="inner-container-title">串口信息</div>
      <div class="port-info-wrapper">
        <div class="system-info-item"><span>波特率</span><span>11520</span></div>
        <div class="system-info-item"><span>数据位</span><span>3</span></div>
        <div class="system-info-item"><span>奇偶校验</span><span>none</span></div>
        <div class="system-info-item"><span>停止位</span><span>1</span></div>
        <div class="system-info-item"><span>流量控制</span><span>none</span></div>
        <div class="system-info-item"><span></span><span></span></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "veneer-list",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped lang="scss">
.port-info-diagram-wrapper {
  width: 80%;
  height: 200px;
  background-color: grey;
  background: url("../../assets/images/machine1.png") center/contain no-repeat;
  margin: 0 auto;
}

.port-info-wrapper {
  display: flex;
  flex-wrap: wrap;
  border-top: 1px solid grey;
  border-left: 1px solid grey;
  .system-info-item {
    width: 33.33%;
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
