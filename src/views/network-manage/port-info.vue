<template>
  <div class="port-info-view-wrapper view-wrapper">
    <div class="inner-header-wrapper">
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
  background: url("../../assets/images/entirety.jpg") center/contain no-repeat;
  margin: 0 auto;
}

.port-info-wrapper {
  $color: #a2a2a2;
  border-top: 1px solid $color;
  border-left: 1px solid $color;
  margin-top: 10px;
  .system-info-item {
    display: flex;
    align-items: center;
    color: $color;

    span {
      width: 50%;
      height: 48px;
      line-height: 48px;
      border-right: 1px solid $color;
      border-bottom: 1px solid $color;
    }

    span:first-child {
      text-align: center;
    }
    span:last-child {
      padding-left: 50px;
    }
  }
}
</style>
