<template>
  <div class="num-cps-wrapper">
    <div class="veneer-header-wrapper">Nmu</div>
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
          <input class="def-input veneer-input" v-if="$store.state.iSuper" type="text" v-model="veneerTitleData.mfgdate" />

          <template v-else>
            {{ veneerTitleData.mfgdate }}
          </template>
        </td>
        <td>序列号</td>
        <td>
          <input class="def-input veneer-input" v-if="$store.state.iSuper" type="text" v-model="veneerTitleData.serialnum" />

          <template v-else>
            {{ veneerTitleData.serialnum }}
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

    <div class="venner-change-btns">
      <button class="def-btn" @click="refreshTitle">刷新</button>
      <button class="def-btn" @click="changeTilte">应用</button>
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
// import CustomSelect from "../../components/custom-select";

export default {
  name: "nmu",
  props: ["info", "visible"],
  // components: { CustomSelect },
  data() {
    return {
      changeForm: {
        mode: "",
        pump_sw: 0,
        lum_input_thr: 0,
        lum_output_thr: 0,
        pump_cur_thr: 0,
        pump_sw_cur: 0,
        mod_temp_low: 0,
        pump_temp_low: 0,
        mod_temp_high: 0,
        pump_temp_high: 0,
      },
      veneerTitleData: {},
      veneerInfoData: {},
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
      Promise.all([this.getVeneerTitle(slot), this.getVeneerInfo(slot)])
        .then((res) => {
          console.log("res", res);
          this.veneerTitleData = res[0].otn2000_ack;
          this.veneerInfoData = res[1].otn2000_ack || {};

          this.changeForm = {
            mode: res[1].otn2000_ack.mode,
            pump_sw: res[1].otn2000_ack.pump_sw,
            lum_input_thr: res[1].otn2000_ack.lum_input_thr,
            lum_output_thr: res[1].otn2000_ack.lum_output_thr,
            pump_cur_thr: res[1].otn2000_ack.pump_cur_thr,
            pump_sw_cur: res[1].otn2000_ack.pump_sw_cur,
            mod_temp_low: res[1].otn2000_ack.mod_temp_low,
            pump_temp_low: res[1].otn2000_ack.pump_temp_low,
            mod_temp_high: res[1].otn2000_ack.mod_temp_high,
            pump_temp_high: res[1].otn2000_ack.pump_temp_high,
          };
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
        })
        .catch((err) => {
          console.log(err);
        });
    },
    changeTilte() {
      const iSuperData = this.$store.state.iSuper
        ? {
            mfgdate: this.veneerTitleData.mfgdate,
            serialnum: this.veneerTitleData.serialnum,
          }
        : {};

      const data = {
        otn2000: {
          type: "post_title",
          boardname: this.info.boardname,
          desc: this.veneerTitleData.desc,
          slot: this.info.slot,
          ...iSuperData,
        },
      };

      this.$http
        .post(data)
        .then((res) => {
          console.log("changeTilte", res);
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
          this.changeForm = {
            mode: res.otn2000_ack.mode,
            pump_sw: res.otn2000_ack.pump_sw,
            lum_input_thr: res.otn2000_ack.lum_input_thr,
            lum_output_thr: res.otn2000_ack.lum_output_thr,
            pump_cur_thr: res.otn2000_ack.pump_cur_thr,
            pump_sw_cur: res.otn2000_ack.pump_sw_cur,
            mod_temp_low: res.otn2000_ack.mod_temp_low,
            pump_temp_low: res.otn2000_ack.pump_temp_low,
            mod_temp_high: res.otn2000_ack.mod_temp_high,
            pump_temp_high: res.otn2000_ack.pump_temp_high,
          };
        })
        .catch((err) => {
          console.log(err);
        });
    },
    changeInfo() {
      const data = {
        otn2000: {
          type: "post_info",
          boardname: this.info.boardname,
          slot: this.info.slot,
          ...this.changeForm,
        },
      };

      this.$http
        .post(data)
        .then((res) => {
          console.log("changeInfo", res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    restoreDefaultInfo() {
      // const data = {
      //   otn2000: {
      //     type: "default",
      //     boardname: this.info.boardname,
      //     slot: this.info.slot,
      //   },
      // };
      // this.$http
      //   .post(data)
      //   .then((res) => {
      //     console.log("restoreDefaultInfo", res);
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //     this.veneerTitleData.desc = "";
      //   });
    },
  },
};
</script>
