<template>
  <div class="board-otu10g-view-wrapper board-item-view-wrapper">
    <div class="board-item-name"><span>4*10G OTU</span></div>
    <div class="board-link-wrapper otu10g-link-wrapper1">
      <div class="board-light"><span class="k-name">PWR</span><span class="k-item suc"></span></div>
      <div class="board-light"><span class="k-name">RUN</span><span class="k-item run-los"></span></div>
      <div class="board-light"><span class="k-name">PROG</span><span class="k-item"></span></div>
      <div class="board-light"><span class="k-name">STAT</span><span class="k-item"></span></div>
    </div>

    <div class="board-trx-wrapper otu10g-trx-wrapper1">
      <div class="trx-item">
        <div class="trx-item-guide"><span class="f-9">Cin1</span></div>
        <div class="trx-item-main suc"></div>
        <div class="trx-item-footer"><span class="f-9">Tx1</span><span class="f-9">Rx1</span></div>
      </div>
      <div class="trx-item">
        <div class="trx-item-guide"><span class="f-9">Lin1</span></div>
        <div class="trx-item-main"></div>
        <div class="trx-item-footer"><span class="f-9">Tx1</span><span class="f-9">Rx1</span></div>
      </div>
      <div class="trx-item">
        <div class="trx-item-guide"><span class="f-9">Cin2</span></div>
        <div class="trx-item-main"></div>
        <div class="trx-item-footer"><span class="f-9">Tx1</span><span class="f-9">Rx1</span></div>
      </div>
      <div class="trx-item">
        <div class="trx-item-guide"><span class="f-9">Lin2</span></div>
        <div class="trx-item-main"></div>
        <div class="trx-item-footer"><span class="f-9">Tx1</span><span class="f-9">Rx1</span></div>
      </div>
    </div>

    <div class="board-link-type2-wrapper otu10g-link-wrapper2">
      <div class="link-light">
        <div class="link-name"><i class="f-8">C1LOS</i></div>
        <div class="link-square"></div>
        <div class="link-square"></div>
        <div class="link-square"></div>
        <div class="link-square"></div>
        <div class="link-name"><i class="f-8">L1LOS</i></div>
        <div class="link-name"><i class="f-8">C2LOS</i></div>
        <div class="link-name"><i class="f-8">L2LOS</i></div>
      </div>

      <div class="link-light">
        <div class="link-name"><i class="f-8">C3LOS</i></div>
        <div class="link-square"></div>
        <div class="link-square"></div>
        <div class="link-square"></div>
        <div class="link-square"></div>
        <div class="link-name"><i class="f-8">L3LOS</i></div>
        <div class="link-name"><i class="f-8">C4LOS</i></div>
        <div class="link-name"><i class="f-8">L4LOS</i></div>
      </div>
    </div>

    <div class="board-trx-wrapper otu10g-trx-wrapper2">
      <div class="trx-item">
        <div class="trx-item-guide"><span class="f-9">Cin</span></div>
        <div class="trx-item-main"></div>
        <div class="trx-item-footer"><span class="f-9">Tx1</span><span class="f-9">Rx1</span></div>
      </div>
      <div class="trx-item">
        <div class="trx-item-guide"><span class="f-9">L2in</span></div>
        <div class="trx-item-main"></div>
        <div class="trx-item-footer"><span class="f-9">Tx1</span><span class="f-9">Rx1</span></div>
      </div>
      <div class="trx-item">
        <div class="trx-item-guide"><span class="f-9">L1in</span></div>
        <div class="trx-item-main"></div>
        <div class="trx-item-footer"><span class="f-9">Tx1</span><span class="f-9">Rx1</span></div>
      </div>
      <div class="trx-item">
        <div class="trx-item-guide"><span class="f-9">L1in</span></div>
        <div class="trx-item-main"></div>
        <div class="trx-item-footer"><span class="f-9">Tx1</span><span class="f-9">Rx1</span></div>
      </div>
    </div>

    <div class="board-rst-wrapper otu10g-rst-wrapper">
      <div class="rst-name f-9">RST</div>
      <div class="rst-circle"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "board-otu10g",
  props: ["data"],
};
</script>

<style scoped lang="scss">
.board-otu10g-view-wrapper {
  .otu10g-link-wrapper1 {
    left: 35px;
    top: 20px;
  }

  .otu10g-trx-wrapper1 {
    left: 131px;
    bottom: 0px;
  }

  .otu10g-trx-wrapper2 {
    left: 327px;
    bottom: 0px;
  }

  .otu10g-link-wrapper2 {
    left: 263px;
    top: 12px;
  }

  .otu10g-rst-wrapper {
    left: 471px;
    top: 12px;
  }

  .trx-item {
    margin-left: 0 !important;
  }
}
</style>
