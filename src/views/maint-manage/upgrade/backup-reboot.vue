<template>
  <div>
    <div class="inner-container-title">备份与恢复出厂设置</div>
    <div class="backup-reboot-checks">
      <el-checkbox>板卡#2</el-checkbox><br />
      <el-checkbox>板卡#4</el-checkbox><br />
      <el-checkbox>板卡#6</el-checkbox><br />
      <el-checkbox>板卡#8</el-checkbox><br />
      <el-checkbox>NMU</el-checkbox><br />
      <el-checkbox>恢复出厂IP</el-checkbox>
    </div>

    <div class="setting-btns">
      <button class="def-btn">备份</button>
      <button class="def-btn">全选</button>
      <button class="def-btn">反选</button>
      <button class="def-btn">全不选</button>
      <button class="def-btn">恢复出厂设置</button>
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
};
</script>

<style scoped lang="css">
.setting-btns {
  margin-top: 20px;
}

.backup-reboot-checks {
  margin-top: 24px;
}
</style>

<style>
.backup-reboot-checks .el-checkbox {
  margin-bottom: 24px;
}
</style>
