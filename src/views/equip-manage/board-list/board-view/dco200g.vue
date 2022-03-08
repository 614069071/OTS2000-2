<template>
  <div class="otucfpdco200g-cps-wrapper cps-wrapper">
    <div class="board-table-container">
      <table class="board-table" border="1">
        <thead>
          <tr>
            <td></td>
            <td>
              <div class="coll-4">QSFP28模块1</div>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <div class="coll-4">QSFP28模块2</div>
            </td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>通道</td>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
          </tr>
        </thead>

        <tr>
          <td>在位状态</td>
          <td>
            <div class="coll-4">{{ infoData.QSFP1.link_status ? "在位" : "脱位" }}</div>
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <div class="coll-4">{{ infoData.QSFP2.link_status ? "在位" : "脱位" }}</div>
          </td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>LINK状态</td>
          <td>{{ infoData.QSFP1.link_status ? (infoData.QSFP1.channel1.los ? "DOWN" : "UP") : "NA" }}</td>
          <td>{{ infoData.QSFP1.link_status ? (infoData.QSFP1.channel2.los ? "DOWN" : "UP") : "NA" }}</td>
          <td>{{ infoData.QSFP1.link_status ? (infoData.QSFP1.channel3.los ? "DOWN" : "UP") : "NA" }}</td>
          <td>{{ infoData.QSFP1.link_status ? (infoData.QSFP1.channel4.los ? "DOWN" : "UP") : "NA" }}</td>
          <td>{{ infoData.QSFP2.link_status ? (infoData.QSFP2.channel1.los ? "DOWN" : "UP") : "NA" }}</td>
          <td>{{ infoData.QSFP2.link_status ? (infoData.QSFP2.channel2.los ? "DOWN" : "UP") : "NA" }}</td>
          <td>{{ infoData.QSFP2.link_status ? (infoData.QSFP2.channel3.los ? "DOWN" : "UP") : "NA" }}</td>
          <td>{{ infoData.QSFP2.link_status ? (infoData.QSFP2.channel4.los ? "DOWN" : "UP") : "NA" }}</td>
        </tr>
        <tr>
          <td>距离（km）</td>
          <td>
            <div class="coll-4">{{ infoData.QSFP1.link_status ? infoData.QSFP1.launch_range : "NA" }}</div>
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <div class="coll-4">{{ infoData.QSFP2.link_status ? infoData.QSFP2.launch_range : "NA" }}</div>
          </td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>波长（nm）</td>
          <td>
            <div class="coll-4">{{ infoData.QSFP1.link_status ? infoData.QSFP1.wave_len : "NA" }}</div>
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <div class="coll-4">{{ infoData.QSFP2.link_status ? infoData.QSFP2.wave_len : "NA" }}</div>
          </td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>发射光功率（dBm）</td>
          <td>{{ infoData.QSFP1.link_status ? infoData.QSFP1.channel1.launch_power : "NA" }}</td>
          <td>{{ infoData.QSFP1.link_status ? infoData.QSFP1.channel2.launch_power : "NA" }}</td>
          <td>{{ infoData.QSFP1.link_status ? infoData.QSFP1.channel3.launch_power : "NA" }}</td>
          <td>{{ infoData.QSFP1.link_status ? infoData.QSFP1.channel4.launch_power : "NA" }}</td>
          <td>{{ infoData.QSFP2.link_status ? infoData.QSFP2.channel1.launch_power : "NA" }}</td>
          <td>{{ infoData.QSFP2.link_status ? infoData.QSFP2.channel2.launch_power : "NA" }}</td>
          <td>{{ infoData.QSFP2.link_status ? infoData.QSFP2.channel3.launch_power : "NA" }}</td>
          <td>{{ infoData.QSFP2.link_status ? infoData.QSFP2.channel4.launch_power : "NA" }}</td>
        </tr>
        <tr>
          <td>接收光功率（dBm）</td>
          <td>{{ infoData.QSFP1.link_status ? infoData.QSFP1.channel1.rcv_power : "NA" }}</td>
          <td>{{ infoData.QSFP1.link_status ? infoData.QSFP1.channel2.rcv_power : "NA" }}</td>
          <td>{{ infoData.QSFP1.link_status ? infoData.QSFP1.channel3.rcv_power : "NA" }}</td>
          <td>{{ infoData.QSFP1.link_status ? infoData.QSFP1.channel4.rcv_power : "NA" }}</td>
          <td>{{ infoData.QSFP2.link_status ? infoData.QSFP2.channel1.rcv_power : "NA" }}</td>
          <td>{{ infoData.QSFP2.link_status ? infoData.QSFP2.channel2.rcv_power : "NA" }}</td>
          <td>{{ infoData.QSFP2.link_status ? infoData.QSFP2.channel3.rcv_power : "NA" }}</td>
          <td>{{ infoData.QSFP2.link_status ? infoData.QSFP2.channel4.rcv_power : "NA" }}</td>
        </tr>
        <tr>
          <td>偏置电流（mA）</td>
          <td>{{ infoData.QSFP1.link_status ? infoData.QSFP1.channel1.current : "NA" }}</td>
          <td>{{ infoData.QSFP1.link_status ? infoData.QSFP1.channel2.current : "NA" }}</td>
          <td>{{ infoData.QSFP1.link_status ? infoData.QSFP1.channel3.current : "NA" }}</td>
          <td>{{ infoData.QSFP1.link_status ? infoData.QSFP1.channel4.current : "NA" }}</td>
          <td>{{ infoData.QSFP2.link_status ? infoData.QSFP2.channel1.current : "NA" }}</td>
          <td>{{ infoData.QSFP2.link_status ? infoData.QSFP2.channel2.current : "NA" }}</td>
          <td>{{ infoData.QSFP2.link_status ? infoData.QSFP2.channel3.current : "NA" }}</td>
          <td>{{ infoData.QSFP2.link_status ? infoData.QSFP2.channel4.current : "NA" }}</td>
        </tr>
        <tr>
          <td>预留1</td>
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
          <td>电压（V）</td>
          <td>
            <div class="coll-4">{{ infoData.QSFP1.link_status ? infoData.QSFP1.voltage : "NA" }}</div>
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <div class="coll-4">{{ infoData.QSFP2.link_status ? infoData.QSFP2.voltage : "NA" }}</div>
          </td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>温度（℃）</td>
          <td>
            <div class="coll-4">{{ infoData.QSFP1.link_status ? infoData.QSFP1.temp : "NA" }}</div>
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <div class="coll-4">{{ infoData.QSFP2.link_status ? infoData.QSFP2.temp : "NA" }}</div>
          </td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>业务类型</td>
          <td>
            <div class="coll-4">
              <select v-if="infoData.QSFP1.link_status" v-model="infoData.QSFP1.Business_type" @change="changeBusTypeQsfp1">
                <option :value="0">100GE</option>
                <option :value="1">OTU4.4</option>
              </select>

              <template v-else>NA</template>
            </div>
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <div class="coll-4">
              <select v-if="infoData.QSFP2.link_status" v-model="infoData.QSFP2.Business_type" @change="changeBusTypeQsfp2">
                <option :value="0">100GE</option>
                <option :value="1">OTU4.4</option>
              </select>

              <template v-else>NA</template>
            </div>
          </td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>FEC模式</td>
          <td>
            <div class="coll-4">
              <select v-if="infoData.QSFP1.link_status" v-model="infoData.QSFP1.FEC_mode" @change="changeModeQsfp1">
                <option :value="0">无</option>
                <option :value="1">GFEC</option>
              </select>

              <template v-else>NA</template>
            </div>
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <div class="coll-4">
              <select v-if="infoData.QSFP2.link_status" v-model="infoData.QSFP2.FEC_mode" @change="changeModeQsfp2">
                <option :value="0">无</option>
                <option :value="1">GFEC</option>
              </select>

              <template v-else>NA</template>
            </div>
          </td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>激光器开关</td>
          <td>
            <div class="coll-4">
              <select v-if="infoData.QSFP1.link_status" v-model="infoData.QSFP1.tx_disable">
                <option :value="1">关</option>
                <option :value="0">开</option>
              </select>

              <template v-else>NA</template>
            </div>
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <div class="coll-4">
              <select v-if="infoData.QSFP2.link_status" v-model="infoData.QSFP2.tx_disable">
                <option :value="1">关</option>
                <option :value="0">开</option>
              </select>

              <template v-else>NA</template>
            </div>
          </td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>接受光功率过低阈值（dBm）</td>
          <td>
            <div class="coll-4">
              <input v-if="infoData.QSFP1.link_status" type="text" class="def-input" v-model.number="infoData.QSFP1.rcv_thr_L" />
              <template v-else>NA</template>
            </div>
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <div class="coll-4">
              <input v-if="infoData.QSFP2.link_status" type="text" class="def-input" v-model.number="infoData.QSFP2.rcv_thr_L" />
              <template v-else>NA</template>
            </div>
          </td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>接受光功率过载阈值（dBm）</td>
          <td>
            <div class="coll-4">
              <input v-if="infoData.QSFP1.link_status" type="text" class="def-input" v-model.number="infoData.QSFP1.rcv_thr_H" />
              <template v-else>NA</template>
            </div>
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <div class="coll-4">
              <input v-if="infoData.QSFP2.link_status" type="text" class="def-input" v-model.number="infoData.QSFP2.rcv_thr_H" />
              <template v-else>NA</template>
            </div>
          </td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>发送光功率过低阈值（dBm）</td>
          <td>
            <div class="coll-4">
              <input v-if="infoData.QSFP1.link_status" type="text" class="def-input" v-model.number="infoData.QSFP1.tx_thr_L" />
              <template v-else>NA</template>
            </div>
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <div class="coll-4">
              <input v-if="infoData.QSFP2.link_status" type="text" class="def-input" v-model.number="infoData.QSFP2.tx_thr_L" />
              <template v-else>NA</template>
            </div>
          </td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>发送光功率过载阈值（dBm）</td>
          <td>
            <div class="coll-4">
              <input v-if="infoData.QSFP1.link_status" type="text" class="def-input" v-model.number="infoData.QSFP1.tx_thr_H" />
              <template v-else>NA</template>
            </div>
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <div class="coll-4">
              <input v-if="infoData.QSFP2.link_status" type="text" class="def-input" v-model.number="infoData.QSFP2.tx_thr_H" />
              <template v-else>NA</template>
            </div>
          </td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </table>

      <div class="cfp2-title">CFP2</div>

      <table class="board-table board-title-table board-cfp2-table" border="1">
        <tr>
          <td>在位状态</td>
          <td>{{ infoData.CFP2.link_status ? "在位" : "脱位" }}</td>
          <!-- 新增字段 待设备添加 -->
          <td>CFP2状态</td>
          <td>
            {{ infoData.CFP2.cfp2_states | mapCfpState }}
            <!-- 初始化状态 低功耗状态 高功耗打开状态 高功耗关闭状态 发送禁止状态 发送打开状态 发送关闭状态 失效状态 Ready状态 -->
          </td>
          <!-- 新增字段 待设备添加 -->
          <td>OSNR(dB)</td>
          <td>{{ infoData.CFP2.link_status ? infoData.CFP2.signal_bit : "NA" }}</td>
        </tr>
        <tr>
          <td>发送光功率(dBm)</td>
          <td>
            <input
              v-if="infoData.CFP2.link_status"
              type="text"
              class="def-input"
              v-limit="{ key: 'infoData.CFP2.launch_power', min: 5, max: 8 }"
              v-model.number="infoData.CFP2.launch_power"
            /><template v-else>NA</template>
          </td>
          <td>接收光功率(dBm)</td>
          <td>{{ infoData.CFP2.link_status ? infoData.CFP2.rcv_power : "NA" }}</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>温度(℃)</td>
          <td>{{ infoData.CFP2.link_status ? infoData.CFP2.temp : "NA" }}</td>
          <td>电压(V)</td>
          <td>{{ infoData.CFP2.link_status ? infoData.CFP2.voltage : "NA" }}</td>
          <td>偏置电流(mA)</td>
          <td>{{ infoData.CFP2.link_status ? infoData.CFP2.current : "NA" }}</td>
        </tr>
        <tr>
          <td>接收光功率过低阈值(dBm)</td>
          <td>
            <input v-if="infoData.CFP2.link_status" type="text" class="def-input" v-model.number="infoData.CFP2.rcv_thr_L" />
            <template v-else>NA</template>
          </td>
          <td>接收光功率过载阈值(dBm)</td>
          <td>
            <input v-if="infoData.CFP2.link_status" type="text" class="def-input" v-model.number="infoData.CFP2.rcv_thr_H" />
            <template v-else>NA</template>
          </td>
          <td>发送光功率过低阈值(dBm)</td>
          <td>
            <input v-if="infoData.CFP2.link_status" type="text" class="def-input" v-model.number="infoData.CFP2.tx_thr_L" />
            <template v-else>NA</template>
          </td>
        </tr>
        <tr>
          <td>发送光功率过载阈值(dBm)</td>
          <td>
            <input v-if="infoData.CFP2.link_status" type="text" class="def-input" v-model.number="infoData.CFP2.tx_thr_H" />
            <template v-else>NA</template>
          </td>
          <td>激光器开关</td>
          <td>
            <select v-if="infoData.CFP2.link_status" v-model="infoData.CFP2.tx_disable">
              <option :value="1">关</option>
              <option :value="0">开</option>
            </select>

            <template v-else>NA</template>
          </td>
          <td>光通道</td>
          <td>
            <!-- <select >
              <option :value="0">C21-C60</option>
            </select> -->

            <input type="text" class="def-input" v-if="infoData.CFP2.link_status" v-model.number="infoData.CFP2.light_channel" />

            <template v-else>NA</template>
          </td>
        </tr>
        <tr>
          <td>调制模式</td>
          <td>
            <select v-if="infoData.CFP2.link_status" v-model="infoData.CFP2.Modulation_mode">
              <!-- 先默认一个 -->
              <option :value="0">DP-16QAM</option>

              <!-- 待根据不同模块做判断修改 -->
              <!-- <template v-if="infoData.CFP2.cfp2_type === 10"> </template>

              <template v-if="infoData.CFP2.cfp2_type == 0">
                <option :value="0">DP-QPSK</option>
                <option :value="1">16QAM</option>
                <option :value="2">DP-8QAM</option>
                <option :value="4">DP-64QAM</option>
              </template> -->
            </select>

            <template v-else>NA</template>
          </td>
          <td>FEC模式</td>
          <td>
            <select v-if="infoData.CFP2.link_status" v-model="infoData.CFP2.FEC_mode">
              <!-- 先默认一个 -->
              <option :value="0">无</option>
              <option :value="3">O-FEC</option>

              <!-- 待根据不同模块做判断修改 -->
              <!-- <template v-if="infoData.CFP2.cfp2_type === 10"></template>
              <template v-if="infoData.CFP2.cfp2_type === 0"></template>

              <option :value="1">SD-FEC</option>
              <option :value="2">HD-FEC</option>
              <option :value="4">C-FEC</option>
              <option :value="5">SC-FEC</option> -->
            </select>

            <template v-else>NA</template>
          </td>
          <td>环回控制</td>
          <td>
            <select v-if="infoData.CFP2.link_status" v-model="infoData.CFP2.loop">
              <!-- 待根据不同模块做判断修改 -->
              <!-- <template v-if="infoData.CFP2.cfp2_type === 10"></template>
              <template v-if="infoData.CFP2.cfp2_type == 0"></template> -->

              <option :value="0">无</option>
              <option :value="1">host环回</option>
              <option :value="2">Line环回</option>
              <option :value="3">host和Line同时环回</option>
            </select>

            <template v-else>NA</template>
          </td>
        </tr>
      </table>
    </div>

    <div class="board-change-btns">
      <button class="def-btn" :disabled="refreshInfoDisabled" @click="refreshGetInfo">刷新</button>
      <button class="def-btn" :disabled="setInfoDisabled" @click="setInfo">应用</button>
      <button class="def-btn" :disabled="restorInfoDisabled" @click="restorInfo">复位</button>
      <button class="def-btn" :disabled="restoreDefaultInfoDisabled" @click="restoreDefaultInfo">恢复默认</button>
    </div>
  </div>
