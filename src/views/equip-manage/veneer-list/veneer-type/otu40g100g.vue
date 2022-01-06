<template>
  <div class="otu40g100g-cps-wrapper cps-wrapper">
    <div class="veneer-header-wrapper">otu40g100g</div>

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
              <div class="coll-4">SFP28光模块</div>
            </td>
            <td class="no-right-border"></td>
            <td class="no-right-border"></td>
            <td></td>
            <td class="no-right-border">
              <div class="coll-4">QSFP28光模块</div>
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
          <td></td>
          <td></td>
          <td></td>
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
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>NA</td>
          <td>NA</td>
          <td>NA</td>
          <td>NA</td>
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
          <td>发射功率（dBm）</td>
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
          <td>接受功率（dBm）</td>
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
          <td>电压（V）</td>
          <td></td>
          <td></td>
          <td></td>
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
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td class="no-right-border">
            <div class="coll-4"></div>
          </td>
          <td class="no-right-border"></td>
          <td class="no-right-border"></td>
          <td></td>
        </tr>
        <tr>
          <td>预留1</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td class="no-right-border">
            <div class="coll-4"></div>
          </td>
          <td class="no-right-border"></td>
          <td class="no-right-border"></td>
          <td></td>
        </tr>
        <tr>
          <td>激光器</td>
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
          <td>误码检测</td>
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
          <td>速率</td>
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
          <td>输入EQ（dB）</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td class="no-right-border">
            <div class="coll-4">NA</div>
          </td>
          <td class="no-right-border"></td>
          <td class="no-right-border"></td>
          <td></td>
        </tr>
        <tr>
          <td>输出幅度（mVpp）</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td class="no-right-border">
            <div class="coll-4">NA</div>
          </td>
          <td class="no-right-border"></td>
          <td class="no-right-border"></td>
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

<style scoped>
.veneer-inner-wrapper {
  background-image: url(../../../../assets/images/veneer/otu100g.png);
}
</style>
