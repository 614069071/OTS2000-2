<template>
  <div class="board-ocp-view-wrapper board-item-view-wrapper">
    <div class="board-item-name"><span>2*10G OCP</span></div>
    <div class="board-link-wrapper ocp-link-wrapper1">
      <div class="board-light"><span class="k-name">PWR</span><span class="k-item suc"></span></div>
      <div class="board-light"><span class="k-name">RLN</span><span class="k-item war"></span></div>
      <div class="board-light"><span class="k-name">LINK</span><span class="k-item"></span></div>
      <div class="board-light"><span class="k-name">STAT</span><span class="k-item"></span></div>
    </div>

    <div class="board-trx-wrapper ocp-trx-wrapper1">
      <div class="trx-item">
        <div class="trx-item-guide"><span class="f-9">Cin</span></div>
        <div class="trx-item-main suc"></div>
        <div class="trx-item-footer"><span class="f-9">Tx1</span><span class="f-9">Rx1</span></div>
      </div>
      <div class="trx-item">
        <div class="trx-item-guide"><span class="f-9">L2in</span></div>
        <div class="trx-item-main suc"></div>
        <div class="trx-item-footer"><span class="f-9">Tx1</span><span class="f-9">Rx1</span></div>
      </div>
      <div class="trx-item">
        <div class="trx-item-guide"><span class="f-9">L1in</span></div>
        <div class="trx-item-main suc"></div>
        <div class="trx-item-footer"><span class="f-9">Tx1</span><span class="f-9">Rx1</span></div>
      </div>
    </div>

    <div class="board-link-wrapper ocp-link-wrapper2">
      <div class="board-light"><span class="k-name">1L1LOS</span><span class="k-item suc"></span><span class="k-item"></span><span class="k-name">2L1LOS</span></div>
      <div class="board-light"><span class="k-name">1L2LOS</span><span class="k-item war"></span><span class="k-item"></span><span class="k-name">2L1LOS</span></div>
      <div class="board-light"><span class="k-name">1CLOS</span><span class="k-item"></span><span class="k-item"></span><span class="k-name">2CLOS</span></div>
    </div>

    <div class="board-trx-wrapper ocp-trx-wrapper2">
      <div class="trx-item">
        <div class="trx-item-guide"><span class="f-9">Cin</span></div>
        <div class="trx-item-main suc"></div>
        <div class="trx-item-footer"><span class="f-9">Tx1</span><span class="f-9">Rx1</span></div>
      </div>
      <div class="trx-item">
        <div class="trx-item-guide"><span class="f-9">L2in</span></div>
        <div class="trx-item-main suc"></div>
        <div class="trx-item-footer"><span class="f-9">Tx1</span><span class="f-9">Rx1</span></div>
      </div>
      <div class="trx-item">
        <div class="trx-item-guide"><span class="f-9">L1in</span></div>
        <div class="trx-item-main suc"></div>
        <div class="trx-item-footer"><span class="f-9">Tx1</span><span class="f-9">Rx1</span></div>
      </div>
    </div>

    <div class="board-rst-wrapper ocp-rst-wrapper">
      <div class="rst-name f-9">RST</div>
      <div class="rst-circle"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "board-ocp10g",
  props: ["data"],
  data() {
    return {};
  },
  created() {},
  mounted() {},
};
</script>

<style scoped lang="scss">
.board-ocp-view-wrapper {
  .ocp-link-wrapper1 {
    left: 35px;
    top: 15px;
  }

  .ocp-link-wrapper2 {
    left: 216px;
    top: 15px;
  }

  .ocp-rst-wrapper {
    left: 441px;
    top: 12px;
  }

  .ocp-trx-wrapper1 {
    left: 103px;
    bottom: 0px;
  }

  .ocp-trx-wrapper2 {
    left: 320px;
    bottom: 0px;
  }
}
</style>
