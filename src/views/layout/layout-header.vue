<template>
  <div class="layout-header">
    <router-link tag="div" to="/" class="logo-wrapper">
      <img src="../../assets/images/logo-red.png" alt="西迪特" />
    </router-link>

    <div class="user-info-wrapper">
      <span>{{ $t("LOYOUT.USER_NAME") }}：webadmin</span>
      <span>{{ $t("LOYOUT.USER_LEVER") }}：{{ $t("USER_MANAGE.ADMIN") }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "LayoutHeader",
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
.layout-header {
  height: 50px;
  display: flex;
  padding: 0 5px;
  align-items: center;
  justify-content: space-between;
  background-color: var(--dft-color);
  color: #fff;

  .user-info-wrapper span + span {
    margin-left: 26px;
  }

  .logo-wrapper {
    width: 70px;
    height: 33px;
    overflow: hidden;
    cursor: pointer;
    text-align: center;
  }
}
</style>
