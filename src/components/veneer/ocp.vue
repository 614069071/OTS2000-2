<template>
  <div class="veneer-nmu-view-wrapper veneer-item-view-wrapper">
    <div class="veneer-item-name"><span class="f-10">2*10G OCP</span></div>
    <div class="veneer-link-wrapper">
      <div class="veneer-light"><span class="k-name">PWR</span><span class="k-item suc"></span></div>
      <div class="veneer-light"><span class="k-name">RLN</span><span class="k-item war"></span></div>
      <div class="veneer-light"><span class="k-name">LINK</span><span class="k-item"></span></div>
      <div class="veneer-light"><span class="k-name">STAT</span><span class="k-item"></span></div>
    </div>

    <div class="veneer-trx-wrapper">
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

    <div class="veneer-link-wrapper veneer-link-wrapper2">
      <div class="veneer-light"><span class="k-name">1L1LOS</span><span class="k-item suc"></span><span class="k-item"></span><span class="k-name">2L1LOS</span></div>
      <div class="veneer-light"><span class="k-name">1L2LOS</span><span class="k-item war"></span><span class="k-item"></span><span class="k-name">2L1LOS</span></div>
      <div class="veneer-light"><span class="k-name">1CLOS</span><span class="k-item"></span><span class="k-item"></span><span class="k-name">2CLOS</span></div>
    </div>

    <div class="veneer-trx-wrapper veneer-trx-wrapper2">
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

    <div class="veneer-rst-wrapper">
      <div class="rst-name f-9">RST</div>
      <div class="rst-circle"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "veneer-ocp10g",
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
.veneer-nmu-view-wrapper {
  display: flex;
}

.veneer-item-view-wrapper {
  width: 521px;
  height: 60px;
  position: relative;
  border: 1px solid #000;
  box-sizing: border-box;
}

.veneer-item-view-wrapper::after,
.veneer-item-view-wrapper::before {
  content: "+";
  display: block;
  width: 14px;
  height: 14px;
  background-color: #3b3835;
  border: 2px solid #848382;
  border-radius: 50%;
  position: absolute;
  top: 22px;
  color: #848382;
  line-height: 14px;
  text-align: center;
  font-size: 14px;
}

.veneer-item-view-wrapper::before {
  left: 1px;
}
.veneer-item-view-wrapper::after {
  right: 1px;
}

.veneer-item-name {
  background-color: #db3d21;
  min-width: 45px;
  padding: 0 3px;
  height: 14px;
  line-height: 14px;
  text-align: center;
  color: #fff;
  span {
    display: block;
  }
}

.veneer-link-wrapper {
  position: absolute;
  left: 55px;
  top: 15px;
}

.veneer-link-wrapper2 {
  left: 216px;
}

.veneer-light {
  display: flex;
  span.k-name {
    width: 45px;
    height: 5px;
    line-height: 7px;
    font-size: 12px;
    transform: scale(0.6) translateX(25%);
    text-align: right;
  }

  .k-name ~ .k-name {
    text-align: left;
    transform: scale(0.6) translateX(-25%);
  }
  span.k-item {
    width: 9px;
    height: 5px;
    background-color: #dedede;
  }

  span.k-item.suc {
    background-color: green;
  }

  span.k-item.war {
    background-color: red;
  }

  .k-item + .k-item {
    margin-left: 5px;
  }
}

.veneer-light + .veneer-light {
  margin-top: 2px;
}

.veneer-console-wrapper {
  width: 40px;
  height: 22px;
  position: absolute;
  left: 120px;
  bottom: 14px;
  background: url(../../assets/images/veneer/console.svg) bottom center/20px auto no-repeat;
  text-align: center;
  white-space: nowrap;
}

.veneer-rst-wrapper {
  position: absolute;
  left: 441px;
  top: 12px;
  text-align: center;

  .rst-circle {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: #828180;
    margin: -4px 0 0 7px;
  }
}

.veneer-trx-wrapper {
  position: absolute;
  left: 126px;
  bottom: 0px;
  display: flex;

  .trx-item {
    width: 34px;

    .trx-item-guide {
      margin: 0 0 -2px 4px;
    }

    .trx-item-footer {
      height: 10px;
      display: flex;
      justify-content: space-between;
      margin: 0 0 2px -4px;
    }

    .trx-item-main {
      width: 33px;
      height: 24px;
      background: url(../../assets/images/veneer/Tx.svg) center/contain no-repeat;
    }

    .trx-item-main.suc {
      background-color: red;
    }
  }
}

.veneer-trx-wrapper2 {
  left: 320px;
}

.veneer-eth-wrapper {
  position: absolute;
  left: 340px;
  bottom: 12px;
  display: flex;

  .eth-item {
    .eth-item-main {
      width: 33px;
      height: 25px;
      background: url(../../assets/images/veneer/Eth.svg) center/contain no-repeat;
    }

    .eth-item-main.suc {
      background-color: red;
    }

    .eth-item-title {
      width: 30px;
      height: 8px;
      font-size: 12px;
      line-height: 10px;
      padding-left: 3px;
    }
  }
}

.veneer-usb-wrapper {
  width: 30px;
  position: absolute;
  right: 33px;
  bottom: 14px;
  .usb-title {
    height: 4px;
    font-size: 12px;
    transform: scale(0.6) translateX(-25%);
  }

  .usb-main {
    width: 19px;
    height: 20px;
    background: url(../../assets/images/veneer/usb.svg) center/contain no-repeat;
  }
}
</style>
