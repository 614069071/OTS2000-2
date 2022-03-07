<template>
  <div class="edfa-cps-wrapper cps-wrapper">
    <!-- 状态信息 -->
    <div class="board-table-container">
      <table class="board-table" border="1">
        <tr>
          <td>输入光功率（dBm）</td>
          <td>{{ infoData.lum_input === 327.67 ? "无输入" : infoData.lum_input }}</td>
          <td>输出光功率（dBm）</td>
          <td>{{ infoData.lum_output === 327.67 ? "无输出" : infoData.lum_output }}</td>
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

        <tr>
          <td>PUMP关断</td>
          <td style="text-align: left">
            <select style="width: 66px" v-model="infoData.pump_sw">
              <option :value="0">打开</option>
              <option :value="1">关闭</option>
            </select>
          </td>
          <td>工作模式</td>
          <td>
            <select v-model="infoData.mode">
              <option :value="2">APC</option>
              <option :value="3">AGC</option>
            </select>
          </td>
          <!-- OBA -->
          <template v-if="info.bdtype === 'OBA20G22'">
            <template v-if="infoData.mode === 3">
              <td>增益值</td>
              <td>
                <el-input-number v-model="infoData.gain" size="mini" :min="19" :max="25"></el-input-number>
              </td>
            </template>

            <template v-else-if="infoData.mode === 2">
              <td>功率值</td>
              <td>
                <el-input-number v-model="infoData.APC_output_power" size="mini" :min="-4" :max="20"></el-input-number>
              </td>
            </template>

            <template v-else-if="infoData.mode === 0">
              <td></td>
              <td></td>
            </template>
          </template>

          <!-- OLA 带单板-->
          <!-- <template v-if="info.bdtype === 'OLA20G22'">
            <template v-if="infoData.mode === 3">
              <td>增益值</td>
              <td>
                <el-input-number v-model="infoData.gain" size="mini" :min="19" :max="25"></el-input-number>
              </td>
            </template>

            <template v-else-if="infoData.mode === 2">
              <td>功率值</td>
              <td>
                <el-input-number v-model="infoData.APC_output_power" size="mini" :min="-11" :max="20"></el-input-number>
              </td>
            </template>

            <template v-else-if="infoData.mode === 0">
              <td></td>
              <td></td>
            </template>
          </template> -->

          <!-- OPA -->
          <template v-else-if="info.bdtype === 'OPA20G32'">
            <template v-if="infoData.mode === 3">
              <td>增益值</td>
              <td>
                <el-input-number v-model="infoData.gain" size="mini" :min="29" :max="35"></el-input-number>
              </td>
            </template>

            <template v-else-if="infoData.mode === 2">
              <td>功率值</td>
              <td>
                <el-input-number v-model="infoData.APC_output_power" size="mini" :min="-1" :max="20"></el-input-number>
              </td>
            </template>

            <template v-else-if="infoData.mode === 0">
              <td></td>
              <td></td>
            </template>
          </template>
        </tr>
      </table>

      <!-- 修改信息 -->

      <table class="board-table" style="margin-top: 20px" border="1">
        <tr>
          <td>输入光功率低告警门限（dBm）</td>
          <td>
            <input type="text" class="def-input" v-model.number="infoData.lum_input_thr" />
            <!-- v-limit="{ key: 'infoData.lum_input_thr', min: 0, max: 10 }" -->
            <!-- 
              info.bdtype
              OBA模块阈值范围在-26—+12dBm；
              OLA模块阈值范围在-33—+5dBm；
              OPA模块阈值范围在-33—+5dBm； 
            -->
          </td>
          <td>输出光功率低告警门限（dBm）</td>
          <td>
            <input type="text" class="def-input" v-model.number="infoData.lum_output_thr" />

            <!-- 
              info.bdtype
              OBA模块阈值范围在-11—+20.5dBm；
              OLA模块阈值范围在-14—+20.5dBm；
              OPA模块阈值范围在-8—+20.5dBm；
             -->
          </td>
        </tr>

        <tr>
          <td>PUMP电流门限（mA）</td>
          <td>
            <!-- <input type="text" class="def-input" v-model.number="infoData.pump_cur_thr" /> -->
            {{ infoData.pump_cur_thr }}
          </td>
          <td>PUMP温度高门限（℃）</td>
          <td>
            <!-- <input type="text" class="def-input" v-model.number="infoData.pump_temp_high" /> -->
            {{ infoData.pump_temp_high }}
          </td>
        </tr>
        <tr>
          <td>模块温度低门限（℃）</td>
          <td>
            <input type="text" class="def-input" v-model.number="infoData.mod_temp_low" />
            <!-- 
              OBA模块阈值范围在-55—+70℃；
              OLA模块阈值范围在-55—+70℃；
              OPA模块阈值范围在-55—+70℃； 
            -->
          </td>
          <td>PUMP温度低门限（℃）</td>
          <td>
            <!-- <input type="text" class="def-input" v-model.number="infoData.pump_temp_low" /> -->
            {{ infoData.pump_temp_low }}
          </td>
        </tr>
        <tr>
          <td>模块温度高门限（℃）</td>
          <td>
            <input type="text" class="def-input" placeholder="有效范围-55~70℃" v-model.number="infoData.mod_temp_high" />

            <!-- 
              info.bdtype
              OBA模块阈值范围在-55—+70℃；
              OLA模块阈值范围在-55—+70℃；
              OPA模块阈值范围在-55—+70℃； 
            -->
          </td>
          <td>PUMP关断功率（dBm）</td>
          <td>
            <input class="def-input" type="text" v-model.number="infoData.sw_power" />

            <!-- 
              info.bdtype
              OBA模块阈值范围在-26—+4dBm；
              OLA模块阈值范围在-33—+5dBm；
              OPA模块阈值范围在-33—+5dBm；
             -->
          </td>
        </tr>
      </table>
    </div>

    <div class="board-change-btns">
      <button class="def-btn" :disabled="refreshInfoDisabled" @click="refreshGetInfo">刷新</button>
      <button class="def-btn" :disabled="setInfoDisabled" @click="setInfo">应用</button>
      <button class="def-btn" :disabled="restoreDefaultInfoDisabled" @click="restoreDefaultInfo">恢复默认</button>
    </div>
  </div>
</template>

<script>
import mixins from "@/utils/mixins";

/* 
info.bdtype OBA20G22 OPA20G32
*/

export default {
  name: "edfa",
  mixins: [mixins],
  data() {
    return {
      infoData: {
        boardname: "",
        type: "",
        post_reply: 0,
        pump_sw: 0,
        mode: 0,
        lum_input_thr: 0,
        lum_output_thr: 0,
        APC_output_power: 0,
        pump_cur_thr: 0,
        sw_power: 0,
        mod_temp_low: 0,
        mod_temp_high: 0,
        pump_temp_low: 0,
        pump_temp_high: 0,
        gain: 0,
        lum_input: 0,
        lum_output: 0,
        tec_cold_cur: "",
        mod_temp: "",
        pump_temp: "",
        pump_cur: "",
        input_power_alarm: 0,
        output_power_alarm: 0,
        pump_cur_alarm: 0,
        mod_temp_alarm: 0,
        pump_temp_alarm: 0,
      },
    };
  },
};
</script>

<style scoped></style>
