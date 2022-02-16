<template>
  <div class="board-otu25g-view-wrapper board-item-view-wrapper">
    <div class="board-item-name"><span>4*25G OTU</span></div>
    <div class="board-link-wrapper">
      <div class="board-light"><span class="k-name">PWR</span><span class="k-item suc"></span><span class="k-item"></span><span class="k-name">LINK1</span></div>
      <div class="board-light"><span class="k-name">RUN</span><span class="k-item run-los"></span><span class="k-item"></span><span class="k-name">LINK2</span></div>
      <div class="board-light"><span class="k-name">PROG</span><span class="k-item"></span><span class="k-item"></span><span class="k-name">LINK3</span></div>
      <div class="board-light"><span class="k-name">STAT</span><span class="k-item"></span><span class="k-item"></span><span class="k-name">SRV</span></div>
    </div>

    <div class="board-trx-wrapper otu25g-trx-wrapper1">
      <div class="trx-item">
        <div class="trx-item-guide"><span>Cin</span></div>
        <div class="trx-item-main suc"></div>
        <div class="trx-item-footer"><span>Tx1</span><span>Rx1</span></div>
      </div>
      <div class="trx-item">
        <div class="trx-item-guide"><span>L2in</span></div>
        <div class="trx-item-main suc"></div>
        <div class="trx-item-footer"><span>Tx1</span><span>Rx1</span></div>
      </div>
      <div class="trx-item">
        <div class="trx-item-guide"><span>L1in</span></div>
        <div class="trx-item-main suc"></div>
        <div class="trx-item-footer"><span>Tx1</span><span>Rx1</span></div>
      </div>
      <div class="trx-item">
        <div class="trx-item-guide"><span>L1in</span></div>
        <div class="trx-item-main suc"></div>
        <div class="trx-item-footer"><span>Tx1</span><span>Rx1</span></div>
      </div>
    </div>

    <div class="board-link-column-wrapper otu25g-link-wrapper2">
      <div class="link-light">
        <div class="link-square"></div>
        <div class="link-square"></div>
        <div class="link-square"></div>
        <div class="link-name">2Link1</div>
        <div class="link-name">2Link2</div>
        <div class="link-name">2Loop</div>
      </div>

      <div class="link-light">
        <div class="link-square"></div>
        <div class="link-square"></div>
        <div class="link-square"></div>
        <div class="link-name">3Link1</div>
        <div class="link-name">3Link2</div>
        <div class="link-name">3Loop</div>
      </div>
    </div>

    <div class="board-trx-wrapper otu25g-trx-wrapper2">
      <div class="trx-item">
        <div class="trx-item-guide"><span>Cin</span></div>
        <div class="trx-item-main suc"></div>
        <div class="trx-item-footer"><span>Tx1</span><span>Rx1</span></div>
      </div>
      <div class="trx-item">
        <div class="trx-item-guide"><span>L2in</span></div>
        <div class="trx-item-main suc"></div>
        <div class="trx-item-footer"><span>Tx1</span><span>Rx1</span></div>
      </div>
      <div class="trx-item">
        <div class="trx-item-guide"><span>L1in</span></div>
        <div class="trx-item-main suc"></div>
        <div class="trx-item-footer"><span>Tx1</span><span>Rx1</span></div>
      </div>
      <div class="trx-item">
        <div class="trx-item-guide"><span>L1in</span></div>
        <div class="trx-item-main suc"></div>
        <div class="trx-item-footer"><span>Tx1</span><span>Rx1</span></div>
      </div>
    </div>

    <div class="board-rst-wrapper otu25g-rst-wrapper">
      <div class="rst-name">RST</div>
      <div class="rst-circle"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "board-otu25g",
  props: ["data"],
};
</script>

<style scoped lang="scss">
.board-otu25g-view-wrapper {
  .otu25g-link-wrapper1 {
    left: 35px;
    top: 20px;
  }

  .otu25g-trx-wrapper1 {
    left: 72px;
  }

  .otu25g-trx-wrapper2 {
    left: 293px;
  }

  .otu25g-link-wrapper2 {
    left: 260px;
    top: -4px;
  }

  .otu25g-rst-wrapper {
    left: 491px;
    top: 10px;
  }
}
</style>
