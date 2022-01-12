<template>
  <div class="otu4x10g-cps-wrapper cps-wrapper">
    <div class="veneer-header-wrapper">ocp2x10g</div>

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
            <input class="def-input" v-if="$store.state.iSuper" type="text" v-model="veneerTitleData.sn" />

            <template v-else>
              {{ veneerTitleData.sn }}
            </template>
          </td>
          <td>版型号</td>
          <td>{{ veneerTitleData.bdtype }}</td>
        </tr>
        <tr>
          <td>设备类型</td>
          <td>{{ veneerTitleData.device_type }}</td>
          <td>状态</td>
          <td>{{ veneerTitleData.status ? "告警" : "正常" }}</td>
          <td>信息描述</td>
          <td><input class="def-input" type="text" v-model="veneerTitleData.desc" /></td>
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
            <td></td>
            <td>
              <div class="coll-3">通道1</div>
            </td>
            <td></td>
            <td></td>
            <td>
              <div class="coll-3">通道2</div>
            </td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>端口</td>
            <td>Clinet</td>
            <td>Pri-Line</td>
            <td>Sec-Line</td>
            <td>Pri-Line</td>
            <td>Clinet</td>
            <td>Sec-Line</td>
          </tr>
        </thead>

        <tr>
          <td>在位状态</td>
          <td>{{ veneerInfoData[0].link_status.client ? "在位" : "脱位" }}</td>
          <td>{{ veneerInfoData[0].link_status.Pri_Line ? "在位" : "脱位" }}</td>
          <td>{{ veneerInfoData[0].link_status.Sec_Line ? "在位" : "脱位" }}</td>
          <td>{{ veneerInfoData[1].link_status.client ? "在位" : "脱位" }}</td>
          <td>{{ veneerInfoData[1].link_status.Pri_Line ? "在位" : "脱位" }}</td>
          <td>{{ veneerInfoData[1].link_status.Sec_Line ? "在位" : "脱位" }}</td>
        </tr>
        <tr>
          <td>LINK状态</td>
          <td>{{ veneerInfoData[0].link_status.client ? (veneerInfoData[0].los.client ? "DOWN" : "UP") : "NA" }}</td>
          <td>{{ veneerInfoData[0].link_status.Pri_Line ? (veneerInfoData[0].los.Pri_Line ? "DOWN" : "UP") : "NA" }}</td>
          <td>{{ veneerInfoData[0].link_status.Sec_Line ? (veneerInfoData[0].los.Sec_Line ? "DOWN" : "UP") : "NA" }}</td>
          <td>{{ veneerInfoData[1].link_status.client ? (veneerInfoData[1].los.client ? "DOWN" : "UP") : "NA" }}</td>
          <td>{{ veneerInfoData[1].link_status.Pri_Line ? (veneerInfoData[1].los.Pri_Line ? "DOWN" : "UP") : "NA" }}</td>
          <td>{{ veneerInfoData[1].link_status.Sec_Line ? (veneerInfoData[1].los.Sec_Line ? "DOWN" : "UP") : "NA" }}</td>
        </tr>
        <tr>
          <td>工作模式</td>
          <td>
            <div class="coll-3">
              <select v-model="veneerInfoData[0].work_mode">
                <option :value="0">主</option>
                <option :value="1">备</option>
              </select>
            </div>
          </td>
          <td></td>
          <td></td>
          <td>
            <div class="coll-3">
              <select v-model="veneerInfoData[1].work_mode">
                <option :value="0">主</option>
                <option :value="1">备</option>
              </select>
            </div>
          </td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>波长（nm）</td>
          <td>{{ veneerInfoData[0].link_status.client ? veneerInfoData[0].wave_len.client : "NA" }}</td>
          <td>{{ veneerInfoData[0].link_status.Pri_Line ? veneerInfoData[0].wave_len.Pri_Line : "NA" }}</td>
          <td>{{ veneerInfoData[0].link_status.Sec_Line ? veneerInfoData[0].wave_len.Sec_Line : "NA" }}</td>
          <td>{{ veneerInfoData[1].link_status.client ? veneerInfoData[1].wave_len.client : "NA" }}</td>
          <td>{{ veneerInfoData[1].link_status.Pri_Line ? veneerInfoData[1].wave_len.Pri_Line : "NA" }}</td>
          <td>{{ veneerInfoData[1].link_status.Sec_Line ? veneerInfoData[1].wave_len.Sec_Line : "NA" }}</td>
        </tr>
        <tr>
          <td>距离（km）</td>
          <td>{{ veneerInfoData[0].link_status.client ? veneerInfoData[0].launch_range.client : "NA" }}</td>
          <td>{{ veneerInfoData[0].link_status.Pri_Line ? veneerInfoData[0].launch_range.Pri_Line : "NA" }}</td>
          <td>{{ veneerInfoData[0].link_status.Sec_Line ? veneerInfoData[0].launch_range.Sec_Line : "NA" }}</td>
          <td>{{ veneerInfoData[1].link_status.client ? veneerInfoData[1].launch_range.client : "NA" }}</td>
          <td>{{ veneerInfoData[1].link_status.Pri_Line ? veneerInfoData[1].launch_range.Pri_Line : "NA" }}</td>
          <td>{{ veneerInfoData[1].link_status.Sec_Line ? veneerInfoData[1].launch_range.Sec_Line : "NA" }}</td>
        </tr>
        <tr>
          <td>发射光功率（dBm）</td>
          <td>{{ veneerInfoData[0].link_status.client ? veneerInfoData[0].launch_power.client : "NA" }}</td>
          <td>{{ veneerInfoData[0].link_status.Pri_Line ? veneerInfoData[0].launch_power.Pri_Line : "NA" }}</td>
          <td>{{ veneerInfoData[0].link_status.Sec_Line ? veneerInfoData[0].launch_power.Sec_Line : "NA" }}</td>
          <td>{{ veneerInfoData[1].link_status.client ? veneerInfoData[1].launch_power.client : "NA" }}</td>
          <td>{{ veneerInfoData[1].link_status.Pri_Line ? veneerInfoData[1].launch_power.Pri_Line : "NA" }}</td>
          <td>{{ veneerInfoData[1].link_status.Sec_Line ? veneerInfoData[1].launch_power.Sec_Line : "NA" }}</td>
        </tr>
        <tr>
          <td>接受光功率（dBm）</td>
          <td>{{ veneerInfoData[0].link_status.client ? veneerInfoData[0].rcv_power.client : "NA" }}</td>
          <td>{{ veneerInfoData[0].link_status.Pri_Line ? veneerInfoData[0].rcv_power.Pri_Line : "NA" }}</td>
          <td>{{ veneerInfoData[0].link_status.Sec_Line ? veneerInfoData[0].rcv_power.Sec_Line : "NA" }}</td>
          <td>{{ veneerInfoData[1].link_status.client ? veneerInfoData[1].rcv_power.client : "NA" }}</td>
          <td>{{ veneerInfoData[1].link_status.Pri_Line ? veneerInfoData[1].rcv_power.Pri_Line : "NA" }}</td>
          <td>{{ veneerInfoData[1].link_status.Sec_Line ? veneerInfoData[1].rcv_power.Sec_Line : "NA" }}</td>
        </tr>
        <tr>
          <td>电压（V）</td>
          <td>{{ veneerInfoData[0].link_status.client ? veneerInfoData[0].voltage.client : "NA" }}</td>
          <td>{{ veneerInfoData[0].link_status.Pri_Line ? veneerInfoData[0].voltage.Pri_Line : "NA" }}</td>
          <td>{{ veneerInfoData[0].link_status.Sec_Line ? veneerInfoData[0].voltage.Sec_Line : "NA" }}</td>
          <td>{{ veneerInfoData[1].link_status.client ? veneerInfoData[1].voltage.client : "NA" }}</td>
          <td>{{ veneerInfoData[1].link_status.Pri_Line ? veneerInfoData[1].voltage.Pri_Line : "NA" }}</td>
          <td>{{ veneerInfoData[1].link_status.Sec_Line ? veneerInfoData[1].voltage.Sec_Line : "NA" }}</td>
        </tr>
        <tr>
          <td>偏置电流（dBm）</td>
          <td>{{ veneerInfoData[0].link_status.client ? veneerInfoData[0].current.client : "NA" }}</td>
          <td>{{ veneerInfoData[0].link_status.Pri_Line ? veneerInfoData[0].current.Pri_Line : "NA" }}</td>
          <td>{{ veneerInfoData[0].link_status.Sec_Line ? veneerInfoData[0].current.Sec_Line : "NA" }}</td>
          <td>{{ veneerInfoData[1].link_status.client ? veneerInfoData[1].current.client : "NA" }}</td>
          <td>{{ veneerInfoData[1].link_status.Pri_Line ? veneerInfoData[1].current.Pri_Line : "NA" }}</td>
          <td>{{ veneerInfoData[1].link_status.Sec_Line ? veneerInfoData[1].current.Sec_Line : "NA" }}</td>
        </tr>
        <tr>
          <td>温度（℃）</td>
          <td>{{ veneerInfoData[0].link_status.client ? veneerInfoData[0].temp.client : "NA" }}</td>
          <td>{{ veneerInfoData[0].link_status.Pri_Line ? veneerInfoData[0].temp.Pri_Line : "NA" }}</td>
          <td>{{ veneerInfoData[0].link_status.Sec_Line ? veneerInfoData[0].temp.Sec_Line : "NA" }}</td>
          <td>{{ veneerInfoData[1].link_status.client ? veneerInfoData[1].temp.client : "NA" }}</td>
          <td>{{ veneerInfoData[1].link_status.Pri_Line ? veneerInfoData[1].temp.Pri_Line : "NA" }}</td>
          <td>{{ veneerInfoData[1].link_status.Sec_Line ? veneerInfoData[1].temp.Sec_Line : "NA" }}</td>
        </tr>
        <tr>
          <td>预留1</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>激光器开关</td>
          <td>
            <select v-if="veneerInfoData[0].link_status.client" v-model="veneerInfoData[0].tx_disable.client">
              <option :value="0">关</option>
              <option :value="1">开</option>
            </select>

            <template v-else>NA</template>
          </td>
          <td>
            <select v-if="veneerInfoData[0].link_status.Pri_Line" v-model="veneerInfoData[0].tx_disable.client">
              <option :value="0">关</option>
              <option :value="1">开</option>
            </select>

            <template v-else>NA</template>
          </td>
          <td>
            <select v-if="veneerInfoData[0].link_status.Sec_Line" v-model="veneerInfoData[0].tx_disable.client">
              <option :value="0">关</option>
              <option :value="1">开</option>
            </select>

            <template v-else>NA</template>
          </td>
          <td>
            <select v-if="veneerInfoData[1].link_status.client" v-model="veneerInfoData[1].tx_disable.client">
              <option :value="0">关</option>
              <option :value="1">开</option>
            </select>

            <template v-else>NA</template>
          </td>
          <td>
            <select v-if="veneerInfoData[1].link_status.Pri_Line" v-model="veneerInfoData[1].tx_disable.client">
              <option :value="0">关</option>
              <option :value="1">开</option>
            </select>

            <template v-else>NA</template>
          </td>
          <td>
            <select v-if="veneerInfoData[1].link_status.Sec_Line" v-model="veneerInfoData[1].tx_disable.client">
              <option :value="0">关</option>
              <option :value="1">开</option>
            </select>

            <template v-else>NA</template>
          </td>
        </tr>
        <tr>
          <td>速率（Mbps）</td>
          <td>
            <div class="coll-3">
              <select v-if="veneerTitleData.bdtype === '10G-OCPL'" v-model="veneerInfoData[0].speed">
                <option :value="1">FC(包含2G、4G、8G、10G)</option>
                <option :value="2">CPRIX(X值为3，5，6，7)</option>
                <option :value="3">CPRIX(X值为3，5，7，8)</option>
                <option :value="4">OTU1/OTU1e</option>
                <option :value="5">OTU2/OTU2e</option>
                <option :value="6">OTU1f/OTU2f</option>
                <option :value="7">GE/10GE</option>
                <option :value="8">STM-16/64</option>
                <option :value="9">FE(旁路)</option>
              </select>

              <select v-else v-model="veneerInfoData[0].speed"> </select>
            </div>
          </td>
          <td></td>
          <td></td>
          <td>
            <div class="coll-3">
              <select v-if="veneerTitleData.bdtype === '10G-OCPL'" v-model="veneerInfoData[1].speed">
                <option :value="1">FC(包含2G、4G、8G、10G)</option>
                <option :value="2">CPRIX(X值为3，5，6，7)</option>
                <option :value="3">CPRIX(X值为3，5，7，8)</option>
                <option :value="4">OTU1/OTU1e</option>
                <option :value="5">OTU2/OTU2e</option>
                <option :value="6">OTU1f/OTU2f</option>
                <option :value="7">GE/10GE</option>
                <option :value="8">STM-16/64</option>
                <option :value="9">FE(旁路)</option>
              </select>

              <select v-else v-model="veneerInfoData[1].speed"> </select>
            </div>
          </td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>主备线路初始功率差（dB）</td>
          <td>
            <div class="coll-3">
              {{ veneerInfoData[0].init_power }}
            </div>
          </td>
          <td></td>
          <td></td>
          <td>
            <div class="coll-3">
              {{ veneerInfoData[1].init_power }}
            </div>
          </td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>倒换条件差值（dB）</td>
          <td>
            <div class="coll-3">
              <CustomSelect
                v-model="veneerInfoData[0].Switch_channel"
                :options="[
                  { label: '3', value: 3 },
                  { label: '4', value: 4 },
                  { label: '5', value: 5 },
                ]"
              />
            </div>
          </td>
          <td></td>
          <td></td>
          <td>
            <div class="coll-3">
              <CustomSelect
                v-model="veneerInfoData[1].Switch_channel"
                :options="[
                  { label: '3', value: 3 },
                  { label: '4', value: 4 },
                  { label: '5', value: 5 },
                ]"
              />
            </div>
          </td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>保护模式</td>
          <td>
            <div class="coll-3">
              <select v-model="veneerInfoData[0].work_road">
                <option :value="0">自动</option>
                <option :value="1">手动</option>
              </select>
            </div>
          </td>
          <td></td>
          <td></td>
          <td>
            <div class="coll-3">
              <select v-model="veneerInfoData[1].work_road">
                <option :value="0">自动</option>
                <option :value="1">手动</option>
              </select>
            </div>
          </td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>强制倒换</td>
          <td>
            <div class="coll-3">
              <select v-model="veneerInfoData[0].Switch">
                <option :value="0">强制11连接13</option>
                <option :value="1">强制12连接13</option>
              </select>
            </div>
          </td>
          <td></td>
          <td></td>
          <td>
            <div class="coll-3">
              <select v-model="veneerInfoData[1].Switch">
                <option :value="0">强制11连接13</option>
                <option :value="1">强制12连接13</option>
              </select>
            </div>
          </td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>是否自动回切</td>
          <td>
            <div class="coll-3">
              <select v-model="veneerInfoData[0].enback_back">
                <option :value="0">是</option>
                <option :value="1">否</option>
              </select>
            </div>
          </td>
          <td></td>
          <td></td>
          <td>
            <div class="coll-3">
              <select v-model="veneerInfoData[1].enback_back">
                <option :value="0">是</option>
                <option :value="1">否</option>
              </select>
            </div>
          </td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>回切WTR时间（s）</td>
          <td>
            <div class="coll-3">
              <CustomSelect
                v-model="veneerInfoData[0].enback_back_delay"
                :options="[
                  { label: '5', value: 5 },
                  { label: '10', value: 10 },
                  { label: '15', value: 15 },
                ]"
              />
            </div>
          </td>
          <td></td>
          <td></td>
          <td>
            <div class="coll-3">
              <CustomSelect
                v-model="veneerInfoData[1].enback_back_delay"
                :options="[
                  { label: '5', value: 5 },
                  { label: '10', value: 10 },
                  { label: '15', value: 15 },
                ]"
              />
            </div>
          </td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>接收光功率过低阈值（dBm）</td>
          <td>
            <input v-if="veneerInfoData[0].link_status.client" type="text" class="def-input" v-model.number="veneerInfoData[0].rcv_thr_L.client" />
            <template v-else>NA</template>
          </td>
          <td>
            <input v-if="veneerInfoData[0].link_status.Pri_Line" type="text" class="def-input" v-model.number="veneerInfoData[0].rcv_thr_L.Pri_Line" />
            <template v-else>NA</template>
          </td>
          <td>
            <input v-if="veneerInfoData[0].link_status.Sec_Line" type="text" class="def-input" v-model.number="veneerInfoData[0].rcv_thr_L.Sec_Line" />
            <template v-else>NA</template>
          </td>
          <td>
            <input v-if="veneerInfoData[1].link_status.client" type="text" class="def-input" v-model.number="veneerInfoData[1].rcv_thr_L.client" />
            <template v-else>NA</template>
          </td>
          <td>
            <input v-if="veneerInfoData[1].link_status.Pri_Line" type="text" class="def-input" v-model.number="veneerInfoData[1].rcv_thr_L.Pri_Line" />
            <template v-else>NA</template>
          </td>
          <td>
            <input v-if="veneerInfoData[1].link_status.Sec_Line" type="text" class="def-input" v-model.number="veneerInfoData[1].rcv_thr_L.Sec_Line" />
            <template v-else>NA</template>
          </td>
        </tr>
        <tr>
          <td>接收光功率过载阈值（dBm）</td>
          <td>
            <input v-if="veneerInfoData[0].link_status.client" type="text" class="def-input" v-model.number="veneerInfoData[0].rcv_thr_H.client" />
            <template v-else>NA</template>
          </td>
          <td>
            <input v-if="veneerInfoData[0].link_status.Pri_Line" type="text" class="def-input" v-model.number="veneerInfoData[0].rcv_thr_H.Pri_Line" />
            <template v-else>NA</template>
          </td>
          <td>
            <input v-if="veneerInfoData[0].link_status.Sec_Line" type="text" class="def-input" v-model.number="veneerInfoData[0].rcv_thr_H.Sec_Line" />
            <template v-else>NA</template>
          </td>
          <td>
            <input v-if="veneerInfoData[1].link_status.client" type="text" class="def-input" v-model.number="veneerInfoData[1].rcv_thr_H.client" />
            <template v-else>NA</template>
          </td>
          <td>
            <input v-if="veneerInfoData[1].link_status.Pri_Line" type="text" class="def-input" v-model.number="veneerInfoData[1].rcv_thr_H.Pri_Line" />
            <template v-else>NA</template>
          </td>
          <td>
            <input v-if="veneerInfoData[1].link_status.Sec_Line" type="text" class="def-input" v-model.number="veneerInfoData[1].rcv_thr_H.Sec_Line" />
            <template v-else>NA</template>
          </td>
        </tr>
        <tr>
          <td>发送光功率过低阈值（dBm）</td>
          <td>
            <input v-if="veneerInfoData[0].link_status.client" type="text" class="def-input" v-model.number="veneerInfoData[0].tx_thr_L.client" />
            <template v-else>NA</template>
          </td>
          <td>
            <input v-if="veneerInfoData[0].link_status.Pri_Line" type="text" class="def-input" v-model.number="veneerInfoData[0].tx_thr_L.Pri_Line" />
            <template v-else>NA</template>
          </td>
          <td>
            <input v-if="veneerInfoData[0].link_status.Sec_Line" type="text" class="def-input" v-model.number="veneerInfoData[0].tx_thr_L.Sec_Line" />
            <template v-else>NA</template>
          </td>
          <td>
            <input v-if="veneerInfoData[1].link_status.client" type="text" class="def-input" v-model.number="veneerInfoData[1].tx_thr_L.client" />
            <template v-else>NA</template>
          </td>
          <td>
            <input v-if="veneerInfoData[1].link_status.Pri_Line" type="text" class="def-input" v-model.number="veneerInfoData[1].tx_thr_L.Pri_Line" />
            <template v-else>NA</template>
          </td>
          <td>
            <input v-if="veneerInfoData[1].link_status.Sec_Line" type="text" class="def-input" v-model.number="veneerInfoData[1].tx_thr_L.Sec_Line" />
            <template v-else>NA</template>
          </td>
        </tr>
        <tr>
          <td>发送光功率过载阈值（dBm）</td>
          <td>
            <input v-if="veneerInfoData[0].link_status.client" type="text" class="def-input" v-model.number="veneerInfoData[0].tx_thr_H.client" />
            <template v-else>NA</template>
          </td>
          <td>
            <input v-if="veneerInfoData[0].link_status.Pri_Line" type="text" class="def-input" v-model.number="veneerInfoData[0].tx_thr_H.Pri_Line" />
            <template v-else>NA</template>
          </td>
          <td>
            <input v-if="veneerInfoData[0].link_status.Sec_Line" type="text" class="def-input" v-model.number="veneerInfoData[0].tx_thr_H.Sec_Line" />
            <template v-else>NA</template>
          </td>
          <td>
            <input v-if="veneerInfoData[1].link_status.client" type="text" class="def-input" v-model.number="veneerInfoData[1].tx_thr_H.client" />
            <template v-else>NA</template>
          </td>
          <td>
            <input v-if="veneerInfoData[1].link_status.Pri_Line" type="text" class="def-input" v-model.number="veneerInfoData[1].tx_thr_H.Pri_Line" />
            <template v-else>NA</template>
          </td>
          <td>
            <input v-if="veneerInfoData[1].link_status.Sec_Line" type="text" class="def-input" v-model.number="veneerInfoData[1].tx_thr_H.Sec_Line" />
            <template v-else>NA</template>
          </td>
        </tr>
        <tr>
          <td>预留2</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>预留3</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </table>
    </div>

    <div class="venner-change-btns">
      <button class="def-btn" :disabled="refreshInfoDisabled" @click="refreshInfo">刷新</button>
      <button class="def-btn" :disabled="setInfoDisabled" @click="setInfo">应用</button>
      <button class="def-btn" :disabled="restorInfoDisabled" @click="restorInfo">复位</button>
      <button class="def-btn" :disabled="restoreDefaultInfoDisabled" @click="restoreDefaultInfo">恢复默认</button>
    </div>
  </div>
