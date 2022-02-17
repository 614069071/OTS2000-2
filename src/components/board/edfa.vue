<template>
  <div class="board-edfa-view-wrapper board-item-view-wrapper">
    <div class="board-item-name"><span>EDFA</span></div>
    <div class="board-link-wrapper">
      <div class="board-light"><span class="k-name">PWR</span><span class="k-item suc"></span><span class="k-item"></span><span class="k-name">PTEMP</span></div>
      <div class="board-light"><span class="k-name">RUN</span><span class="k-item run-los"></span><span class="k-item"></span><span class="k-name">Pcur</span></div>
      <div class="board-light"><span class="k-name">LINK</span><span class="k-item"></span><span class="k-item"></span><span class="k-name">IN</span></div>
      <div class="board-light"><span class="k-name">TEMP</span><span class="k-item"></span><span class="k-item"></span><span class="k-name">OUT</span></div>
    </div>

    <div class="board-console-wrapper"><span>Console</span></div>

    <div class="board-rst-wrapper edfa-rst-wrapper">
      <div class="rst-name">RST</div>
      <div class="rst-circle"></div>
    </div>

    <div class="tx-rx-wrapper edfa-tx-rx-wrapper">
      <div class="tx-rx-inner-item">
        <div class="tx-rx-item">
          <i>OUT</i>
          <div class="tx-rx-item-main"></div>
        </div>
        <div class="tx-rx-item">
          <i>IN</i>
          <div class="tx-rx-item-main"></div>
        </div>
      </div>

      <div class="tx-rx-inner-item">
        <div class="tx-rx-item">
          <i>MON</i>
          <div class="tx-rx-item-main"></div>
        </div>
        <div class="tx-rx-item">
          <i>NA</i>
          <div class="tx-rx-item-main"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "board-edfa",
  props: ["data"],
};
</script>

<style lang="scss">
.board-edfa-view-wrapper {
  .edfa-tx-rx-wrapper {
    left: 275px;
    top: -5px;

    .tx-rx-inner-item + .tx-rx-inner-item {
      margin-left: 20px;
    }
  }
}
</style>
