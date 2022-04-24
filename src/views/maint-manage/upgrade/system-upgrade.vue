<template>
  <div class="chose-wrapper">
    <span>{{ $t("UPGRADE.CHECK_UPGRADE_FILE") }}</span>
    <input ref="uploadRef" type="file" accept=".bin" name="" id="" />
    <button class="def-btn" @click="upload">{{ $t("UPGRADE.UPGRADE") }}</button>
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
    upload() {
      const [file] = this.$refs.uploadRef.files;

      console.log("file", file);

      return;

      // const fd = new FormData();
      // fd.append("slot", 8);
      // fd.append("file", file);

      // this.$http
      //   .action("/action/upload", fd)
      //   .then(res => {
      //     console.log(res);
      //   })
      //   .catch(err => {
      //     console.log(err);
      //   });
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
