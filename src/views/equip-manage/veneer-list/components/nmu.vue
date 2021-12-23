<template>
  <div class="num-cps-wrapper">
    <div class="veneer-header-wrapper">Nmu</div>
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
        <td>{{ veneerTitleData.serialnum }}</td>
        <td>运行时间</td>
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
        <td>SFP端口</td>
        <td>SFP1</td>
        <td>SFP2</td>
        <td>SFP3</td>
      </tr>
      <tr>
        <td>在位状态</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>LINK状态</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>速率（Mbps）</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>波长（nm）</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>距离（km）</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>发送光功率（dBm）</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>接受光功率（dBm）</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>电压（V）</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>电流（mA）</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>温度（℃）</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </table>

    <table class="veneer-table">
      <tr>
        <td>ETH端口</td>
        <td>ETH1</td>
        <td>ETH2</td>
        <td>ETH3</td>
      </tr>
      <tr>
        <td>LINK状态</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>速率（Mbps）</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>双工</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "nmu",
  props: ["info"],
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

<style scoped lang="scss"></style>
