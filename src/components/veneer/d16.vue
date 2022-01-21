<template>
  <div class="veneer-d16-view-wrapper veneer-item-view-wrapper">
    <div class="veneer-item-name"><span>D16</span></div>
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
          <i class="f-9"></i>
          <div class="tx-rx-item-main"></div>
        </div>
        <div class="tx-rx-item">
          <i class="f-9"></i>
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
  name: "veneer-d16",
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

<style lang="scss">
.veneer-d16-view-wrapper {
  .veneer-link-wrapper {
    left: 32px;
    top: 15px;
  }

  .tx-rx-wrapper {
    left: 100px;
    top: 3px;
  }
}
</style>
