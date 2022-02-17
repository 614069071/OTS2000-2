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
        <div class="aside-header-wrapper">
          <div class="aside-content-wrapper clear-scroll-bar">
            <SideBar />
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
        <div class="board-overall-wrapper">
          <!-- <div class="refresh-header-wrapper">
            <div class="refresh-wrapper">自动刷新剩余时间：{{ timerCount }}秒 <button class="def-btn" @click="refreshSystem">立即刷新</button></div>
          </div> -->

          <Structure :list="dataTable"></Structure>
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
import SideBar from "@components/side-bar";
import { storages } from "@utils";

export default {
  name: "layout",
  components: { SideBar, Structure },
  data() {
    return {
      userInfo: {
        name: "webadmin",
        roleName: "管理员",
      },
      dataTable: [
        // { status: 1, boardname: "m16" },
        // { status: 1, boardname: "otu10g" },
        // { status: 1, boardname: "dcm" },
        // { status: 1, boardname: "d16" },
        // { status: 1, boardname: "d40" },
        // { status: 1, boardname: "olp" },
        // { status: 1, boardname: "edfa" },
        // { status: 1, boardname: "dco200g" },
        // { status: 1, boardname: "md16sfa" },
        // { status: 1, boardname: "md16sfb" },
        // { status: 1, boardname: "ocp10g" },
        // { status: 1, boardname: "otu25g" },
        // { status: 1, boardname: "m40" },
        // { status: 1, boardname: "md8" },
        // { status: 1, boardname: "otu100g" },
        // { status: 1, boardname: "nmu" },
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
    $route: {
      handler() {
        this.getboardList();
      },
      immediate: true,
    },
  },
  methods: {
    initUserinfo() {
      const userInfo = storages.get("userInfo") || {};
      this.userInfo = Object.freeze(userInfo);
    },
    getboardList() {
      const data = { otn2000: { boardname: "board_view", type: "get_info" } };

      this.$http
        .post(data)
        .then((res) => {
          if (!res) return;

          this.dataTable = res.otn2000_ack.channels || [];
        })
        .catch(() => {
          this.dataTable = [];
        });
    },
    refreshSystem() {
      this.timer && clearInterval(this.timer);
      this.timerCount = 60;
      this.getboardList();
    },
    startTimer() {
      this.timer = setInterval(() => {
        this.timerCount -= 1;
        if (this.timerCount <= 0) {
          this.timerCount = 60;
          this.getboardList();
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

  .layout-header {
    height: 50px;
    display: flex;
    padding: 0 5px;
    align-items: center;
    justify-content: space-between;
    background-color: var(--dft-color);
    color: #fff;

    .logo-wrapper {
      width: 70px;
      height: 33px;
      overflow: hidden;
      cursor: pointer;
      text-align: center;
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

.layout-header {
  .user-info-wrapper span + span {
    margin-left: 26px;
  }
}

.layout-content {
  .board-overall-wrapper {
    padding: 10px 0;
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

.ayout-aside {
  .aside-header-wrapper {
    display: flex;
    flex: 1;
    min-height: 200px;
    flex-direction: column;

    .aside-content-wrapper {
      flex: 1;
    }
  }
}

.aside-footer-wrapper {
  height: 60px;

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
}
</style>
