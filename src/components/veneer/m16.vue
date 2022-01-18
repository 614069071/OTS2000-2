<template>
  <div class="veneer-nmu-view-wrapper veneer-item-view-wrapper">
    <div class="veneer-item-name"><span class="f-9">M16</span></div>
    <div class="veneer-link-wrapper">
      <div class="veneer-light"><span class="k-name">PWR</span><span class="k-item suc"></span></div>
      <div class="veneer-light"><span class="k-name">RUN</span><span class="k-item war"></span></div>
      <div class="veneer-light"><span class="k-name">LINK</span><span class="k-item"></span></div>
      <div class="veneer-light"><span class="k-name">STAT</span><span class="k-item"></span></div>
    </div>

    <div class="tx-rx-wrapper">
      <div class="tx-rx-inner-item">
        <div class="tx-rx-item">
          <i class="f-9">Line</i>
          <div class="tx-rx-item-main"></div>
        </div>
        <div class="tx-rx-item">
          <i class="f-9">OSC</i>
          <div class="tx-rx-item-main"></div>
        </div>
        <div class="tx-rx-item">
          <i class="f-9">rx</i>
          <div class="tx-rx-item-main"></div>
        </div>
        <div class="tx-rx-item">
          <i class="f-9">rx</i>
          <div class="tx-rx-item-main"></div>
        </div>
      </div>

      <div class="tx-rx-inner-item">
        <div class="tx-rx-item">
          <i class="f-9">D36</i>
          <div class="tx-rx-item-main"></div>
        </div>
        <div class="tx-rx-item">
          <i class="f-9">D35</i>
          <div class="tx-rx-item-main"></div>
        </div>
        <div class="tx-rx-item">
          <i class="f-9">D34</i>
          <div class="tx-rx-item-main"></div>
        </div>
        <div class="tx-rx-item">
          <i class="f-9">D33</i>
          <div class="tx-rx-item-main"></div>
        </div>
      </div>

      <div class="tx-rx-inner-item">
        <div class="tx-rx-item">
          <i class="f-9">D32</i>
          <div class="tx-rx-item-main"></div>
        </div>
        <div class="tx-rx-item">
          <i class="f-9">D31</i>
          <div class="tx-rx-item-main"></div>
        </div>
        <div class="tx-rx-item">
          <i class="f-9">D30</i>
          <div class="tx-rx-item-main"></div>
        </div>
        <div class="tx-rx-item">
          <i class="f-9">D29</i>
          <div class="tx-rx-item-main"></div>
        </div>
      </div>

      <div class="tx-rx-inner-item">
        <div class="tx-rx-item">
          <i class="f-9">D28</i>
          <div class="tx-rx-item-main"></div>
        </div>
        <div class="tx-rx-item">
          <i class="f-9">D27</i>
          <div class="tx-rx-item-main"></div>
        </div>
        <div class="tx-rx-item">
          <i class="f-9">D26</i>
          <div class="tx-rx-item-main"></div>
        </div>
        <div class="tx-rx-item">
          <i class="f-9">D25</i>
          <div class="tx-rx-item-main"></div>
        </div>
      </div>

      <div class="tx-rx-inner-item">
        <div class="tx-rx-item">
          <i class="f-9">D24</i>
          <div class="tx-rx-item-main"></div>
        </div>
        <div class="tx-rx-item">
          <i class="f-9">D23</i>
          <div class="tx-rx-item-main"></div>
        </div>
        <div class="tx-rx-item">
          <i class="f-9">D22</i>
          <div class="tx-rx-item-main"></div>
        </div>
        <div class="tx-rx-item">
          <i class="f-9">D21</i>
          <div class="tx-rx-item-main"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "veneer-m16",
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
  width: 45px;
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
  left: 32px;
  top: 15px;
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

.tx-rx-wrapper {
  position: absolute;
  left: 100px;
  top: 3px;
  display: flex;

  .tx-rx-inner-item {
    display: flex;

    .tx-rx-item {
      width: 18px;
      height: 48px;
    }

    .tx-rx-item-main {
      width: 18px;
      height: 30px;
      background-color: #ccc;
    }
  }

  .tx-rx-inner-item + .tx-rx-inner-item {
    margin-left: 5px;
  }
}
</style>
