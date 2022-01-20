<template>
  <div class="otu40g100g-cps-wrapper cps-wrapper">
    <div class="veneer-header-wrapper">otu40g100g</div>

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
              <div class="coll-4">SFP28光模块</div>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <div class="coll-4">QSFP28光模块</div>
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
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <div class="coll-4"></div>
          </td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>LINK状态</td>
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
          <td>属性</td>
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
          <td>波道</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>NA</td>
          <td>NA</td>
          <td>NA</td>
          <td>NA</td>
        </tr>
        <tr>
          <td>波长（nm）</td>
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
          <td>距离（km）</td>
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
          <td>发射功率（dBm）</td>
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
          <td>接受功率（dBm）</td>
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
          <td>偏置电流（mA）</td>
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
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <div class="coll-4"></div>
          </td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>温度（℃）</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <div class="coll-4"></div>
          </td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>激光器</td>
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
          <td>误码检测</td>
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
          <td>速率</td>
          <td>
            <div class="coll-4"></div>
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <div class="coll-4"></div>
          </td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>输入EQ（dB）</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <div class="coll-4">NA</div>
          </td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>输出幅度（mVpp）</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <div class="coll-4">NA</div>
          </td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>接受光功率过低阈值（dBm）</td>
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
          <td>接受光功率过载阈值（dBm）</td>
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
          <td>发送光功率过低阈值（dBm）</td>
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
          <td>接受光功率过载阈值（dBm）</td>
          <td></td>
          <td></td>
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
import mixins from "@/utils/mixins";

export default {
  name: "otu100g",
  mixins: [mixins],
  data() {
    return {
      infoData: {
        channels: new Array(4).fill({}),
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
          this.$message("成功");
          this.setInfoDisabled = false;
          this.detection[i][status] = false;

          if (!val) {
            // 停止检测并获取状态
            console.log("停止检测", val);
            this.getInfo()
              .then(() => {
                this.detection[i][`${status}End`] = true;
                this.$message("检测成功");
              })
              .catch(() => {
                this.detection[i][`${status}End`] = true;
                this.$message("检测失败");
              });
          } else {
            this.detection[i][`${status}End`] = false;
            this.detection[i][status] = false;
          }
        })
        .catch((err) => {
          console.log(err);
          this.$message("失败");
          this.setInfoDisabled = false;
        });
    },
  },
};
</script>

<style scoped>
.veneer-inner-wrapper {
  background-image: url(../../../../assets/images/veneer/otu100g.png);
}
</style>
