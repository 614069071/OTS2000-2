<template>
  <div class="structure-wrapper">
    <div class="structure-inner-wrapper">
      <div class="structure-item-wrapper" v-for="(item, index) in list" :key="index">
        <component v-if="item.boardname && item.status" :is="`veneer-${item.boardname.toLowerCase()}`"></component>
        <!-- <component v-if="item.status && item.boardname" :is="`veneer-${item.boardname.toLowerCase()}`"></component> -->
        <!-- <img v-if="item.status && item.boardname" :src="require(`../../assets/images/veneer/${item.boardname.toLowerCase()}.png`)" alt="" /> -->
        <!-- <VeneerM16 v-else></VeneerM16> -->
      </div>
    </div>
  </div>
</template>

<script>
import VeneerNmu from "@/components/veneer/nmu";
import VeneerOlp from "@/components/veneer/olp";
import VeneerOcp10g from "@/components/veneer/ocp10g";
import VeneerOtu10g from "@/components/veneer/otu10g";
import VeneerOtu25g from "@/components/veneer/otu25g";
import VeneerD16 from "@/components/veneer/d16";
import VeneerM16 from "@/components/veneer/m16";
import VeneerMd8 from "@/components/veneer/md8";
import VeneerEdfa from "@/components/veneer/edfa";

export default {
  name: "structure",
  components: {
    VeneerNmu,
    VeneerOlp,
    VeneerOcp10g,
    VeneerOtu10g,
    VeneerOtu25g,
    VeneerD16,
    VeneerM16,
    VeneerEdfa,
    VeneerMd8,
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
  // border: 1px solid #000;
  // box-sizing: border-box;
}
</style>
