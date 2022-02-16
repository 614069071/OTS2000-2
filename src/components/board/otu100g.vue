<template>
  <div class="board-otu100g-view-wrapper board-item-view-wrapper">
    <div class="board-item-name"><span>40&100G OTU</span></div>
    <div class="board-link-wrapper otu100g-link-wrapper1">
      <div class="board-light"><span class="k-name">PWR</span><span class="k-item suc"></span></div>
      <div class="board-light"><span class="k-name">RUN</span><span class="k-item run-los"></span></div>
      <div class="board-light"><span class="k-name">LINK</span><span class="k-item"></span></div>
      <div class="board-light"><span class="k-name">STAT</span><span class="k-item"></span></div>
    </div>

    <div class="board-console-wrapper otu100g-console-wrapper"><span>Console</span></div>

    <div class="board-trx-wrapper otu100g-trx-wrapper">
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
      <div class="trx-item">
        <div class="trx-item-footer"><span>Tx3</span><span>Rx3</span></div>
        <div class="trx-item-main"></div>
      </div>
    </div>

    <div class="board-link-type2-wrapper otu100g-link-wrapper2">
      <div class="link-light">
        <div class="link-square"></div>
        <div class="link-square"></div>
        <div class="link-square"></div>
        <div class="link-square"></div>
        <div class="link-name"><i class="f-8">2Link1</i></div>
        <div class="link-name"><i class="f-8">2Link2</i></div>
        <div class="link-name"><i class="f-8">2Loop</i></div>
        <div class="link-name"><i class="f-8">2Loop</i></div>
      </div>

      <div class="link-light">
        <div class="link-square"></div>
        <div class="link-square"></div>
        <div class="link-square"></div>
        <div class="link-square"></div>
        <div class="link-name"><i class="f-8">3Link1</i></div>
        <div class="link-name"><i class="f-8">3Link2</i></div>
        <div class="link-name"><i class="f-8">3Loop</i></div>
        <div class="link-name"><i class="f-8">3Loop</i></div>
      </div>
    </div>

    <div class="board-qsfp-wrapper otu100g-qsfp-wrapper">
      <div class="board-qsfp-k">QSFP28</div>
      <div class="board-qsfp-n"><span class="f-10">Tx</span><span class="f-10">Rx</span></div>
    </div>

    <div class="board-rst-wrapper otu100g-rst-wrapper">
      <div class="rst-name">RST</div>
      <div class="rst-circle"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "board-otu100g",
  props: ["data"],
};
</script>

<style scoped lang="scss">
.board-otu100g-view-wrapper {
  .otu100g-link-wrapper1 {
    left: 30px;
    top: 20px;
  }

  .otu100g-console-wrapper {
    left: 100px;
    top: 30px;
  }

  .otu100g-trx-wrapper {
    left: 169px;
    top: 10px;
  }

  .otu100g-link-wrapper2 {
    left: 300px;
    top: 2px;
  }

  .otu100g-qsfp-wrapper {
    left: 366px;
    top: 10px;
  }

  .otu100g-rst-wrapper {
    left: 471px;
    top: 12px;
  }

  .trx-item {
    margin-left: 0 !important;
  }
}
</style>
