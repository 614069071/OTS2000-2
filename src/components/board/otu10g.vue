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
        <div class="trx-item-guide"><span>Cin1</span></div>
        <div class="trx-item-main suc"></div>
        <div class="trx-item-footer"><span>Tx1</span><span>Rx1</span></div>
      </div>
      <div class="trx-item">
        <div class="trx-item-guide"><span>Lin1</span></div>
        <div class="trx-item-main"></div>
        <div class="trx-item-footer"><span>Tx1</span><span>Rx1</span></div>
      </div>
      <div class="trx-item">
        <div class="trx-item-guide"><span>Cin2</span></div>
        <div class="trx-item-main"></div>
        <div class="trx-item-footer"><span>Tx1</span><span>Rx1</span></div>
      </div>
      <div class="trx-item">
        <div class="trx-item-guide"><span>Lin2</span></div>
        <div class="trx-item-main"></div>
        <div class="trx-item-footer"><span>Tx1</span><span>Rx1</span></div>
      </div>
    </div>

    <div class="board-link-column-wrapper otu10g-link-wrapper2">
      <div class="link-light">
        <div class="link-name">C1LOS</div>
        <div class="link-square"></div>
        <div class="link-square"></div>
        <div class="link-square"></div>
        <div class="link-square"></div>
        <div class="link-name">L1LOS</div>
        <div class="link-name">C2LOS</div>
        <div class="link-name">L2LOS</div>
      </div>

      <div class="link-light">
        <div class="link-name">C3LOS</div>
        <div class="link-square"></div>
        <div class="link-square"></div>
        <div class="link-square"></div>
        <div class="link-square"></div>
        <div class="link-name">L3LOS</div>
        <div class="link-name">C4LOS</div>
        <div class="link-name">L4LOS</div>
      </div>
    </div>

    <div class="board-trx-wrapper otu10g-trx-wrapper2">
      <div class="trx-item">
        <div class="trx-item-guide"><span>Cin</span></div>
        <div class="trx-item-main"></div>
        <div class="trx-item-footer"><span>Tx1</span><span>Rx1</span></div>
      </div>
      <div class="trx-item">
        <div class="trx-item-guide"><span>L2in</span></div>
        <div class="trx-item-main"></div>
        <div class="trx-item-footer"><span>Tx1</span><span>Rx1</span></div>
      </div>
      <div class="trx-item">
        <div class="trx-item-guide"><span>L1in</span></div>
        <div class="trx-item-main"></div>
        <div class="trx-item-footer"><span>Tx1</span><span>Rx1</span></div>
      </div>
      <div class="trx-item">
        <div class="trx-item-guide"><span>L1in</span></div>
        <div class="trx-item-main"></div>
        <div class="trx-item-footer"><span>Tx1</span><span>Rx1</span></div>
      </div>
    </div>

    <div class="board-rst-wrapper otu10g-rst-wrapper">
      <div class="rst-name">RST</div>
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

<style lang="scss">
.board-otu10g-view-wrapper {
  .otu10g-link-wrapper1 {
    left: 28px;
    top: 10px;
  }

  .otu10g-trx-wrapper1 {
    left: 47px;
    bottom: -9px;
  }

  .otu10g-trx-wrapper2 {
    left: 283px;
    bottom: -9px;
  }

  .otu10g-link-wrapper2 {
    left: 238px;
    bottom: -19px;
  }

  .otu10g-rst-wrapper {
    left: 487px;
    bottom: 6px;
  }
}
</style>
