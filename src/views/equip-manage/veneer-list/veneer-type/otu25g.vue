<template>
  <div class="otu25g-cps-wrapper cps-wrapper">
    <div class="veneer-header-wrapper">
      <div class="veneer-inner-wrapper otu25g-veneer"></div>
    </div>
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
          <td>版型号</td>
          <td>{{ veneerTitleData.bdtype }}</td>
        </tr>
        <tr>
          <td>设备类型</td>
          <td>{{ veneerTitleData.device_type }}</td>
          <td>状态</td>
          <td>{{ veneerTitleData.status ? "告警" : "正常" }}</td>
          <td>信息描述</td>
          <td><input class="def-input veneer-input" type="text" v-model="veneerTitleData.desc" /></td>
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
            <td class="no-right-border">
              <div class="coll-2">通道1</div>
            </td>
            <td></td>
            <td class="no-right-border">
              <div class="coll-2">通道2</div>
            </td>
            <td></td>
            <td class="no-right-border">
              <div class="coll-2">通道3</div>
            </td>
            <td></td>
            <td class="no-right-border">
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
            <td>{{ veneerInfoData[0].link_status.client ? "在位" : "脱位" }}</td>
            <td>{{ veneerInfoData[0].link_status.line ? "在位" : "脱位" }}</td>
            <td>{{ veneerInfoData[1].link_status.client ? "在位" : "脱位" }}</td>
            <td>{{ veneerInfoData[1].link_status.line ? "在位" : "脱位" }}</td>
            <td>{{ veneerInfoData[2].link_status.client ? "在位" : "脱位" }}</td>
            <td>{{ veneerInfoData[2].link_status.line ? "在位" : "脱位" }}</td>
            <td>{{ veneerInfoData[3].link_status.client ? "在位" : "脱位" }}</td>
            <td>{{ veneerInfoData[3].link_status.line ? "在位" : "脱位" }}</td>
          </tr>
          <tr>
            <td>LINK状态</td>
            <td>{{ veneerInfoData[0].link_status.client ? (veneerInfoData[0].los.client ? "UP" : "DOWN") : "NA" }}</td>
            <td>{{ veneerInfoData[0].link_status.line ? (veneerInfoData[0].los.line ? "UP" : "DOWN") : "NA" }}</td>
            <td>{{ veneerInfoData[1].link_status.client ? (veneerInfoData[1].los.client ? "UP" : "DOWN") : "NA" }}</td>
            <td>{{ veneerInfoData[1].link_status.line ? (veneerInfoData[1].los.line ? "UP" : "DOWN") : "NA" }}</td>
            <td>{{ veneerInfoData[2].link_status.client ? (veneerInfoData[2].los.client ? "UP" : "DOWN") : "NA" }}</td>
            <td>{{ veneerInfoData[2].link_status.line ? (veneerInfoData[2].los.line ? "UP" : "DOWN") : "NA" }}</td>
            <td>{{ veneerInfoData[3].link_status.client ? (veneerInfoData[3].los.client ? "UP" : "DOWN") : "NA" }}</td>
            <td>{{ veneerInfoData[3].link_status.line ? (veneerInfoData[3].los.line ? "UP" : "DOWN") : "NA" }}</td>
          </tr>
          <tr>
            <td>属性</td>
            <td>{{ veneerInfoData[0].link_status.client ? veneerInfoData[0].rw_type.client : "NA" }}</td>
            <td>{{ veneerInfoData[0].link_status.line ? veneerInfoData[0].rw_type.line : "NA" }}</td>
            <td>{{ veneerInfoData[1].link_status.client ? veneerInfoData[1].rw_type.client : "NA" }}</td>
            <td>{{ veneerInfoData[1].link_status.line ? veneerInfoData[1].rw_type.line : "NA" }}</td>
            <td>{{ veneerInfoData[2].link_status.client ? veneerInfoData[2].rw_type.client : "NA" }}</td>
            <td>{{ veneerInfoData[2].link_status.line ? veneerInfoData[2].rw_type.line : "NA" }}</td>
            <td>{{ veneerInfoData[3].link_status.client ? veneerInfoData[3].rw_type.client : "NA" }}</td>
            <td>{{ veneerInfoData[3].link_status.line ? veneerInfoData[3].rw_type.line : "NA" }}</td>
          </tr>
          <tr>
            <td>波道</td>
            <td>NA</td>
            <td>
              <input v-if="veneerInfoData[0].link_status.line" class="def-input veneer-input" type="text" v-model.number="veneerInfoData[0].wave_channel.line" />
              <template v-else>NA</template>
            </td>
            <td>NA</td>
            <td>
              <input v-if="veneerInfoData[1].link_status.line" class="def-input veneer-input" type="text" v-model.number="veneerInfoData[1].wave_channel.line" />
              <template v-else>NA</template>
            </td>
            <td>NA</td>
            <td>
              <input v-if="veneerInfoData[2].link_status.line" class="def-input veneer-input" type="text" v-model.number="veneerInfoData[2].wave_channel.line" />
              <template v-else>NA</template>
            </td>
            <td>NA</td>
            <td>
              <input v-if="veneerInfoData[3].link_status.line" class="def-input veneer-input" type="text" v-model.number="veneerInfoData[3].wave_channel.line" />
              <template v-else>NA</template>
            </td>
          </tr>
          <tr>
            <td>波长</td>
            <td>{{ veneerInfoData[0].link_status.client ? veneerInfoData[0].wave_len.client : "NA" }}</td>
            <td>{{ veneerInfoData[0].link_status.line ? veneerInfoData[0].wave_len.line : "NA" }}</td>
            <td>{{ veneerInfoData[1].link_status.client ? veneerInfoData[1].wave_len.client : "NA" }}</td>
            <td>{{ veneerInfoData[1].link_status.line ? veneerInfoData[1].wave_len.line : "NA" }}</td>
            <td>{{ veneerInfoData[2].link_status.client ? veneerInfoData[2].wave_len.client : "NA" }}</td>
            <td>{{ veneerInfoData[2].link_status.line ? veneerInfoData[2].wave_len.line : "NA" }}</td>
            <td>{{ veneerInfoData[3].link_status.client ? veneerInfoData[3].wave_len.client : "NA" }}</td>
            <td>{{ veneerInfoData[3].link_status.line ? veneerInfoData[3].wave_len.line : "NA" }}</td>
          </tr>
          <tr>
            <td>距离（km）</td>
            <td>{{ veneerInfoData[0].link_status.client ? veneerInfoData[0].launch_range.client : "NA" }}</td>
            <td>{{ veneerInfoData[0].link_status.line ? veneerInfoData[0].launch_range.line : "NA" }}</td>
            <td>{{ veneerInfoData[1].link_status.client ? veneerInfoData[1].launch_range.client : "NA" }}</td>
            <td>{{ veneerInfoData[1].link_status.line ? veneerInfoData[1].launch_range.line : "NA" }}</td>
            <td>{{ veneerInfoData[2].link_status.client ? veneerInfoData[2].launch_range.client : "NA" }}</td>
            <td>{{ veneerInfoData[2].link_status.line ? veneerInfoData[2].launch_range.line : "NA" }}</td>
            <td>{{ veneerInfoData[3].link_status.client ? veneerInfoData[3].launch_range.client : "NA" }}</td>
            <td>{{ veneerInfoData[3].link_status.line ? veneerInfoData[3].launch_range.line : "NA" }}</td>
          </tr>
          <tr>
            <td>发射功率（dBm）</td>
            <td>{{ veneerInfoData[0].link_status.client ? veneerInfoData[0].launch_power.client : "NA" }}</td>
            <td>{{ veneerInfoData[0].link_status.line ? veneerInfoData[0].launch_power.line : "NA" }}</td>
            <td>{{ veneerInfoData[1].link_status.client ? veneerInfoData[1].launch_power.client : "NA" }}</td>
            <td>{{ veneerInfoData[1].link_status.line ? veneerInfoData[1].launch_power.line : "NA" }}</td>
            <td>{{ veneerInfoData[2].link_status.client ? veneerInfoData[2].launch_power.client : "NA" }}</td>
            <td>{{ veneerInfoData[2].link_status.line ? veneerInfoData[2].launch_power.line : "NA" }}</td>
            <td>{{ veneerInfoData[3].link_status.client ? veneerInfoData[3].launch_power.client : "NA" }}</td>
            <td>{{ veneerInfoData[3].link_status.line ? veneerInfoData[3].launch_power.line : "NA" }}</td>
          </tr>
          <tr>
            <td>接受功率（dBm）</td>
            <td>{{ veneerInfoData[0].link_status.client ? veneerInfoData[0].rcv_power.client : "NA" }}</td>
            <td>{{ veneerInfoData[0].link_status.line ? veneerInfoData[0].rcv_power.line : "NA" }}</td>
            <td>{{ veneerInfoData[1].link_status.client ? veneerInfoData[1].rcv_power.client : "NA" }}</td>
            <td>{{ veneerInfoData[1].link_status.line ? veneerInfoData[1].rcv_power.line : "NA" }}</td>
            <td>{{ veneerInfoData[2].link_status.client ? veneerInfoData[2].rcv_power.client : "NA" }}</td>
            <td>{{ veneerInfoData[2].link_status.line ? veneerInfoData[2].rcv_power.line : "NA" }}</td>
            <td>{{ veneerInfoData[3].link_status.client ? veneerInfoData[3].rcv_power.client : "NA" }}</td>
            <td>{{ veneerInfoData[3].link_status.line ? veneerInfoData[3].rcv_power.line : "NA" }}</td>
          </tr>
          <tr>
            <td>电压（V）</td>
            <td>{{ veneerInfoData[0].link_status.client ? veneerInfoData[0].voltage.client : "NA" }}</td>
            <td>{{ veneerInfoData[0].link_status.line ? veneerInfoData[0].voltage.line : "NA" }}</td>
            <td>{{ veneerInfoData[1].link_status.client ? veneerInfoData[1].voltage.client : "NA" }}</td>
            <td>{{ veneerInfoData[1].link_status.line ? veneerInfoData[1].voltage.line : "NA" }}</td>
            <td>{{ veneerInfoData[2].link_status.client ? veneerInfoData[2].voltage.client : "NA" }}</td>
            <td>{{ veneerInfoData[2].link_status.line ? veneerInfoData[2].voltage.line : "NA" }}</td>
            <td>{{ veneerInfoData[3].link_status.client ? veneerInfoData[3].voltage.client : "NA" }}</td>
            <td>{{ veneerInfoData[3].link_status.line ? veneerInfoData[3].voltage.line : "NA" }}</td>
          </tr>

          <tr>
            <td>偏置电流（dBm）</td>
            <td>{{ veneerInfoData[0].link_status.client ? veneerInfoData[0].current.client : "NA" }}</td>
            <td>{{ veneerInfoData[0].link_status.line ? veneerInfoData[0].current.line : "NA" }}</td>
            <td>{{ veneerInfoData[1].link_status.client ? veneerInfoData[1].current.client : "NA" }}</td>
            <td>{{ veneerInfoData[1].link_status.line ? veneerInfoData[1].current.line : "NA" }}</td>
            <td>{{ veneerInfoData[2].link_status.client ? veneerInfoData[2].current.client : "NA" }}</td>
            <td>{{ veneerInfoData[2].link_status.line ? veneerInfoData[2].current.line : "NA" }}</td>
            <td>{{ veneerInfoData[3].link_status.client ? veneerInfoData[3].current.client : "NA" }}</td>
            <td>{{ veneerInfoData[3].link_status.line ? veneerInfoData[3].current.line : "NA" }}</td>
          </tr>
          <tr>
            <td>温度（℃）</td>
            <td>{{ veneerInfoData[0].link_status.client ? veneerInfoData[0].temp.client : "NA" }}</td>
            <td>{{ veneerInfoData[0].link_status.line ? veneerInfoData[0].temp.line : "NA" }}</td>
            <td>{{ veneerInfoData[1].link_status.client ? veneerInfoData[1].temp.client : "NA" }}</td>
            <td>{{ veneerInfoData[1].link_status.line ? veneerInfoData[1].temp.line : "NA" }}</td>
            <td>{{ veneerInfoData[2].link_status.client ? veneerInfoData[2].temp.client : "NA" }}</td>
            <td>{{ veneerInfoData[2].link_status.line ? veneerInfoData[2].temp.line : "NA" }}</td>
            <td>{{ veneerInfoData[3].link_status.client ? veneerInfoData[3].temp.client : "NA" }}</td>
            <td>{{ veneerInfoData[3].link_status.line ? veneerInfoData[3].temp.line : "NA" }}</td>
          </tr>
          <tr>
            <td>激光器开关</td>
            <td>
              <select v-if="veneerInfoData[0].link_status.client" v-model="veneerInfoData[0].tx_disable.client">
                <option :value="true">关</option>
                <option :value="false">开</option>
              </select>

              <template v-else>NA</template>
            </td>
            <td>
              <select v-if="veneerInfoData[0].link_status.line" v-model="veneerInfoData[0].tx_disable.line">
                <option :value="true">关</option>
                <option :value="false">开</option>
              </select>

              <template v-else>NA</template>
            </td>
            <td>
              <select v-if="veneerInfoData[1].link_status.client" v-model="veneerInfoData[1].tx_disable.client">
                <option :value="true">关</option>
                <option :value="false">开</option>
              </select>

              <template v-else>NA</template>
            </td>
            <td>
              <select v-if="veneerInfoData[1].link_status.line" v-model="veneerInfoData[1].tx_disable.line">
                <option :value="true">关</option>
                <option :value="false">开</option>
              </select>

              <template v-else>NA</template>
            </td>
            <td>
              <select v-if="veneerInfoData[2].link_status.client" v-model="veneerInfoData[2].tx_disable.client">
                <option :value="true">关</option>
                <option :value="false">开</option>
              </select>

              <template v-else>NA</template>
            </td>
            <td>
              <select v-if="veneerInfoData[2].link_status.line" v-model="veneerInfoData[2].tx_disable.line">
                <option :value="true">关</option>
                <option :value="false">开</option>
              </select>

              <template v-else>NA</template>
            </td>
            <td>
              <select v-if="veneerInfoData[3].link_status.client" v-model="veneerInfoData[3].tx_disable.client">
                <option :value="true">关</option>
                <option :value="false">开</option>
              </select>

              <template v-else>NA</template>
            </td>
            <td>
              <select v-if="veneerInfoData[3].link_status.line" v-model="veneerInfoData[3].tx_disable.line">
                <option :value="true">关</option>
                <option :value="false">开</option>
              </select>

              <template v-else>NA</template>
            </td>
          </tr>
          <tr class="prbs-tr">
            <td>误码检测</td>
            <td>
              <div v-if="veneerInfoData[0].link_status.client">
                <button class="def-btn" @click="detectionPrbs(0, 'client')">{{ veneerInfoData[0].prbs_en.client ? "停止" : "开始" }}</button>
                结果：{{ veneerInfoData[0].prbs.client ? "有" : "无" }}误码
              </div>

              <template v-else>NA</template>
            </td>
            <td>
              <div v-if="veneerInfoData[0].link_status.line">
                <button class="def-btn" @click="detectionPrbs(0, 'line')">{{ veneerInfoData[0].prbs_en.line ? "停止" : "开始" }}</button>
                结果：{{ veneerInfoData[0].prbs.line ? "有" : "无" }}误码
              </div>

              <template v-else>NA</template>
            </td>
            <td>
              <div v-if="veneerInfoData[1].link_status.client">
                <button class="def-btn" @click="detectionPrbs(1, 'client')">{{ veneerInfoData[1].prbs_en.client ? "停止" : "开始" }}</button>

                结果：{{ veneerInfoData[1].prbs.client ? "有" : "无" }}误码
              </div>

              <template v-else>NA</template>
            </td>
            <td>
              <div v-if="veneerInfoData[1].link_status.line">
                <button class="def-btn" @click="detectionPrbs(1, 'line')">{{ veneerInfoData[1].prbs_en.line ? "停止" : "开始" }}</button>

                结果：{{ veneerInfoData[1].prbs.line ? "有" : "无" }}误码
              </div>

              <template v-else>NA</template>
            </td>
            <td>
              <div v-if="veneerInfoData[2].link_status.client">
                <button class="def-btn" @click="detectionPrbs(2, 'client')">{{ veneerInfoData[2].prbs_en.client ? "停止" : "开始" }}</button>

                结果：{{ veneerInfoData[2].prbs.client ? "有" : "无" }}误码
              </div>

              <template v-else>NA</template>
            </td>
            <td>
              <div v-if="veneerInfoData[2].link_status.line">
                <button class="def-btn" @click="detectionPrbs(2, 'line')">{{ veneerInfoData[2].prbs_en.line ? "停止" : "开始" }}</button>

                结果：{{ veneerInfoData[2].prbs.line ? "有" : "无" }}误码
              </div>

              <template v-else>NA</template>
            </td>
            <td>
              <div v-if="veneerInfoData[3].link_status.client">
                <button class="def-btn" @click="detectionPrbs(3, 'client')">{{ veneerInfoData[3].prbs_en.client ? "停止" : "开始" }}</button>

                结果：{{ veneerInfoData[3].prbs.client ? "有" : "无" }}误码
              </div>

              <template v-else>NA</template>
            </td>
            <td>
              <div v-if="veneerInfoData[3].link_status.line">
                <button class="def-btn" @click="detectionPrbs(3, 'line')">{{ veneerInfoData[3].prbs_en.line ? "停止" : "开始" }}</button>

                结果：{{ veneerInfoData[3].prbs.line ? "有" : "无" }}误码
              </div>

              <template v-else>NA</template>
            </td>
          </tr>
          <tr>
            <td>速率</td>
            <td class="no-right-border">
              <div class="coll-2">
                <select v-if="veneerTitleData.bdtype === '25G-OTUL'" v-model="veneerInfoData[0].speed">
                  <option :value="1">eCPRI-25GE</option>
                  <option :value="0">Other</option>
                </select>

                <select v-else v-model="veneerInfoData[0].speed">
                  <option :value="1">25GE-28GE</option>
                  <option :value="0">Other</option>
                </select>
              </div>
            </td>
            <td></td>
            <td class="no-right-border">
              <div class="coll-2">
                <select v-if="veneerTitleData.bdtype === '25G-OTUL'" v-model="veneerInfoData[1].speed">
                  <option :value="1">eCPRI-25GE</option>
                  <option :value="0">Other</option>
                </select>
                <select v-else v-model="veneerInfoData[1].speed">
                  <option :value="1">25GE-28GE</option>
                  <option :value="0">Other</option>
                </select>
              </div>
            </td>
            <td></td>
            <td class="no-right-border">
              <div class="coll-2">
                <select v-if="veneerTitleData.bdtype === '25G-OTUL'" v-model="veneerInfoData[2].speed">
                  <option :value="1">eCPRI-25GE</option>
                  <option :value="0">Other</option>
                </select>
                <select v-else v-model="veneerInfoData[2].speed">
                  <option :value="1">25GE-28GE</option>
                  <option :value="0">Other</option>
                </select>
              </div>
            </td>
            <td></td>
            <td class="no-right-border">
              <div class="coll-2">
                <select v-if="veneerTitleData.bdtype === '25G-OTUL'" v-model="veneerInfoData[3].speed">
                  <option :value="1">eCPRI-25GE</option>
                  <option :value="0">Other</option>
                </select>
                <select v-else v-model="veneerInfoData[3].speed">
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
              <select v-if="veneerInfoData[0].link_status.client" v-model="veneerInfoData[0].input_eq.client">
                <option v-for="item in eqoptions" :key="item.value" :value="item.value">{{ item.lable }}</option>
              </select>

              <template v-else>NA</template>
            </td>
            <td>
              <select v-if="veneerInfoData[0].link_status.line" v-model="veneerInfoData[0].input_eq.line">
                <option v-for="item in eqoptions" :key="item.value" :value="item.value">{{ item.lable }}</option>
              </select>

              <template v-else>NA</template>
            </td>

            <td>
              <select v-if="veneerInfoData[1].link_status.client" v-model="veneerInfoData[1].input_eq.client">
                <option v-for="item in eqoptions" :key="item.value" :value="item.value">{{ item.lable }}</option>
              </select>

              <template v-else>NA</template>
            </td>
            <td>
              <select v-if="veneerInfoData[1].link_status.line" v-model="veneerInfoData[1].input_eq.line">
                <option v-for="item in eqoptions" :key="item.value" :value="item.value">{{ item.lable }}</option>
              </select>

              <template v-else>NA</template>
            </td>

            <td>
              <select v-if="veneerInfoData[2].link_status.client" v-model="veneerInfoData[2].input_eq.client">
                <option v-for="item in eqoptions" :key="item.value" :value="item.value">{{ item.lable }}</option>
              </select>

              <template v-else>NA</template>
            </td>
            <td>
              <select v-if="veneerInfoData[2].link_status.line" v-model="veneerInfoData[2].input_eq.line">
                <option v-for="item in eqoptions" :key="item.value" :value="item.value">{{ item.lable }}</option>
              </select>

              <template v-else>NA</template>
            </td>

            <td>
              <select v-if="veneerInfoData[3].link_status.client" v-model="veneerInfoData[3].input_eq.client">
                <option v-for="item in eqoptions" :key="item.value" :value="item.value">{{ item.lable }}</option>
              </select>

              <template v-else>NA</template>
            </td>
            <td>
              <select v-if="veneerInfoData[3].link_status.line" v-model="veneerInfoData[3].input_eq.line">
                <option v-for="item in eqoptions" :key="item.value" :value="item.value">{{ item.lable }}</option>
              </select>

              <template v-else>NA</template>
            </td>
          </tr>
          <tr>
            <td>输出幅度（dBm）</td>
            <td>
              <el-input-number v-if="veneerInfoData[0].link_status.client" v-model.number="veneerInfoData[0].output_amplitude.client" size="mini" :min="400" :max="900" :step="5" step-strictly />
              <template v-else>NA</template>
            </td>
            <td>
              <el-input-number v-if="veneerInfoData[0].link_status.line" v-model.number="veneerInfoData[0].output_amplitude.line" size="mini" :min="400" :max="900" :step="5" step-strictly />
              <template v-else>NA</template>
            </td>
            <td>
              <el-input-number v-if="veneerInfoData[1].link_status.client" v-model.number="veneerInfoData[1].output_amplitude.client" size="mini" :min="400" :max="900" :step="5" step-strictly />
              <template v-else>NA</template>
            </td>
            <td>
              <el-input-number v-if="veneerInfoData[1].link_status.line" v-model.number="veneerInfoData[1].output_amplitude.line" size="mini" :min="400" :max="900" :step="5" step-strictly />
              <template v-else>NA</template>
            </td>
            <td>
              <el-input-number v-if="veneerInfoData[2].link_status.client" v-model.number="veneerInfoData[2].output_amplitude.client" size="mini" :min="400" :max="900" :step="5" step-strictly />
              <template v-else>NA</template>
            </td>
            <td>
              <el-input-number v-if="veneerInfoData[2].link_status.line" v-model.number="veneerInfoData[2].output_amplitude.line" size="mini" :min="400" :max="900" :step="5" step-strictly />
              <template v-else>NA</template>
            </td>
            <td>
              <el-input-number v-if="veneerInfoData[3].link_status.client" v-model.number="veneerInfoData[3].output_amplitude.client" size="mini" :min="400" :max="900" :step="5" step-strictly />
              <template v-else>NA</template>
            </td>
            <td>
              <el-input-number v-if="veneerInfoData[3].link_status.line" v-model.number="veneerInfoData[3].output_amplitude.line" size="mini" :min="400" :max="900" :step="5" step-strictly />
              <template v-else>NA</template>
            </td>
          </tr>
          <tr>
            <td>接收光功率过低阈值（dBm）</td>
            <td>
              <input v-if="veneerInfoData[0].link_status.client" type="text" class="def-input" v-model.number="veneerInfoData[0].rcv_thr_L.client" />
              <template v-else>NA</template>
            </td>
            <td>
              <input v-if="veneerInfoData[0].link_status.line" type="text" class="def-input" v-model.number="veneerInfoData[0].rcv_thr_L.line" />
              <template v-else>NA</template>
            </td>
            <td>
              <input v-if="veneerInfoData[1].link_status.client" type="text" class="def-input" v-model.number="veneerInfoData[1].rcv_thr_L.client" />
              <template v-else>NA</template>
            </td>
            <td>
              <input v-if="veneerInfoData[1].link_status.line" type="text" class="def-input" v-model.number="veneerInfoData[1].rcv_thr_L.line" />
              <template v-else>NA</template>
            </td>
            <td>
              <input v-if="veneerInfoData[2].link_status.client" type="text" class="def-input" v-model.number="veneerInfoData[2].rcv_thr_L.client" />
              <template v-else>NA</template>
            </td>
            <td>
              <input v-if="veneerInfoData[2].link_status.line" type="text" class="def-input" v-model.number="veneerInfoData[2].rcv_thr_L.line" />
              <template v-else>NA</template>
            </td>
            <td>
              <input v-if="veneerInfoData[3].link_status.client" type="text" class="def-input" v-model.number="veneerInfoData[3].rcv_thr_L.client" />
              <template v-else>NA</template>
            </td>
            <td>
              <input v-if="veneerInfoData[3].link_status.line" type="text" class="def-input" v-model.number="veneerInfoData[3].rcv_thr_L.line" />
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
              <input v-if="veneerInfoData[0].link_status.line" type="text" class="def-input" v-model.number="veneerInfoData[0].rcv_thr_H.line" />
              <template v-else>NA</template>
            </td>
            <td>
              <input v-if="veneerInfoData[1].link_status.client" type="text" class="def-input" v-model.number="veneerInfoData[1].rcv_thr_H.client" />
              <template v-else>NA</template>
            </td>
            <td>
              <input v-if="veneerInfoData[1].link_status.line" type="text" class="def-input" v-model.number="veneerInfoData[1].rcv_thr_H.line" />
              <template v-else>NA</template>
            </td>
            <td>
              <input v-if="veneerInfoData[2].link_status.client" type="text" class="def-input" v-model.number="veneerInfoData[2].rcv_thr_H.client" />
              <template v-else>NA</template>
            </td>
            <td>
              <input v-if="veneerInfoData[2].link_status.line" type="text" class="def-input" v-model.number="veneerInfoData[2].rcv_thr_H.line" />
              <template v-else>NA</template>
            </td>
            <td>
              <input v-if="veneerInfoData[3].link_status.client" type="text" class="def-input" v-model.number="veneerInfoData[3].rcv_thr_H.client" />
              <template v-else>NA</template>
            </td>
            <td>
              <input v-if="veneerInfoData[3].link_status.line" type="text" class="def-input" v-model.number="veneerInfoData[3].rcv_thr_H.line" />
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
              <input v-if="veneerInfoData[0].link_status.line" type="text" class="def-input" v-model.number="veneerInfoData[0].tx_thr_H.line" />
              <template v-else>NA</template>
            </td>
            <td>
              <input v-if="veneerInfoData[1].link_status.client" type="text" class="def-input" v-model.number="veneerInfoData[1].tx_thr_H.client" />
              <template v-else>NA</template>
            </td>
            <td>
              <input v-if="veneerInfoData[1].link_status.line" type="text" class="def-input" v-model.number="veneerInfoData[1].tx_thr_H.line" />
              <template v-else>NA</template>
            </td>
            <td>
              <input v-if="veneerInfoData[2].link_status.client" type="text" class="def-input" v-model.number="veneerInfoData[2].tx_thr_H.client" />
              <template v-else>NA</template>
            </td>
            <td>
              <input v-if="veneerInfoData[2].link_status.line" type="text" class="def-input" v-model.number="veneerInfoData[2].tx_thr_H.line" />
              <template v-else>NA</template>
            </td>
            <td>
              <input v-if="veneerInfoData[3].link_status.client" type="text" class="def-input" v-model.number="veneerInfoData[3].tx_thr_H.client" />
              <template v-else>NA</template>
            </td>
            <td>
              <input v-if="veneerInfoData[3].link_status.line" type="text" class="def-input" v-model.number="veneerInfoData[3].tx_thr_H.line" />
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
              <input v-if="veneerInfoData[0].link_status.line" type="text" class="def-input" v-model.number="veneerInfoData[0].tx_thr_L.line" />
              <template v-else>NA</template>
            </td>
            <td>
              <input v-if="veneerInfoData[1].link_status.client" type="text" class="def-input" v-model.number="veneerInfoData[1].tx_thr_L.client" />
              <template v-else>NA</template>
            </td>
            <td>
              <input v-if="veneerInfoData[1].link_status.line" type="text" class="def-input" v-model.number="veneerInfoData[1].tx_thr_L.line" />
              <template v-else>NA</template>
            </td>
            <td>
              <input v-if="veneerInfoData[2].link_status.client" type="text" class="def-input" v-model.number="veneerInfoData[2].tx_thr_L.client" />
              <template v-else>NA</template>
            </td>
            <td>
              <input v-if="veneerInfoData[2].link_status.line" type="text" class="def-input" v-model.number="veneerInfoData[2].tx_thr_L.line" />
              <template v-else>NA</template>
            </td>
            <td>
              <input v-if="veneerInfoData[3].link_status.client" type="text" class="def-input" v-model.number="veneerInfoData[3].tx_thr_L.client" />
              <template v-else>NA</template>
            </td>
            <td>
              <input v-if="veneerInfoData[3].link_status.line" type="text" class="def-input" v-model.number="veneerInfoData[3].tx_thr_L.line" />
              <template v-else>NA</template>
            </td>
          </tr>
        </tbody>
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
export default {
  name: "otu25g",
  props: ["info", "visible"],
  data() {
    return {
      changeForm: {},
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
      veneerInfoData: new Array(4).fill({
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
    this.getVeneerDetail(this.info.slot);
  },
  watch: {
    visible(n) {
      if (!n) return;
      console.log("this.info", this.info);
      this.getVeneerDetail(this.info.slot);
    },
    veneerInfoData: {
      handler(n) {
        console.log("veneerInfoData", n);
      },
      deep: true,
    },
  },
  methods: {
    getVeneerTitle(slot) {
      return this.$http.post({
        otn2000: {
          type: "get_title",
          boardname: this.info.boardname,
          slot,
        },
      });
    },
    getVeneerInfo(slot) {
      return this.$http.post({
        otn2000: {
          type: "get_info",
          boardname: this.info.boardname,
          slot,
        },
      });
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

      this.getVeneerTitle(this.info.slot)
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
        .then(() => {
          this.$message("成功");
          this.setTilteDisabled = false;
        })
        .catch(() => {
          this.veneerTitleData.desc = "";
          this.$message("失败");
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

      this.$http
        .post(data)
        .then((res) => {
          console.log("setInfos", res);
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
      const data = { otn2000: { type: "default", boardname, slot } };
      this.restoreDefaultInfoDisabled = true;

      this.$http
        .post(data)
        .then((res) => {
          console.log("restoreDefaultInfos", res);
          this.$message("成功");
          this.restoreDefaultInfoDisabled = false;
        })
        .catch((err) => {
          console.log(err);
          this.veneerTitleData.desc = "";
          this.$message("失败");
          this.restoreDefaultInfoDisabled = false;
        });
    },
    restorInfo() {
      const { boardname, slot } = this.info;
      const data = { otn2000: { type: "reset", boardname, slot } };
      this.restorInfoDisabled = true;

      this.$http
        .post(data)
        .then((res) => {
          console.log("reset", res);
          this.$message("成功");
          this.restorInfoDisabled = false;
        })
        .catch((err) => {
          console.log(err);
          this.veneerTitleData.desc = "";
          this.$message("失败");
          this.restorInfoDisabled = false;
        });
    },
    detectionPrbs(i, status) {
      const val = this.veneerInfoData[i].prbs_en[status];
      this.veneerInfoData[i].prbs_en[status] = (val + 1) % 2;

      if (val) {
        // 停止检测
        console.log("开始检测");
      } else {
        // 开始检测
        console.log("停止检测");
      }
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

.otu25g-veneer {
  background-image: url(../../../../assets/images/veneer/otu25g.png);
}
</style>
