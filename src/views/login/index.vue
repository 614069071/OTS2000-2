<template>
  <div class="login-page">
    <LoginHeader />

    <div class="login-main">
      <div class="login-main-left">
        <div class="login-banner-wrapper"><img src="../../assets/images/banner.png" alt="" /></div>
      </div>

      <div class="login-main-right">
        <div class="login-user-main">
          <div class="login-user-wrapper">
            <div class="login-user-before"></div>
            <input type="text" :placeholder="$t('LOGIN.USER_NAME')" />
          </div>
          <div class="login-ps-wrapper">
            <div class="login-ps-before"></div>
            <input type="password" :placeholder="$t('COMMON.PASSWORD')" />
          </div>
          <button class="login-submit" @click="simulateLogin">{{ $t("LOGIN.LOGIN") }}</button>
        </div>
      </div>
    </div>

    <LoginFooter />
  </div>
</template>

<script>
import LoginHeader from "./login-header";
import LoginFooter from "./login-footer";
import { storages } from "@utils";

export default {
  name: "login",
  components: { LoginHeader, LoginFooter },
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
    next();
  },
  created() {},
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
        storages.set("__iSuper__", true);
        this.$router.push("/");
      }, 1000);
    },
    loginRequest() {
      this.$http
        .login(this.loginInfo)
        .then(({ resp_code, datas }) => {
          if (!resp_code) {
            const { toKen, ...userInfo } = datas;

            storages.set("userInfo", userInfo);
            storages.set("__accessToken__", toKen);
          } else {
            //
          }
        })
        .catch(err => {
          console.log(err);
          alert("登录失败");
        });
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
  justify-content: flex-end;
  padding-right: 120px;
}

.login-main-right {
  padding-left: 45px;
}

.login-user-main {
  width: 500px;
  height: 280px;
  border-radius: 34px;
  padding-top: 30px;
  box-sizing: border-box;
  background-color: rgba(96, 96, 96, 0.5);
}

.login-user-wrapper,
.login-ps-wrapper {
  height: 46px;
  width: 400px;
  border-bottom: 1px solid #fff;
  display: flex;
  align-items: center;
  margin: 0 auto;

  input {
    flex: 1;
    background-color: transparent;
    color: #b0c3be;
    font-size: 18px;
  }
}

.login-ps-wrapper {
  margin-top: 53px;
}

.login-user-before,
.login-ps-before {
  width: 26px;
  height: 26px;
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
  width: 500px;
  height: 133px;
}
</style>
