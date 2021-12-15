<template>
  <div class="layout-wrapper">
    <div class="layout-header">
      <router-link tag="div" to="/" class="logo-wrapper">
        <img src="../../assets/images/logo.png" alt="西迪特" />
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
            <div>重启</div>
            <div>退出</div>
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
import { mapState, mapMutations } from "vuex";
import SideBar from "@components/side-bar";
import TabCard from "./components/tab-card.vue";
import NProgress from "nprogress";
import { storages } from "@utils";

export default {
  name: "layout",
  components: { SideBar, TabCard },
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
  computed: {
    ...mapState(["breadcrumbRouter"]),
  },
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
  margin: 0 160px;

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
    justify-content: space-between;
  }

  .layout-content {
    flex: 1;
    overflow-x: hidden;
    overflow-y: scroll;
    background-color: #003466;
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

.user-info-wrapper span + span {
  margin-left: 26px;
}

.setting-btns-wrapper {
  display: flex;
  justify-content: center;
}
</style>
