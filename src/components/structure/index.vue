<template>
  <div class="structure-wrapper">
    <div class="structure-inner-wrapper">
      <div class="structure-item-wrapper" v-for="(item, index) in list" :key="index">
        <component v-if="item.boardname && item.status" :is="`board-${item.boardname.toLowerCase()}`"></component>
      </div>
    </div>
  </div>
</template>

<script>
import BoardNmu from "@/components/board/nmu";
import BoardOlp from "@/components/board/olp";
import BoardOcp10g from "@/components/board/ocp10g";
import BoardOtu10g from "@/components/board/otu10g";
import BoardOtu100g from "@/components/board/otu100g";
import BoardOtu25g from "@/components/board/otu25g";
import BoardD16 from "@/components/board/d16";
import BoardM16 from "@/components/board/m16";
import BoardMd8 from "@/components/board/md8";
import BoardEdfa from "@/components/board/edfa";
import BoardDco200g from "@/components/board/dco200g";
import BoardDcm from "@/components/board/dcm";

export default {
  name: "structure",
  components: {
    BoardNmu,
    BoardOlp,
    BoardOcp10g,
    BoardOtu10g,
    BoardOtu100g,
    BoardOtu25g,
    BoardD16,
    BoardM16,
    BoardEdfa,
    BoardMd8,
    BoardDco200g,
    BoardDcm,
  },
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      // list: ["nmu", "m16", "olp", "edfa", "d16", "ocp10g", "otu10g"],
    };
  },
  created() {},
  mounted() {},
};
</script>

<style scoped lang="scss">
.structure-wrapper {
  width: 1200px;
  height: 284px;
  background-color: grey;
  background: url("../../assets/images/entirety.jpg") center/contain no-repeat;
  margin: 0 auto;
  position: relative;
}

.structure-inner-wrapper {
  width: 1042px;
  height: 240px;
  position: absolute;
  left: 32px;
  bottom: 2px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row-reverse;
}

.structure-item-wrapper {
  height: 60px;
  width: 50% !important;
  box-sizing: border-box;
  // border: 1px solid #000;
  // box-sizing: border-box;
}

// .structure-item-wrapper:nth-child(odd) {
//   border-left: 1px solid #000;
// }
</style>
