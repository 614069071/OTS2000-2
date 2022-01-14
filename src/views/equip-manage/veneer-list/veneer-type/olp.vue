<template>
  <div class="olp-cps-wrapper cps-wrapper">
    <div class="veneer-header-wrapper">olp</div>

    <div class="veneer-table-title">
      <table class="veneer-table veneer-title-table" border="1">
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
          <td>OLP型号</td>
          <td>{{ titeData.bdtype }}</td>
        </tr>
        <tr>
          <td>设备类型</td>
          <td>{{ titeData.device_type }}</td>
          <td>状态</td>
          <td>{{ titeData.status ? "告警" : "正常" }}</td>
          <td>信息描述</td>
          <td>
            <input class="def-input" type="text" v-model="titeData.desc" />
          </td>
        </tr>
      </table>
    </div>

    <div class="venner-change-btns">
      <button class="def-btn" @click="refreshTitle">刷新</button>
      <button class="def-btn" @click="setTilte">应用</button>
    </div>

    <div class="veneer-table-container">
      <table class="veneer-table veneer-title-table" border="1">
        <tr>
          <td>工作状态</td>
          <td>{{ infoData.work_state ? "备" : "主" }}</td>
          <td>保护模式</td>
          <td>
            <select v-model="infoData.protmode">
              <option :value="0">自动</option>
              <option :value="1">手动</option>
            </select>
          </td>
          <td>强制倒换</td>
          <td>
            <select v-model="infoData.forced_switching">
              <option :value="0">主</option>
              <option :value="1">备</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>主线路收光信号</td>
          <td>{{ ["收光正常", "收光强", "收光弱", "收无光"][infoData.main_rx_signal_state || 0] }}</td>
          <td>备线路收光信号</td>
          <td>{{ ["收光正常", "收光强", "收光弱", "收无光"][infoData.slave_rx_signal_state || 0] }}</td>
          <td>本地线路收光信号</td>
          <td>{{ ["收光正常", "收光强", "收光弱", "收无光"][infoData.local_rx_signal_state || 0] }}</td>
        </tr>
        <tr>
          <td>是否自动回切</td>
          <td>
            <select v-model="infoData.auto_switchback">
              <option :value="0">是</option>
              <option :value="1">否</option>
            </select>
          </td>
          <td>回切WTR时间（min）</td>
          <td>
            <CustomSelect
              v-model="infoData.wtr_time"
              :options="[
                { label: '5', value: 5 },
                { label: '10', value: 10 },
                { label: '15', value: 15 },
              ]"
            />
          </td>
          <td>主线路告警门限（dBm）</td>
          <td>
            <CustomSelect
              v-model="infoData.main_line_alarm_thre"
              :options="[
                { label: '-15', value: -15 },
                { label: '-18', value: -18 },
              ]"
            />
          </td>
        </tr>
        <tr>
          <td>主备初始差异（dB）</td>
          <td>
            <CustomSelect
              v-model="infoData.main_slave_initdiff"
              :options="[
                { label: '1', value: 1 },
                { label: '2', value: 2 },
                { label: '3', value: 3 },
                { label: '-1', value: -1 },
                { label: '-2', value: -2 },
                { label: '-3', value: -3 },
              ]"
            />
          </td>
          <td>备线路告警门限</td>
          <td>
            <CustomSelect
              v-model="infoData.slave_line_alarm_thre"
              :options="[
                { label: '-15', value: -15 },
                { label: '-18', value: -18 },
              ]"
            />
          </td>
          <td>倒换条件差异值（dB）</td>
          <td>
            <CustomSelect
              v-model="infoData.switch_condition_diff"
              :options="[
                { label: '4', value: 4 },
                { label: '5', value: 5 },
              ]"
            />
          </td>
        </tr>
      </table>
    </div>

    <div class="venner-change-btns">
      <button class="def-btn" @click="refreshInfo">刷新</button>
      <button class="def-btn" @click="setInfo">应用</button>
      <button class="def-btn" @click="restoreDefaultInfo">恢复默认</button>
    </div>
  </div>
</template>
<script>
import CustomSelect from "@/components/custom-select";
import mixins from "@/utils/mixins";

