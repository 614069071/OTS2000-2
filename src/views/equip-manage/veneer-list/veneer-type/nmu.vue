<template>
  <div class="num-cps-wrapper cps-wrapper">
    <div class="veneer-header-wrapper">
      <!-- <div class="veneer-inner-wrapper"></div> -->
      <NmuPic :data="veneerInfoData"></NmuPic>
    </div>
    <div class="veneer-table-title">
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
          <td></td>
          <td></td>
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
    </div>

    <div class="venner-change-btns">
      <button class="def-btn" :disabled="refreshTitleDisabled" @click="refreshTitle">刷新</button>
      <button class="def-btn" :disabled="setTilteDisabled" @click="setTilte">应用</button>
    </div>

    <div class="veneer-table-container">
      <table class="veneer-table" border="1">
        <thead>
          <tr>
            <td>SFP端口</td>
            <td>SFP1</td>
            <td>SFP2</td>
            <td>SFP3</td>
          </tr>
        </thead>

        <tr>
          <td>在位状态</td>
          <td>{{ veneerInfoData.sfp1.online_status ? "在位" : "脱位" }}</td>
          <td>{{ veneerInfoData.sfp2.online_status ? "在位" : "脱位" }}</td>
          <td>{{ veneerInfoData.sfp3.online_status ? "在位" : "脱位" }}</td>
        </tr>
        <tr>
          <td>LINK状态</td>
          <td>{{ veneerInfoData.sfp1.online_status ? (veneerInfoData.sfp1.link_status ? "UP" : "DOWN") : "NA" }}</td>
          <td>{{ veneerInfoData.sfp2.online_status ? (veneerInfoData.sfp2.link_status ? "UP" : "DOWN") : "NA" }}</td>
          <td>{{ veneerInfoData.sfp3.online_status ? (veneerInfoData.sfp3.link_status ? "UP" : "DOWN") : "NA" }}</td>
        </tr>
        <tr>
          <td>速率（Mbps）</td>
          <td>{{ veneerInfoData.sfp1.online_status ? veneerInfoData.sfp1.speed_Gbps : "NA" }}</td>
          <td>{{ veneerInfoData.sfp2.online_status ? veneerInfoData.sfp2.speed_Gbps : "NA" }}</td>
          <td>{{ veneerInfoData.sfp3.online_status ? veneerInfoData.sfp3.speed_Gbps : "NA" }}</td>
        </tr>
        <tr>
          <td>波长（nm）</td>
          <td>{{ veneerInfoData.sfp1.online_status ? veneerInfoData.sfp1.wave_len : "NA" }}</td>
          <td>{{ veneerInfoData.sfp2.online_status ? veneerInfoData.sfp2.wave_len : "NA" }}</td>
          <td>{{ veneerInfoData.sfp3.online_status ? veneerInfoData.sfp3.wave_len : "NA" }}</td>
        </tr>
        <tr>
          <td>距离（km）</td>
          <td>{{ veneerInfoData.sfp1.online_status ? veneerInfoData.sfp1.tx_distanst : "NA" }}</td>
          <td>{{ veneerInfoData.sfp2.online_status ? veneerInfoData.sfp2.tx_distanst : "NA" }}</td>
          <td>{{ veneerInfoData.sfp3.online_status ? veneerInfoData.sfp3.tx_distanst : "NA" }}</td>
        </tr>
        <tr>
          <td>发送光功率（dBm）</td>
          <td>{{ veneerInfoData.sfp1.online_status ? veneerInfoData.sfp1.launch_power : "NA" }}</td>
          <td>{{ veneerInfoData.sfp2.online_status ? veneerInfoData.sfp2.launch_power : "NA" }}</td>
          <td>{{ veneerInfoData.sfp3.online_status ? veneerInfoData.sfp3.launch_power : "NA" }}</td>
        </tr>
        <tr>
          <td>接受光功率（dBm）</td>
          <td>{{ veneerInfoData.sfp1.online_status ? veneerInfoData.sfp1.rcv_power : "NA" }}</td>
          <td>{{ veneerInfoData.sfp2.online_status ? veneerInfoData.sfp2.rcv_power : "NA" }}</td>
          <td>{{ veneerInfoData.sfp3.online_status ? veneerInfoData.sfp3.rcv_power : "NA" }}</td>
        </tr>
        <tr>
          <td>电压（V）</td>
          <td>{{ veneerInfoData.sfp1.online_status ? veneerInfoData.sfp1.voltage : "NA" }}</td>
          <td>{{ veneerInfoData.sfp2.online_status ? veneerInfoData.sfp2.voltage : "NA" }}</td>
          <td>{{ veneerInfoData.sfp3.online_status ? veneerInfoData.sfp3.voltage : "NA" }}</td>
        </tr>
        <tr>
          <td>电流（mA）</td>
          <td>{{ veneerInfoData.sfp1.online_status ? veneerInfoData.sfp1.current : "NA" }}</td>
          <td>{{ veneerInfoData.sfp2.online_status ? veneerInfoData.sfp2.current : "NA" }}</td>
          <td>{{ veneerInfoData.sfp3.online_status ? veneerInfoData.sfp3.current : "NA" }}</td>
        </tr>
        <tr>
          <td>温度（℃）</td>
          <td>{{ veneerInfoData.sfp1.online_status ? veneerInfoData.sfp1.temp : "NA" }}</td>
          <td>{{ veneerInfoData.sfp2.online_status ? veneerInfoData.sfp2.temp : "NA" }}</td>
          <td>{{ veneerInfoData.sfp3.online_status ? veneerInfoData.sfp3.temp : "NA" }}</td>
        </tr>
      </table>

      <table class="veneer-table" style="margin-top: 20px" border="1">
        <tr>
          <td>ETH端口</td>
          <td>ETH1</td>
          <td>ETH2</td>
          <td>ETH3</td>
        </tr>
        <tr>
          <td>LINK状态</td>
          <td>{{ veneerInfoData.eth1.eth_status ? "UP" : "DOWN" }}</td>
          <td>{{ veneerInfoData.eth2.eth_status ? "UP" : "DOWN" }}</td>
          <td>{{ veneerInfoData.eth3.eth_status ? "UP" : "DOWN" }}</td>
        </tr>
        <tr>
          <td>速率（Mbps）</td>
          <td>{{ veneerInfoData.eth1.eth_status ? veneerInfoData.eth1.ethspeed : "NA" }}</td>
          <td>{{ veneerInfoData.eth2.eth_status ? veneerInfoData.eth2.ethspeed : "NA" }}</td>
          <td>{{ veneerInfoData.eth3.eth_status ? veneerInfoData.eth3.ethspeed : "NA" }}</td>
        </tr>
        <tr>
          <td>双工</td>
          <td>{{ veneerInfoData.eth1.eth_status ? (veneerInfoData.eth1.full_status ? "全双工" : "半双工") : "NA" }}</td>
          <td>{{ veneerInfoData.eth2.eth_status ? (veneerInfoData.eth2.full_status ? "全双工" : "半双工") : "NA" }}</td>
          <td>{{ veneerInfoData.eth3.eth_status ? (veneerInfoData.eth3.full_status ? "全双工" : "半双工") : "NA" }}</td>
        </tr>
      </table>
    </div>

    <div class="venner-change-btns">
      <button class="def-btn" :disabled="refreshInfoDisabled" @click="refreshInfo">刷新</button>
    </div>
  </div>
