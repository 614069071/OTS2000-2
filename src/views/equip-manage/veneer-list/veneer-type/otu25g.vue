<template>
  <div class="otu25g-cps-wrapper">
    <div class="veneer-header-wrapper">otu4x25g</div>
    <table class="veneer-table veneer-title-table" border="1">
      <tr>
        <td>硬件版本</td>
        <td>{{ `${veneerTitleData.h_rev ? "V" + veneerTitleData.h_rev : ""}` }}</td>
        <td>软件版本</td>
        <td>{{ `${veneerTitleData.s_rev ? "V" + veneerTitleData.s_rev : ""}` }}</td>
        <td>协议版本</td>
        <td>{{ `${veneerTitleData.p_rev ? "V" + veneerTitleData.p_rev : ""}` }}</td>
      </tr>
      <tr>
        <td>生产日期</td>
        <td>
          <el-date-picker v-if="$store.state.iSuper" v-model="veneerTitleData.mfgdate" size="mini" type="date" value-format="yyyy-MM-dd" />

          <template v-else>
            {{ veneerTitleData.mfgdate }}
          </template>
        </td>
        <td>序列号</td>
        <td>
          <input class="def-input veneer-input" v-if="$store.state.iSuper" type="text" v-model="veneerTitleData.sn" />

          <template v-else>
            {{ veneerTitleData.sn }}
          </template>
        </td>
        <td>版型号</td>
        <td>{{ veneerTitleData.bdtype }}</td>
      </tr>
      <tr>
        <td>设备类型</td>
        <td>{{ veneerTitleData.device_type }}</td>
        <td>状态</td>
        <td>{{ veneerTitleData.status ? "告警" : "正常" }}</td>
        <td>信息描述</td>
        <td><input class="def-input veneer-input" type="text" v-model="veneerTitleData.desc" /></td>
      </tr>
    </table>

    <div class="venner-change-btns">
      <button class="def-btn" @click="refreshTitle">刷新</button>
      <button class="def-btn" @click="setTilte">应用</button>
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
        <td>Client</td>
        <td>Line</td>
        <td>Client</td>
        <td>Line</td>
        <td>Client</td>
        <td>Line</td>
        <td>Client</td>
        <td>Line</td>
      </tr>
      <tr>
        <td>在位状态</td>
        <td>{{ veneerInfoData[0].link_status.client ? "在位" : "脱位" }}</td>
        <td>{{ veneerInfoData[0].link_status.line ? "在位" : "脱位" }}</td>
        <td>{{ veneerInfoData[1].link_status.client ? "在位" : "脱位" }}</td>
        <td>{{ veneerInfoData[1].link_status.line ? "在位" : "脱位" }}</td>
        <td>{{ veneerInfoData[2].link_status.client ? "在位" : "脱位" }}</td>
        <td>{{ veneerInfoData[2].link_status.line ? "在位" : "脱位" }}</td>
        <td>{{ veneerInfoData[3].link_status.client ? "在位" : "脱位" }}</td>
        <td>{{ veneerInfoData[3].link_status.line ? "在位" : "脱位" }}</td>
      </tr>
      <tr>
        <td>LINK状态</td>
        <td>{{ veneerInfoData[0].los.client ? "UP" : "DOWN" }}</td>
        <td>{{ veneerInfoData[0].los.line ? "UP" : "DOWN" }}</td>
        <td>{{ veneerInfoData[1].los.client ? "UP" : "DOWN" }}</td>
        <td>{{ veneerInfoData[1].los.line ? "UP" : "DOWN" }}</td>
        <td>{{ veneerInfoData[2].los.client ? "UP" : "DOWN" }}</td>
        <td>{{ veneerInfoData[2].los.line ? "UP" : "DOWN" }}</td>
        <td>{{ veneerInfoData[3].los.client ? "UP" : "DOWN" }}</td>
        <td>{{ veneerInfoData[3].los.line ? "UP" : "DOWN" }}</td>
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
        <td>{{ veneerInfoData[0].wave_len.client }}</td>
        <td>{{ veneerInfoData[0].wave_len.line }}</td>
        <td>{{ veneerInfoData[1].wave_len.client }}</td>
        <td>{{ veneerInfoData[1].wave_len.line }}</td>
        <td>{{ veneerInfoData[2].wave_len.client }}</td>
        <td>{{ veneerInfoData[2].wave_len.line }}</td>
        <td>{{ veneerInfoData[3].wave_len.client }}</td>
        <td>{{ veneerInfoData[3].wave_len.line }}</td>
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
        <td>{{ veneerInfoData[0].launch_power.client }}</td>
        <td>{{ veneerInfoData[0].launch_power.line }}</td>
        <td>{{ veneerInfoData[1].launch_power.client }}</td>
        <td>{{ veneerInfoData[1].launch_power.line }}</td>
        <td>{{ veneerInfoData[2].launch_power.client }}</td>
        <td>{{ veneerInfoData[2].launch_power.line }}</td>
        <td>{{ veneerInfoData[3].launch_power.client }}</td>
        <td>{{ veneerInfoData[3].launch_power.line }}</td>
      </tr>
      <tr>
        <td>接受功率（dBm）</td>
        <td>{{ veneerInfoData[0].rcv_power.client }}</td>
        <td>{{ veneerInfoData[0].rcv_power.line }}</td>
        <td>{{ veneerInfoData[1].rcv_power.client }}</td>
        <td>{{ veneerInfoData[1].rcv_power.line }}</td>
        <td>{{ veneerInfoData[2].rcv_power.client }}</td>
        <td>{{ veneerInfoData[2].rcv_power.line }}</td>
        <td>{{ veneerInfoData[3].rcv_power.client }}</td>
        <td>{{ veneerInfoData[3].rcv_power.line }}</td>
      </tr>
      <tr>
        <td>电压（V）</td>
        <td>{{ veneerInfoData[0].voltage.client }}</td>
        <td>{{ veneerInfoData[0].voltage.line }}</td>
        <td>{{ veneerInfoData[1].voltage.client }}</td>
        <td>{{ veneerInfoData[1].voltage.line }}</td>
        <td>{{ veneerInfoData[2].voltage.client }}</td>
        <td>{{ veneerInfoData[2].voltage.line }}</td>
        <td>{{ veneerInfoData[3].voltage.client }}</td>
        <td>{{ veneerInfoData[3].voltage.line }}</td>
      </tr>

      <tr>
        <td>偏置电流（dBm）</td>
        <td>{{ veneerInfoData[0].current.client }}</td>
        <td>{{ veneerInfoData[0].current.line }}</td>
        <td>{{ veneerInfoData[1].current.client }}</td>
        <td>{{ veneerInfoData[1].current.line }}</td>
        <td>{{ veneerInfoData[2].current.client }}</td>
        <td>{{ veneerInfoData[2].current.line }}</td>
        <td>{{ veneerInfoData[3].current.client }}</td>
        <td>{{ veneerInfoData[3].current.line }}</td>
      </tr>
      <tr>
        <td>温度（℃）</td>
        <td>{{ veneerInfoData[0].temp.client }}</td>
        <td>{{ veneerInfoData[0].temp.line }}</td>
        <td>{{ veneerInfoData[1].temp.client }}</td>
        <td>{{ veneerInfoData[1].temp.line }}</td>
        <td>{{ veneerInfoData[2].temp.client }}</td>
        <td>{{ veneerInfoData[2].temp.line }}</td>
        <td>{{ veneerInfoData[3].temp.client }}</td>
        <td>{{ veneerInfoData[3].temp.line }}</td>
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
        <td>
          <select>
            <option :value="0">关</option>
            <option :value="1">开</option>
          </select>
        </td>
        <td>
          <select>
            <option :value="0">关</option>
            <option :value="1">开</option>
          </select>
        </td>
        <td>
          <select>
            <option :value="0">关</option>
            <option :value="1">开</option>
          </select>
        </td>
        <td>
          <select>
            <option :value="0">关</option>
            <option :value="1">开</option>
          </select>
        </td>
        <td>
          <select>
            <option :value="0">关</option>
            <option :value="1">开</option>
          </select>
        </td>
        <td>
          <select>
            <option :value="0">关</option>
            <option :value="1">开</option>
          </select>
        </td>
        <td>
          <select>
            <option :value="0">关</option>
            <option :value="1">开</option>
          </select>
        </td>
        <td>
          <select>
            <option :value="0">关</option>
            <option :value="1">开</option>
          </select>
        </td>
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
        <td>速率（Mbps）</td>
        <td class="no-right-border">
          <div class="coll-2">
            <select v-if="veneerTitleData.bdtype === '25G-OTUL'" v-model="veneerInfoData[0].speed">
              <option value="eCPRI-25GE">eCPRI-25GE</option>
              <option value="Other">Other</option>
            </select>

            <select v-else v-model="veneerInfoData[0].speed">
              <option value="25GE-28GE">25GE-28GE</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </td>
        <td></td>
        <td class="no-right-border">
          <div class="coll-2">
            <select v-if="veneerTitleData.bdtype === '25G-OTUL'" v-model="veneerInfoData[1].speed">
              <option value="eCPRI-25GE">eCPRI-25GE</option>
              <option value="Other">Other</option>
            </select>
            <select v-else v-model="veneerInfoData[1].speed">
              <option value="25GE-28GE">25GE-28GE</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </td>
        <td></td>
        <td class="no-right-border">
          <div class="coll-2">
            <select v-if="veneerTitleData.bdtype === '25G-OTUL'" v-model="veneerInfoData[2].speed">
              <option value="eCPRI-25GE">eCPRI-25GE</option>
              <option value="Other">Other</option>
            </select>
            <select v-else v-model="veneerInfoData[2].speed">
              <option value="25GE-28GE">25GE-28GE</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </td>
        <td></td>
        <td class="no-right-border">
          <div class="coll-2">
            <select v-if="veneerTitleData.bdtype === '25G-OTUL'" v-model="veneerInfoData[3].speed">
              <option value="eCPRI-25GE">eCPRI-25GE</option>
              <option value="Other">Other</option>
            </select>
            <select v-else v-model="veneerInfoData[3].speed">
              <option value="25GE-28GE">25GE-28GE</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </td>
        <td></td>
      </tr>
      <tr>
        <td>输入EQ（dB）</td>
        <td v-for="item in 8" :key="item">
          <select>
            <option v-for="item in ['自适应', 0, 0.6, 1.2, 1.8, 2.4, 3.0, 3.6, 4.2, 4.8, 5.4, 6.0, 6.6, 7.2, 7.8, 8.4, 9.0, 9.6, 10.2, 10.8, 11.4, 12.0]" :key="item" :value="item">{{ item }}</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>输出幅度（dBm）</td>
        <td>
          <el-input-number size="mini" :min="400" :max="900" :step="5" step-strictly />
        </td>
        <td>
          <el-input-number size="mini" :min="400" :max="900" :step="5" step-strictly />
        </td>
        <td>
          <el-input-number size="mini" :min="400" :max="900" :step="5" step-strictly />
        </td>
        <td>
          <el-input-number size="mini" :min="400" :max="900" :step="5" step-strictly />
        </td>
        <td>
          <el-input-number size="mini" :min="400" :max="900" :step="5" step-strictly />
        </td>
        <td>
          <el-input-number size="mini" :min="400" :max="900" :step="5" step-strictly />
        </td>
        <td>
          <el-input-number size="mini" :min="400" :max="900" :step="5" step-strictly />
        </td>
        <td>
          <el-input-number size="mini" :min="400" :max="900" :step="5" step-strictly />
        </td>
      </tr>
      <tr>
        <td>接收光功率过低阈值（dBm）</td>
        <td>
          <input type="text" class="def-input" />
        </td>
        <td>
          <input type="text" class="def-input" />
        </td>
        <td>
          <input type="text" class="def-input" />
        </td>
        <td>
          <input type="text" class="def-input" />
        </td>
        <td>
          <input type="text" class="def-input" />
        </td>
        <td>
          <input type="text" class="def-input" />
        </td>
        <td>
          <input type="text" class="def-input" />
        </td>
        <td>
          <input type="text" class="def-input" />
        </td>
      </tr>
      <tr>
        <td>接收光功率过载阈值（dBm）</td>
        <td>
          <input type="text" class="def-input" />
        </td>
        <td>
          <input type="text" class="def-input" />
        </td>
        <td>
          <input type="text" class="def-input" />
        </td>
        <td>
          <input type="text" class="def-input" />
        </td>
        <td>
          <input type="text" class="def-input" />
        </td>
        <td>
          <input type="text" class="def-input" />
        </td>
        <td>
          <input type="text" class="def-input" />
        </td>
        <td>
          <input type="text" class="def-input" />
        </td>
      </tr>
      <tr>
        <td>发送光功率过载阈值（dBm）</td>
        <td>
          <input type="text" class="def-input" />
        </td>
        <td>
          <input type="text" class="def-input" />
        </td>
        <td>
          <input type="text" class="def-input" />
        </td>
        <td>
          <input type="text" class="def-input" />
        </td>
        <td>
          <input type="text" class="def-input" />
        </td>
        <td>
          <input type="text" class="def-input" />
        </td>
        <td>
          <input type="text" class="def-input" />
        </td>
        <td>
          <input type="text" class="def-input" />
        </td>
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

    <div class="venner-change-btns">
      <button class="def-btn" @click="refreshInfo">刷新</button>
      <button class="def-btn" @click="setInfo">应用</button>
      <button class="def-btn" @click="restorInfo">复位</button>
      <button class="def-btn" @click="restoreDefaultInfo">恢复默认</button>
    </div>
  </div>
