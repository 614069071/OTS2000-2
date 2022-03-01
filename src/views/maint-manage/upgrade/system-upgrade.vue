<template>
  <div class="system-upgrade-page">
    <div>
      <div class="inner-container-title">系统升级</div>
      <div class="chose-wrapper">
        <span>选择升级文件</span>
        <input type="file" accept=".bin" name="" id="" />
        <button class="def-btn" @click="upgradeSubmit">升级</button>
      </div>
    </div>
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