</template>

<script>
import NmuPic from "@/components/veneer/nmu.vue";

export default {
  name: "nmu",
  props: ["info", "visible"],
  components: { NmuPic },
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
      refreshTitleDisabled: false,
      setTilteDisabled: false,
      refreshInfoDisabled: false,
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
      this.refreshTitleDisabled = true;

      this.getVeneerTitle()
        .then((res) => {
          console.log(res);
          this.veneerTitleData = res.otn2000_ack;
          this.$message("成功");
          this.refreshTitleDisabled = false;
        })
        .catch((err) => {
          console.log(err);
          this.$message("失败");
          this.refreshTitleDisabled = false;
        });
    },
    setTilte() {
      const { mfgdate, sn, desc } = this.veneerTitleData;
      const { boardname, slot } = this.info;
      const iSuperData = this.$store.state.iSuper ? { mfgdate, sn } : {};
      const data = { otn2000: { type: "post_title", boardname, desc, slot, ...iSuperData } };
      this.setTilteDisabled = true;

      this.$http
        .post(data)
        .then((res) => {
          console.log("setTilte", res);
          this.$message("成功");
          this.setTilteDisabled = false;
        })
        .catch((err) => {
          console.log(err);
          this.veneerTitleData.desc = "";
          this.$message("失败");

          this.setTilteDisabled = false;
        });
    },
    refreshInfo() {
      this.refreshInfoDisabled = true;

      this.getVeneerInfo()
        .then((res) => {
          console.log(res);
          this.veneerInfoData = res.otn2000_ack;
          this.$message("成功");

          this.refreshInfoDisabled = false;
        })
        .catch((err) => {
          console.log(err);
          this.$message("失败");

          this.refreshInfoDisabled = false;
        });
    },
  },
};
</script>

<style scoped>
.veneer-inner-wrapper {
  background-image: url(../../../../assets/images/veneer/nmu.png);
}
</style>
