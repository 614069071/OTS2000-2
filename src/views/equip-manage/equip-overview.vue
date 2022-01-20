<template>
  <div class="equip-overview-view-wrapper view-wrapper">
    <!-- <div class="inner-header-wrapper"></div> -->

    <div class="inner-container-wrapper banner-list">
      <div class="refresh-header-wrapper">
        <div class="refresh-wrapper">自动刷新剩余时间：{{ timerCount }}秒 <button class="def-btn" @click="refreshSystem">立即刷新</button></div>
      </div>

      <div class="veneer-block-diagram-wrapper">
        <Structure :list="dataTable"></Structure>
      </div>
      <div class="inner-container-title custom-title">系统信息</div>
      <div class="system-info-main">
        <div class="system-info-wrapper">
          <div class="system-info-item">
            <span>设备型号</span>
            <span>{{ systemInfo.device_type }} </span>
          </div>
          <div class="system-info-item">
            <span>序列号</span>
            <span>
              <template v-if="isTatic || !$store.state.iSuper">{{ systemInfo.sn }}</template>
              <input v-if="!isTatic && $store.state.iSuper" class="def-input" type="text" v-model="systemInfo.sn" />
            </span>
          </div>
          <div class="system-info-item">
            <span>硬件版本</span>
            <span>{{ systemInfo.h_ver ? `V${systemInfo.h_ver}` : "" }} </span>
          </div>
          <div class="system-info-item">
            <span>设备标识</span>
            <span>
              <template v-if="isTatic">{{ systemInfo.dev_sign }}</template>
              <input v-else class="def-input" type="text" v-model="systemInfo.dev_sign" />
            </span>
          </div>
          <div class="system-info-item">
            <span>设备位置</span>
            <span>
              <template v-if="isTatic">{{ systemInfo.location }}</template>
              <input v-else class="def-input" type="text" v-model="systemInfo.location" />
            </span>
          </div>
          <div class="system-info-item">
            <span>联系人</span>
            <span>
              <template v-if="isTatic">{{ systemInfo.contacts }}</template>
              <input v-else class="def-input" type="text" v-model="systemInfo.contacts" />
            </span>
          </div>
          <div class="system-info-change-wrapper">
            <button v-if="isTatic" class="def-btn" @click="isTatic = false">修改</button>
            <template v-else>
              <button class="def-btn" @click="submitChangeFrom">提交</button>
              <button class="def-btn" @click="cancelChangeForm">取消</button>
            </template>
          </div>
        </div>

        <div class="system-info-wrapper">
          <div class="system-info-item">
            <span>电源1属性</span>
            <span>
              {{
                systemInfo.source_1.output > 0
                  ? `${systemInfo.source_1.type ? "直流" : "交流"}${systemInfo.source_1.on_off ? "开" : "关"} 输出 ${systemInfo.source_1.output.toFixed(2)}（V）`
                  : "无电源"
              }}
            </span>
          </div>
          <div class="system-info-item">
            <span>电源2属性</span>
            <span>
              {{
                systemInfo.source_2.output > 0
                  ? `${systemInfo.source_2.type ? "直流" : "交流"}${systemInfo.source_2.on_off ? "开" : "关"} 输出 ${systemInfo.source_2.output.toFixed(2)}（V）`
                  : "无电源"
              }}
            </span>
          </div>
          <div class="system-info-item">
            <span>固件版本</span><span>{{ systemInfo.p_ver ? `V${systemInfo.p_ver}` : "" }}</span>
          </div>
          <div class="system-info-item">
            <span>系统时间</span><span>{{ systemInfo.sys_time }}</span>
          </div>
          <div class="system-info-item">
            <span>运行时间</span><span>{{ systemInfo.run_time | formatSeconds }}</span>
          </div>
          <div class="system-info-item">
            <span>网关版本</span><span>{{ systemInfo.web_ver ? `V${systemInfo.web_ver}` : "" }}</span>
          </div>
        </div>
      </div>

      <div class="inner-container-title">系统性能</div>
      <div class="system-performance-wrapper">
        <div class="fan-state-wrapper">
          <div class="state-title"><i class="c-icon icon-setting"></i>风扇状态</div>
          <div class="state-inner-wrapper">
            <div class="fan-wrapper" :class="systemInfo.fan_status ? '' : 'error'"></div>
          </div>
        </div>
        <div class="cpu-state-wrapper">
          <div class="state-title"><i class="c-icon icon-cpu"></i>CPU使用率</div>
          <div class="state-inner-wrapper">
            <el-progress type="dashboard" :percentage="Math.ceil(systemInfo.cpu_rate)" color="#003466"></el-progress>
          </div>
        </div>
        <div class="memory-state-wrapper">
          <div class="state-title"><i class="c-icon icon-memory"></i>内存使用率</div>
          <div class="state-inner-wrapper">
            <el-progress type="dashboard" :percentage="Math.ceil(systemInfo.mem_rate)" color="#003466"></el-progress>
          </div>
        </div>
        <div class="temperature-state-wrapper">
          <div class="state-title"><i class="c-icon icon-temper"></i>设备温度</div>
          <div class="state-inner-wrapper">
            <div class="temperature-wrapper">
              <div class="temperature-inner-wrapper" :style="{ height: ((systemInfo.temp >= 100 ? 100 : systemInfo.temp) / 100) * 60 + 'px' }"></div>
              <div class="temperature-value">{{ systemInfo.temp }}℃</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Structure from "../../components/structure";

