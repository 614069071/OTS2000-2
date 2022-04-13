<template>
  <div class="aside-footer-wrapper">
    <div class="setting-btns-wrapper">
      <div v-if="isAdmin" class="setting-btn-wrapper" @click="restore">
        <div><i class="c-icon icon-back"></i></div>
        <div>{{ $t("LOYOUT.RESTART") }}</div>
      </div>

      <div v-if="isAdmin" class="vertical-line"></div>

      <div class="setting-btn-wrapper" @click="$router.push('/login')">
        <div><i class="c-icon icon-next"></i></div>
        <div>{{ $t("LOYOUT.EXIT") }}</div>
      </div>
    </div>

    <div class="progress-pupur-wrapper" v-show="isStart">
      <div class="progress-title">设备正在重新启动。</div>
      <div class="progress-bar-wrapper">
        <div class="progress-bar-inner" :class="isStart ? 'start' : ''"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { storages } from "@/utils";
export default {
  name: "LayoutControl",
  data() {
    return {
      isStart: false,
    };
  },
  computed: {
    isAdmin() {
      const role = storages.get("__role__");
      const isAdmin = role === "2";
      return isAdmin;
    },
  },
  created() {
    console.log("created");
  },
  mounted() {
    console.log("mounted");
  },
  methods: {
    restore() {
      const isResore = window.confirm(this.$t("COMMON.CONIFRM_RESTORE"));

      if (!isResore) return;

      const data = { otn2000: { boardname: "NMU", type: "reboot" } };

      this.$http
        .post(data)
        .then(res => {
          console.log("reboot", res);
        })
        .catch(() => {})
        .finally(() => {});

      this.startReboot();
    },
    startReboot() {
      this.isStart = true;
      this.$bus.$emit("stopUpdateBoardView");
      this.$bus.$emit("stopUpdateSys");

      setTimeout(() => {
        this.$router.push("/login");
      }, 36000);
    },
  },
};
</script>

<style scoped lang="scss">
.aside-footer-wrapper {
  height: 60px;

  .setting-btns-wrapper {
    display: flex;
    justify-content: center;

    .setting-btn-wrapper {
      cursor: pointer;
      text-align: center;
    }

    .vertical-line {
      height: 50px;
      border-left: 1px solid #848484;
      margin: 0 30px;
    }
  }
}

.progress-pupur-wrapper {
  position: fixed;
  width: 400px;
  left: 50%;
  top: 30%;
  transform: translateX(-50%);
  z-index: 1000;
  background-color: #fff;
  padding: 20px;
  border: 1px solid #bbb;
  border-radius: 5px;
  box-sizing: border-box;

  .progress-title {
    height: 36px;
    list-style: 36px;
    font-size: 16px;
  }

  .progress-bar-wrapper {
    width: 100%;
    height: 20px;
    background-color: #cecece;
  }

  .progress-bar-inner {
    width: 0%;
    height: 20px;
    background-color: var(--dft-color);
  }

  .progress-bar-inner.start {
    animation: width linear 36s forwards;
  }
}

@keyframes width {
  to {
    width: 100%;
  }
}
</style>
