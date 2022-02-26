<template>
  <div class="num-cps-wrapper cps-wrapper">
    <div class="board-table-container">
      <table class="board-table" border="1">
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
          <td>{{ infoData.sfp1.online_status ? "在位" : "脱位" }}</td>
          <td>{{ infoData.sfp2.online_status ? "在位" : "脱位" }}</td>
          <td>{{ infoData.sfp3.online_status ? "在位" : "脱位" }}</td>
        </tr>
        <tr>
          <td>LINK状态</td>
          <td>{{ infoData.sfp1.online_status ? (infoData.sfp1.link_status ? "UP" : "DOWN") : "NA" }}</td>
          <td>{{ infoData.sfp2.online_status ? (infoData.sfp2.link_status ? "UP" : "DOWN") : "NA" }}</td>
          <td>{{ infoData.sfp3.online_status ? (infoData.sfp3.link_status ? "UP" : "DOWN") : "NA" }}</td>
        </tr>
        <tr>
          <td>速率（Mbps）</td>
          <td>{{ infoData.sfp1.online_status ? infoData.sfp1.speed_Gbps : "NA" }}</td>
          <td>{{ infoData.sfp2.online_status ? infoData.sfp2.speed_Gbps : "NA" }}</td>
          <td>{{ infoData.sfp3.online_status ? infoData.sfp3.speed_Gbps : "NA" }}</td>
        </tr>
        <tr>
          <td>波长（nm）</td>
          <td>{{ infoData.sfp1.online_status ? infoData.sfp1.wave_len : "NA" }}</td>
          <td>{{ infoData.sfp2.online_status ? infoData.sfp2.wave_len : "NA" }}</td>
          <td>{{ infoData.sfp3.online_status ? infoData.sfp3.wave_len : "NA" }}</td>
        </tr>
        <tr>
          <td>距离（km）</td>
          <td>{{ infoData.sfp1.online_status ? infoData.sfp1.tx_distanst : "NA" }}</td>
          <td>{{ infoData.sfp2.online_status ? infoData.sfp2.tx_distanst : "NA" }}</td>
          <td>{{ infoData.sfp3.online_status ? infoData.sfp3.tx_distanst : "NA" }}</td>
        </tr>
        <tr>
          <td>发送光功率（dBm）</td>
          <td>{{ infoData.sfp1.online_status ? infoData.sfp1.launch_power : "NA" }}</td>
          <td>{{ infoData.sfp2.online_status ? infoData.sfp2.launch_power : "NA" }}</td>
          <td>{{ infoData.sfp3.online_status ? infoData.sfp3.launch_power : "NA" }}</td>
        </tr>
        <tr>
          <td>接受光功率（dBm）</td>
          <td>{{ infoData.sfp1.online_status ? infoData.sfp1.rcv_power : "NA" }}</td>
          <td>{{ infoData.sfp2.online_status ? infoData.sfp2.rcv_power : "NA" }}</td>
          <td>{{ infoData.sfp3.online_status ? infoData.sfp3.rcv_power : "NA" }}</td>
        </tr>
        <tr>
          <td>电压（V）</td>
          <td>{{ infoData.sfp1.online_status ? infoData.sfp1.voltage : "NA" }}</td>
          <td>{{ infoData.sfp2.online_status ? infoData.sfp2.voltage : "NA" }}</td>
          <td>{{ infoData.sfp3.online_status ? infoData.sfp3.voltage : "NA" }}</td>
        </tr>
        <tr>
          <td>电流（mA）</td>
          <td>{{ infoData.sfp1.online_status ? infoData.sfp1.current : "NA" }}</td>
          <td>{{ infoData.sfp2.online_status ? infoData.sfp2.current : "NA" }}</td>
          <td>{{ infoData.sfp3.online_status ? infoData.sfp3.current : "NA" }}</td>
        </tr>
        <tr>
          <td>温度（℃）</td>
          <td>{{ infoData.sfp1.online_status ? infoData.sfp1.temp : "NA" }}</td>
          <td>{{ infoData.sfp2.online_status ? infoData.sfp2.temp : "NA" }}</td>
          <td>{{ infoData.sfp3.online_status ? infoData.sfp3.temp : "NA" }}</td>
        </tr>
      </table>

      <table class="board-table" style="margin-top: 10px" border="1">
        <tr>
          <td>ETH端口</td>
          <td>ETH1</td>
          <td>ETH2</td>
          <td>ETH3</td>
        </tr>
        <tr>
          <td>LINK状态</td>
          <td>{{ infoData.eth1.eth_status ? "UP" : "DOWN" }}</td>
          <td>{{ infoData.eth2.eth_status ? "UP" : "DOWN" }}</td>
          <td>{{ infoData.eth3.eth_status ? "UP" : "DOWN" }}</td>
        </tr>
        <tr>
          <td>速率（Mbps）</td>
          <td>{{ infoData.eth1.eth_status ? infoData.eth1.ethspeed : "NA" }}</td>
          <td>{{ infoData.eth2.eth_status ? infoData.eth2.ethspeed : "NA" }}</td>
          <td>{{ infoData.eth3.eth_status ? infoData.eth3.ethspeed : "NA" }}</td>
        </tr>
        <tr>
          <td>双工</td>
          <td>{{ infoData.eth1.eth_status ? (infoData.eth1.full_status ? "全双工" : "半双工") : "NA" }}</td>
          <td>{{ infoData.eth2.eth_status ? (infoData.eth2.full_status ? "全双工" : "半双工") : "NA" }}</td>
          <td>{{ infoData.eth3.eth_status ? (infoData.eth3.full_status ? "全双工" : "半双工") : "NA" }}</td>
        </tr>
      </table>
    </div>

    <div class="board-change-btns">
      <button class="def-btn" :disabled="refreshInfoDisabled" @click="refreshInfo">刷新</button>
    </div>
  </div>
</template>

<script>
import mixins from "@/utils/mixins";

export default {
  name: "nmu",
  mixins: [mixins],
  data() {
    return {
      infoData: {
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
};
</script>

<style scoped></style>
