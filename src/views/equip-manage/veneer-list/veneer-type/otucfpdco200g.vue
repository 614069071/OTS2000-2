<template>
  <div class="otucfpdco200g-cps-wrapper cps-wrapper">
    <div class="veneer-header-wrapper">otucfpdco200g</div>

    <div class="veneer-table-title">
      <table class="veneer-table" border="1">
        <tr>
          <td>硬件版本</td>
          <td>{{ veneerTitleData.h_rev }}</td>
          <td>软件版本</td>
          <td>{{ veneerTitleData.s_rev }}</td>
          <td>协议版本</td>
          <td>{{ veneerTitleData.mfgdate }}</td>
        </tr>
        <tr>
          <td>生产日期</td>
          <td>{{ veneerTitleData.mfgdate }}</td>
          <td>序列号</td>
          <td>{{ veneerTitleData.sn }}</td>
          <td>版型号</td>
          <td></td>
        </tr>
        <tr>
          <td>设备类型</td>
          <td>{{ veneerTitleData.device_type }}</td>
          <td>状态</td>
          <td>{{ veneerTitleData.status }}</td>
          <td>信息描述</td>
          <td>{{ veneerTitleData.desc }}</td>
        </tr>
      </table>
    </div>

    <div class="venner-change-btns">
      <button class="def-btn">刷新</button>
      <button class="def-btn">应用</button>
    </div>

    <div class="veneer-table-container">
      <table class="veneer-table" border="1">
        <thead>
          <tr>
            <td></td>
            <td class="no-right-border">
              <div class="coll-4">QSFP28模块1</div>
            </td>
            <td class="no-right-border"></td>
            <td class="no-right-border"></td>
            <td></td>
            <td class="no-right-border">
              <div class="coll-4">QSFP28模块2</div>
            </td>
            <td class="no-right-border"></td>
            <td class="no-right-border"></td>
            <td></td>
          </tr>
          <tr>
            <td>通道</td>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
          </tr>
        </thead>

        <tr>
          <td>在位状态</td>
          <td class="no-right-border">
            <div class="coll-4"></div>
          </td>
          <td class="no-right-border"></td>
          <td class="no-right-border"></td>
          <td></td>
          <td class="no-right-border">
            <div class="coll-4"></div>
          </td>
          <td class="no-right-border"></td>
          <td class="no-right-border"></td>
          <td></td>
        </tr>
        <tr>
          <td>LINK状态</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>距离（km）</td>
          <td class="no-right-border">
            <div class="coll-4"></div>
          </td>
          <td class="no-right-border"></td>
          <td class="no-right-border"></td>
          <td></td>
          <td class="no-right-border">
            <div class="coll-4"></div>
          </td>
          <td class="no-right-border"></td>
          <td class="no-right-border"></td>
          <td></td>
        </tr>
        <tr>
          <td>波长（nm）</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>发射光功率（dBm）</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>接收光功率（dBm）</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>偏置电流（mA）</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>预留1</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>电压（V）</td>
          <td class="no-right-border">
            <div class="coll-4"></div>
          </td>
          <td class="no-right-border"></td>
          <td class="no-right-border"></td>
          <td></td>
          <td class="no-right-border">
            <div class="coll-4"></div>
          </td>
          <td class="no-right-border"></td>
          <td class="no-right-border"></td>
          <td></td>
        </tr>
        <tr>
          <td>温度（℃）</td>
          <td class="no-right-border">
            <div class="coll-4"></div>
          </td>
          <td class="no-right-border"></td>
          <td class="no-right-border"></td>
          <td></td>
          <td class="no-right-border">
            <div class="coll-4"></div>
          </td>
          <td class="no-right-border"></td>
          <td class="no-right-border"></td>
          <td></td>
        </tr>
        <tr>
          <td>业务类型</td>
          <td class="no-right-border">
            <div class="coll-4"></div>
          </td>
          <td class="no-right-border"></td>
          <td class="no-right-border"></td>
          <td></td>
          <td class="no-right-border">
            <div class="coll-4"></div>
          </td>
          <td class="no-right-border"></td>
          <td class="no-right-border"></td>
          <td></td>
        </tr>
        <tr>
          <td>FEC模式</td>
          <td class="no-right-border">
            <div class="coll-4"></div>
          </td>
          <td class="no-right-border"></td>
          <td class="no-right-border"></td>
          <td></td>
          <td class="no-right-border">
            <div class="coll-4"></div>
          </td>
          <td class="no-right-border"></td>
          <td class="no-right-border"></td>
          <td></td>
        </tr>
        <tr>
          <td>激光器开关</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>接受光功率过低阈值（dBm）</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>接受光功率过载阈值（dBm）</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>发送光功率过低阈值（dBm）</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>发送光功率过载阈值（dBm）</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </table>

      <div class="cfp2-title">CFP2</div>

      <table class="veneer-table veneer-title-table veneer-cfp2-table" border="1">
        <tr>
          <td>在位状态</td>
          <td></td>
          <td>发送光功率(dBm)</td>
          <td></td>
          <td>接收光功率(dBm)</td>
          <td></td>
        </tr>
        <tr>
          <td>温度(℃)</td>
          <td></td>
          <td>电压(V)</td>
          <td></td>
          <td>电流(mA)</td>
          <td></td>
        </tr>
        <tr>
          <td>预留1</td>
          <td></td>
          <td>预留2</td>
          <td></td>
          <td>预留3</td>
          <td></td>
        </tr>
        <tr>
          <td>接收光功率过低阈值(dBm)</td>
          <td></td>
          <td>接收光功率过载阈值(dBm)</td>
          <td></td>
          <td>发送光功率过低阈值(dBm)</td>
          <td></td>
        </tr>
        <tr>
          <td>发送光功率过载阈值(dBm)</td>
          <td></td>
          <td>激光器开关</td>
          <td></td>
          <td>光通道</td>
          <td></td>
        </tr>
        <tr>
          <td>业务类型</td>
          <td></td>
          <td>调制模式</td>
          <td></td>
          <td>FEC模式</td>
          <td></td>
        </tr>
        <tr>
          <td>环回控制</td>
          <td></td>
          <td>预留1</td>
          <td></td>
          <td>预留2</td>
          <td></td>
        </tr>
        <tr>
          <td>预留3</td>
          <td></td>
          <td>预留4</td>
          <td></td>
          <td>预留5</td>
          <td></td>
        </tr>
      </table>
    </div>

    <div class="venner-change-btns">
      <button class="def-btn">刷新</button>
      <button class="def-btn">应用</button>
      <button class="def-btn">复位</button>
      <button class="def-btn">恢复默认</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "otucfpdco200g",
  data() {
    return {
      veneerTitleData: {},
    };
  },
  created() {
    console.log("created");
  },
  mounted() {
    console.log("mounted");
  },
};
</script>

<style scoped lang="css">
.cfp2-title {
  height: 34px;
  line-height: 34px;
  border-left: 1px solid #e8e8e8;
  border-right: 1px solid #e8e8e8;
  text-align: center;
}

.veneer-cfp2-table {
  margin-top: 0;
}
</style>
