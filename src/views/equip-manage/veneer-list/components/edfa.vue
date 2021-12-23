<template>
  <div class="edfa-cps-wrapper">
    <div class="veneer-header-wrapper">EDFA</div>

    <table class="veneer-table veneer-title-table" border="1">
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
        <td>{{ veneerTitleData.serialnum }}</td>
        <td>EDFA型号</td>
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

    <!-- 状态信息 -->

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
        <td>{{ veneerInfoData.cur }}</td>
      </tr>

      <tr>
        <td>输入功率告警</td>
        <td>{{ veneerInfoData.lum_input_thr }}</td>
        <td>输出功率告警</td>
        <td>{{ veneerInfoData.lum_output_thr }}</td>
        <td>PUMP电流告警</td>
        <td>{{ veneerInfoData.pump_cur_thr }}</td>
      </tr>

      <tr>
        <td>模块温度告警</td>
        <td>{{ veneerInfoData.mod_temp_alarm }}</td>
        <td>PUMP温度告警</td>
        <td>{{ veneerInfoData.pump_temp_alarm }}</td>
        <td></td>
        <td></td>
      </tr>
    </table>

    <!-- 修改信息 -->
    <div class="veneer-edfa-setting-wrapper">
      <div class="veneer-edfa-item">
        <span>PUMP关断</span>
        <span>
          <select size="mini" v-model="changeForm.pump_sw">
            <option :value="1">打开</option>
            <option :value="0">关闭</option>
          </select>
        </span>
      </div>
      <div class="veneer-edfa-item">
        <span>工作模式</span>

        <CustomSelect
          v-model="changeForm.mode"
          :options="[
            { label: 'APC', value: 'APC' },
            { label: 'AGC', value: 'AGC' },
            { label: 'ACC', value: 'ACC' },
            { label: '自定义', value: 'custom' },
          ]"
        />
      </div>
      <div class="veneer-edfa-item">
        <span>输入光功率门限（dBm）</span>
        <CustomSelect
          v-model="changeForm.lum_input_thr"
          :options="[
            { label: '-20', value: -20 },
            { label: '-24', value: -24 },
            { label: '-26', value: -26 },
            { label: '-28', value: -28 },
            { label: '-31', value: -31 },
            { label: '自定义', value: 'custom' },
          ]"
        />
      </div>
      <div class="veneer-edfa-item">
        <span>输出光功率门限（dBm）</span>
        <CustomSelect
          v-model="changeForm.lum_output_thr"
          :options="[
            { label: '-5', value: -5 },
            { label: '-3', value: -3 },
            { label: '-2', value: -2 },
            { label: '自定义', value: 'custom' },
          ]"
        />
      </div>
      <div class="veneer-edfa-item">
        <span>PUMP电流门限（mA）</span>
        <CustomSelect
          v-model="changeForm.pump_cur_thr"
          :options="[
            { label: '600', value: 600 },
            { label: '800', value: 800 },
            { label: '自定义', value: 'custom' },
          ]"
        />
      </div>
      <div class="veneer-edfa-item">
        <span>PUMP关断电流（mA）</span>

        <CustomSelect
          v-model="changeForm.pump_sw_cur"
          :options="[
            { label: '50', value: 50 },
            { label: '自定义', value: 'custom' },
          ]"
        />
      </div>
      <div class="veneer-edfa-item">
        <span>模块温度低门限（℃）</span>
        <CustomSelect
          v-model="changeForm.mod_temp_low"
          :options="[
            { label: '-40', value: -40 },
            { label: '-45', value: -45 },
            { label: '-50', value: -50 },
            { label: '-55', value: -55 },
            { label: '自定义', value: 'custom' },
          ]"
        />
      </div>
      <div class="veneer-edfa-item">
        <span>PUMP温度低门限（℃）</span>

        <CustomSelect
          v-model="changeForm.pump_temp_low"
          :options="[
            { label: '20', value: 20 },
            { label: '自定义', value: 'custom' },
          ]"
        />
      </div>
      <div class="veneer-edfa-item">
        <span>模块温度高门限</span>

        <CustomSelect
          v-model="changeForm.mod_temp_high"
          :options="[
            { label: '55', value: 55 },
            { label: '60', value: 60 },
            { label: '65', value: 65 },
            { label: '70', value: 70 },
            { label: '自定义', value: 'custom' },
          ]"
        />
      </div>
      <div class="veneer-edfa-item">
        <span>PUMP温度高门限（℃）</span>

        <CustomSelect
          v-model="changeForm.pump_temp_high"
          :options="[
            { label: '30', value: 30 },
            { label: '自定义', value: 'custom' },
          ]"
        />
      </div>
    </div>
    <div class="venner-change-btns">
      <button class="def-btn">刷新</button>
      <button class="def-btn">应用</button>
      <button class="def-btn">恢复默认</button>
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
    console.log("mounted", 123);
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
          boardname: "edfa",
          slot,
        },
      });
    },
    getVeneerInfo(slot) {
      return this.$http.post({
        otn2000: {
          type: "get_info",
          boardname: "edfa",
          slot,
        },
      });
    },
    getVeneerDetail(slot) {
      Promise.all([this.getVeneerTitle(slot), this.getVeneerInfo(slot)])
        .then((res) => {
          this.veneerTitleData = res[0].otn2000_ack;
          this.veneerInfoData = res[1].otn2000_ack;

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
  },
};
</script>

<style scoped lang="scss">
.veneer-edfa-setting-wrapper {
  display: flex;
  flex-wrap: wrap;
  .veneer-edfa-item {
    width: 50%;
    height: 30px;
    margin-top: 7px;
    display: flex;
    align-items: center;
  }

  .veneer-edfa-item > span:first-child {
    width: 65%;
    text-align: center;
  }
}
</style>
