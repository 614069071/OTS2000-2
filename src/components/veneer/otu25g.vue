<template>
  <div class="veneer-otu10g-view-wrapper veneer-item-view-wrapper">
    <div class="veneer-item-name"><span>4*25G OTU</span></div>
    <div class="veneer-link-wrapper otu10g-link-wrapper1">
      <div class="veneer-light"><span class="k-name">PWR</span><span class="k-item suc"></span><span class="k-item"></span><span class="k-name">LINK1</span></div>
      <div class="veneer-light"><span class="k-name">RUN</span><span class="k-item war"></span><span class="k-item"></span><span class="k-name">LINK2</span></div>
      <div class="veneer-light"><span class="k-name">PROG</span><span class="k-item"></span><span class="k-item"></span><span class="k-name">LINK3</span></div>
      <div class="veneer-light"><span class="k-name">STAT</span><span class="k-item"></span><span class="k-item"></span><span class="k-name">SRV</span></div>
    </div>

    <div class="veneer-trx-wrapper otu10g-trx-wrapper1">
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
      <div class="trx-item">
        <div class="trx-item-guide"><span class="f-9">L1in</span></div>
        <div class="trx-item-main suc"></div>
        <div class="trx-item-footer"><span class="f-9">Tx1</span><span class="f-9">Rx1</span></div>
      </div>
    </div>

    <div class="veneer-link-type2-wrapper otu10g-link-wrapper2">
      <div class="link-light">
        <div class="link-square"></div>
        <div class="link-square"></div>
        <div class="link-square"></div>
        <div class="link-name"><i class="f-8">2Link1</i></div>
        <div class="link-name"><i class="f-8">2Link2</i></div>
        <div class="link-name"><i class="f-8">2Loop</i></div>
      </div>

      <div class="link-light">
        <div class="link-square"></div>
        <div class="link-square"></div>
        <div class="link-square"></div>
        <div class="link-name"><i class="f-8">3Link1</i></div>
        <div class="link-name"><i class="f-8">3Link2</i></div>
        <div class="link-name"><i class="f-8">3Loop</i></div>
      </div>
    </div>

    <div class="veneer-trx-wrapper otu10g-trx-wrapper2">
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
      <div class="trx-item">
        <div class="trx-item-guide"><span class="f-9">L1in</span></div>
        <div class="trx-item-main suc"></div>
        <div class="trx-item-footer"><span class="f-9">Tx1</span><span class="f-9">Rx1</span></div>
      </div>
    </div>

    <div class="veneer-rst-wrapper otu10g-rst-wrapper">
      <div class="rst-name f-9">RST</div>
      <div class="rst-circle"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "veneer-otu25g",
  props: ["data"],
  data() {
    return {};
  },
  created() {
    console.log("created");
  },
  mounted() {
    console.log("mounted");
  },
};
</script>

<style scoped lang="scss">
.veneer-otu10g-view-wrapper {
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
