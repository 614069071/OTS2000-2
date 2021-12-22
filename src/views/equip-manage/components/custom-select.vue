<template>
  <span class="custom-select-wrapper">
    <select v-model="selectVal" @change="selectChange">
      <option v-for="item in options" :value="item.value" :key="item.value">{{ item.label }}</option>
    </select>
    <input v-show="selectVal === 'custom'" class="def-input custom-select-input" type="text" v-model="selectCustomVal" />
  </span>
</template>

<script>
export default {
  name: "custom-select",
  props: ["options", "value"],
  data() {
    return {
      selectVal: "",
      selectCustomVal: "",
    };
  },
  created() {
    console.log("created");
  },
  mounted() {
    console.log("mounted");
  },
  watch: {
    value: {
      handler(n) {
        this.selectVal = n;

        const isHave = this.options.some((e) => n === e.value);

        if (!isHave) {
          //自定义值
          this.selectVal = "custom";
        }
      },
      immediate: true,
    },
    selectCustomVal(n) {
      this.$emit("input", n);
    },
  },
  methods: {
    selectChange(e) {
      const value = e.target.value;
      console.log("value", value);

      if (value === "custom") {
        this.$emit("input", this.selectCustomVal);
      } else {
        this.selectCustomVal = "";
        this.$emit("input", value);
      }
    },
  },
};
</script>

<style scoped lang="css">
.custom-select-wrapper {
  display: flex;
  align-items: center;
}
.custom-select-input {
  width: 80px;
  height: 28px;
  margin-left: 10px;
}
</style>
