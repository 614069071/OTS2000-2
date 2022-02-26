<template>
  <div class="olp-cps-wrapper cps-wrapper">
    <div class="board-table-container">
      <table class="board-table board-title-table" border="1">
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
            <select :disabled="!infoData.protmode" v-model="infoData.forced_switching">
              <option :value="0">主</option>
              <option :value="1">备</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>主线路收光信号</td>
          <td>{{ infoData.main_rx_signal_power | signal }}</td>
          <td>备线路收光信号</td>
          <td>{{ infoData.slave_rx_signal_power | signal }}</td>
          <td>本地线路收光信号</td>
          <td>{{ infoData.local_rx_signal_power | signal }}</td>
        </tr>
        <tr>
          <td>是否自动回切</td>
          <td>
            <select :disabled="!!infoData.protmode" v-model="infoData.auto_switchback">
              <option :value="0">回切</option>
              <option :value="1">不回切</option>
            </select>
          </td>
          <td>回切WTR时间（min）</td>
          <td>
            <custom-select
              v-model="infoData.wtr_time"
              :disabled="!!infoData.protmode"
              :options="[
                { label: '5', value: 5 },
                { label: '10', value: 10 },
                { label: '15', value: 15 },
              ]"
            />
          </td>
          <td>主线路告警门限（dBm）</td>
          <td>
            <custom-select
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
            <custom-select
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
            <custom-select
              v-model="infoData.slave_line_alarm_thre"
              :options="[
                { label: '-15', value: -15 },
                { label: '-18', value: -18 },
              ]"
            />
          </td>
          <td>倒换条件差异值（dB）</td>
          <td>
            <custom-select
              v-model="infoData.switch_condition_diff"
              :disabled="!!infoData.protmode"
              :options="[
                { label: '4', value: 4 },
                { label: '5', value: 5 },
              ]"
            />
          </td>
        </tr>
      </table>
    </div>

    <div class="board-change-btns">
      <button class="def-btn" @click="refreshInfo">刷新</button>
      <button class="def-btn" @click="setInfo">应用</button>
      <button class="def-btn" @click="restoreDefaultInfo">恢复默认</button>
    </div>
  </div>
</template>

<script>
import mixins from "@/utils/mixins";
import CustomSelect from "@/components/custom-select";

export default {
  name: "olp",
  components: { CustomSelect },
  mixins: [mixins],
  data() {
    return {
      infoData: {
        boardname: "olp",
        type: "get_info",
        protmode: 0,
        forced_switching: 0,
        auto_switchback: 0,
        wtr_time: 1,
        main_line_alarm_thre: 0,
        slave_line_alarm_thre: 0,
        main_slave_initdiff: 0,
        switch_condition_diff: 0,
        work_state: 0,
        main_rx_signal_power: 0,
        slave_rx_signal_power: 0,
        local_rx_signal_power: 0,
      },
    };
  },
  filters: {
    signal(val) {
      if (val !== 0 && !val) return "NA";

      if (val < -30) {
        return "收光弱";
      } else if (val >= -30 && val <= 14) {
        return val + "dBm";
      } else {
        return "收光强";
      }
    },
  },
};
</script>
<style></style>
