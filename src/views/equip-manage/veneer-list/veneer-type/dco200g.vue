<template>
  <div class="otucfpdco200g-cps-wrapper cps-wrapper">
    <div class="veneer-header-wrapper">dco200g</div>

    <div class="veneer-table-title">
      <table class="veneer-table" border="1">
        <tr>
          <td>硬件版本</td>
          <td>{{ `${titeData.h_rev ? "V" + titeData.h_rev : ""}` }}</td>
          <td>软件版本</td>
          <td>{{ `${titeData.s_rev ? "V" + titeData.s_rev : ""}` }}</td>
          <td>协议版本</td>
          <td>{{ `${titeData.p_rev ? "V" + titeData.p_rev : ""}` }}</td>
        </tr>
        <tr>
          <td>生产日期</td>
          <td>
            <el-date-picker v-if="$store.state.iSuper" v-model="titeData.mfgdate" size="mini" type="date" value-format="yyyy-MM-dd" />

            <template v-else>
              {{ titeData.mfgdate }}
            </template>
          </td>
          <td>序列号</td>
          <td>
            <input class="def-input" v-if="$store.state.iSuper" type="text" v-model="titeData.sn" />

            <template v-else>
              {{ titeData.sn }}
            </template>
          </td>
          <td>版型号</td>
          <td>{{ titeData.bdtype }}</td>
        </tr>
        <tr>
          <td>设备类型</td>
          <td>{{ titeData.device_type }}</td>
          <td>状态</td>
          <td>{{ titeData.status ? "告警" : "正常" }}</td>
          <td>信息描述</td>
          <td><input class="def-input" type="text" v-model="titeData.desc" /></td>
        </tr>
      </table>
    </div>

    <div class="venner-change-btns">
      <button class="def-btn" :disabled="refreshTitleDisabled" @click="refreshTitle">刷新</button>
      <button class="def-btn" :disabled="setTilteDisabled" @click="setTilte">应用</button>
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
            <div class="coll-4">{{ infoData.QSFP1.link_status ? "在位" : "脱位" }}</div>
          </td>
          <td class="no-right-border"></td>
          <td class="no-right-border"></td>
          <td></td>
          <td class="no-right-border">
            <div class="coll-4">{{ infoData.QSFP2.link_status ? "在位" : "脱位" }}</div>
          </td>
          <td class="no-right-border"></td>
          <td class="no-right-border"></td>
          <td></td>
        </tr>
        <tr>
          <td>LINK状态</td>
          <td>{{ infoData.QSFP1.link_status ? infoData.QSFP1.channel1.los : "NA" }}</td>
          <td>{{ infoData.QSFP1.link_status ? infoData.QSFP1.channel2.los : "NA" }}</td>
          <td>{{ infoData.QSFP1.link_status ? infoData.QSFP1.channel3.los : "NA" }}</td>
          <td>{{ infoData.QSFP1.link_status ? infoData.QSFP1.channel4.los : "NA" }}</td>
          <td>{{ infoData.QSFP2.link_status ? infoData.QSFP2.channel1.los : "NA" }}</td>
          <td>{{ infoData.QSFP2.link_status ? infoData.QSFP2.channel2.los : "NA" }}</td>
          <td>{{ infoData.QSFP2.link_status ? infoData.QSFP2.channel3.los : "NA" }}</td>
          <td>{{ infoData.QSFP2.link_status ? infoData.QSFP2.channel4.los : "NA" }}</td>
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
import mixins from "@/utils/mixins";

export default {
  name: "otu10g",
  mixins: [mixins],
  data() {
    return {
      infoData: {
        boardname: "",
        type: "",
        QSFP1: {
          link_status: 0,
          launch_range: 0,
          wave_len: 0,
          voltage: 0,
          temp: 0,
          Business_type: 0,
          FEC_mode: 0,
          rcv_thr_H: 0,
          rcv_thr_L: 0,
          tx_thr_H: 0,
          tx_thr_L: 0,
          channel1: {
            los: 0,
            tx_disable: 0,
            launch_power: "",
            rcv_power: "",
            current: "",
          },
          channel2: {
            los: 0,
            tx_disable: 0,
            launch_power: "",
            rcv_power: "",
            current: "",
          },
          channel3: {
            los: 0,
            tx_disable: 0,
            launch_power: "",
            rcv_power: "",
            current: "",
          },
          channel4: {
            los: 0,
            tx_disable: 0,
            launch_power: "",
            rcv_power: "",
            current: "",
          },
        },
        QSFP2: {
          link_status: 0,
          launch_range: 0,
          wave_len: 0,
          voltage: 0,
          temp: 0,
          Business_type: 0,
          FEC_mode: 0,
          rcv_thr_H: 0,
          rcv_thr_L: 0,
          tx_thr_H: 0,
          tx_thr_L: 0,
          channel1: {
            los: 0,
            tx_disable: 0,
            launch_power: "",
            rcv_power: "",
            current: "",
          },
          channel2: {
            los: 0,
            tx_disable: 0,
            launch_power: "",
            rcv_power: "",
            current: "",
          },
          channel3: {
            los: 0,
            tx_disable: 0,
            launch_power: "",
            rcv_power: "",
            current: "",
          },
          channel4: {
            los: 0,
            tx_disable: 0,
            launch_power: "",
            rcv_power: "",
            current: "",
          },
        },
        CFP2: {
          link_status: 0,
          temp: "",
          voltage: "",
          current: "",
          launch_power: "",
          rcv_power: "",
          tx_disable: 0,
          light_channel: 0,
          Modulation_mode: 0,
          FEC_mode: 0,
          loop: 0,
        },
      },
    };
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
