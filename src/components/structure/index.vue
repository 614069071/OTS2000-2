<template>
  <div class="structure-component-wrapper">
    <div class="structure-main-wrapper">
      <!-- 设备框图 -->
    </div>
  </div>
</template>

<script>
export default {
  name: "structure",
  data() {
    return {};
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
.structure-main-wrapper {
  width: 800px;
  height: 238px;
  background: url("../../assets/images/machine1.png") center/contain no-repeat;
}
</style>
