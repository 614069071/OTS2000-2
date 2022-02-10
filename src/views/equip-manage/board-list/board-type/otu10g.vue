<template>
  <div class="otu10g-cps-wrapper cps-wrapper">
    <div class="board-header-wrapper">
      <BoardOtu10g></BoardOtu10g>
    </div>
    <div class="board-table-title">
      <table class="board-table" border="1">
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
          <td>版型号</td>
          <td>{{ titeData.bdtype }}</td>
        </tr>
        <tr>
          <td>设备类型</td>
          <td>{{ titeData.device_type }}</td>
          <td>状态</td>
          <td>{{ titeData.status ? "告警" : "正常" }}</td>
          <td>信息描述</td>
          <td><input class="def-input" type="text" v-model="titeData.desc" /></td>
        </tr>
      </table>
    </div>

    <div class="board-change-btns">
      <button class="def-btn" :disabled="refreshTitleDisabled" @click="refreshTitle">刷新</button>
      <button class="def-btn" :disabled="setTilteDisabled" @click="setTilte">应用</button>
    </div>

    <div class="board-table-container">
      <table class="board-table" border="1">
        <thead>
          <tr>
            <td></td>
            <td>
              <div class="coll-2">通道1</div>
            </td>
            <td></td>
            <td>
              <div class="coll-2">通道2</div>
            </td>
            <td></td>
            <td>
              <div class="coll-2">通道3</div>
            </td>
            <td></td>
            <td>
              <div class="coll-2">通道4</div>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>端口</td>
            <td>Client</td>
            <td>Line</td>
            <td>Client</td>
            <td>Line</td>
            <td>Client</td>
            <td>Line</td>
            <td>Client</td>
            <td>Line</td>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>在位状态</td>
            <td>{{ infoData.channels[0].link_status.client ? "在位" : "脱位" }}</td>
            <td>{{ infoData.channels[0].link_status.line ? "在位" : "脱位" }}</td>
            <td>{{ infoData.channels[1].link_status.client ? "在位" : "脱位" }}</td>
            <td>{{ infoData.channels[1].link_status.line ? "在位" : "脱位" }}</td>
            <td>{{ infoData.channels[2].link_status.client ? "在位" : "脱位" }}</td>
            <td>{{ infoData.channels[2].link_status.line ? "在位" : "脱位" }}</td>
            <td>{{ infoData.channels[3].link_status.client ? "在位" : "脱位" }}</td>
            <td>{{ infoData.channels[3].link_status.line ? "在位" : "脱位" }}</td>
          </tr>
          <tr>
            <td>LINK状态</td>
            <td>{{ infoData.channels[0].link_status.client ? (infoData.channels[0].los.client ? "DOWN" : "UP") : "NA" }}</td>
            <td>{{ infoData.channels[0].link_status.line ? (infoData.channels[0].los.line ? "DOWN" : "UP") : "NA" }}</td>
            <td>{{ infoData.channels[1].link_status.client ? (infoData.channels[1].los.client ? "DOWN" : "UP") : "NA" }}</td>
            <td>{{ infoData.channels[1].link_status.line ? (infoData.channels[1].los.line ? "DOWN" : "UP") : "NA" }}</td>
            <td>{{ infoData.channels[2].link_status.client ? (infoData.channels[2].los.client ? "DOWN" : "UP") : "NA" }}</td>
            <td>{{ infoData.channels[2].link_status.line ? (infoData.channels[2].los.line ? "DOWN" : "UP") : "NA" }}</td>
            <td>{{ infoData.channels[3].link_status.client ? (infoData.channels[3].los.client ? "DOWN" : "UP") : "NA" }}</td>
            <td>{{ infoData.channels[3].link_status.line ? (infoData.channels[3].los.line ? "DOWN" : "UP") : "NA" }}</td>
          </tr>
          <tr>
            <td>属性</td>
            <td>{{ infoData.channels[0].link_status.client ? (infoData.channels[0].rw_type.client ? "读写" : "只读") : "NA" }}</td>
            <td>{{ infoData.channels[0].link_status.line ? (infoData.channels[0].rw_type.line ? "读写" : "只读") : "NA" }}</td>
            <td>{{ infoData.channels[1].link_status.client ? (infoData.channels[1].rw_type.client ? "读写" : "只读") : "NA" }}</td>
            <td>{{ infoData.channels[1].link_status.line ? (infoData.channels[1].rw_type.line ? "读写" : "只读") : "NA" }}</td>
            <td>{{ infoData.channels[2].link_status.client ? (infoData.channels[2].rw_type.client ? "读写" : "只读") : "NA" }}</td>
            <td>{{ infoData.channels[2].link_status.line ? (infoData.channels[2].rw_type.line ? "读写" : "只读") : "NA" }}</td>
            <td>{{ infoData.channels[3].link_status.client ? (infoData.channels[3].rw_type.client ? "读写" : "只读") : "NA" }}</td>
            <td>{{ infoData.channels[3].link_status.line ? (infoData.channels[3].rw_type.line ? "读写" : "只读") : "NA" }}</td>
          </tr>
          <tr>
            <td>波道</td>
            <td>NA</td>
            <td>
              <template v-if="infoData.channels[0].link_status.line">
                <input v-if="infoData.channels[0].rw_type.line" class="def-input" type="text" v-model.number="infoData.channels[0].wave_channel.line" />
                <template v-else>{{ infoData.channels[0].wave_channel.line }}</template>
              </template>
              <template v-else>NA</template>
            </td>
            <td>NA</td>
            <td>
              <template v-if="infoData.channels[1].link_status.line">
                <input v-if="infoData.channels[1].rw_type.line" class="def-input" type="text" v-model.number="infoData.channels[1].wave_channel.line" />
                <template v-else>{{ infoData.channels[1].wave_channel.line }}</template>
              </template>
              <template v-else>NA</template>
            </td>
            <td>NA</td>
            <td>
              <template v-if="infoData.channels[2].link_status.line">
                <input v-if="infoData.channels[2].rw_type.line" class="def-input" type="text" v-model.number="infoData.channels[2].wave_channel.line" />
                <template v-else>{{ infoData.channels[2].wave_channel.line }}</template>
              </template>
              <template v-else>NA</template>
            </td>
            <td>NA</td>
            <td>
              <template v-if="infoData.channels[3].link_status.line">
                <input v-if="infoData.channels[3].rw_type.line" class="def-input" type="text" v-model.number="infoData.channels[3].wave_channel.line" />
                <template v-else>{{ infoData.channels[3].wave_channel.line }}</template>
              </template>
              <template v-else>NA</template>
            </td>
          </tr>
          <tr>
            <td>波长（nm）</td>
            <td>{{ infoData.channels[0].link_status.client ? infoData.channels[0].wave_len.client : "NA" }}</td>
            <td>{{ infoData.channels[0].link_status.line ? infoData.channels[0].wave_len.line : "NA" }}</td>
            <td>{{ infoData.channels[1].link_status.client ? infoData.channels[1].wave_len.client : "NA" }}</td>
            <td>{{ infoData.channels[1].link_status.line ? infoData.channels[1].wave_len.line : "NA" }}</td>
            <td>{{ infoData.channels[2].link_status.client ? infoData.channels[2].wave_len.client : "NA" }}</td>
            <td>{{ infoData.channels[2].link_status.line ? infoData.channels[2].wave_len.line : "NA" }}</td>
            <td>{{ infoData.channels[3].link_status.client ? infoData.channels[3].wave_len.client : "NA" }}</td>
            <td>{{ infoData.channels[3].link_status.line ? infoData.channels[3].wave_len.line : "NA" }}</td>
          </tr>
          <tr>
            <td>距离（km）</td>
            <td>{{ infoData.channels[0].link_status.client ? infoData.channels[0].launch_range.client : "NA" }}</td>
            <td>{{ infoData.channels[0].link_status.line ? infoData.channels[0].launch_range.line : "NA" }}</td>
            <td>{{ infoData.channels[1].link_status.client ? infoData.channels[1].launch_range.client : "NA" }}</td>
            <td>{{ infoData.channels[1].link_status.line ? infoData.channels[1].launch_range.line : "NA" }}</td>
            <td>{{ infoData.channels[2].link_status.client ? infoData.channels[2].launch_range.client : "NA" }}</td>
            <td>{{ infoData.channels[2].link_status.line ? infoData.channels[2].launch_range.line : "NA" }}</td>
            <td>{{ infoData.channels[3].link_status.client ? infoData.channels[3].launch_range.client : "NA" }}</td>
            <td>{{ infoData.channels[3].link_status.line ? infoData.channels[3].launch_range.line : "NA" }}</td>
          </tr>
          <tr>
            <td>发射功率（dBm）</td>
            <td>{{ infoData.channels[0].link_status.client ? infoData.channels[0].launch_power.client : "NA" }}</td>
            <td>{{ infoData.channels[0].link_status.line ? infoData.channels[0].launch_power.line : "NA" }}</td>
            <td>{{ infoData.channels[1].link_status.client ? infoData.channels[1].launch_power.client : "NA" }}</td>
            <td>{{ infoData.channels[1].link_status.line ? infoData.channels[1].launch_power.line : "NA" }}</td>
            <td>{{ infoData.channels[2].link_status.client ? infoData.channels[2].launch_power.client : "NA" }}</td>
            <td>{{ infoData.channels[2].link_status.line ? infoData.channels[2].launch_power.line : "NA" }}</td>
            <td>{{ infoData.channels[3].link_status.client ? infoData.channels[3].launch_power.client : "NA" }}</td>
            <td>{{ infoData.channels[3].link_status.line ? infoData.channels[3].launch_power.line : "NA" }}</td>
          </tr>
          <tr>
            <td>接收功率（dBm）</td>
            <td>{{ infoData.channels[0].link_status.client ? infoData.channels[0].rcv_power.client : "NA" }}</td>
            <td>{{ infoData.channels[0].link_status.line ? infoData.channels[0].rcv_power.line : "NA" }}</td>
            <td>{{ infoData.channels[1].link_status.client ? infoData.channels[1].rcv_power.client : "NA" }}</td>
            <td>{{ infoData.channels[1].link_status.line ? infoData.channels[1].rcv_power.line : "NA" }}</td>
            <td>{{ infoData.channels[2].link_status.client ? infoData.channels[2].rcv_power.client : "NA" }}</td>
            <td>{{ infoData.channels[2].link_status.line ? infoData.channels[2].rcv_power.line : "NA" }}</td>
            <td>{{ infoData.channels[3].link_status.client ? infoData.channels[3].rcv_power.client : "NA" }}</td>
            <td>{{ infoData.channels[3].link_status.line ? infoData.channels[3].rcv_power.line : "NA" }}</td>
          </tr>
          <tr>
            <td>电压（V）</td>
            <td>{{ infoData.channels[0].link_status.client ? infoData.channels[0].voltage.client : "NA" }}</td>
            <td>{{ infoData.channels[0].link_status.line ? infoData.channels[0].voltage.line : "NA" }}</td>
            <td>{{ infoData.channels[1].link_status.client ? infoData.channels[1].voltage.client : "NA" }}</td>
            <td>{{ infoData.channels[1].link_status.line ? infoData.channels[1].voltage.line : "NA" }}</td>
            <td>{{ infoData.channels[2].link_status.client ? infoData.channels[2].voltage.client : "NA" }}</td>
            <td>{{ infoData.channels[2].link_status.line ? infoData.channels[2].voltage.line : "NA" }}</td>
            <td>{{ infoData.channels[3].link_status.client ? infoData.channels[3].voltage.client : "NA" }}</td>
            <td>{{ infoData.channels[3].link_status.line ? infoData.channels[3].voltage.line : "NA" }}</td>
          </tr>

          <tr>
            <td>偏置电流（mA）</td>
            <td>{{ infoData.channels[0].link_status.client ? infoData.channels[0].current.client : "NA" }}</td>
            <td>{{ infoData.channels[0].link_status.line ? infoData.channels[0].current.line : "NA" }}</td>
            <td>{{ infoData.channels[1].link_status.client ? infoData.channels[1].current.client : "NA" }}</td>
            <td>{{ infoData.channels[1].link_status.line ? infoData.channels[1].current.line : "NA" }}</td>
            <td>{{ infoData.channels[2].link_status.client ? infoData.channels[2].current.client : "NA" }}</td>
            <td>{{ infoData.channels[2].link_status.line ? infoData.channels[2].current.line : "NA" }}</td>
            <td>{{ infoData.channels[3].link_status.client ? infoData.channels[3].current.client : "NA" }}</td>
            <td>{{ infoData.channels[3].link_status.line ? infoData.channels[3].current.line : "NA" }}</td>
          </tr>
          <tr>
            <td>温度（℃）</td>
            <td>{{ infoData.channels[0].link_status.client ? infoData.channels[0].temp.client : "NA" }}</td>
            <td>{{ infoData.channels[0].link_status.line ? infoData.channels[0].temp.line : "NA" }}</td>
            <td>{{ infoData.channels[1].link_status.client ? infoData.channels[1].temp.client : "NA" }}</td>
            <td>{{ infoData.channels[1].link_status.line ? infoData.channels[1].temp.line : "NA" }}</td>
            <td>{{ infoData.channels[2].link_status.client ? infoData.channels[2].temp.client : "NA" }}</td>
            <td>{{ infoData.channels[2].link_status.line ? infoData.channels[2].temp.line : "NA" }}</td>
            <td>{{ infoData.channels[3].link_status.client ? infoData.channels[3].temp.client : "NA" }}</td>
            <td>{{ infoData.channels[3].link_status.line ? infoData.channels[3].temp.line : "NA" }}</td>
          </tr>
          <tr>
            <td>激光器开关</td>
            <td>
              <select v-if="infoData.channels[0].link_status.client" v-model="infoData.channels[0].tx_disable.client">
                <option :value="0">关</option>
                <option :value="1">开</option>
              </select>

              <template v-else>NA</template>
            </td>
            <td>
              <select v-if="infoData.channels[0].link_status.line" v-model="infoData.channels[0].tx_disable.line">
                <option :value="0">关</option>
                <option :value="1">开</option>
              </select>

              <template v-else>NA</template>
            </td>
            <td>
              <select v-if="infoData.channels[1].link_status.client" v-model="infoData.channels[1].tx_disable.client">
                <option :value="0">关</option>
                <option :value="1">开</option>
              </select>

              <template v-else>NA</template>
            </td>
            <td>
              <select v-if="infoData.channels[1].link_status.line" v-model="infoData.channels[1].tx_disable.line">
                <option :value="0">关</option>
                <option :value="1">开</option>
              </select>

              <template v-else>NA</template>
            </td>
            <td>
              <select v-if="infoData.channels[2].link_status.client" v-model="infoData.channels[2].tx_disable.client">
                <option :value="0">关</option>
                <option :value="1">开</option>
              </select>

              <template v-else>NA</template>
            </td>
            <td>
              <select v-if="infoData.channels[2].link_status.line" v-model="infoData.channels[2].tx_disable.line">
                <option :value="0">关</option>
                <option :value="1">开</option>
              </select>

              <template v-else>NA</template>
            </td>
            <td>
              <select v-if="infoData.channels[3].link_status.client" v-model="infoData.channels[3].tx_disable.client">
                <option :value="0">关</option>
                <option :value="1">开</option>
              </select>

              <template v-else>NA</template>
            </td>
            <td>
              <select v-if="infoData.channels[3].link_status.line" v-model="infoData.channels[3].tx_disable.line">
                <option :value="0">关</option>
                <option :value="1">开</option>
              </select>

              <template v-else>NA</template>
            </td>
          </tr>
          <tr>
            <td>速率</td>
            <td>
              <div class="coll-2">
                <select v-if="titeData.bdtype === '10G-OTUL'" v-model="infoData.channels[0].speed">
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

                <select v-else v-model="infoData.channels[0].speed"> </select>
              </div>
            </td>
            <td></td>
            <td>
              <div class="coll-2">
                <select v-if="titeData.bdtype === '10G-OTUL'" v-model="infoData.channels[1].speed">
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

                <select v-else v-model="infoData.channels[1].speed"> </select>
              </div>
            </td>
            <td></td>
            <td>
              <div class="coll-2">
                <select v-if="titeData.bdtype === '10G-OTUL'" v-model="infoData.channels[2].speed">
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

                <select v-else v-model="infoData.channels[2].speed"> </select>
              </div>
            </td>
            <td></td>
            <td>
              <div class="coll-2">
                <select v-if="titeData.bdtype === '10G-OTUL'" v-model="infoData.channels[3].speed">
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

                <select v-else v-model="infoData.channels[3].speed"> </select>
              </div>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>环回控制</td>
            <td>
              <div class="coll-2">
                <select v-model="infoData.channels[0].loop_mode">
                  <option :value="0">不环回</option>
                  <option :value="1">客户侧环回</option>
                  <option :value="2">线路侧环回</option>
                  <option :value="3">都环回</option>
                </select>
              </div>
            </td>
            <td></td>
            <td>
              <div class="coll-2">
                <select v-model="infoData.channels[1].loop_mode">
                  <option :value="0">不环回</option>
                  <option :value="1">客户侧环回</option>
                  <option :value="2">线路侧环回</option>
                  <option :value="3">都环回</option>
                </select>
              </div>
            </td>
            <td></td>
            <td>
              <div class="coll-2">
                <select v-model="infoData.channels[2].loop_mode">
                  <option :value="0">不环回</option>
                  <option :value="1">客户侧环回</option>
                  <option :value="2">线路侧环回</option>
                  <option :value="3">都环回</option>
                </select>
              </div>
            </td>
            <td></td>
            <td>
              <div class="coll-2">
                <select v-model="infoData.channels[3].loop_mode">
                  <option :value="0">不环回</option>
                  <option :value="1">客户侧环回</option>
                  <option :value="2">线路侧环回</option>
                  <option :value="3">都环回</option>
                </select>
              </div>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>接收光功率过低阈值（dBm）</td>
            <td>
              <input v-if="infoData.channels[0].link_status.client" type="text" class="def-input" v-model.number="infoData.channels[0].rcv_thr_L.client" />
              <template v-else>NA</template>
            </td>
            <td>
              <input v-if="infoData.channels[0].link_status.line" type="text" class="def-input" v-model.number="infoData.channels[0].rcv_thr_L.line" />
              <template v-else>NA</template>
            </td>
            <td>
              <input v-if="infoData.channels[1].link_status.client" type="text" class="def-input" v-model.number="infoData.channels[1].rcv_thr_L.client" />
              <template v-else>NA</template>
            </td>
            <td>
              <input v-if="infoData.channels[1].link_status.line" type="text" class="def-input" v-model.number="infoData.channels[1].rcv_thr_L.line" />
              <template v-else>NA</template>
            </td>
            <td>
              <input v-if="infoData.channels[2].link_status.client" type="text" class="def-input" v-model.number="infoData.channels[2].rcv_thr_L.client" />
              <template v-else>NA</template>
            </td>
            <td>
              <input v-if="infoData.channels[2].link_status.line" type="text" class="def-input" v-model.number="infoData.channels[2].rcv_thr_L.line" />
              <template v-else>NA</template>
            </td>
            <td>
              <input v-if="infoData.channels[3].link_status.client" type="text" class="def-input" v-model.number="infoData.channels[3].rcv_thr_L.client" />
              <template v-else>NA</template>
            </td>
            <td>
              <input v-if="infoData.channels[3].link_status.line" type="text" class="def-input" v-model.number="infoData.channels[3].rcv_thr_L.line" />
              <template v-else>NA</template>
            </td>
          </tr>
          <tr>
            <td>接收光功率过载阈值（dBm）</td>
            <td>
              <input v-if="infoData.channels[0].link_status.client" type="text" class="def-input" v-model.number="infoData.channels[0].rcv_thr_H.client" />
              <template v-else>NA</template>
            </td>
            <td>
              <input v-if="infoData.channels[0].link_status.line" type="text" class="def-input" v-model.number="infoData.channels[0].rcv_thr_H.line" />
              <template v-else>NA</template>
            </td>
            <td>
              <input v-if="infoData.channels[1].link_status.client" type="text" class="def-input" v-model.number="infoData.channels[1].rcv_thr_H.client" />
              <template v-else>NA</template>
            </td>
            <td>
              <input v-if="infoData.channels[1].link_status.line" type="text" class="def-input" v-model.number="infoData.channels[1].rcv_thr_H.line" />
              <template v-else>NA</template>
            </td>
            <td>
              <input v-if="infoData.channels[2].link_status.client" type="text" class="def-input" v-model.number="infoData.channels[2].rcv_thr_H.client" />
              <template v-else>NA</template>
            </td>
            <td>
              <input v-if="infoData.channels[2].link_status.line" type="text" class="def-input" v-model.number="infoData.channels[2].rcv_thr_H.line" />
              <template v-else>NA</template>
            </td>
            <td>
              <input v-if="infoData.channels[3].link_status.client" type="text" class="def-input" v-model.number="infoData.channels[3].rcv_thr_H.client" />
              <template v-else>NA</template>
            </td>
            <td>
              <input v-if="infoData.channels[3].link_status.line" type="text" class="def-input" v-model.number="infoData.channels[3].rcv_thr_H.line" />
              <template v-else>NA</template>
            </td>
          </tr>
          <tr>
            <td>发送光功率过载阈值（dBm）</td>
            <td>
              <input v-if="infoData.channels[0].link_status.client" type="text" class="def-input" v-model.number="infoData.channels[0].tx_thr_H.client" />
              <template v-else>NA</template>
            </td>
            <td>
              <input v-if="infoData.channels[0].link_status.line" type="text" class="def-input" v-model.number="infoData.channels[0].tx_thr_H.line" />
              <template v-else>NA</template>
            </td>
            <td>
              <input v-if="infoData.channels[1].link_status.client" type="text" class="def-input" v-model.number="infoData.channels[1].tx_thr_H.client" />
              <template v-else>NA</template>
            </td>
            <td>
              <input v-if="infoData.channels[1].link_status.line" type="text" class="def-input" v-model.number="infoData.channels[1].tx_thr_H.line" />
              <template v-else>NA</template>
            </td>
            <td>
              <input v-if="infoData.channels[2].link_status.client" type="text" class="def-input" v-model.number="infoData.channels[2].tx_thr_H.client" />
              <template v-else>NA</template>
            </td>
            <td>
              <input v-if="infoData.channels[2].link_status.line" type="text" class="def-input" v-model.number="infoData.channels[2].tx_thr_H.line" />
              <template v-else>NA</template>
            </td>
            <td>
              <input v-if="infoData.channels[3].link_status.client" type="text" class="def-input" v-model.number="infoData.channels[3].tx_thr_H.client" />
              <template v-else>NA</template>
            </td>
            <td>
              <input v-if="infoData.channels[3].link_status.line" type="text" class="def-input" v-model.number="infoData.channels[3].tx_thr_H.line" />
              <template v-else>NA</template>
            </td>
          </tr>
          <tr>
            <td>发送光功率过低阈值（dBm）</td>
            <td>
              <input v-if="infoData.channels[0].link_status.client" type="text" class="def-input" v-model.number="infoData.channels[0].tx_thr_L.client" />
              <template v-else>NA</template>
            </td>
            <td>
              <input v-if="infoData.channels[0].link_status.line" type="text" class="def-input" v-model.number="infoData.channels[0].tx_thr_L.line" />
              <template v-else>NA</template>
            </td>
            <td>
              <input v-if="infoData.channels[1].link_status.client" type="text" class="def-input" v-model.number="infoData.channels[1].tx_thr_L.client" />
              <template v-else>NA</template>
            </td>
            <td>
              <input v-if="infoData.channels[1].link_status.line" type="text" class="def-input" v-model.number="infoData.channels[1].tx_thr_L.line" />
              <template v-else>NA</template>
            </td>
            <td>
              <input v-if="infoData.channels[2].link_status.client" type="text" class="def-input" v-model.number="infoData.channels[2].tx_thr_L.client" />
              <template v-else>NA</template>
            </td>
            <td>
              <input v-if="infoData.channels[2].link_status.line" type="text" class="def-input" v-model.number="infoData.channels[2].tx_thr_L.line" />
              <template v-else>NA</template>
            </td>
            <td>
              <input v-if="infoData.channels[3].link_status.client" type="text" class="def-input" v-model.number="infoData.channels[3].tx_thr_L.client" />
              <template v-else>NA</template>
            </td>
            <td>
              <input v-if="infoData.channels[3].link_status.line" type="text" class="def-input" v-model.number="infoData.channels[3].tx_thr_L.line" />
              <template v-else>NA</template>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="board-change-btns">
      <button class="def-btn" :disabled="refreshInfoDisabled" @click="refreshInfo">刷新</button>
      <button class="def-btn" :disabled="setInfoDisabled" @click="setInfo">应用</button>
      <button class="def-btn" :disabled="restorInfoDisabled" @click="restorInfo">复位</button>
      <button class="def-btn" :disabled="restoreDefaultInfoDisabled" @click="restoreDefaultInfo">恢复默认</button>
    </div>
  </div>