</template>

<script>
import mixins from "@/utils/mixins";

export default {
  name: "dco200g",
  mixins: [mixins],
  data() {
    return {
      infoData: {
        boardname: "",
        type: "",
        QSFP1: {
          link_status: 0,
          launch_range: 0,
          wave_len: 0,
          voltage: 0,
          temp: 0,
          Business_type: 0,
          FEC_mode: 0,
          rcv_thr_H: 0,
          rcv_thr_L: 0,
          tx_thr_H: 0,
          tx_thr_L: 0,
          channel1: {
            los: 0,
            tx_disable: 0,
            launch_power: "",
            rcv_power: "",
            current: "",
          },
          channel2: {
            los: 0,
            tx_disable: 0,
            launch_power: "",
            rcv_power: "",
            current: "",
          },
          channel3: {
            los: 0,
            tx_disable: 0,
            launch_power: "",
            rcv_power: "",
            current: "",
          },
          channel4: {
            los: 0,
            tx_disable: 0,
            launch_power: "",
            rcv_power: "",
            current: "",
          },
        },
        QSFP2: {
          link_status: 0,
          launch_range: 0,
          wave_len: 0,
          voltage: 0,
          temp: 0,
          Business_type: 0,
          FEC_mode: 0,
          rcv_thr_H: 0,
          rcv_thr_L: 0,
          tx_thr_H: 0,
          tx_thr_L: 0,
          channel1: {
            los: 0,
            tx_disable: 0,
            launch_power: "",
            rcv_power: "",
            current: "",
          },
          channel2: {
            los: 0,
            tx_disable: 0,
            launch_power: "",
            rcv_power: "",
            current: "",
          },
          channel3: {
            los: 0,
            tx_disable: 0,
            launch_power: "",
            rcv_power: "",
            current: "",
          },
          channel4: {
            los: 0,
            tx_disable: 0,
            launch_power: "",
            rcv_power: "",
            current: "",
          },
        },
        CFP2: {
          link_status: 0,
          temp: "",
          voltage: "",
          current: "",
          launch_power: "",
          rcv_power: "",
          tx_disable: 0,
          light_channel: 0,
          Modulation_mode: 0,
          FEC_mode: 0,
          loop: 0,
        },
      },
    };
  },
  filters: {
    mapCfpState(v) {
      const state = [null, "初始化状态", "低功耗状态", "高功耗打开状态", "发送禁止状态", "发送打开状态", "Ready状态", "失效状态", "发送关闭状态", "高功耗关闭状态"];

      return state[v] || v;
    },
  },
  methods: {
    changeBusTypeQsfp1() {
      this.infoData.QSFP2.Business_type = this.infoData.QSFP1.Business_type;
    },
    changeBusTypeQsfp2() {
      this.infoData.QSFP1.Business_type = this.infoData.QSFP2.Business_type;
    },
    changeModeQsfp1() {
      this.infoData.QSFP2.FEC_mode = this.infoData.QSFP1.FEC_mode;
    },
    changeModeQsfp2() {
      this.infoData.QSFP1.FEC_mode = this.infoData.QSFP2.FEC_mode;
    },
  },
};
</script>

<style scoped lang="css">
.cfp2-title {
  height: 34px;
  line-height: 34px;
  border-left: 1px solid #e8e8e8;
  border-right: 1px solid #e8e8e8;
  text-align: center;
}

.board-cfp2-table {
  margin-top: 0;
}
</style>
