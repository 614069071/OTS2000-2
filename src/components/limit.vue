<template>
  <div class="input-limit-wrapper">
    <div class="input-text-hint" v-show="display">{{ hint }}</div>
    <input class="def-input" type="text" @input="change($event)" />
  </div>
</template>

<script>
export default {
  name: "Limit",
  props: { min: Number, max: Number, value: String },
  data() {
    return {
      display: false,
      hint: "",
    };
  },
  created() {
    console.log("created");
  },
  mounted() {
    console.log("mounted");
  },
  methods: {
    change(e) {
      const reg = /(^[-]?[0-9]{0,}([.][0-9]{0,})?$)|(^[-]?0?(\.[0-9]{0,})?$)/;
      const { min, max } = this;
      const data = e.target.value;
      const val = parseFloat(data);

      if (data != 0 && !data) return;

      if (reg.test(data)) {
        if (!!min || min === 0) {
          this.hint = "有效值不能小于" + min;
        }

        if (!!max || max === 0) {
          this.hint = "有效值不能大于" + max;
        }

        if ((!!min || min === 0) && (!!max || max === 0)) {
          this.hint = "有效值范围为" + min + "~" + max;
        }

        if (data.length > 0) {
          if (val >= min && val <= max) {
            this.display = false;
          } else {
            this.display = true;
          }
        } else {
          this.display = false;
        }
      } else {
        this.hint = "请输入有效的值";

        if (data.length > 0) {
          this.display = true;
        } else {
          this.display = false;
        }
      }

      this.$emit("input", data);
    },
  },
};
</script>

<style scoped lang="scss">
.input-limit-wrapper {
  position: relative;

  .input-text-hint {
    position: absolute;
    left: 0;
    bottom: 100% + 10;
    background-color: #555;
    z-index: 100;
    height: 22px;
    line-height: 22px;
    padding: 0 5px;
    color: #fff;
  }
}
</style>
