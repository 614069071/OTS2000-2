<template>
  <div class="structure-wrapper">
    <div class="structure-inner-wrapper">
      <div class="structure-item-wrapper" v-for="(item, index) in list" :key="index">
        <!-- <veneer-nmu :index="index"></veneer-nmu> -->
        <img v-if="item.status" :src="require(`../../assets/images/veneer/${item.boardname.toLowerCase()}.png`)" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "structure",
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
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

<style scoped lang="scss">
.structure-wrapper {
  width: 1000px;
  height: 236px;
  background-color: grey;
  background: url("../../assets/images/entirety.jpg") center/contain no-repeat;
  margin: 0 auto;
  position: relative;
}
.structure-inner-wrapper {
  width: 868px;
  height: 200px;
  // border: 1px solid red;
  position: absolute;
  left: 25px;
  bottom: 0px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row-reverse;
}

.structure-item-wrapper {
  height: 50px;
  width: 50% !important;
}
</style>
