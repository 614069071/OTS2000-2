<template>
  <div class="edfa-cps-wrapper">
    <div class="veneer-header-wrapper">EDFA</div>
    <div class="veneer-main-wrapper">
      <div class="veneer-channel-item">
        <span class="border">硬件版本</span><span class="border">{{ veneerTitleData.h_rev }}</span>
      </div>
      <div class="veneer-channel-item">
        <span class="border">软件版本</span><span class="border">{{ veneerTitleData.s_rev }}</span>
      </div>
      <div class="veneer-channel-item">
        <span class="border">协议版本</span><span class="border">{{ veneerTitleData.mfgdate }}</span>
      </div>
      <div class="veneer-channel-item">
        <span class="border">生产日期</span><span class="border">{{ veneerTitleData.mfgdate }}</span>
      </div>
      <div class="veneer-channel-item">
        <span class="border">序列号</span><span class="border">{{ veneerTitleData.serialnum }}</span>
      </div>
      <div class="veneer-channel-item">
        <span class="border">运行时间</span><span class="border">{{ veneerTitleData.run_time }}</span>
      </div>
      <div class="veneer-channel-item">
        <span class="border">设备类型</span><span class="border">{{ veneerTitleData.device_type }}</span>
      </div>
      <div class="veneer-channel-item">
        <span class="border">状态</span><span class="border">{{ veneerTitleData.status }}</span>
      </div>
      <div class="veneer-channel-item">
        <span class="border">信息描述</span><span class="border">{{ veneerTitleData.desc }}</span>
      </div>
    </div>

    <div class="venner-change-btns">
      <button class="def-btn">刷新</button>
      <button class="def-btn">应用</button>
    </div>
    <!-- 状态信息 -->
    <div class="veneer-main-wrapper">
      <div class="veneer-channel-item">
        <span class="border">输入光功率（dBm）</span><span class="border">{{ veneerInfoData.lum_input }}</span>
      </div>
      <div class="veneer-channel-item">
        <span class="border">输出光功率（dBm）</span><span class="border">{{ veneerInfoData.lum_output }}</span>
      </div>
      <div class="veneer-channel-item">
        <span class="border">TEC制冷电流（mA）</span><span class="border">{{ veneerInfoData.tec_cold_cur }}</span>
      </div>
      <div class="veneer-channel-item">
        <span class="border">模块温度（℃）</span><span class="border">{{ veneerInfoData.mod_temp }}</span>
      </div>
      <div class="veneer-channel-item">
        <span class="border">PUMP温度（℃）</span><span class="border">{{ veneerInfoData.pump_temp }}</span>
      </div>
      <div class="veneer-channel-item">
        <span class="border">PUMP电流（mA）</span><span class="border">{{ veneerInfoData.cur }}</span>
      </div>
      <div class="veneer-channel-item">
        <span class="border">输入功率告警</span><span class="border">{{ veneerInfoData.lum_input_thr }}</span>
      </div>
      <div class="veneer-channel-item">
        <span class="border">输出功率告警</span><span class="border">{{ veneerInfoData.lum_output_thr }}</span>
      </div>
      <div class="veneer-channel-item">
        <span class="border">PUMP电流告警</span><span class="border"> {{ veneerInfoData.pump_cur_thr }}</span>
      </div>
      <div class="veneer-channel-item">
        <span class="border">模块温度告警</span><span class="border"> {{ veneerInfoData.mod_temp_alarm }}</span>
      </div>
      <div class="veneer-channel-item">
        <span class="border">PUMP温度告警</span><span class="border">{{ veneerInfoData.pump_temp_alarm }}</span>
      </div>
      <div class="veneer-channel-item"><span class="border"></span><span class="border"></span></div>
    </div>

    <div class="veneer-edfa-setting-wrapper">
      <div class="veneer-edfa-item">
        <span>PUMP关断</span>
        <span>
          <select size="mini" v-model="veneerInfoData.pump_sw">
            <option :value="1">打开</option>
            <option :value="0">关闭</option>
          </select>
        </span>
      </div>
      <div class="veneer-edfa-item">
        <span>工作模式</span>

        <CustomSelect
          v-model="veneerInfoData.mode"
          :options="[
            { label: 'APC', value: 0 },
            { label: 'AGC', value: 1 },
            { label: 'ACC', value: 2 },
            { label: '自定义', value: 'custom' },
          ]"
        />
      </div>
      <div class="veneer-edfa-item">
        <span>输入光功率门限（dBm）</span>
        <CustomSelect
          v-model="changeForm.name10"
          :options="[
            { label: '-20', value: '0' },
            { label: '-26', value: '1' },
            { label: '-31', value: '2' },
            { label: '自定义', value: 'custom' },
          ]"
        />
      </div>
      <div class="veneer-edfa-item">
        <span>输出光功率门限（dBm）</span>
        <CustomSelect
          v-model="changeForm.name10"
          :options="[
            { label: '-2', value: '0' },
            { label: '-5', value: '1' },
            { label: '-3', value: '2' },
            { label: '自定义', value: 'custom' },
          ]"
        />
      </div>
      <div class="veneer-edfa-item">
        <span>PUMP电流门限（mA）</span>
        <CustomSelect
          v-model="changeForm.name10"
          :options="[
            { label: '600', value: '0' },
            { label: '800', value: '1' },
            { label: '自定义', value: 'custom' },
          ]"
        />
      </div>
      <div class="veneer-edfa-item">
        <span>PUMP关断电流（mA）</span>

        <CustomSelect
          v-model="changeForm.name10"
          :options="[
            { label: '50', value: '0' },
            { label: '自定义', value: 'custom' },
          ]"
        />
      </div>
      <div class="veneer-edfa-item">
        <span>模块温度低门限（℃）</span>
        <CustomSelect
          v-model="changeForm.name10"
          :options="[
            { label: '-30', value: '0' },
            { label: '-40', value: '2' },
            { label: '-50', value: '3' },
            { label: '自定义', value: 'custom' },
          ]"
        />
      </div>
      <div class="veneer-edfa-item">
        <span>PUMP温度低门限（℃）</span>

        <CustomSelect
          v-model="changeForm.name10"
          :options="[
            { label: '20', value: '0' },
            { label: '自定义', value: 'custom' },
          ]"
        />
      </div>
      <div class="veneer-edfa-item">
        <span>模块温度高门限</span>

        <CustomSelect
          v-model="changeForm.name10"
          :options="[
            { label: '50', value: '0' },
            { label: '60', value: '1' },
            { label: '70', value: '2' },
            { label: '自定义', value: 'custom' },
          ]"
        />
      </div>
      <div class="veneer-edfa-item">
        <span>PUMP温度高门限（℃）</span>

        <CustomSelect
          v-model="changeForm.name10"
          :options="[
            { label: '1', value: '0' },
            { label: '4', value: '1' },
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
        name1: "",
        name2: "1",
        name10: "APC",
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
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped lang="scss">
.veneer-header-wrapper {
  height: 77px;
  border: 1px solid red;
}
.veneer-main-wrapper {
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;
  border-top: 1px solid #e8e8e8;
  border-left: 1px solid #e8e8e8;

  .veneer-channel-item {
    width: 33.33%;
    display: flex;
  }

  .veneer-channel-item span:first-child {
    width: 40%;
    text-align: center;
  }

  .veneer-channel-item span:last-child {
    flex: 1;
    padding-left: 10px;
  }
}

.venner-change-btns {
  text-align: right;
  padding: 10px 0;
}

.venner-change-info-wrapper {
  margin-top: 40px;
  border-top: 1px solid #e8e8e8;
  border-left: 1px solid #e8e8e8;
  .venner-change-info-item {
    display: flex;

    span {
      width: 25%;
    }
  }
}

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
