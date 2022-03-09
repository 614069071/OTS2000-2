<template>
  <div>
    <div class="board-check-wrapper">
      <el-checkbox>{{ $t("COMMON.BOARD") }}#2</el-checkbox>
      <el-checkbox>{{ $t("COMMON.BOARD") }}#4</el-checkbox>
      <el-checkbox>{{ $t("COMMON.BOARD") }}#6</el-checkbox>
      <el-checkbox>{{ $t("COMMON.BOARD") }}#8</el-checkbox>
    </div>

    <div class="board-upgrede-btns">
      <button class="def-btn">{{ $t("UPGRADE.ALL_SELECT") }}</button>
      <button class="def-btn">{{ $t("UPGRADE.ALL_UNSELECT") }}</button>
      <button class="def-btn">{{ $t("UPGRADE.UN_ALL_SELECT") }}</button>
      <button class="def-btn">{{ $t("UPGRADE.BACKUP_AND_RESTORE") }}</button>
    </div>

    <div class="inner-container-title">{{ $t("UPGRADE.UPGRADE_BOARD") }}</div>

    <div class="chose-wrapper">
      <span>{{ $t("UPGRADE.CHECK_UPGRADE_FILE") }}</span>
      <input type="file" accept=".bin" name="" id="" />
    </div>
    <div class="board-upgrade-submit-wrapper">
      <button class="def-btn" type="primary">{{ $t("UPGRADE.UPGRADE") }}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "board-upgrede",
  data() {
    return {
      formData: {},
      fileList: [],
    };
  },
};
</script>

<style scoped lang="css">
.board-upgrede-submit {
  margin-top: 20px;
  width: 140px;
}

.chose-wrapper {
  margin: 15px 0;
}

.chose-wrapper > span {
  display: inline-block;
  text-align: center;
  color: #959595;
  width: 250px;
}
.board-upgrade-submit-wrapper {
  text-align: right;
}

.board-upgrede-btns {
  margin: 30px 0 40px 0;
}
</style>

<style>
.board-check-wrapper .el-checkbox {
  margin-top: 24px;
}
</style>
