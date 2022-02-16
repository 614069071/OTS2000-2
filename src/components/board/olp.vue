<template>
  <div class="board-olp-view-wrapper board-item-view-wrapper">
    <div class="board-item-name"><span>OLP</span></div>
    <div class="board-link-wrapper olp-link-wrapper">
      <div class="board-light"><span class="k-name">PWR</span><span class="k-item suc"></span><span class="k-item"></span><span class="k-name">Rx1</span></div>
      <div class="board-light"><span class="k-name">RUN</span><span class="k-item run-los"></span><span class="k-item"></span><span class="k-name">Rx2</span></div>
      <div class="board-light"><span class="k-name">PROG</span><span class="k-item"></span><span class="k-item"></span><span class="k-name">Rx</span></div>
      <div class="board-light"><span class="k-name">Pri</span><span class="k-item"></span><span class="k-item"></span><span class="k-name">Sec</span></div>
    </div>

    <div class="board-console-wrapper olp-console-wrapper"><span>Console</span></div>

    <div class="board-rst-wrapper olp-rst-wrapper">
      <div class="rst-name">RST</div>
      <div class="rst-circle"></div>
    </div>

    <div class="tx-rx-wrapper olp-tx-rx-wrapper">
      <div class="tx-rx-inner-item">
        <div class="tx-rx-item">
          <i>Tx</i>
          <div class="tx-rx-item-main"></div>
        </div>
        <div class="tx-rx-item">
          <i>Rx</i>
          <div class="tx-rx-item-main"></div>
        </div>
      </div>

      <div class="tx-rx-inner-item">
        <div class="tx-rx-item">
          <i>Tx</i>
          <div class="tx-rx-item-main"></div>
        </div>
        <div class="tx-rx-item">
          <i>Rx</i>
          <div class="tx-rx-item-main"></div>
        </div>
      </div>

      <div class="tx-rx-inner-item">
        <div class="tx-rx-item">
          <i>Tx</i>
          <div class="tx-rx-item-main"></div>
        </div>
        <div class="tx-rx-item">
          <i>Rx</i>
          <div class="tx-rx-item-main"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "board-olp",
  props: ["data"],
};
</script>

<style lang="scss">
.board-olp-view-wrapper {
  .olp-link-wrapper {
    left: 32px;
    top: 15px;
  }

  .olp-console-wrapper {
    left: 120px;
    bottom: 14px;
  }

  .olp-rst-wrapper {
    left: 150px;
    top: 12px;
  }

  .olp-tx-rx-wrapper {
    left: 275px;
    top: 3px;
  }
}
</style>
