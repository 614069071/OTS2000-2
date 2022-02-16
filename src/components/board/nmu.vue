<template>
  <div class="board-nmu-view-wrapper board-item-view-wrapper">
    <div class="board-item-name"><span>NMU</span></div>

    <div class="board-link-wrapper nmu-link-wrapper">
      <div class="board-light"><span class="k-name">PWR</span><span class="k-item suc"></span><span class="k-item"></span><span class="k-name">LINK1</span></div>
      <div class="board-light"><span class="k-name">RUN</span><span class="k-item run-los"></span><span class="k-item"></span><span class="k-name">LINK2</span></div>
      <div class="board-light"><span class="k-name">PROG</span><span class="k-item"></span><span class="k-item"></span><span class="k-name">LINK3</span></div>
      <div class="board-light"><span class="k-name">STAT</span><span class="k-item"></span><span class="k-item"></span><span class="k-name">SRV</span></div>
    </div>

    <div class="board-console-wrapper nmu-console-wrapper"><span>Console</span></div>

    <div class="board-rst-wrapper nmu-rst-wrapper">
      <div class="rst-name">RST</div>
      <div class="rst-circle"></div>
    </div>

    <div class="board-trx-wrapper nmu-trx-wrapper">
      <div class="trx-item">
        <div class="trx-item-footer"><span>Tx1</span><span>Rx1</span></div>
        <div class="trx-item-main suc"></div>
      </div>
      <div class="trx-item">
        <div class="trx-item-footer"><span>Tx2</span><span>Rx2</span></div>
        <div class="trx-item-main"></div>
      </div>
      <div class="trx-item">
        <div class="trx-item-footer"><span>Tx3</span><span>Rx3</span></div>
        <div class="trx-item-main"></div>
      </div>
    </div>

    <div class="board-eth-wrapper nmu-eth-wrapper">
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
    <div class="board-usb-wrapper nmu-usb-wrapper">
      <div class="usb-title">USB</div>
      <div class="usb-main"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "board-nmu",
  props: ["data"],
};
</script>

<style lang="scss">
.board-nmu-view-wrapper {
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
