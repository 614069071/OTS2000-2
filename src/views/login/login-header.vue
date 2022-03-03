<template>
  <div class="login-header-wrapper">
    <div class="logo-wrapper">
      <img src="../../assets/images/logo-white.png" alt="" />
    </div>
    <div class="login-lang-set">
      <span>{{ $t("LANGUAGE") }}</span>
      <select class="lang-select" v-model="langType" @change="langChange">
        <option value="1">中文</option>
        <option value="2">English</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginHeader",
  data() {
    return {
      langType: "1",
    };
  },
  created() {
    const lang = localStorage.getItem("ost-lang") || "zh";
    this.$i18n.locale = lang;
    this.langType = lang === "zh" ? "1" : "2";
  },
  mounted() {
    console.log("mounted");
  },
  methods: {
    langChange(e) {
      const value = e.target.value;
      const lang = value === "1" ? "zh" : "en";
      this.$i18n.locale = lang;

      localStorage.setItem("ost-lang", lang);
    },
  },
};
</script>

<style scoped lang="scss">
.login-header-wrapper {
  display: flex;
  justify-content: space-between;
  padding: 0 60px;
  margin-top: 20px;
}

.login-header-wrapper select {
  background-color: #003366;
  color: #fff;
}

.logo-wrapper {
  height: 54px;
  width: 110px;
}

.lang-select {
  border: none;
}
</style>
