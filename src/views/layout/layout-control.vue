<template>
  <div class="aside-footer-wrapper">
    <div class="setting-btns-wrapper">
      <div class="setting-btn-wrapper" @click="restore">
        <div><i class="c-icon icon-back"></i></div>
        <div>{{ $t("LOYOUT.RESTART") }}</div>
      </div>

      <div class="vertical-line"></div>

      <div class="setting-btn-wrapper" @click="$router.push('/login')">
        <div><i class="c-icon icon-next"></i></div>
        <div>{{ $t("LOYOUT.EXIT") }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LayoutControl",
  data() {
    return {};
  },
  created() {
    console.log("created");
  },
  mounted() {
    console.log("mounted");
  },
  methods: {
    restore() {
      const isResore = window.confirm(this.$t("COMMON.CONIFRM_RESTORE"));

      if (!isResore) return;

      console.log("重启");
    },
  },
};
</script>

<style scoped lang="scss">
.aside-footer-wrapper {
  height: 60px;

  .setting-btns-wrapper {
    display: flex;
    justify-content: center;

    .setting-btn-wrapper {
      cursor: pointer;
      text-align: center;
    }

    .vertical-line {
      height: 50px;
      border-left: 1px solid #848484;
      margin: 0 30px;
    }
  }
}
</style>
