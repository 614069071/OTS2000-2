<template>
  <div class="otu25g-cps-wrapper cps-wrapper">
    <div class="board-header-wrapper">
      <BoardOtu25g></BoardOtu25g>
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
            <el-date-picker v-if="iSuper" v-model="titeData.mfgdate" size="mini" type="date" value-format="yyyy-MM-dd" />

            <template v-else>
              {{ titeData.mfgdate }}
            </template>
          </td>
          <td>序列号</td>
          <td>
            <input class="def-input" v-if="iSuper" type="text" v-model="titeData.sn" />

            <template v-else>
              {{ titeData.sn }}
            </template>
          </td>
          <td>板型号</td>
          <td>{{ titeData.bdtype }}</td>
        </tr>
        <tr>
          <td>设备类型</td>
          <td>{{ titeData.device_type }}</td>
          <td>状态</td>
          <td>{{ titeData.status ? "告警" : "正常" }}</td>
          <td>信息描述</td>
          <td><input class="def-input" type="text" maxlength="30" v-model="titeData.desc" /></td>
        </tr>
        <tr>
          <td>MAC地址</td>
          <td>
            <input class="def-input" v-if="iSuper" type="text" v-model="titeData.mac_address" />

            <template v-else>
              {{ titeData.mac_address }}
            </template>
          </td>
          <td>槽位号</td>
          <td>{{ info.slot }}</td>
          <td></td>
          <td></td>
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
            <td>接受功率（dBm）</td>
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
            <td>偏置电流（dBm）</td>
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
                <option :value="1">关</option>
                <option :value="0">开</option>
              </select>

              <template v-else>NA</template>
            </td>
            <td>
              <select v-if="infoData.channels[0].link_status.line" v-model="infoData.channels[0].tx_disable.line">
                <option :value="1">关</option>
                <option :value="0">开</option>
              </select>

              <template v-else>NA</template>
            </td>
            <td>
              <select v-if="infoData.channels[1].link_status.client" v-model="infoData.channels[1].tx_disable.client">
                <option :value="1">关</option>
                <option :value="0">开</option>
              </select>

              <template v-else>NA</template>
            </td>
            <td>
              <select v-if="infoData.channels[1].link_status.line" v-model="infoData.channels[1].tx_disable.line">
                <option :value="1">关</option>
                <option :value="0">开</option>
              </select>

              <template v-else>NA</template>
            </td>
            <td>
              <select v-if="infoData.channels[2].link_status.client" v-model="infoData.channels[2].tx_disable.client">
                <option :value="1">关</option>
                <option :value="0">开</option>
              </select>

              <template v-else>NA</template>
            </td>
            <td>
              <select v-if="infoData.channels[2].link_status.line" v-model="infoData.channels[2].tx_disable.line">
                <option :value="1">关</option>
                <option :value="0">开</option>
              </select>

              <template v-else>NA</template>
            </td>
            <td>
              <select v-if="infoData.channels[3].link_status.client" v-model="infoData.channels[3].tx_disable.client">
                <option :value="1">关</option>
                <option :value="0">开</option>
              </select>

              <template v-else>NA</template>
            </td>
            <td>
              <select v-if="infoData.channels[3].link_status.line" v-model="infoData.channels[3].tx_disable.line">
                <option :value="1">关</option>
                <option :value="0">开</option>
              </select>

              <template v-else>NA</template>
            </td>
          </tr>
          <tr class="prbs-tr">
            <td>误码检测</td>
            <td>
              <div v-if="infoData.channels[0].link_status.client">
                <button class="def-btn" :disabled="detection[0]['client']" @click="detectionPrbs(0, 'client')">{{ infoData.channels[0].prbs_en.client ? "停止" : "开始" }}</button>
                <span>结果：{{ detection[0].clientEnd ? (infoData.channels[0].prbs.client ? "有误码" : "无误码") : "" }}</span>
              </div>

              <template v-else>NA</template>
            </td>
            <td>
              <div v-if="infoData.channels[0].link_status.line">
                <button class="def-btn" :disabled="detection[0]['line']" @click="detectionPrbs(0, 'line')">{{ infoData.channels[0].prbs_en.line ? "停止" : "开始" }}</button>
                <span>结果：{{ detection[0].lineEnd ? (infoData.channels[0].prbs.line ? "有误码" : "无误码") : "" }}</span>
              </div>

              <template v-else>NA</template>
            </td>
            <td>
              <div v-if="infoData.channels[1].link_status.client">
                <button class="def-btn" :disabled="detection[1]['client']" @click="detectionPrbs(1, 'client')">{{ infoData.channels[1].prbs_en.client ? "停止" : "开始" }}</button>
                <span>结果：{{ detection[1].clientEnd ? (infoData.channels[1].prbs.client ? "有误码" : "无误码") : "" }}</span>
              </div>

              <template v-else>NA</template>
            </td>
            <td>
              <div v-if="infoData.channels[1].link_status.line">
                <button class="def-btn" :disabled="detection[1]['line']" @click="detectionPrbs(1, 'line')">{{ infoData.channels[1].prbs_en.line ? "停止" : "开始" }}</button>
                <span>结果：{{ detection[1].lineEnd ? (infoData.channels[1].prbs.client ? "有误码" : "无误码") : "" }}</span>
              </div>

              <template v-else>NA</template>
            </td>
            <td>
              <div v-if="infoData.channels[2].link_status.client">
                <button class="def-btn" :disabled="detection[2]['client']" @click="detectionPrbs(2, 'client')">{{ infoData.channels[2].prbs_en.client ? "停止" : "开始" }}</button>
                <span>结果：{{ detection[2].clientEnd ? (infoData.channels[2].prbs.client ? "有误码" : "无误码") : "" }}</span>
              </div>

              <template v-else>NA</template>
            </td>
            <td>
              <div v-if="infoData.channels[2].link_status.line">
                <button class="def-btn" :disabled="detection[2]['line']" @click="detectionPrbs(2, 'line')">{{ infoData.channels[2].prbs_en.line ? "停止" : "开始" }}</button>
                <span>结果：{{ detection[2].lineEnd ? (infoData.channels[2].prbs.client ? "有误码" : "无误码") : "" }}</span>
              </div>

              <template v-else>NA</template>
            </td>
            <td>
              <div v-if="infoData.channels[3].link_status.client">
                <button class="def-btn" :disabled="detection[3]['client']" @click="detectionPrbs(3, 'client')">{{ infoData.channels[3].prbs_en.client ? "停止" : "开始" }}</button>
                <span>结果：{{ detection[3].clientEnd ? (infoData.channels[3].prbs.client ? "有误码" : "无误码") : "" }}</span>
              </div>

              <template v-else>NA</template>
            </td>
            <td>
              <div v-if="infoData.channels[3].link_status.line">
                <button class="def-btn" :disabled="detection[3]['line']" @click="detectionPrbs(3, 'line')">{{ infoData.channels[3].prbs_en.line ? "停止" : "开始" }}</button>
                <span>结果：{{ detection[3].lineEnd ? (infoData.channels[3].prbs.client ? "有误码" : "无误码") : "" }}</span>
              </div>

              <template v-else>NA</template>
            </td>
          </tr>
          <tr>
            <td>速率</td>
            <td>
              <div class="coll-2">
                <select v-if="titeData.bdtype === '25G-OTUL'" v-model="infoData.channels[0].speed">
                  <option :value="1">eCPRI-25GE</option>
                  <option :value="0">Other</option>
                </select>

                <select v-else v-model="infoData.channels[0].speed">
                  <option :value="1">25GE-28GE</option>
                  <option :value="0">Other</option>
                </select>
              </div>
            </td>
            <td></td>
            <td>
              <div class="coll-2">
                <select v-if="titeData.bdtype === '25G-OTUL'" v-model="infoData.channels[1].speed">
                  <option :value="1">eCPRI-25GE</option>
                  <option :value="0">Other</option>
                </select>
                <select v-else v-model="infoData.channels[1].speed">
                  <option :value="1">25GE-28GE</option>
                  <option :value="0">Other</option>
                </select>
              </div>
            </td>
            <td></td>
            <td>
              <div class="coll-2">
                <select v-if="titeData.bdtype === '25G-OTUL'" v-model="infoData.channels[2].speed">
                  <option :value="1">eCPRI-25GE</option>
                  <option :value="0">Other</option>
                </select>
                <select v-else v-model="infoData.channels[2].speed">
                  <option :value="1">25GE-28GE</option>
                  <option :value="0">Other</option>
                </select>
              </div>
            </td>
            <td></td>
            <td>
              <div class="coll-2">
                <select v-if="titeData.bdtype === '25G-OTUL'" v-model="infoData.channels[3].speed">
                  <option :value="1">eCPRI-25GE</option>
                  <option :value="0">Other</option>
                </select>
                <select v-else v-model="infoData.channels[3].speed">
                  <option :value="1">25GE-28GE</option>
                  <option :value="0">Other</option>
                </select>
              </div>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>输入EQ（dB）</td>
            <td>
              <select v-if="infoData.channels[0].link_status.client" v-model="infoData.channels[0].input_eq.client">
                <option v-for="item in eqoptions" :key="item.value" :value="item.value">{{ item.lable }}</option>
              </select>

              <template v-else>NA</template>
            </td>
            <td>
              <select v-if="infoData.channels[0].link_status.line" v-model="infoData.channels[0].input_eq.line">
                <option v-for="item in eqoptions" :key="item.value" :value="item.value">{{ item.lable }}</option>
              </select>

              <template v-else>NA</template>
            </td>

            <td>
              <select v-if="infoData.channels[1].link_status.client" v-model="infoData.channels[1].input_eq.client">
                <option v-for="item in eqoptions" :key="item.value" :value="item.value">{{ item.lable }}</option>
              </select>

              <template v-else>NA</template>
            </td>
            <td>
              <select v-if="infoData.channels[1].link_status.line" v-model="infoData.channels[1].input_eq.line">
                <option v-for="item in eqoptions" :key="item.value" :value="item.value">{{ item.lable }}</option>
              </select>

              <template v-else>NA</template>
            </td>

            <td>
              <select v-if="infoData.channels[2].link_status.client" v-model="infoData.channels[2].input_eq.client">
                <option v-for="item in eqoptions" :key="item.value" :value="item.value">{{ item.lable }}</option>
              </select>

              <template v-else>NA</template>
            </td>
            <td>
              <select v-if="infoData.channels[2].link_status.line" v-model="infoData.channels[2].input_eq.line">
                <option v-for="item in eqoptions" :key="item.value" :value="item.value">{{ item.lable }}</option>
              </select>

              <template v-else>NA</template>
            </td>

            <td>
              <select v-if="infoData.channels[3].link_status.client" v-model="infoData.channels[3].input_eq.client">
                <option v-for="item in eqoptions" :key="item.value" :value="item.value">{{ item.lable }}</option>
              </select>

              <template v-else>NA</template>
            </td>
            <td>
              <select v-if="infoData.channels[3].link_status.line" v-model="infoData.channels[3].input_eq.line">
                <option v-for="item in eqoptions" :key="item.value" :value="item.value">{{ item.lable }}</option>
              </select>

              <template v-else>NA</template>
            </td>
          </tr>
          <tr>
            <td>输出幅度（mVpp）</td>
            <td>
              <el-input-number v-if="infoData.channels[0].link_status.client" v-model.number="infoData.channels[0].output_amplitude.client" size="mini" :min="400" :max="900" :step="5" step-strictly />
              <template v-else>NA</template>
            </td>
            <td>
              <el-input-number v-if="infoData.channels[0].link_status.line" v-model.number="infoData.channels[0].output_amplitude.line" size="mini" :min="400" :max="900" :step="5" step-strictly />
              <template v-else>NA</template>
            </td>
            <td>
              <el-input-number v-if="infoData.channels[1].link_status.client" v-model.number="infoData.channels[1].output_amplitude.client" size="mini" :min="400" :max="900" :step="5" step-strictly />
              <template v-else>NA</template>
            </td>
            <td>
              <el-input-number v-if="infoData.channels[1].link_status.line" v-model.number="infoData.channels[1].output_amplitude.line" size="mini" :min="400" :max="900" :step="5" step-strictly />
              <template v-else>NA</template>
            </td>
            <td>
              <el-input-number v-if="infoData.channels[2].link_status.client" v-model.number="infoData.channels[2].output_amplitude.client" size="mini" :min="400" :max="900" :step="5" step-strictly />
              <template v-else>NA</template>
            </td>
            <td>
              <el-input-number v-if="infoData.channels[2].link_status.line" v-model.number="infoData.channels[2].output_amplitude.line" size="mini" :min="400" :max="900" :step="5" step-strictly />
              <template v-else>NA</template>
            </td>
            <td>
              <el-input-number v-if="infoData.channels[3].link_status.client" v-model.number="infoData.channels[3].output_amplitude.client" size="mini" :min="400" :max="900" :step="5" step-strictly />
              <template v-else>NA</template>
            </td>
            <td>
              <el-input-number v-if="infoData.channels[3].link_status.line" v-model.number="infoData.channels[3].output_amplitude.line" size="mini" :min="400" :max="900" :step="5" step-strictly />
              <template v-else>NA</template>
            </td>
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
import BoardOtu25g from "@/components/board/otu25g";

