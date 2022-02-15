<template>
  <div class="login-page">
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

    <div class="login-main">
      <div class="login-main-left">
        <div class="login-banner-wrapper"><img src="../../assets/images/banner.png" alt="" /></div>
      </div>

      <div class="login-main-right">
        <div class="login-user-main">
          <div class="login-user-wrapper">
            <div class="login-user-before"></div>
            <input type="text" :placeholder="$t('USER_NAME')" />
          </div>
          <div class="login-ps-wrapper">
            <div class="login-ps-before"></div>
            <input type="password" :placeholder="$t('PASSWORD')" />
          </div>
          <button class="login-submit" @click="simulateLogin">{{ $t("LOGIN") }}</button>
        </div>
      </div>
    </div>

    <footer class="login-footer f16">www.cdatatec.com</footer>
  </div>
</template>

<script>
import { storages } from "@utils";

export default {
  name: "login",
  data() {
    return {
      langType: "1",
      loginInfo: {
        loginAccount: "", //admin
        loginPassword: "", //admin
      },
      rules: {
        loginAccount: [
          {
            validator(rule, value, callback) {
              if (value) {
                callback();
              } else {
                callback(new Error("请输入账号"));
              }
            },
          },
        ],
        loginPassword: [
          {
            validator(rule, value, callback) {
              if (value) {
                callback();
              } else {
                callback(new Error("请输入密码"));
              }
            },
          },
        ],
      },
    };
  },
  beforeRouteEnter(to, from, next) {
    storages.set("__accessToken__", "");
    storages.set("userInfo", {});
    storages.set("MenuTreeColle", []);
    next();
  },
  created() {
    const lang = localStorage.getItem("ost-lang") || "zh";
    this.$i18n.locale = lang;
    this.langType = lang === "zh" ? "1" : "2";
  },
  methods: {
    login() {
      // 模拟登录
      const login_form = this.$refs.login_form;

      login_form
        .validate()
        .then(() => {
          // this.$load();
          this.simulateLogin();
        })
        .catch(() => {});
    },
    simulateLogin() {
      setTimeout(() => {
        storages.set("__accessToken__", 123);
        this.$router.push("/");
      }, 1000);
    },
    loginRequest() {
      this.$http
        .login(this.loginInfo)
        .then(({ resp_code, resp_msg, datas }) => {
          if (!resp_code) {
            const { toKen, ...userInfo } = datas;

            storages.set("userInfo", userInfo);
            storages.set("__accessToken__", toKen);

            this.getMenuTreeColle();
          } else {
            this.$message({ message: resp_msg });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getMenuTreeColle() {
      this.$load();
      this.$http.getPower().then(({ datas }) => {
        const { children } = datas[0];
        storages.set("MenuTreeColle", children);
        this.$router.push("/");
      });
    },
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
.login-page {
  width: 100%;
  height: 100vh;
  min-height: 600px;
  position: relative;
  background-color: #003366;
  display: flex;
  flex-direction: column;
  color: #fff;
}

.login-header-wrapper {
  display: flex;
  justify-content: space-between;
  padding: 0 60px;
  margin-top: 58px;
}

.login-header-wrapper select {
  background-color: #003366;
  color: #fff;
}

.logo-wrapper {
  height: 80px;
  width: 172px;
}

.login-main {
  flex: 1;
  display: flex;
  align-items: center;
}

.login-main-left,
.login-main-right {
  width: 50%;
}

.login-main-left {
  display: flex;
  justify-content: right;
  padding-right: 120px;
}

.login-main-right {
  padding-left: 45px;
}

.login-user-main {
  width: 679px;
  height: 365px;
  border-radius: 34px;
  padding-top: 58px;
  box-sizing: border-box;
  background-color: rgba(96, 96, 96, 0.5);
}

.login-user-wrapper,
.login-ps-wrapper {
  height: 66px;
  width: 433px;
  border-bottom: 1px solid #fff;
  display: flex;
  align-items: center;
  margin: 0 auto;

  input {
    flex: 1;
    background-color: transparent;
    color: #b0c3be;
    font-size: 24px;
  }
}

.login-ps-wrapper {
  margin-top: 53px;
}

.login-user-before,
.login-ps-before {
  width: 46px;
  height: 46px;
  margin: 0 15px 0 5px;
  background: url(../../assets/images/user.png) center/contain no-repeat;
}

.login-ps-before {
  background-image: url(../../assets/images/pasword.png);
}

.login-submit {
  display: block;
  width: 95px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  margin: 44px auto 0;
  border-radius: 10px;
  color: #fff;
  background-color: #606060;
  font-size: 18px;
}

.login-banner-wrapper {
  width: 660px;
  height: 133px;
}

.login-footer {
  margin-bottom: 85px;
  text-align: center;
}

.lang-select {
  border: none;
}
</style>
