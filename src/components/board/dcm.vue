<template>
  <div class="board-dcm-view-wrapper board-item-view-wrapper">
    <div class="board-item-name"><span>DCM</span></div>

    <div class="board-link-wrapper">
      <div class="board-light"><span class="k-name">PWR</span><span class="k-item suc"></span></div>
      <div class="board-light"><span class="k-name">RUN</span><span class="k-item run-los"></span></div>
      <div class="board-light"><span class="k-name">LINK</span><span class="k-item"></span></div>
      <div class="board-light"><span class="k-name">STAT</span><span class="k-item"></span></div>
    </div>

    <div class="board-console-wrapper dcm-console-wrapper"><span class="f-9">Console</span></div>

    <div class="board-rst-wrapper dcm-rst-wrapper">
      <div class="rst-name f-9">RST</div>
      <div class="rst-circle"></div>
    </div>

    <div class="tx-rx-wrapper">
      <div class="tx-rx-inner-item">
        <div class="tx-rx-item">
          <i class="f-9">OCT</i>
          <div class="tx-rx-item-main"></div>
        </div>
        <div class="tx-rx-item">
          <i class="f-9">IN</i>
          <div class="tx-rx-item-main"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "board-dcm",
  props: ["data"],
};
</script>

<style lang="scss">
.board-dcm-view-wrapper {
  .board-link-wrapper {
    left: 32px;
    top: 15px;
  }

  .dcm-console-wrapper {
    top: 30px;
    left: 122px;
  }

  .dcm-rst-wrapper {
    top: 25px;
    left: 170px;
  }

  .tx-rx-wrapper {
    left: 380px;
    top: 3px;
  }
}
</style>
