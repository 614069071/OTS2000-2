<template>
  <div>
    <div class="inner-container-title">需要升级的单板</div>
    <div class="board-check-wrapper">
      <el-checkbox>单板#2</el-checkbox>
      <el-checkbox>单板#4</el-checkbox>
      <el-checkbox>单板#6</el-checkbox>
      <el-checkbox>单板#8</el-checkbox>
    </div>

    <div class="board-upgrede-btns">
      <button class="def-btn">全选</button>
      <button class="def-btn">全不选</button>
      <button class="def-btn">反选</button>
      <button class="def-btn">恢复出厂设置</button>
    </div>

    <div class="inner-container-title">升级单板固件</div>

    <div class="chose-wrapper">
      <span>选择升级文件</span>
      <input type="file" accept=".bin" name="" id="" />
    </div>
    <div class="board-upgrade-submit-wrapper">
      <button class="def-btn" type="primary">升级</button>
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
