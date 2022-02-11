<template>
  <div class="board-dco200g-view-wrapper board-item-view-wrapper">
    <div class="board-item-name"><span>DCO 200G</span></div>
    <div class="board-link-wrapper dco200g-link-wrapper1">
      <div class="board-light"><span class="k-name">PWR</span><span class="k-item suc"></span><span class="k-item"></span><span class="k-name">LINK1</span></div>
      <div class="board-light"><span class="k-name">RUN</span><span class="k-item war"></span><span class="k-item"></span><span class="k-name">LINK2</span></div>
      <div class="board-light"><span class="k-name">PROG</span><span class="k-item"></span><span class="k-item"></span><span class="k-name">LINK3</span></div>
      <div class="board-light"><span class="k-name">STAT</span><span class="k-item"></span><span class="k-item"></span><span class="k-name">SRV</span></div>
    </div>

    <div class="board-console-wrapper dco200g-console-wrapper"><span class="f-9">Console</span></div>

    <div class="board-trx-wrapper dco200g-trx-wrapper1">
      <div class="trx-item">
        <div class="trx-item-title"><span class="f-9">Tx1</span><span class="f-9">Rx1</span></div>
        <div class="trx-item-main suc"></div>
      </div>
      <div class="trx-item">
        <div class="trx-item-title"><span class="f-9">Tx2</span><span class="f-9">Rx2</span></div>
        <div class="trx-item-main"></div>
      </div>
    </div>

    <div class="board-cfp2-wrapper cfp2-dco200g-wrapper">
      <div class="cfp2-n"><span class="f-10">Tx</span><span class="f-10">Rx</span></div>
      <div class="cfp2-k"></div>
    </div>

    <div class="board-trx-wrapper dco200g-trx-wrapper2">
      <div class="trx-item">
        <div class="trx-item-title"><span class="f-9">Tx1</span><span class="f-9">Rx1</span></div>
        <div class="trx-item-main suc"></div>
      </div>
      <div class="trx-item">
        <div class="trx-item-title"><span class="f-9">Tx2</span><span class="f-9">Rx2</span></div>
        <div class="trx-item-main"></div>
      </div>
    </div>

    <div class="board-rst-wrapper dco200g-rst-wrapper">
      <div class="rst-name f-9">RST</div>
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

<style scoped lang="scss">
.board-dco200g-view-wrapper {
  .dco200g-link-wrapper1 {
    left: 0px;
    top: 20px;
  }

  .dco200g-console-wrapper {
    left: 100px;
    top: 30px;
  }

  .dco200g-trx-wrapper1 {
    left: 169px;
    top: 10px;
  }

  .cfp2-dco200g-wrapper {
    left: 250px;
    top: 0px;
  }

  .dco200g-trx-wrapper2 {
    left: 369px;
    top: 10px;
  }

  .dco200g-link-wrapper2 {
    left: 300px;
    top: 2px;
  }

  .dco200g-rst-wrapper {
    left: 471px;
    top: 12px;
  }

  .trx-item {
    margin-left: 0 !important;
  }
}
</style>
