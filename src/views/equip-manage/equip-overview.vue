<template>
  <div class="equip-overview-view-wrapper view-wrapper">
    <div class="inner-header-wrapper">
      <div class="inner-container-title custom-title">
        设备框图
        <div>自动刷新剩余时间：60秒 <el-button size="mini" type="primary">立即刷新</el-button></div>
      </div>
      <div class="veneer-block-diagram-wrapper">
        <!-- 设备框图 -->
      </div>
    </div>

    <div class="inner-container-wrapper banner-list">
      <div class="inner-container-title custom-title">
        系统信息
        <el-button class="system-info-cahnge-btn" type="text" size="mini">修改 <i class="el-icon-arrow-right"></i></el-button>
      </div>
      <div class="system-info-wrapper">
        <div class="system-info-item" v-for="({ name, value }, key) in systemInfo" :key="key">
          <span>{{ name }}</span
          ><span>{{ value }}</span>
        </div>
      </div>

      <div class="system-info-wrapper">
        <div class="system-info-item" v-for="({ name, value }, key) in systemInfo" :key="key">
          <span>{{ name }}</span
          ><span>{{ value }}</span>
        </div>
      </div>
      <div class="inner-container-title">系统性能</div>
      <div class="system-performance-wrapper">
        <div class="fan-state-wrapper">
          <div class="state-title">风扇状态</div>
          <div class="state-inner-wrapper"></div>
        </div>
        <div class="cpu-state-wrapper">
          <div class="state-title">CPU使用率</div>
          <div class="state-inner-wrapper"></div>
        </div>
        <div class="memory-state-wrapper">
          <div class="state-title">内存使用率</div>
          <div class="state-inner-wrapper"></div>
        </div>
        <div class="temperature-state-wrapper">
          <div class="state-title">设备温度</div>
          <div class="state-inner-wrapper"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "equip-overview",
  data() {
    return {
      dataForm: {},
      inquireLoading: false,
      systemInfo: {
        power1: { name: "电源1属性", value: "交流 开 输出 11.658（V）" },
        power2: { name: "电源2属性", value: "交流 关 输出 0（V）" },
        firmwareVersion: { name: "固件版本", value: "2.1.0" },
        systemTime: { name: "系统时间", value: "2021年12月9日18时7分36秒" },
        operationTime: { name: "运行时间", value: "0小时/9分/36秒" },
        networkVersion: { name: "网关版本", value: "4.2.25" },
      },
    };
  },
  methods: {},
};
</script>

<style scoped lang="scss">
.custom-title {
  display: flex;
  justify-content: space-between;
}
.veneer-block-diagram-wrapper {
  width: 80%;
  height: 200px;
  background-color: grey;
  background: url("../../assets/images/machine1.png") center/contain no-repeat;
  margin: 0 auto;
}

.system-info-cahnge-btn {
  font-size: 16px;
}

.system-info-wrapper {
  display: flex;
  flex-wrap: wrap;
  border-top: 1px solid grey;
  border-left: 1px solid grey;
  .system-info-item {
    width: 33.33%;
    display: flex;
    align-items: center;

    span {
      height: 48px;
      border-right: 1px solid grey;
      border-bottom: 1px solid grey;
      line-height: 48px;
    }

    span:first-child {
      background-color: #f4f7fa;
      width: 120px;
      text-align: center;
    }
    span:last-child {
      flex: 1;
      padding-left: 15px;
    }
  }
}

.system-info-wrapper + .system-info-wrapper {
  margin-top: 15px;
}

.system-performance-wrapper {
  display: flex;

  & > div {
    width: 25%;
  }

  .state-title {
    text-align: center;
    height: 30px;
    line-height: 30px;
  }

  .state-inner-wrapper {
    width: 120px;
    height: 120px;
    background-color: grey;
    margin: 0 auto;
  }
}
</style>
