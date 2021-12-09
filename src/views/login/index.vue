<template>
  <div class="login-view-wrapper">
    <div class="login-inner-wrapper">
      <div class="login-banner-item-wrapper">
        <img src="../../assets/images/banner@2x.png" alt="" />
      </div>

      <div class="login-banner-item-wrapper login-form-wrapper">
        <div class="login-form-logo-wrapper">
          <div class="login-logo-img-wrapper">
            <img src="../../assets/images/logo2@2x.png" alt="" />
          </div>
          <div class="login-logo-welcome">欢迎登录NSS运营系统数据平台</div>
        </div>

        <el-form ref="login_form" :model="loginInfo" :rules="rules">
          <el-form-item prop="loginAccount">
            <el-input class="login-form-item" v-model="loginInfo.loginAccount" @keyup.enter.native="login"></el-input>
          </el-form-item>
          <el-form-item prop="loginPassword" class="login-form-password">
            <el-input type="password" class="login-form-item" v-model="loginInfo.loginPassword" @keyup.enter.native="login"></el-input>
          </el-form-item>
        </el-form>

        <div class="login-form-forgot-password">
          <el-popover placement="bottom-start" width="244" trigger="click">
            <div class="login-forgot-mes">若忘记密码，请联系超级管理员</div>
            <span class="login-forgot-btn" slot="reference">忘记密码</span>
          </el-popover>
        </div>

        <el-button class="login-form-item" type="primary" @click="login">登录</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import store from "@store";
import { storages } from "@utils";
import { mapMutations, mapState } from "vuex";

export default {
  data() {
    return {
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
    store.commit("UPDATE_TOKEN", "");
    storages.set("userInfo", {});
    storages.set("MenuTreeColle", []);
    // store.commit('CLEAR_CACHE_ROUTER');
    next();
  },
  created() {},
  computed: {
    ...mapState(["routerDefaultActive"]),
  },
  methods: {
    ...mapMutations(["UPDATE_TOKEN"]),
    login() {
      // 模拟登录
      const login_form = this.$refs.login_form;

      login_form
        .validate()
        .then(() => {
          this.$load();

          this.$http
            .login(this.loginInfo)
            .then(({ resp_code, resp_msg, datas }) => {
              if (!resp_code) {
                const { toKen, ...userInfo } = datas;

                storages.set("userInfo", userInfo);

                this.UPDATE_TOKEN(toKen);
                this.getMenuTreeColle();
              } else {
                this.$message({
                  type: "error",
                  message: resp_msg,
                });
              }
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch(() => {});
    },
    getMenuTreeColle() {
      this.$load();
      this.$http.getPower().then(({ datas }) => {
        const { children } = datas[0];
        // storages.set('MenuTreeColle', children);
        this.$router.push("/");
      });
    },
  },
};
</script>

<style scoped lang="scss">
.login-view-wrapper {
  width: 100%;
  height: 100vh;
  min-height: 600px;
  position: relative;
  background-color: #f5f9fd;
}

.login-inner-wrapper {
  display: flex;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0px 3px 20px rgba(0, 0, 0, 0.03);
}

.login-banner-item-wrapper {
  width: 400px;
  height: 500px;
  box-sizing: border-box;
}

.login-form-wrapper {
  padding-left: 80px;
  background-color: #fff;
  border-radius: 0px 5px 5px 0px;
}

.login-form-logo-wrapper {
  padding-top: 108px;
  padding-bottom: 24px;
  .login-logo-img-wrapper {
    width: 101px;
    height: 34px;
  }

  .login-logo-welcome {
    height: 20px;
    line-height: 20px;
    margin-top: 10px;
    color: var(--font-color);
  }
}

.login-form-forgot-password {
  text-align: right;
  padding-right: 80px;
  padding-bottom: 24px;
}

.login-forgot-mes {
  height: 36px;
  line-height: 36px;
  text-align: center;
}

.login-forgot-btn {
  color: var(--default-color);
  cursor: pointer;
}

.login-form-item {
  width: 240px;
}

.login-form-password {
  margin-bottom: 12px;
}
</style>
