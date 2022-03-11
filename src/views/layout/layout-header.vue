<template>
  <div class="layout-header">
    <router-link tag="div" to="/" class="logo-wrapper">
      <img src="../../assets/images/logo-red.png" alt="西迪特" />
    </router-link>

    <div class="user-info-wrapper">
      <span>{{ $t("LOYOUT.USER_NAME") }}：{{ user.user }}</span>
      <span>{{ $t("LOYOUT.USER_LEVER") }}：{{ user.role | mapRoleLevel }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "LayoutHeader",
  props: ["user"],
  filters: {
    mapRoleLevel(v) {
      return ["普通用户", "生产用户", "管理员"][v] || v;
    },
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
