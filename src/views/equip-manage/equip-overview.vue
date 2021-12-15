<template>
  <div class="equip-overview-view-wrapper view-wrapper">
    <div class="inner-header-wrapper">
      <div class="refresh-header-wrapper">
        <div class="refresh-wrapper">自动刷新剩余时间：60秒 <button class="def-btn">立即刷新</button></div>
      </div>

      <div class="veneer-block-diagram-wrapper">
        <!-- 设备框图 -->
      </div>
    </div>

    <div class="inner-container-wrapper banner-list">
      <div class="inner-container-title custom-title">系统信息</div>
      <div class="system-info-main">
        <div class="system-info-wrapper">
          <div class="system-info-item">
            <span>设备型号</span><span><input class="def-input" type="text" /></span>
          </div>
          <div class="system-info-item">
            <span>序列号</span><span><input class="def-input" type="text" /></span>
          </div>
          <div class="system-info-item"><span>硬件版本</span><span>V1.0</span></div>
          <div class="system-info-item">
            <span>设备标识</span><span><input class="def-input" type="text" /></span>
          </div>
          <div class="system-info-item">
            <span>设备位置</span><span><input class="def-input" type="text" /></span>
          </div>
          <div class="system-info-item">
            <span>联系人</span><span><input class="def-input" type="text" /></span>
          </div>
          <div class="system-info-change-wrapper">
            <button class="def-btn">修改</button>
          </div>
        </div>

        <div class="system-info-wrapper">
          <div class="system-info-item"><span>电源1属性</span><span>交流 开 输出 11.658（V）</span></div>
          <div class="system-info-item"><span>电源2属性</span><span>交流 开 输出 11.658（V）</span></div>
          <div class="system-info-item"><span>固件版本</span><span>2.1.0</span></div>
          <div class="system-info-item"><span>系统时间</span><span>2021年12月9日18时7分36秒</span></div>
          <div class="system-info-item"><span>运行时间</span><span>0小时/9分/36秒</span></div>
          <div class="system-info-item"><span>网关版本</span><span>4.2.25</span></div>
        </div>
      </div>

      <div class="inner-container-title">系统性能</div>
      <div class="system-performance-wrapper">
        <div class="fan-state-wrapper">
          <div class="state-title">风扇状态</div>
          <div class="state-inner-wrapper">
            <div class="fan-wrapper"></div>
          </div>
        </div>
        <div class="cpu-state-wrapper">
          <div class="state-title">CPU使用率</div>
          <div class="state-inner-wrapper">
            <el-progress type="dashboard" :percentage="10"></el-progress>
          </div>
        </div>
        <div class="memory-state-wrapper">
          <div class="state-title">内存使用率</div>
          <div class="state-inner-wrapper">
            <el-progress type="dashboard" :percentage="15"></el-progress>
          </div>
        </div>
        <div class="temperature-state-wrapper">
          <div class="state-title">设备温度</div>
          <div class="state-inner-wrapper">
            <div class="temperature-wrapper">
              <div class="temperature-inner-wrapper"></div>
              <div class="temperature-value">27℃</div>
            </div>
          </div>
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
    };
  },
  methods: {},
};
</script>

<style scoped lang="scss">
.refresh-header-wrapper {
  height: 57px;
  padding: 30px 76px 0 0;
  display: flex;
  justify-content: right;

  .refresh-wrapper {
    font-size: 16px;
    .el-button {
      margin-left: 10px;
    }
  }
}

.veneer-block-diagram-wrapper {
  width: 80%;
  height: 238px;
  background-color: grey;
  background: url("../../assets/images/machine1.png") center/contain no-repeat;
  margin: 0 auto 40px auto;
}

.system-info-cahnge-btn {
  font-size: 16px;
}

.system-info-main {
  display: flex;
}

.system-info-wrapper {
  width: 50%;
  .system-info-item {
    display: flex;
    align-items: center;
    margin-top: 18px;

    span {
      height: 32px;
      line-height: 32px;
      font-size: 16px;
    }

    span:first-child {
      width: 138px;
      padding-left: 23px;
    }
    span:last-child {
      flex: 1;
      padding-left: 15px;
    }
  }

  .system-info-change-wrapper {
    padding: 10px 0 40px 0;
    button {
      margin-left: 264px;
    }
  }
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
    // background-color: grey;
    margin: 10px auto 0;
  }

  .fan-wrapper {
    width: 100%;
    height: 100%;
    background: url("../../assets/images/fan.png") center/contain no-repeat;
    animation: fan-rotate linear 3s infinite;
  }

  .temperature-wrapper {
    width: 100%;
    height: 100%;
    background: url("../../assets/images/temperature.png") center/contain no-repeat;
    position: relative;
  }

  .temperature-inner-wrapper {
    width: 6px;
    height: 63px;
    background-color: #c5eae4;
    position: absolute;
    left: 65px;
    bottom: 40px;
    border-radius: 3px 3px 0 0;
  }
  .temperature-value {
    position: absolute;
    right: -15px;
    bottom: 55px;
    font-size: 18px;
  }
}

@keyframes fan-rotate {
  to {
    transform: rotate(360deg);
  }
}
</style>
