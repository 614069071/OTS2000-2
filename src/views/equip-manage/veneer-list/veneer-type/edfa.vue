<template>
  <div class="edfa-cps-wrapper cps-wrapper">
    <div class="veneer-header-wrapper">
      <div class="veneer-inner-wrapper edfa-veneer"></div>
    </div>
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
          <td>EDFA型号</td>
          <td>{{ titeData.bdtype }}</td>
        </tr>
        <tr>
          <td>设备类型</td>
          <td>{{ titeData.device_type }}</td>
          <td>状态</td>
          <td>{{ titeData.status ? "在位" : "脱位" }}</td>
          <td>信息描述</td>
          <td><input class="def-input" type="text" v-model="titeData.desc" /></td>
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
          <td>{{ infoData.lum_input }}</td>
          <td>输出光功率（dBm）</td>
          <td>{{ infoData.lum_output }}</td>
          <td>TEC制冷电流（mA）</td>
          <td>{{ infoData.tec_cold_cur }}</td>
        </tr>

        <tr>
          <td>模块温度（℃）</td>
          <td>{{ infoData.mod_temp }}</td>
          <td>PUMP温度（℃）</td>
          <td>{{ infoData.pump_temp }}</td>
          <td>PUMP电流（mA）</td>
          <td>{{ infoData.pump_cur }}</td>
        </tr>

        <tr>
          <td>输入功率告警</td>
          <td>{{ infoData.input_power_alarm ? "告警" : "正常" }}</td>
          <td>输出功率告警</td>
          <td>{{ infoData.output_power_alarm ? "告警" : "正常" }}</td>
          <td>PUMP电流告警</td>
          <td>{{ infoData.pump_cur_alarm ? "告警" : "正常" }}</td>
        </tr>

        <tr>
          <td>模块温度告警</td>
          <td>{{ infoData.mod_temp_alarm ? "告警" : "正常" }}</td>
          <td>PUMP温度告警</td>
          <td>{{ infoData.pump_temp_alarm ? "告警" : "正常" }}</td>
          <td></td>
          <td></td>
        </tr>
      </table>

      <!-- 修改信息 -->

      <table class="veneer-table" style="margin-top: 20px" border="1">
        <tr>
          <td>PUMP关断</td>
          <td style="text-align: left">
            <select style="width: 66px" v-model="infoData.pump_sw">
              <option :value="1">打开</option>
              <option :value="0">关闭</option>
            </select>
          </td>
          <td>工作模式</td>
          <td>
            <CustomSelect
              v-model="infoData.mode"
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
              v-model="infoData.lum_input_thr"
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
              v-model="infoData.lum_output_thr"
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
              v-model="infoData.pump_cur_thr"
              :options="[
                { label: '600', value: 600 },
                { label: '800', value: 800 },
              ]"
            />
          </td>
          <!-- <td>PUMP关断电流（mA）</td>
        <td>
          <CustomSelect
            v-model="infoData.pump_sw_cur"
            :options="[
              { label: '50', value: 50 },
              
            ]"
          />
        </td> -->
          <td>PUMP温度高门限（℃）</td>
          <td>
            <CustomSelect v-model="infoData.pump_temp_high" :options="[{ label: '30', value: 30 }]" />
          </td>
        </tr>
        <tr>
          <td>模块温度低门限（℃）</td>
          <td>
            <CustomSelect
              v-model="infoData.mod_temp_low"
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
            <CustomSelect v-model="infoData.pump_temp_low" :options="[{ label: '20', value: 20 }]" />
          </td>
        </tr>
        <tr>
          <td>模块温度高门限</td>
          <td>
            <CustomSelect
              v-model="infoData.mod_temp_high"
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
            v-model="infoData.pump_temp_high"
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
import mixins from "@/utils/mixins";
import CustomSelect from "@/components/custom-select";

export default {
  name: "edfa",
  mixins: [mixins],
  components: { CustomSelect },
  data() {
    return {
      titeData: {
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
      infoData: {
        boardname: "",
        input_power_alarm: 0,
        lum_input: "",
        lum_input_thr: 0,
        lum_output: "",
        lum_output_thr: 0,
        mod_temp: "",
        mod_temp_alarm: 0,
        mod_temp_high: 0,
        mod_temp_low: 0,
        mode: 0,
        output_power_alarm: 0,
        pump_cur: "",
        pump_cur_alarm: 0,
        pump_cur_thr: 0,
        pump_sw: 0,
        pump_sw_cur: 0,
        pump_temp: "",
        pump_temp_alarm: 0,
        pump_temp_high: 0,
        pump_temp_low: 0,
        tec_cold_cur: "",
        type: "",
      },
    };
  },
};
</script>

<style scoped>
.edfa-veneer {
  background-image: url(../../../../assets/images/veneer/edfa.png);
}
</style>