export default {
  name: "otu25g",
  mixins: [mixins],
  components: { BoardOtu25g },
  data() {
    return {
      eqoptions: Object.freeze([
        { value: 1, lable: 0 },
        { value: 2, lable: 0.6 },
        { value: 3, lable: 1.2 },
        { value: 4, lable: 1.8 },
        { value: 5, lable: 2.4 },
        { value: 6, lable: 3.0 },
        { value: 7, lable: 3.6 },
        { value: 8, lable: 4.2 },
        { value: 9, lable: 4.8 },
        { value: 10, lable: 5.4 },
        { value: 11, lable: 6.0 },
        { value: 12, lable: 6.6 },
        { value: 13, lable: 7.2 },
        { value: 14, lable: 7.8 },
        { value: 15, lable: 8.4 },
        { value: 16, lable: 9.0 },
        { value: 17, lable: 9.6 },
        { value: 18, lable: 10.2 },
        { value: 19, lable: 10.8 },
        { value: 20, lable: 11.4 },
        { value: 21, lable: 12.0 },
        { value: 255, lable: "自适应" },
      ]),
      infoData: {
        channels: new Array(4).fill({
          channel: 0,
          link_status: {
            client: null,
            line: null,
          },
          los: {
            client: null,
            line: null,
          },
          speed: null,
          freq: {
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
          rcv_thr: {
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
          launch_range: {
            client: 10,
            line: 10,
          },
          rw_type: {
            client: null,
            line: null,
          },
          tx_disable: {
            client: false,
            line: false,
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
          wave_channel: {
            client: null,
            line: null,
          },
        }),
      },
      detection: [
        { client: false, line: false, clientEnd: false, lineEnd: false },
        { client: false, line: false, clientEnd: false, lineEnd: false },
        { client: false, line: false, clientEnd: false, lineEnd: false },
        { client: false, line: false, clientEnd: false, lineEnd: false },
      ],
    };
  },
  methods: {
    // 误码检测
    detectionPrbs(i, status) {
      const val = (this.infoData.channels[i].prbs_en[status] + 1) % 2;
      this.infoData.channels[i].prbs_en[status] = val;

      const { boardname, slot } = this.info;
      const diffData = this.$difference(this.infoData, this.clonData);
      const data = { otn2000: { ...diffData, type: "post_info", boardname, slot } };

      this.setInfoDisabled = true;
      this.detection[i][`${status}End`] = false;
      this.detection[i][status] = true;

      this.$http
        .post(data)
        .then((res) => {
          console.log("setInfos", res);
      
          this.setInfoDisabled = false;
          this.detection[i][status] = false;

          if (!val) {
            // 停止检测并获取状态
            console.log("停止检测", val);
            this.getInfo()
              .then(() => {
                this.detection[i][`${status}End`] = true;
               alert("检测成功");
              })
              .catch(() => {
                this.detection[i][`${status}End`] = true;
               alert("检测失败");
              });
          } else {
            this.detection[i][`${status}End`] = false;
            this.detection[i][status] = false;
          }
        })
        .catch((err) => {
          console.log(err);
          alert("失败");
          this.setInfoDisabled = false;
        });
    },
  },
};
</script>

<style lang="scss">
.otu25g-cps-wrapper {
  .el-input-number--mini {
    width: 100px;
  }

  .el-input-number__decrease,
  .el-input-number__increase {
    width: 18px;
  }
}

.prbs-tr .def-btn + .def-btn {
  margin-left: 0;
}
</style>