export default {
  name: "otu10g",
  // props: ["info", "visible"],
  components: { CustomSelect },
  mixins: [mixins],
  // data() {
  //   return {
  //     titeData: {
  //       bdtype: "",
  //       desc: "",
  //       device_type: "",
  //       h_rev: "",
  //       mfgdate: "",
  //       p_rev: "",
  //       s_rev: "",
  //       sn: "",
  //       status: null,
  //     },
  //     cloneData: {},
  //     infoData: {
  //       boardname: "olp",
  //       type: "get_info",
  //       protmode: 0,
  //       forced_switching: 0,
  //       auto_switchback: 0,
  //       wtr_time: 1,
  //       main_line_alarm_thre: 0,
  //       slave_line_alarm_thre: 0,
  //       main_slave_initdiff: 0,
  //       switch_condition_diff: 5,
  //       work_state: 0,
  //       main_rx_signal_state: 4,
  //       slave_rx_signal_state: 4,
  //       local_rx_signal_state: 3,
  //     },
  //     refreshTitleDisabled: false,
  //     setTilteDisabled: false,
  //     refreshInfoDisabled: false,
  //     setInfoDisabled: false,
  //     restorInfoDisabled: false,
  //     restoreDefaultInfoDisabled: false,
  //   };
  // },
  // created() {},
  // mounted() {
  //   this.getVeneerDetail();
  // },
  // watch: {
  //   visible(n) {
  //     if (!n) return;
  //     this.getVeneerDetail();
  //   },
  // },
  // methods: {
  //   getVeneerTitle() {
  //     const { boardname, slot } = this.info;
  //     const data = { otn2000: { type: "get_title", boardname, slot } };

  //     return this.$http.post(data);
  //   },
  //   getVeneerInfo() {
  //     const { boardname, slot } = this.info;
  //     const data = { otn2000: { type: "get_info", boardname, slot } };

  //     return this.$http.post(data);
  //   },
  //   getInfo() {},
  //   getVeneerDetail() {
  //     this.getVeneerTitle()
  //       .then((res) => {
  //         this.titeData = res.otn2000_ack;

  //         return this.getVeneerInfo();
  //       })
  //       .then((res = { otn2000_ack: {} }) => {
  //         this.infoData = res.otn2000_ack || {};
  //         this.cloneData = this.$clone(res.otn2000_ack || {});
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   },
  //   refreshTitle() {
  //     this.refreshTitleDisabled = true;

  //     this.getVeneerTitle()
  //       .then((res) => {
  //         console.log(res);
  //         this.titeData = res.otn2000_ack;
  //         this.$message("成功");
  //         this.refreshTitleDisabled = false;
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //         this.$message("失败");
  //         this.refreshTitleDisabled = false;
  //       });
  //   },
  //   setTilte() {
  //     const { mfgdate, sn, desc } = this.titeData;
  //     const { boardname, slot } = this.info;
  //     const iSuperData = this.$store.state.iSuper ? { mfgdate, sn } : {};
  //     const data = { otn2000: { type: "post_title", boardname, desc, slot, ...iSuperData } };

  //     this.setTilteDisabled = true;
  //     this.refreshTitleDisabled = true;

  //     this.$http
  //       .post(data)
  //       .then(() => {
  //         return this.getVeneerTitle();
  //       })
  //       .then((res) => {
  //         this.$message("成功");
  //         this.setTilteDisabled = false;
  //         this.refreshTitleDisabled = false;
  //         this.titeData = res.otn2000_ack;
  //       })
  //       .catch(() => {
  //         this.titeData.desc = "";
  //         this.$message("失败");
  //         this.refreshTitleDisabled = false;
  //         this.setTilteDisabled = false;
  //       });
  //   },
  //   refreshInfo() {
  //     this.refreshInfoDisabled = true;
  //     this.getVeneerInfo(this.info.slot)
  //       .then((res) => {
  //         this.infoData = res.otn2000_ack;

  //         this.$message("成功");
  //         this.refreshInfoDisabled = false;
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //         this.$message("失败");
  //         this.refreshInfoDisabled = false;
  //       });
  //   },
  //   setInfo() {
  //     const { slot } = this.info;
  //     const diffData = this.$difference(this.infoData, this.cloneData);
  //     const data = { otn2000: { ...diffData, slot, type: "post_info" } };
  //     this.setInfoDisabled = true;
  //     this.refreshInfoDisabled = true;

  //     console.log("difference", data);

  //     this.$http
  //       .post(data)
  //       .then(() => {
  //         return this.getVeneerInfo();
  //       })
  //       .then((res = { otn2000_ack: {} }) => {
  //         this.$message("成功");
  //         this.setInfoDisabled = false;
  //         this.refreshInfoDisabled = false;
  //         this.infoData = res.otn2000_ack || {};
  //       })
  //       .catch(() => {
  //         this.$message("失败");
  //         this.refreshInfoDisabled = false;
  //         this.setInfoDisabled = false;
  //       });
  //   },
  //   restoreDefaultInfo() {
  //     const { boardname, slot } = this.info;
  //     const data = { otn2000: { type: "default", boardname, slot } };
  //     this.restoreDefaultInfoDisabled = true;

  //     this.$http
  //       .post(data)
  //       .then(() => {
  //         return this.getVeneerInfo();
  //       })
  //       .then((res = { otn2000_ack: {} }) => {
  //         this.$message("成功");
  //         this.refreshInfoDisabled = false;
  //         this.setInfoDisabled = false;
  //         this.restorInfoDisabled = false;
  //         this.restoreDefaultInfoDisabled = false;
  //         this.infoData = res.otn2000_ack || {};
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //         this.$message("失败");
  //         this.refreshInfoDisabled = false;
  //         this.setInfoDisabled = false;
  //         this.restorInfoDisabled = false;
  //         this.restoreDefaultInfoDisabled = false;
  //       });
  //   },
  //   restorInfo() {
  //     const { boardname, slot } = this.info;
  //     const data = { otn2000: { type: "reset", boardname, slot } };
  //     this.restorInfoDisabled = true;

  //     this.$http
  //       .post(data)
  //       .then(() => {
  //         return this.getVeneerInfo();
  //       })
  //       .then((res = { otn2000_ack: {} }) => {
  //         this.$message("成功");
  //         this.refreshInfoDisabled = false;
  //         this.setInfoDisabled = false;
  //         this.restorInfoDisabled = false;
  //         this.restoreDefaultInfoDisabled = false;
  //         this.infoData = res.otn2000_ack || {};
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //         this.$message("失败");
  //         this.refreshInfoDisabled = false;
  //         this.setInfoDisabled = false;
  //         this.restorInfoDisabled = false;
  //         this.restoreDefaultInfoDisabled = false;
  //       });
  //   },
  // },
};
</script>