</template>

<script>
import CustomSelect from "../../components/custom-select";

export default {
  name: "ocp10g",
  props: ["info", "visible"],
  components: { CustomSelect },
  data() {
    return {
      veneerTitleData: {
        bdtype: "",
        desc: "",
        device_type: "",
        h_rev: "",
        mfgdate: "",
        p_rev: "",
        s_rev: "",
        sn: "",
        status: null,
      },
      veneerInfoData: new Array(2).fill({
        channel: 0,
        link_status: {
          client: 0,
          Pri_Line: 0,
          Sec_Line: 0,
        },
        los: {
          client: 0,
          Pri_Line: 0,
          Sec_Line: 0,
        },
        speed: 0,
        init_power: 0,
        Switch_channel: 0,
        Switch: 0,
        work_mode: 0,
        enable_back: 0,
        work_road: 0,
        enable_back_delay: 0,
        atu_to_hand_delay: 0,
        tx_disable: {
          client: 0,
          Pri_Line: 0,
          Sec_Line: 0,
        },
        launch_range: {
          client: 0,
          Pri_Line: 0,
          Sec_Line: 0,
        },
        rcv_thr_H: {
          client: 0,
          Pri_Line: 0,
          Sec_Line: 0,
        },
        rcv_thr_L: {
          client: 0,
          Pri_Line: 0,
          Sec_Line: 0,
        },
        tx_thr_H: {
          client: 0,
          Pri_Line: 0,
          Sec_Line: 0,
        },
        tx_thr_L: {
          client: 0,
          Pri_Line: 0,
          Sec_Line: 0,
        },
        wave_channel: {
          client: 0,
          Pri_Line: 0,
          Sec_Line: 0,
        },
        wave_len: {
          client: "",
          Pri_Line: "",
          Sec_Line: "",
        },
        launch_power: {
          client: "",
          Pri_Line: "",
          Sec_Line: "",
        },
        rcv_power: {
          client: "",
          Pri_Line: "",
          Sec_Line: "",
        },
        voltage: {
          client: "",
          Pri_Line: "",
          Sec_Line: "",
        },
        current: {
          client: "",
          Pri_Line: "",
          Sec_Line: "",
        },
        temp: {
          client: "",
          Pri_Line: "",
          Sec_Line: "",
        },
      }),
      refreshTitleDisabled: false,
      setTilteDisabled: false,
      refreshInfoDisabled: false,
      setInfoDisabled: false,
      restorInfoDisabled: false,
      restoreDefaultInfoDisabled: false,
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
    getVeneerDetail(slot) {
      this.getVeneerTitle(slot)
        .then((res) => {
          this.veneerTitleData = res.otn2000_ack;

          return this.getVeneerInfo(slot);
        })
        .then((res = { otn2000_ack: { channels: [] } }) => {
          this.veneerInfoData = res.otn2000_ack.channels || [];
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
      this.refreshTitleDisabled = true;

      this.$http
        .post(data)
        .then(() => {
          return this.getVeneerTitle();
        })
        .then((res) => {
          this.$message("成功");
          this.setTilteDisabled = false;
          this.refreshTitleDisabled = false;
          this.veneerTitleData = res.otn2000_ack;
        })
        .catch(() => {
          this.veneerTitleData.desc = "";
          this.$message("失败");
          this.refreshTitleDisabled = false;
          this.setTilteDisabled = false;
        });
    },
    refreshInfo() {
      this.refreshInfoDisabled = true;
      this.getVeneerInfo(this.info.slot)
        .then((res) => {
          this.veneerInfoData = res.otn2000_ack.channels;

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
      const data = { otn2000: { type: "post_info", boardname, slot, channels: this.veneerInfoData } };
      this.setInfoDisabled = true;
      this.refreshInfoDisabled = true;

      this.$http
        .post(data)
        .then(() => {
          return this.getVeneerInfo();
        })
        .then((res = { otn2000_ack: { channels: [] } }) => {
          this.$message("成功");
          this.setInfoDisabled = false;
          this.refreshInfoDisabled = false;
          this.veneerInfoData = res.otn2000_ack.channels || [];
        })
        .catch(() => {
          this.$message("失败");
          this.refreshInfoDisabled = false;
          this.setInfoDisabled = false;
        });
    },
    restoreDefaultInfo() {
      const { boardname, slot } = this.info;
      const data = { otn2000: { type: "default", boardname, slot } };
      this.restoreDefaultInfoDisabled = true;

      this.$http
        .post(data)
        .then(() => {
          return this.getVeneerInfo();
        })
        .then((res = { otn2000_ack: { channels: [] } }) => {
          this.$message("成功");
          this.refreshInfoDisabled = false;
          this.setInfoDisabled = false;
          this.restorInfoDisabled = false;
          this.restoreDefaultInfoDisabled = false;
          this.veneerInfoData = res.otn2000_ack.channels || [];
        })
        .catch((err) => {
          console.log(err);
          this.$message("失败");
          this.refreshInfoDisabled = false;
          this.setInfoDisabled = false;
          this.restorInfoDisabled = false;
          this.restoreDefaultInfoDisabled = false;
        });
    },
    restorInfo() {
      const { boardname, slot } = this.info;
      const data = { otn2000: { type: "reset", boardname, slot } };
      this.restorInfoDisabled = true;

      this.$http
        .post(data)
        .then(() => {
          return this.getVeneerInfo();
        })
        .then((res = { otn2000_ack: { channels: [] } }) => {
          this.$message("成功");
          this.refreshInfoDisabled = false;
          this.setInfoDisabled = false;
          this.restorInfoDisabled = false;
          this.restoreDefaultInfoDisabled = false;
          this.veneerInfoData = res.otn2000_ack.channels || [];
        })
        .catch((err) => {
          console.log(err);
          this.$message("失败");
          this.refreshInfoDisabled = false;
          this.setInfoDisabled = false;
          this.restorInfoDisabled = false;
          this.restoreDefaultInfoDisabled = false;
        });
    },
  },
};
</script>
