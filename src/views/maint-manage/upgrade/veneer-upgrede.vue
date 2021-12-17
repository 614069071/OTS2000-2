<template>
  <div class="veneer-upgrede-view-wrapper view-wrapper">
    <div class="inner-container-wrapper banner-list">
      <div class="inner-container-title">需要升级的单板</div>
      <div>
        <el-checkbox>单板#2</el-checkbox>
        <el-checkbox>单板#4</el-checkbox>
        <el-checkbox>单板#6</el-checkbox>
        <el-checkbox>单板#8</el-checkbox>
      </div>
      <div class="inner-container-title">升级单板固件</div>
      <el-upload class="upload-demo" accept=".bin" drag action="" :auto-upload="false" :file-list="fileList">
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <div class="el-upload__tip" slot="tip">只能上传bin文件</div>
      </el-upload>
      <button class="veneer-upgrede-submit" type="primary">升级</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "veneer-upgrede",
  data() {
    return {
      formData: {},
      fileList: [],
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
.veneer-upgrede-submit {
  margin-top: 20px;
  width: 140px;
}
</style>