export default {
  name: "equip-overview",
  components: { Structure },
  data() {
    return {
      isTatic: true,
      inquireLoading: false,
      systemInfo: {
        boardname: "",
        device_type: "",
        source_1: {
          type: 0,
          on_off: 0,
          output: 0,
        },
        source_2: {
          type: 0,
          on_off: 0,
          output: 0,
        },
        sn: "",
        h_ver: "",
        sys_time: "",
        run_time: 0,
        web_ver: "",
        fan_status: "",
        cpu_rate: "",
        mem_rate: "",
        temp: "",
        location: "",
        contacts: "",
        dev_sign: "",
      },
      dataTable: [],
      timer: null,
      timerCount: 60,
    };
  },
  created() {},
  mounted() {
    this.getSystemInfo();
    this.getVeneerList();
    this.startTimer();
  },
  beforeDestroy() {
    clearInterval(this.timer);
    this.timer = null;
    this.timerCount = 60;
  },
  methods: {
    // 首页概览
    getSystemInfo() {
      const data = { otn2000: { type: "get_info", boardname: "sys_view" } };

      this.$http
        .post(data)
        .then((res) => {
          if (!res) return;

          this.systemInfo = res.otn2000_ack;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getVeneerList() {
      const data = { otn2000: { boardname: "board_view", type: "get_info" } };

      this.$http
        .post(data)
        .then((res) => {
          if (!res) return;
          this.dataTable = res.otn2000_ack.channels || [];
        })
        .catch((err) => {
          console.log(err);
        });
    },
    startTimer() {
      this.timer = setInterval(() => {
        this.timerCount -= 1;
        if (this.timerCount <= 0) {
          this.timerCount = 60;
          this.getSystemInfo();
          this.getVeneerList();
        }
      }, 1000);
    },
    refreshSystem() {
      this.timer && clearInterval(this.timer);
      this.timerCount = 60;
      this.getSystemInfo();
      this.getVeneerList();
      this.startTimer();
    },
    submitChangeFrom() {
      const { dev_sign, contacts, location, sn } = this.systemInfo;
      const asin = this.$state.iSuper ? { sn } : {};
      const data = { otn2000: { boardname: "sys_view", type: "post_info", dev_sign, contacts, location, ...asin } };

      this.$http
        .post(data)
        .then((res) => {
          this.systemInfo = res.otn2000_ack;
          this.isTatic = true;
          this.$message("成功");
        })
        .catch((err) => {
          console.log(err);
          this.$message("失败");
        });
    },
    cancelChangeForm() {
      this.isTatic = true;
    },
  },
};
</script>

<style scoped lang="scss">
.refresh-header-wrapper {
  height: 57px;
  padding: 30px 0 0 0;
  display: flex;
  justify-content: right;

  .refresh-wrapper {
    font-size: 16px;
    .button {
      margin-left: 10px;
    }
  }
}

.veneer-block-diagram-wrapper {
  margin: 0 auto 20px auto;
}

.system-info-cahnge-btn {
  font-size: 16px;
}

.system-info-main {
  display: flex;
}

.system-info-wrapper {
  width: 50%;
  min-width: 400px;
  .system-info-item {
    display: flex;
    align-items: center;
    margin-top: 18px;
    white-space: nowrap;

    span {
      height: 32px;
      line-height: 32px;
      font-size: 16px;
    }

    span:first-child {
      width: 30%;
      min-width: 110px;
      max-width: 138px;
      padding-left: 23px;
    }
    span:last-child {
      flex: 1;
      padding-left: 15px;
    }
  }

  .system-info-change-wrapper {
    padding: 10px 0 20px 0;
    button:first-child {
      margin-left: 246px;
    }
  }
}

.system-performance-wrapper {
  display: flex;

  & > div {
    width: 25%;
  }

  .state-title {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80px;
    line-height: 80px;
    font-size: 18px;

    .c-icon {
      width: 20px;
      height: 20px;
      margin-right: 8px;
    }
  }

  .state-inner-wrapper {
    width: 120px;
    height: 120px;
    margin: 10px auto 0;
  }

  .fan-wrapper {
    width: 100%;
    height: 100%;
    background: url("../../assets/images/fans.png") center/contain no-repeat, url("../../assets/images/icons/right.png") 85px 84px/24px 24px no-repeat;
    position: relative;
  }

  .fan-wrapper.error {
    background-image: url("../../assets/images/fans.png"), url("../../assets/images/icons/error.png");
  }

  .temperature-wrapper {
    width: 100%;
    height: 100%;
    background: url("../../assets/images/temperature.png") center/contain no-repeat;
    position: relative;
  }

  .temperature-inner-wrapper {
    width: 7px;
    height: 43px;
    background-color: var(--dft-color);
    position: absolute;
    left: 60px;
    bottom: 44px;
    border-radius: 3px 3px 0 0;
  }
  .temperature-value {
    position: absolute;
    left: 95px;
    bottom: 55px;
    font-size: 18px;
  }
}
</style>
