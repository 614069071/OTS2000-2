<template>
  <div class="veneer-nmu-view-wrapper veneer-item-view-wrapper">
    <div class="veneer-item-name"><span class="f-10">NMU</span></div>

    <div class="veneer-link-wrapper nmu-link-wrapper">
      <div class="veneer-light"><span class="k-name">PWR</span><span class="k-item suc"></span><span class="k-item"></span><span class="k-name">LINK1</span></div>
      <div class="veneer-light"><span class="k-name">RUN</span><span class="k-item war"></span><span class="k-item"></span><span class="k-name">LINK2</span></div>
      <div class="veneer-light"><span class="k-name">PROG</span><span class="k-item"></span><span class="k-item"></span><span class="k-name">LINK3</span></div>
      <div class="veneer-light"><span class="k-name">STAT</span><span class="k-item"></span><span class="k-item"></span><span class="k-name">SRV</span></div>
    </div>

    <div class="veneer-console-wrapper nmu-console-wrapper"><span class="f-9">Console</span></div>

    <div class="veneer-rst-wrapper nmu-rst-wrapper">
      <div class="rst-name f-9">RST</div>
      <div class="rst-circle"></div>
    </div>
    <div class="veneer-trx-wrapper nmu-trx-wrapper">
      <div class="trx-item">
        <div class="trx-item-title"><span class="f-9">Tx1</span><span class="f-9">Rx1</span></div>
        <div class="trx-item-main suc"></div>
      </div>
      <div class="trx-item">
        <div class="trx-item-title"><span class="f-9">Tx2</span><span class="f-9">Rx2</span></div>
        <div class="trx-item-main"></div>
      </div>
      <div class="trx-item">
        <div class="trx-item-title"><span class="f-9">Tx3</span><span class="f-9">Rx3</span></div>
        <div class="trx-item-main"></div>
      </div>
    </div>
    <div class="veneer-eth-wrapper nmu-eth-wrapper">
      <div class="eth-item">
        <div class="eth-item-main suc"></div>
        <div class="eth-item-title f-9">Eth1</div>
      </div>
      <div class="eth-item">
        <div class="eth-item-main"></div>
        <div class="eth-item-title f-9">Eth2</div>
      </div>
      <div class="eth-item">
        <div class="eth-item-main"></div>
        <div class="eth-item-title f-9">Eth3</div>
      </div>
    </div>
    <div class="veneer-usb-wrapper nmu-usb-wrapper">
      <div class="usb-title">USB</div>
      <div class="usb-main"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "veneer-nmu",
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
.veneer-nmu-view-wrapper {
  .nmu-link-wrapper {
    left: 32px;
    top: 15px;
  }

  .nmu-console-wrapper {
    left: 120px;
    bottom: 14px;
  }

  .nmu-rst-wrapper {
    left: 150px;
    top: 12px;
  }

  .nmu-trx-wrapper {
    left: 195px;
    bottom: 13px;
  }

  .nmu-eth-wrapper {
    left: 340px;
    bottom: 12px;
  }

  .nmu-usb-wrapper {
    right: 33px;
    bottom: 14px;
  }
}
</style>
