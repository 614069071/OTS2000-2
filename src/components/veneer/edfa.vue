<template>
  <div class="veneer-edfa-view-wrapper veneer-item-view-wrapper">
    <div class="veneer-item-name"><span class="f-10">EDFA</span></div>
    <div class="veneer-link-wrapper">
      <div class="veneer-light"><span class="k-name">PWR</span><span class="k-item suc"></span><span class="k-item"></span><span class="k-name">Rx1</span></div>
      <div class="veneer-light"><span class="k-name">RUN</span><span class="k-item war"></span><span class="k-item"></span><span class="k-name">Rx2</span></div>
      <div class="veneer-light"><span class="k-name">PROG</span><span class="k-item"></span><span class="k-item"></span><span class="k-name">Rx</span></div>
      <div class="veneer-light"><span class="k-name">Pri</span><span class="k-item"></span><span class="k-item"></span><span class="k-name">Sec</span></div>
    </div>

    <div class="veneer-console-wrapper"><span class="f-9">Console</span></div>

    <div class="veneer-rst-wrapper edfa-rst-wrapper">
      <div class="rst-name f-9">RST</div>
      <div class="rst-circle"></div>
    </div>

    <div class="tx-rx-wrapper edfa-tx-rx-wrapper">
      <div class="tx-rx-inner-item">
        <div class="tx-rx-item">
          <i class="f-9">OUT</i>
          <div class="tx-rx-item-main"></div>
        </div>
        <div class="tx-rx-item">
          <i class="f-9">IN</i>
          <div class="tx-rx-item-main"></div>
        </div>
      </div>

      <div class="tx-rx-inner-item">
        <div class="tx-rx-item">
          <i class="f-9">MON</i>
          <div class="tx-rx-item-main"></div>
        </div>
        <div class="tx-rx-item">
          <i class="f-9">NA</i>
          <div class="tx-rx-item-main"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "veneer-edfa",
  props: ["data"],
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

<style lang="scss">
.veneer-edfa-view-wrapper {
  .veneer-link-wrapper {
    left: 32px;
    top: 15px;
  }

  .veneer-console-wrapper {
    left: 120px;
    bottom: 14px;
  }

  .edfa-rst-wrapper {
    left: 150px;
    top: 12px;
  }

  .edfa-tx-rx-wrapper {
    left: 275px;
    top: 3px;
  }
}
</style>
