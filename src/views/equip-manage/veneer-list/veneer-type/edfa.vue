<template>
  <div class="edfa-cps-wrapper cps-wrapper">
    <div class="veneer-header-wrapper">EDFA</div>
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
          <td>EDFA型号</td>
          <td>{{ veneerTitleData.bdtype }}</td>
        </tr>
        <tr>
          <td>设备类型</td>
          <td>{{ veneerTitleData.device_type }}</td>
          <td>状态</td>
          <td>{{ veneerTitleData.status ? "在位" : "脱位" }}</td>
          <td>信息描述</td>
          <td><input class="def-input veneer-input" type="text" v-model="veneerTitleData.desc" /></td>
        </tr>
      </table>
    </div>

    <div class="venner-change-btns">
      <button class="def-btn" :disabled="refreshTitleDisabled" @click="refreshTitle">刷新</button>
      <button class="def-btn" :disabled="setTilteDisabled" @click="setTilte">应用</button>
    </div>

    <!-- 状态信息 -->
    <div class="veneer-table-container">
      <table class="veneer-table" border="1">
        <tr>
          <td>输入光功率（dBm）</td>
          <td>{{ veneerInfoData.lum_input }}</td>
          <td>输出光功率（dBm）</td>
          <td>{{ veneerInfoData.lum_output }}</td>
          <td>TEC制冷电流（mA）</td>
          <td>{{ veneerInfoData.tec_cold_cur }}</td>
        </tr>

        <tr>
          <td>模块温度（℃）</td>
          <td>{{ veneerInfoData.mod_temp }}</td>
          <td>PUMP温度（℃）</td>
          <td>{{ veneerInfoData.pump_temp }}</td>
          <td>PUMP电流（mA）</td>
          <td>{{ veneerInfoData.pump_cur }}</td>
        </tr>

        <tr>
          <td>输入功率告警</td>
          <td>{{ veneerInfoData.input_power_alarm ? "告警" : "正常" }}</td>
          <td>输出功率告警</td>
          <td>{{ veneerInfoData.output_power_alarm ? "告警" : "正常" }}</td>
          <td>PUMP电流告警</td>
          <td>{{ veneerInfoData.pump_cur_alarm ? "告警" : "正常" }}</td>
        </tr>

        <tr>
          <td>模块温度告警</td>
          <td>{{ veneerInfoData.mod_temp_alarm ? "告警" : "正常" }}</td>
          <td>PUMP温度告警</td>
          <td>{{ veneerInfoData.pump_temp_alarm ? "告警" : "正常" }}</td>
          <td></td>
          <td></td>
        </tr>
      </table>

      <!-- 修改信息 -->

      <table class="veneer-table" style="margin-top: 20px" border="1">
        <tr>
          <td>PUMP关断</td>
          <td style="text-align: left">
            <select style="width: 66px" v-model="changeForm.pump_sw">
              <option :value="1">打开</option>
              <option :value="0">关闭</option>
            </select>
          </td>
          <td>工作模式</td>
          <td>
            <CustomSelect
              v-model="changeForm.mode"
              :options="[
                { label: 'ACC', value: 0 },
                { label: 'APC', value: 2 },
                { label: 'AGC', value: 3 },
              ]"
            />
          </td>
        </tr>
        <tr>
          <td>输入光功率告警门限（dBm）</td>
          <td>
            <CustomSelect
              v-model="changeForm.lum_input_thr"
              :options="[
                { label: '-20', value: -20 },
                { label: '-24', value: -24 },
                { label: '-26', value: -26 },
                { label: '-28', value: -28 },
                { label: '-31', value: -31 },
              ]"
            />
          </td>
          <td>输出光功率告警门限（dBm）</td>
          <td>
            <CustomSelect
              v-model="changeForm.lum_output_thr"
              :options="[
                { label: '-5', value: -5 },
                { label: '-3', value: -3 },
                { label: '-2', value: -2 },
              ]"
            />
          </td>
        </tr>

        <tr>
          <td>PUMP电流门限（mA）</td>
          <td>
            <CustomSelect
              v-model="changeForm.pump_cur_thr"
              :options="[
                { label: '600', value: 600 },
                { label: '800', value: 800 },
              ]"
            />
          </td>
          <!-- <td>PUMP关断电流（mA）</td>
        <td>
          <CustomSelect
            v-model="changeForm.pump_sw_cur"
            :options="[
              { label: '50', value: 50 },
              
            ]"
          />
        </td> -->
          <td>PUMP温度高门限（℃）</td>
          <td>
            <CustomSelect v-model="changeForm.pump_temp_high" :options="[{ label: '30', value: 30 }]" />
          </td>
        </tr>
        <tr>
          <td>模块温度低门限（℃）</td>
          <td>
            <CustomSelect
              v-model="changeForm.mod_temp_low"
              :options="[
                { label: '-40', value: -40 },
                { label: '-45', value: -45 },
                { label: '-50', value: -50 },
                { label: '-55', value: -55 },
              ]"
            />
          </td>
          <td>PUMP温度低门限（℃）</td>
          <td>
            <CustomSelect v-model="changeForm.pump_temp_low" :options="[{ label: '20', value: 20 }]" />
          </td>
        </tr>
        <tr>
          <td>模块温度高门限</td>
          <td>
            <CustomSelect
              v-model="changeForm.mod_temp_high"
              :options="[
                { label: '55', value: 55 },
                { label: '60', value: 60 },
                { label: '65', value: 65 },
                { label: '70', value: 70 },
              ]"
            />
          </td>
          <td><!--PUMP温度高门限（℃）--></td>
          <td>
            <!-- <CustomSelect
            v-model="changeForm.pump_temp_high"
            :options="[
              { label: '30', value: 30 },
            ]"
          /> -->
          </td>
        </tr>
      </table>
    </div>

    <div class="venner-change-btns">
      <button class="def-btn" :disabled="refreshInfoDisabled" @click="refreshInfo">刷新</button>
      <button class="def-btn" :disabled="setInfoDisabled" @click="setInfo">应用</button>
      <button class="def-btn" :disabled="restoreDefaultInfoDisabled" @click="restoreDefaultInfo">恢复默认</button>
    </div>
  </div>
