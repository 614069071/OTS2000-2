<template>
  <div class="otu4x10g-cps-wrapper">
    <div class="veneer-header-wrapper">otu4x10g</div>
    <table class="veneer-table veneer-title-table" border="1">
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
        <td>板型号</td>
        <td>{{ veneerTitleData.run_time }}</td>
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

    <div class="venner-change-btns">
      <button class="def-btn">刷新</button>
      <button class="def-btn">应用</button>
    </div>

    <table class="veneer-table veneer-title-table" border="1">
      <tr>
        <td></td>
        <td class="no-right-border">
          <div class="coll-2">通道1</div>
        </td>
        <td></td>
        <td class="no-right-border">
          <div class="coll-2">通道2</div>
        </td>
        <td></td>
        <td class="no-right-border">
          <div class="coll-2">通道3</div>
        </td>
        <td></td>
        <td class="no-right-border">
          <div class="coll-2">通道4</div>
        </td>
        <td></td>
      </tr>
      <tr>
        <td>端口</td>
        <td>Clinet</td>
        <td>Line</td>
        <td>Clinet</td>
        <td>Line</td>
        <td>Clinet</td>
        <td>Line</td>
        <td>Clinet</td>
        <td>Line</td>
      </tr>
      <tr>
        <td>在位状态</td>
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
        <td>属性</td>
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
        <td>波道</td>
        <td>NA</td>
        <td></td>
        <td>NA</td>
        <td></td>
        <td>NA</td>
        <td></td>
        <td>NA</td>
        <td></td>
      </tr>
      <tr>
        <td>波长</td>
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
        <td>接受光功率（dBm）</td>
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
        <td>偏置电流（dBm）</td>
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
        <td>温度（℃）</td>
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
        <td>速率（Mbps）</td>
        <td class="no-right-border">
          <div class="coll-2"></div>
        </td>
        <td></td>
        <td class="no-right-border">
          <div class="coll-2"></div>
        </td>
        <td></td>
        <td class="no-right-border">
          <div class="coll-2"></div>
        </td>
        <td></td>
        <td class="no-right-border">
          <div class="coll-2"></div>
        </td>
        <td></td>
      </tr>
      <tr>
        <td>环回控制</td>
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
        <td>接收光功率过低阈值（dBm）</td>
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
        <td>接收光功率过载阈值（dBm）</td>
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
  name: "otu4x10g",
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

<style scoped lang="css"></style>
