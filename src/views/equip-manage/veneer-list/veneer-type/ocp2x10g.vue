<template>
  <div class="otu4x10g-cps-wrapper cps-wrapper">
    <div class="veneer-header-wrapper">ocp2x10g</div>
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

    <div class="veneer-table-container">
      <table class="veneer-table" border="1">
        <thead>
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
            <td>Pri-Line</td>
            <td>Clinet</td>
            <td>Pri-Line</td>
            <td>Clinet</td>
            <td>Pri-Line</td>
            <td>Clinet</td>
            <td>Pri-Line</td>
          </tr>
        </thead>

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
          <td>工作状态</td>
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
          <td>距离</td>
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
          <td class="no-right-border"></td>
          <td class="no-right-border"></td>
          <td></td>
          <td class="no-right-border">
            <div class="coll-2"></div>
          </td>
          <td class="no-right-border"></td>
          <td class="no-right-border"></td>
          <td></td>
        </tr>
        <tr>
          <td>主备线路初始功率差（dB）</td>
          <td class="no-right-border">
            <div class="coll-2"></div>
          </td>
          <td class="no-right-border"></td>
          <td class="no-right-border"></td>
          <td></td>
          <td class="no-right-border">
            <div class="coll-2"></div>
          </td>
          <td class="no-right-border"></td>
          <td class="no-right-border"></td>
          <td></td>
        </tr>
        <tr>
          <td>倒换条件差值（dB）</td>
          <td class="no-right-border">
            <div class="coll-2"></div>
          </td>
          <td class="no-right-border"></td>
          <td class="no-right-border"></td>
          <td></td>
          <td class="no-right-border">
            <div class="coll-2"></div>
          </td>
          <td class="no-right-border"></td>
          <td class="no-right-border"></td>
          <td></td>
        </tr>
        <tr>
          <td>保护模式</td>
          <td class="no-right-border">
            <div class="coll-2"></div>
          </td>
          <td class="no-right-border"></td>
          <td class="no-right-border"></td>
          <td></td>
          <td class="no-right-border">
            <div class="coll-2"></div>
          </td>
          <td class="no-right-border"></td>
          <td class="no-right-border"></td>
          <td></td>
        </tr>
        <tr>
          <td>回切WTR时间（s）</td>
          <td class="no-right-border">
            <div class="coll-2"></div>
          </td>
          <td class="no-right-border"></td>
          <td class="no-right-border"></td>
          <td></td>
          <td class="no-right-border">
            <div class="coll-2"></div>
          </td>
          <td class="no-right-border"></td>
          <td class="no-right-border"></td>
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
        <tr>
          <td>预留2</td>
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
          <td>预留3</td>
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
  name: "ocp2x10g",
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
