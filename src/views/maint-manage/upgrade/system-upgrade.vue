<template>
  <div class="chose-wrapper">
    <span>{{ $t("UPGRADE.CHECK_UPGRADE_FILE") }}</span>
    <input type="file" accept=".bin" name="" id="" />
    <button class="def-btn" @click="upgradeSubmit">{{ $t("UPGRADE.UPGRADE") }}</button>
  </div>
</template>

<script>
export default {
  name: "system-upgrade",
  data() {
    return {
      formData: {},
      fileList: [],
    };
  },
  methods: {
    upgradeSubmit() {
      console.log("file");
    },
  },
};
</script>

<style scoped lang="css">
.chose-wrapper {
  margin-top: 16px;
}

.chose-wrapper > span {
  display: inline-block;
  text-align: center;
  color: #959595;
  width: 250px;
}
</style>
