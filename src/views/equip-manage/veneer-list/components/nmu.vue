<template>
  <div class="num-cps-wrapper">
    <div class="veneer-header-wrapper">Nmu</div>
    <div class="veneer-main-wrapper">
      <div class="veneer-channel-item"><span class="border">硬件版本</span><span class="border"></span></div>
      <div class="veneer-channel-item"><span class="border">软件件版本</span><span class="border"></span></div>
      <div class="veneer-channel-item"><span class="border">协议版本</span><span class="border"></span></div>
      <div class="veneer-channel-item"><span class="border">生产日期</span><span class="border"></span></div>
      <div class="veneer-channel-item"><span class="border">序列号</span><span class="border"></span></div>
      <div class="veneer-channel-item"><span class="border">运行时间</span><span class="border"></span></div>
      <div class="veneer-channel-item"><span class="border">设备类型</span><span class="border"></span></div>
      <div class="veneer-channel-item"><span class="border">状态</span><span class="border"></span></div>
      <div class="veneer-channel-item"><span class="border">信息描述</span><span class="border"></span></div>
    </div>

    <div class="venner-change-btns">
      <button class="def-btn">刷新</button>
      <button class="def-btn">应用</button>
    </div>

    <div class="venner-change-info-wrapper">
      <div class="venner-change-info-item">
        <span class="border">SFP端口</span>
        <span class="border">SFP1</span>
        <span class="border">SFP2</span>
        <span class="border">SFP3</span>
      </div>
    </div>

    <div class="venner-change-info-wrapper">
      <div class="venner-change-info-item">
        <span class="border">ETH端口</span>
        <span class="border">ETH1</span>
        <span class="border">ETH2</span>
        <span class="border">ETH3</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "nmu",
  props: ["info"],
  data() {
    return {};
  },
  created() {
    console.log("created");
  },
  mounted() {
    console.log("mounted");
  },
};
</script>

<style scoped lang="scss">
.veneer-header-wrapper {
  height: 77px;
  border: 1px solid red;
}
.veneer-main-wrapper {
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;
  border-top: 1px solid #e8e8e8;
  border-left: 1px solid #e8e8e8;

  .veneer-channel-item {
    width: 33.33%;
    display: flex;
  }

  .veneer-channel-item span:first-child {
    width: 40%;
    text-align: center;
  }

  .veneer-channel-item span:last-child {
    flex: 1;
    padding-left: 10px;
  }
}

.venner-change-btns {
  text-align: right;
  padding: 10px 0;
}

.venner-change-info-wrapper {
  margin-top: 40px;
  border-top: 1px solid #e8e8e8;
  border-left: 1px solid #e8e8e8;
  .venner-change-info-item {
    display: flex;

    span {
      width: 25%;
    }
  }
}
</style>
