<template>
  <div class="system-upgrade-view-wrapper">
    <div class="inner-container-wrapper banner-list">
      <div class="inner-container-title">系统升级</div>
      <el-upload class="upload-demo" accept=".bin" drag action="" :auto-upload="false" :file-list="fileList">
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <div class="el-upload__tip" slot="tip">只能上传bin文件</div>
      </el-upload>
      <button class="system-upgrade-submit" type="primary">升级</button>
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
  created() {
    console.log("created");
  },
  mounted() {
    console.log("mounted");
  },
};
</script>

<style scoped lang="css">
.system-upgrade-submit {
  margin-top: 20px;
  width: 140px;
}
</style>
