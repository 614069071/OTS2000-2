<template>
  <div class="layout-wrapper">
    <div class="layout-header">
      <router-link tag="div" to="/" class="logo-wrapper">
        <img src="../../assets/images/logo-red.png" alt="西迪特" />
      </router-link>

      <div class="user-info-wrapper">
        <span>当前用户：webadmin</span>
        <span>用户级别：管理员</span>
      </div>
    </div>

    <div class="layout-main">
      <div class="layout-aside">
        <div class="aside-header-wrapper" :class="{ collapse: barCollapse }">
          <div class="aside-content-wrapper clear-scroll-bar">
            <SideBar :collapse="barCollapse"></SideBar>
          </div>
        </div>

        <div class="aside-footer-wrapper">
          <div class="setting-btns-wrapper">
            <div class="setting-btn-wrapper">
              <div><i class="c-icon icon-back"></i></div>
              <div>重启</div>
            </div>

            <div class="vertical-line"></div>

            <div class="setting-btn-wrapper" @click="$router.push('/login')">
              <div><i class="c-icon icon-next"></i></div>
              <div>退出</div>
            </div>
          </div>
        </div>
      </div>

      <main class="layout-content scrollbar">
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script>
import store from "@store";
import { mapMutations } from "vuex";
import SideBar from "@components/side-bar";
import NProgress from "nprogress";
import { storages } from "@utils";

export default {
  name: "layout",
  components: { SideBar },
  data() {
    return {
      barCollapse: false,
      userInfo: {
        name: "webadmin",
        roleName: "管理员",
      },
    };
  },
  beforeRouteEnter(to, form, next) {
    // console.log(to, form, '111');// 判断是否存在token，没有则跳至登录
    if (store.state.__accessToken__) {
      next();
    } else {
      NProgress.done();
      next({ path: "/login", replace: true });
    }
  },
  created() {},
  methods: {
    initUserinfo() {
      const userInfo = storages.get("userInfo") || {};
      this.userInfo = Object.freeze(userInfo);
    },
    ...mapMutations(["UPDATE_DEFAULT_ACTIVE"]),
  },
};
</script>

<style lang="scss" scoped>
.layout-wrapper {
  height: 100vh;
  display: flex;
  flex-direction: column;
  // margin: 0 160px;
  margin: 0 auto;
  width: 90%;

  .layout-header {
    height: 93px;
    display: flex;
    padding: 0 18px;
    align-items: center;
    justify-content: space-between;
    background-color: #003466;
    color: #fff;
    .logo-wrapper {
      width: 120px;
      height: 54px;
      overflow: hidden;
      cursor: pointer;
      text-align: center;
      line-height: 56px;
    }
  }

  .layout-main {
    flex: 1;
    overflow: hidden;
    position: relative;
    display: flex;
    border-radius: 10px 10px 0 0;
  }

  .layout-aside {
    min-width: 0;
    background-color: #fff;
    display: flex;
    height: 100%;
    flex-direction: column;
    margin-right: 7px;
    justify-content: space-between;
  }

  .layout-content {
    flex: 1;
    overflow-x: hidden;
    overflow-y: scroll;
    background-color: #fff;
  }
}

.aside-header-wrapper {
  display: flex;
  flex: 1;
  min-height: 200px;
  flex-direction: column;

  .aside-content-wrapper {
    flex: 1;
  }
}

.aside-footer-wrapper {
  height: 100px;
}

.user-info-wrapper span + span {
  margin-left: 26px;
}

.setting-btns-wrapper {
  display: flex;
  justify-content: center;

  .setting-btn-wrapper {
    cursor: pointer;
  }

  .vertical-line {
    height: 50px;
    border-left: 1px solid #848484;
    margin: 0 30px;
  }
}
</style>
