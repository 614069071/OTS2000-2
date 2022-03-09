<template>
  <div class="input-limit-wrapper">
    <div class="input-text-hint" v-show="display">{{ hint }}</div>
    <input class="def-input" type="text" v-model="vale" @input="change($event)" />
  </div>
</template>

<script>
export default {
  name: "Limit",
  props: { min: Number, max: Number, value: [String, Number] },
  data() {
    return {
      hint: "",
      display: false,
      vale: this.value,
    };
  },
  methods: {
    change(e) {
      const reg = /(^[-]?[0-9]{0,}([.][0-9]{0,})?$)|(^[-]?0?(\.[0-9]{0,})?$)/;
      const { min, max } = this;
      const data = e.target.value;
      const val = Number(data);

      if (data != 0 && !data) return;

      if (reg.test(data) && data !== "-" && data !== ".") {
        if (!!min || min === 0) {
          this.hint = "有效值不能小于" + min;
          this.display = (val || val === 0) && val < min;
        }

        if (!!max || max === 0) {
          this.hint = "有效值不能大于" + max;
          this.display = (val || val === 0) && val > max;
        }

        if ((!!min || min === 0) && (!!max || max === 0)) {
          this.hint = "有效值范围为" + min + "~" + max;
          this.display = (val || val === 0) && (val > max || val < min);
        }
      } else {
        this.hint = "请输入有效的值";
        this.display = !!data.length;
      }

      this.$emit("input", isNaN(val) ? data : val);
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
