<template>
  <div>
    <div class="inner-container-title">设置时间</div>

    <div class="system-info-wrapper">
      <div class="system-info-item-other">
        <span class="item-before"><el-radio v-model="isAutoConfigTime" :label="false">手动</el-radio></span>
        <span class="item-after"> <el-date-picker v-model="configManualTime" value-format="timestamp" type="datetime" placeholder="选择日期时间"/></span>
      </div>
      <div class="system-info-item-other">
        <span class="item-before"><el-radio v-model="isAutoConfigTime" :label="true">自动从互联网获取NTP Server</el-radio></span>
        <span class="item-after">{{ configAutoTime | formatTime }}</span>
      </div>
      <div class="system-info-item-other"><span class="item-before">系统运行时间</span><span class="item-after">21分钟</span></div>

      <div class="system-info-btns">
        <button class="def-btn" @click="getTimeConfig">刷新</button>
        <button class="def-btn" @click="setTimeConfig">应用</button>
      </div>

      <div class="inner-container-title">机箱温度</div>
      <div class="system-info-item-other">
        <span class="item-before">最低温度</span>
        <span class="item-after"><input type="text" class="def-input" /> ℃</span>
      </div>

      <div class="system-info-item-other">
        <span class="item-before">最高温度</span><span class="item-after"><input type="text" class="def-input" /> ℃</span>
      </div>
    </div>

    <div class="system-info-btns">
      <button class="def-btn" @click="getTempConfig">刷新</button>
      <button class="def-btn" @click="setTempConfig">应用</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "system-info",
  data() {
    return {
      isAutoConfigTime: true,
      configManualTime: Date.now(),
      configAutoTime: Date.now(),
      configAutoTimeTimer: null,
    };
  },
  watch: {
    isAutoConfigTime: {
      handler(v) {
        if (!v) return;
        this.getConfigManualTime();
      },
      immediate: true,
    },
  },
  beforeDestroy() {
    clearInterval(this.configAutoTimeTimer);
    this.configAutoTimeTimer = null;
  },
  methods: {
    getTimeConfig() {},
    setTimeConfig() {
      const { isAutoConfigTime, configManualTime, configAutoTime } = this;
      const utctime = isAutoConfigTime ? configAutoTime : configManualTime;
      const data = { otn2000: { boardname: "NMU", utctime: parseInt(utctime / 1000), type: "set_systime" } };

      this.$http
        .post(data)
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    getConfigManualTime() {
      this.configAutoTimeTimer = setInterval(() => {
        this.configAutoTime = Date.now();
      }, 1000);
    },
    getTempConfig() {},
    setTempConfig() {},
  },
};
</script>

<style scoped lang="scss">
.system-info-btns {
  text-align: right;
  margin-bottom: 20px;
}

.system-info-wrapper {
  .system-info-item-other {
    display: flex;
    align-items: center;
    color: #919191;

    & > span {
      width: 50%;
      height: 48px;
      line-height: 48px;
    }
  }
}
</style>
