<template>
  <div class="veneer-otu100g-view-wrapper veneer-item-view-wrapper">
    <div class="veneer-item-name"><span>4*100G OTU</span></div>
    <div class="veneer-link-wrapper otu100g-link-wrapper1">
      <div class="veneer-light"><span class="k-name">PWR</span><span class="k-item suc"></span></div>
      <div class="veneer-light"><span class="k-name">RUN</span><span class="k-item war"></span></div>
      <div class="veneer-light"><span class="k-name">LINK</span><span class="k-item"></span></div>
      <div class="veneer-light"><span class="k-name">STAT</span><span class="k-item"></span></div>
    </div>

    <div class="veneer-console-wrapper otu100g-console-wrapper"><span class="f-9">Console</span></div>

    <div class="veneer-trx-wrapper otu100g-trx-wrapper">
      <div class="trx-item">
        <div class="trx-item-title"><span class="f-9">Tx1</span><span class="f-9">Rx1</span></div>
        <div class="trx-item-main suc"></div>
      </div>
      <div class="trx-item">
        <div class="trx-item-title"><span class="f-9">Tx2</span><span class="f-9">Rx2</span></div>
        <div class="trx-item-main"></div>
      </div>
      <div class="trx-item">
        <div class="trx-item-title"><span class="f-9">Tx3</span><span class="f-9">Rx3</span></div>
        <div class="trx-item-main"></div>
      </div>
      <div class="trx-item">
        <div class="trx-item-title"><span class="f-9">Tx3</span><span class="f-9">Rx3</span></div>
        <div class="trx-item-main"></div>
      </div>
    </div>

    <div class="veneer-link-type2-wrapper otu100g-link-wrapper2">
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

    <div class="veneer-qsfp-wrapper otu100g-qsfp-wrapper">
      <div class="veneer-qsfp-k">QSFP28</div>
      <div class="veneer-qsfp-n"><span class="f-10">Tx</span><span class="f-10">Rx</span></div>
    </div>

    <div class="veneer-rst-wrapper otu100g-rst-wrapper">
      <div class="rst-name f-9">RST</div>
      <div class="rst-circle"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "veneer-otu100g",
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
.veneer-otu100g-view-wrapper {
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