</template>

<script>
// import CustomSelect from "../../components/custom-select";

export default {
  name: "otu25g",
  props: ["info", "visible"],
  // components: { CustomSelect },
  data() {
    return {
      changeForm: {},
      veneerTitleData: {
        bdtype: "",
        desc: "",
        device_type: "",
        h_rev: "",
        mfgdate: "",
        p_rev: "",
        s_rev: "",
        sn: "",
        status: null,
      },
      veneerInfoData: [
        {
          channel: 1,
          link_status: {
            client: null,
            line: null,
          },
          los: {
            client: null,
            line: null,
          },
          speed: null,
          freq: {
            client: null,
            line: null,
          },
          wave_len: {
            client: null,
            line: null,
          },
          launch_power: {
            client: null,
            line: null,
          },
          rcv_power: {
            client: null,
            line: null,
          },
          rcv_thr: {
            client: null,
            line: null,
          },
          voltage: {
            client: null,
            line: null,
          },
          current: {
            client: null,
            line: null,
          },
          temp: {
            client: null,
            line: null,
          },
        },
        {
          channel: 1,
          link_status: {
            client: null,
            line: null,
          },
          los: {
            client: null,
            line: null,
          },
          speed: null,
          freq: {
            client: null,
            line: null,
          },
          wave_len: {
            client: null,
            line: null,
          },
          launch_power: {
            client: null,
            line: null,
          },
          rcv_power: {
            client: null,
            line: null,
          },
          rcv_thr: {
            client: null,
            line: null,
          },
          voltage: {
            client: null,
            line: null,
          },
          current: {
            client: null,
            line: null,
          },
          temp: {
            client: null,
            line: null,
          },
        },
        {
          channel: 1,
          link_status: {
            client: null,
            line: null,
          },
          los: {
            client: null,
            line: null,
          },
          speed: null,
          freq: {
            client: null,
            line: null,
          },
          wave_len: {
            client: null,
            line: null,
          },
          launch_power: {
            client: null,
            line: null,
          },
          rcv_power: {
            client: null,
            line: null,
          },
          rcv_thr: {
            client: null,
            line: null,
          },
          voltage: {
            client: null,
            line: null,
          },
          current: {
            client: null,
            line: null,
          },
          temp: {
            client: null,
            line: null,
          },
        },
        {
          channel: 1,
          link_status: {
            client: null,
            line: null,
          },
          los: {
            client: null,
            line: null,
          },
          speed: null,
          freq: {
            client: null,
            line: null,
          },
          wave_len: {
            client: null,
            line: null,
          },
          launch_power: {
            client: null,
            line: null,
          },
          rcv_power: {
            client: null,
            line: null,
          },
          rcv_thr: {
            client: null,
            line: null,
          },
          voltage: {
            client: null,
            line: null,
          },
          current: {
            client: null,
            line: null,
          },
          temp: {
            client: null,
            line: null,
          },
        },
      ],
    };
  },
  created() {},
  mounted() {
    this.getVeneerDetail(this.info.slot);
  },
  watch: {
    visible(n) {
      if (!n) return;
      console.log("this.info", this.info);
      this.getVeneerDetail(this.info.slot);
    },
  },
  methods: {
    getVeneerTitle(slot) {
      return this.$http.post({
        otn2000: {
          type: "get_title",
          boardname: this.info.boardname,
          slot,
        },
      });
    },
    getVeneerInfo(slot) {
      return this.$http.post({
        otn2000: {
          type: "get_info",
          boardname: this.info.boardname,
          slot,
        },
      });
    },
    getVeneerDetail(slot) {
      this.getVeneerTitle(slot)
        .then((res) => {
          this.veneerTitleData = res.otn2000_ack;

          return this.getVeneerInfo(slot);
        })
        .then((res = { otn2000_ack: { channels: [] } }) => {
          this.veneerInfoData = res.otn2000_ack.channels || [];
        })
        .catch((err) => {
          console.log(err);
        });
    },
    refreshTitle() {
      this.getVeneerTitle(this.info.slot)
        .then((res) => {
          console.log(res);
          this.veneerTitleData = res.otn2000_ack;
          this.$message("成功");
        })
        .catch((err) => {
          console.log(err);
          this.$message("失败");
        });
    },
    setTilte() {
      const { mfgdate, sn, desc } = this.veneerTitleData;
      const { boardname, slot } = this.info;
      const iSuperData = this.$store.state.iSuper ? { mfgdate, sn } : {};
      const data = { otn2000: { type: "post_title", boardname, desc, slot, ...iSuperData } };

      this.$http
        .post(data)
        .then(() => {
          this.$message("成功");
        })
        .catch(() => {
          this.veneerTitleData.desc = "";
          this.$message("失败");
        });
    },
    refreshInfo() {
      this.getVeneerInfo(this.info.slot)
        .then((res) => {
          this.veneerInfoData = res.otn2000_ack.channels;

          this.$message("成功");
        })
        .catch((err) => {
          console.log(err);
          this.$message("失败");
        });
    },
    setInfo() {
      const { boardname, slot } = this.info;
      const data = { otn2000: { type: "post_info", boardname, slot, ...this.changeForm } };

      this.$http
        .post(data)
        .then((res) => {
          console.log("setInfo", res);
          this.$message("成功");
        })
        .catch((err) => {
          console.log(err);
          this.$message("失败");
        });
    },
    restoreDefaultInfo() {
      const { boardname, slot } = this.info;
      const data = { otn2000: { type: "default", boardname, slot } };

      this.$http
        .post(data)
        .then((res) => {
          console.log("restoreDefaultInfo", res);
          this.$message("成功");
        })
        .catch((err) => {
          console.log(err);
          this.veneerTitleData.desc = "";
          this.$message("失败");
        });
    },
    restorInfo() {},
  },
};
</script>

<style>
.otu25g-cps-wrapper .el-input-number--mini {
  width: 110px;
}
</style>
