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
        <div class="eth-item-title">Eth1</div>
        <div class="eth-item-main suc"></div>
      </div>
      <div class="eth-item">
        <div class="eth-item-title">Eth2</div>
        <div class="eth-item-main"></div>
      </div>
      <div class="eth-item">
        <div class="eth-item-title">Eth3</div>
        <div class="eth-item-main"></div>
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
  .nmu-console-wrapper {
    left: 100px;
    bottom: 0px;
  }

  .nmu-rst-wrapper {
    left: 140px;
    bottom: 3px;
  }

  .nmu-trx-wrapper {
    left: 148px;
    bottom: -5px;
  }

  .nmu-eth-wrapper {
    left: 300px;
    bottom: -5px;
  }

  .nmu-usb-wrapper {
    right: 34px;
    bottom: 4px;
  }
}
</style>
