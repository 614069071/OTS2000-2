<template>
  <div class="board-dco200g-view-wrapper composite board-item-view-wrapper">
    <div class="board-item-name"><span>200G CFP2 DCO</span></div>
    <div class="board-link-wrapper dco200g-link-wrapper1">
      <div class="board-light"><span class="k-name">PWR</span><span class="k-item"></span><span class="k-item"></span><span class="k-name">C1LOS</span></div>
      <div class="board-light"><span class="k-name">RUN</span><span class="k-item run-los"></span><span class="k-item"></span><span class="k-name">C2LOS</span></div>
      <div class="board-light"><span class="k-name">LINK</span><span class="k-item"></span><span class="k-item"></span><span class="k-name">L1LOS</span></div>
      <div class="board-light"><span class="k-name">STAT</span><span class="k-item"></span><span class="k-item"></span><span class="k-name">RATE</span></div>
    </div>

    <div class="board-console-wrapper dco200g-console-wrapper"><span>Console</span></div>

    <div class="board-trx-big-wrapper dco200g-trx-wrapper1">
      <div class="trx-item">
        <div class="trx-item-footer"><span>Tx1</span><span>Rx1</span></div>
        <div class="trx-item-main"></div>
      </div>
    </div>

    <div class="board-cfp2-wrapper cfp2-dco200g-wrapper">
      <div class="cfp2-n"><span class="f-10">Tx</span><span class="f-10">Rx</span></div>
      <div class="cfp2-k"></div>
    </div>

    <div class="board-trx-big-wrapper dco200g-trx-wrapper2">
      <div class="trx-item">
        <div class="trx-item-footer"><span>Tx2</span><span>Rx2</span></div>
        <div class="trx-item-main"></div>
      </div>
    </div>

    <div class="board-rst-wrapper dco200g-rst-wrapper">
      <div class="rst-name">RST</div>
      <div class="rst-circle"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "board-dco200g",
  props: ["data"],
};
</script>

<style lang="scss">
.board-dco200g-view-wrapper {
  .dco200g-link-wrapper1 {
    top: 69px;
  }

  .dco200g-trx-wrapper1 {
    left: 135px;
  }

  .cfp2-dco200g-wrapper {
    left: 260px;
    bottom: 2px;
  }

  .dco200g-trx-wrapper2 {
    left: 369px;
  }

  .dco200g-link-wrapper2 {
    left: 300px;
    top: 2px;
  }

  .trx-item {
    margin-left: 0 !important;
  }

  .dco200g-rst-wrapper {
    left: 480px;
  }
}
</style>
