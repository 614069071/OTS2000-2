<template>
  <div class="backup-reboot-view-wrapper view-wrapper">
    <div class="inner-container-title">备份与恢复出厂设置</div>

    <div class="inner-container-wrapper banner-list">
      <el-checkbox>板卡#2</el-checkbox>
      <el-checkbox>板卡#4</el-checkbox>
      <el-checkbox>板卡#6</el-checkbox>
      <el-checkbox>板卡#8</el-checkbox>
      <el-checkbox>NMU</el-checkbox>
      <el-checkbox>恢复出厂IP</el-checkbox>

      <div class="setting-btns">
        <button type="primary" size="mini">备份</button>
        <button type="primary" size="mini">全选</button>
        <button type="primary" size="mini">反选</button>
        <button type="primary" size="mini">全不选</button>
        <button type="danger" size="mini">恢复出厂设置</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "backup-reboot",
  data() {
    return {
      formData: {},
    };
  },
  created() {
    console.log("created");
  },
  mounted() {
    console.log("mounted");
  },
};
</script>

<style scoped lang="css">
.setting-btns {
  margin-top: 20px;
}
</style>