</template>

<script>
import CustomSelect from "../../components/custom-select";

export default {
  name: "edfa",
  props: ["info", "visible"],
  components: { CustomSelect },
  data() {
    return {
      changeForm: {
        mode: null,
        pump_sw: null,
        lum_input_thr: null,
        lum_output_thr: null,
        pump_cur_thr: null,
        pump_sw_cur: null,
        mod_temp_low: null,
        pump_temp_low: null,
        mod_temp_high: null,
        pump_temp_high: null,
      },
      veneerTitleData: {
        boardname: "",
        type: "",
        h_rev: "",
        s_rev: "",
        p_rev: "",
        mfgdate: "",
        sn: "",
        bdtype: "",
        device_type: "",
        status: null,
        desc: "",
      },
      veneerInfoData: {},
      refreshTitleDisabled: false,
      setTilteDisabled: false,
      refreshInfoDisabled: false,
      setInfoDisabled: false,
      restoreDefaultInfoDisabled: false,
    };
  },
  created() {},
  mounted() {
    // console.log("mounted", 123);
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

          this.$message("成功");
          this.refreshInfoDisabled = false;
        })
        .catch((err) => {
          console.log(err);
          this.$message("失败");
          this.refreshInfoDisabled = false;
        });
    },
    setInfo() {
      const { boardname, slot } = this.info;
      const data = { otn2000: { type: "post_info", boardname, slot, ...this.changeForm } };
      this.setInfoDisabled = true;

      this.$http
        .post(data)
        .then((res) => {
          console.log("setInfo", res);
          this.$message("成功");
          this.setInfoDisabled = false;
        })
        .catch((err) => {
          console.log(err);
          this.$message("失败");
          this.setInfoDisabled = false;
        });
    },
    restoreDefaultInfo() {
      const { boardname, slot } = this.info;
      const data = { otn2000: { type: "post_info", boardname, slot, ...this.changeForm } };

      this.restoreDefaultInfoDisabled = true;
      this.$http
        .post(data)
        .then((res) => {
          console.log("restoreDefaultInfo", res);
          this.restoreDefaultInfoDisabled = false;
        })
        .catch((err) => {
          console.log(err);
          this.veneerTitleData.desc = "";
          this.restoreDefaultInfoDisabled = false;
        });
    },
  },
};
</script>

<style scoped>
.veneer-inner-wrapper {
  background-image: url(../../../../assets/images/veneer/edfa.png);
}
</style>
