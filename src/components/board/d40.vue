<template>
  <div class="board-d40-view-wrapper board-item-view-wrapper">
    <div class="board-item-name"><span>D40</span></div>

    <div class="board-link-wrapper">
      <div class="board-light"><span class="k-name">PWR</span><span class="k-item suc"></span></div>
      <div class="board-light"><span class="k-name">RUN</span><span class="k-item run-los"></span></div>
      <div class="board-light"><span class="k-name">LINK</span><span class="k-item"></span></div>
      <div class="board-light"><span class="k-name">STAT</span><span class="k-item"></span></div>
    </div>

    <div class="board-console-wrapper"><span>Console</span></div>

    <div class="board-rst-wrapper d40-rst-wrapper">
      <div class="rst-name">RST</div>
      <div class="rst-circle"></div>
    </div>

    <div class="tx-rx-wrapper d40-tx-rx-wrapper">
      <div class="tx-rx-inner-item">
        <div class="tx-rx-item">
          <i>OCT</i>
          <div class="tx-rx-item-main"></div>
        </div>
        <div class="tx-rx-item">
          <i>IN</i>
          <div class="tx-rx-item-main"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "board-d40",
  props: ["data"],
};
</script>

<style lang="scss">
.board-d40-view-wrapper {
  .board-link-wrapper {
    left: 14px;
  }

  .d40-tx-rx-wrapper {
    left: 380px;
  }
}
</style>
