<template>
  <div class="otu4x10g-cps-wrapper cps-wrapper">
    <div class="veneer-header-wrapper">otu4x10g</div>

    <table class="veneer-table" border="1">
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
        <td>{{ veneerTitleData.status ? "在位" : "脱位" }}</td>
        <td>信息描述</td>
        <td>
          <input class="def-input veneer-input" type="text" v-model="veneerTitleData.desc" />
        </td>
      </tr>
    </table>

    <div class="venner-change-btns">
      <button class="def-btn" @click="refreshTitle">刷新</button>
      <button class="def-btn" @click="setTilte">应用</button>
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
            <td>Line</td>
            <td>Clinet</td>
            <td>Line</td>
            <td>Clinet</td>
            <td>Line</td>
            <td>Clinet</td>
            <td>Line</td>
          </tr>
        </thead>

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
          <td>发射光功率（dBm）</td>
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
          <td>接受光功率（dBm）</td>
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
  name: "nmu",
  props: ["info", "visible"],
  data() {
    return {
      veneerTitleData: {
        boardname: "",
        type: "",
        h_rev: "",
        s_rev: "",
        p_rev: "",
        mfgdate: "",
        sn: "",
        runtime: 0,
        device_type: "",
        status: 0,
        desc: "",
      },
      veneerInfoData: {
        sfp1: {
          online_status: 0,
          link_status: 0,
          speed_Gbps: "",
          wave_len: "",
          tx_distanst: "",
          launch_power: "",
          rcv_power: "",
          voltage: "",
          current: "",
          temp: "",
        },
        sfp2: {
          online_status: 0,
          link_status: 0,
          speed_Gbps: "",
          wave_len: "",
          tx_distanst: "",
          launch_power: "",
          rcv_power: "",
          voltage: "",
          current: "",
          temp: "",
        },
        sfp3: {
          online_status: 0,
          link_status: 0,
          speed_Gbps: "",
          wave_len: "",
          tx_distanst: "",
          launch_power: "",
          rcv_power: "",
          voltage: "",
          current: "",
          temp: "",
        },
        eth1: {
          eth_status: 0,
          full_status: 0,
          ethspeed: 0,
        },
        eth2: {
          eth_status: 0,
          full_status: 0,
          ethspeed: 0,
        },
        eth3: {
          eth_status: 0,
          full_status: 0,
          ethspeed: 0,
        },
      },
    };
  },
  created() {},
  mounted() {
    this.getVeneerDetail();
  },
  watch: {
    visible(n) {
      if (!n) return;
      this.getVeneerDetail();
    },
  },
  methods: {
    getVeneerTitle() {
      const { boardname, slot } = this.info;
      const data = { otn2000: { type: "get_title", boardname, slot } };

      return this.$http.post(data);
    },
    getVeneerInfo() {
      const { boardname, slot } = this.info;
      const data = { otn2000: { type: "get_info", boardname, slot } };

      return this.$http.post(data);
    },
    getVeneerDetail() {
      Promise.all([this.getVeneerTitle(), this.getVeneerInfo()])
        .then((res) => {
          const [resTitle, resInfo] = res;

          this.veneerTitleData = resTitle.otn2000_ack;
          this.veneerInfoData = resInfo.otn2000_ack || {};
        })
        .catch((err) => {
          console.log(err);
        });
    },
    refreshTitle() {
      this.getVeneerTitle()
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
        .then((res) => {
          console.log("setTilte", res);
        })
        .catch((err) => {
          console.log(err);
          this.veneerTitleData.desc = "";
        });
    },
    refreshInfo() {
      this.getVeneerInfo(this.info.slot)
        .then((res) => {
          console.log(res);
          this.veneerInfoData = res.otn2000_ack;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