</template>

<script>
import mixins from "@/utils/mixins";
import BoardOtu10g from "@/components/board/otu10g";

export default {
  name: "otu10g",
  mixins: [mixins],
  components: { BoardOtu10g },
  data() {
    return {
      infoData: {
        channels: new Array(4).fill({
          channel: null,
          link_status: {
            client: null,
            line: null,
          },
          los: {
            client: null,
            line: null,
          },
          tx_disable: {
            client: null,
            line: null,
          },
          speed: null,
          loop_mode: null,
          launch_range: {
            client: null,
            line: null,
          },
          wave_channel: {
            client: null,
            line: null,
          },
          rw_type: {
            client: null,
            line: null,
          },
          rcv_thr_H: {
            client: null,
            line: null,
          },
          rcv_thr_L: {
            client: null,
            line: null,
          },
          tx_thr_H: {
            client: null,
            line: null,
          },
          tx_thr_L: {
            client: null,
            line: null,
          },
          wave_len: {
            client: null,
            line: null,
          },
          launch_power: {
            client: null,
            line: null,
          },
          rcv_power: {
            client: null,
            line: null,
          },
          voltage: {
            client: null,
            line: null,
          },
          current: {
            client: null,
            line: null,
          },
          temp: {
            client: null,
            line: null,
          },
        }),
      },
    };
  },
};
</script>

<style lang="scss">
.prbs-tr .def-btn + .def-btn {
  margin-left: 0;
}
</style>
