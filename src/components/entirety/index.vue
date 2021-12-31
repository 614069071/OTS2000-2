<template>
  <div class="veneer-block-diagram-wrapper">
    <!-- 设备框图 -->
    12
  </div>
</template>

<script>
// import VeneerNmu from "@/views/equip-manage/veneer-list/components/nmu";

export default {
  name: "entirety",
  // comments: { VeneerNmu },
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
.veneer-inner-wrapper {
  width: 1042px;
  height: 240px;
  border: 1px solid red;
  position: absolute;
  left: 30px;
  bottom: 0px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row-reverse;
}

.veneer-item-wrapper {
  height: 20px;
  width: 50% !important;
}
</style>
