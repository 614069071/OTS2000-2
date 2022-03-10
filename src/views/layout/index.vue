<template>
  <div class="layout-wrapper">
    <LayoutHeader />

    <div class="layout-main">
      <div class="layout-aside">
        <div class="aside-header-wrapper clear-scroll-bar">
          <SideBar />
        </div>

        <LayoutControl />
      </div>

      <main class="layout-content scrollbar">
        <div class="board-overall-wrapper">
          <!-- <div class="refresh-header-wrapper">
            <div class="refresh-wrapper">自动刷新剩余时间：{{ timerCount }}秒 <button class="def-btn" @click="refreshSystem">立即刷新</button></div>
          </div> -->

          <structure :list="dataTable" />
        </div>

        <div class="page-wrapper">
          <router-view></router-view>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import Structure from "@/components/structure";
import SideBar from "@/components/side-bar";
import LayoutHeader from "./layout-header";
import LayoutControl from "./layout-control";
import { storages } from "@/utils";

export default {
  name: "Layout",
  components: { SideBar, Structure, LayoutHeader, LayoutControl },
  data() {
    return {
      userProfile: {
        userName: "webadmin",
        roleName: "管理员",
      },
      dataTable: [
        // { status: 1, boardname: "dco200g", slot: 5 },
        // { status: 1, boardname: "otu100g" },
        // { status: 1, boardname: "m16" },
        // { status: 1, boardname: "otu10g" },
        // { status: 1, boardname: "dcm" },
        // { status: 1, boardname: "d16" },
        // { status: 1, boardname: "olp" },
        // { status: 1, boardname: "edfa" },
        // { status: 1, boardname: "md16sfa" },
        // { status: 1, boardname: "md16sfb" },
        // { status: 1, boardname: "otu25g" },
        // { status: 1, boardname: "md8" },
        { status: 1, boardname: "d40" },
        { status: 1, boardname: "m40" },
        // { status: 1, boardname: "ocp10g" },
        // { status: 1, boardname: "nmu", slot: 8 },
      ],
      timerCount: 0,
    };
  },
  beforeRouteEnter(to, form, next) {
    const __accessToken__ = storages.get("__accessToken__");

    if (__accessToken__) {
      next();
    } else {
      next({ path: "/login", replace: true });
    }
  },
  watch: {
    // $route: {
    //   handler() {
    //     this.getBoardList();
    //   },
    //   immediate: true,
    // },
  },
  mounted() {
    this.$bus.$on("updateBoardView", () => {
      this.getBoardList();
    });
  },
  beforeDestroy() {
    this.$bus.$off("updateBoardView");
  },
  methods: {
    initUserinfo() {
      const userProfile = storages.get("userProfile") || {};

      this.userProfile = Object.freeze(userProfile);
    },
    getBoardList() {
      const data = { otn2000: { boardname: "board_view", type: "get_info" } };

      this.$http
        .post(data)
        .then(res => {
          if (!res) return;

          const list = res.otn2000_ack.channels || [];

          this.dataTable = list;
          this.$bus.$emit("onBoardList", list);
        })
        .catch(() => {
          this.dataTable = [];
        });
    },
    refreshSystem() {
      this.timer && clearInterval(this.timer);
      this.timerCount = 60;
      this.getBoardList();
    },
    startTimer() {
      this.timer = setInterval(() => {
        this.timerCount -= 1;

        if (this.timerCount <= 0) {
          this.timerCount = 60;
          this.getBoardList();
        }
      }, 1000);
    },
    clearTimer() {
      clearInterval(this.timer);

      this.timer = null;
      this.timerCount = 60;
    },
  },
};
</script>

<style lang="scss" scoped>
.layout-wrapper {
  height: 100vh;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 90%;
  min-width: 1280px;

  .layout-main {
    flex: 1;
    overflow: hidden;
    position: relative;
    display: flex;
    border-radius: 10px 10px 0 0;
  }

  .layout-aside {
    background-color: #fff;
    display: flex;
    height: 100%;
    flex-direction: column;
    margin-right: 7px;
    justify-content: space-between;
  }

  .layout-content {
    flex: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    overflow: hidden;
  }
}

.layout-content {
  .board-overall-wrapper {
    padding: 10px;
    overflow-y: hidden;
    overflow-x: auto;
    height: 520px;
  }

  .page-wrapper {
    box-sizing: border-box;
    padding: 0 10px 50px 10px;
    flex: 1;
    overflow-x: hidden;
    overflow-y: auto;
  }
  .refresh-header-wrapper {
    height: 36px;
    padding: 10px 0 0 0;
    display: flex;
    justify-content: right;

    .refresh-wrapper {
      font-size: 16px;
      .button {
        margin-left: 10px;
      }
    }
  }
}

.layout-aside {
  .aside-header-wrapper {
    flex: 1;
    overflow-x: hidden;
    overflow-y: auto;
  }
}
</style>
