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
import boardNmu from "@/components/board/nmu";
import boardOlp from "@/components/board/olp";
import boardOcp10g from "@/components/board/ocp10g";
import boardOtu10g from "@/components/board/otu10g";
import boardOtu100g from "@/components/board/otu100g";
import boardOtu25g from "@/components/board/otu25g";
import boardD16 from "@/components/board/d16";
import boardM16 from "@/components/board/m16";
import boardMd8 from "@/components/board/md8";
import boardEdfa from "@/components/board/edfa";
import boardDco200g from "@/components/board/dco200g";

export default {
  name: "structure",
  components: {
    boardNmu,
    boardOlp,
    boardOcp10g,
    boardOtu10g,
    boardOtu100g,
    boardOtu25g,
    boardD16,
    boardM16,
    boardEdfa,
    boardMd8,
    boardDco200g,
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
