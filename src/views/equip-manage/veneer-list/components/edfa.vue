<template>
  <div class="edfa-cps-wrapper">
    <div class="veneer-header-wrapper">EDFA</div>
    <div class="veneer-main-wrapper">
      <div class="veneer-channel-item"><span class="border">硬件版本</span><span class="border"></span></div>
      <div class="veneer-channel-item"><span class="border">软件件版本</span><span class="border"></span></div>
      <div class="veneer-channel-item"><span class="border">协议版本</span><span class="border"></span></div>
      <div class="veneer-channel-item"><span class="border">生产日期</span><span class="border"></span></div>
      <div class="veneer-channel-item"><span class="border">序列号</span><span class="border"></span></div>
      <div class="veneer-channel-item"><span class="border">运行时间</span><span class="border"></span></div>
      <div class="veneer-channel-item"><span class="border">设备类型</span><span class="border"></span></div>
      <div class="veneer-channel-item"><span class="border">状态</span><span class="border"></span></div>
      <div class="veneer-channel-item"><span class="border">信息描述</span><span class="border"></span></div>
    </div>

    <div class="venner-change-btns">
      <button class="def-btn">刷新</button>
      <button class="def-btn">应用</button>
    </div>
    <!-- 状态信息 -->
    <div class="veneer-main-wrapper">
      <div class="veneer-channel-item"><span class="border">输入光功率（dBm）</span><span class="border"></span></div>
      <div class="veneer-channel-item"><span class="border">输出光功率（dBm）</span><span class="border"></span></div>
      <div class="veneer-channel-item"><span class="border">TEC制冷电流（mA）</span><span class="border"></span></div>
      <div class="veneer-channel-item"><span class="border">模块温度（℃）</span><span class="border"></span></div>
      <div class="veneer-channel-item"><span class="border">PUMP温度（℃）</span><span class="border"></span></div>
      <div class="veneer-channel-item"><span class="border">PUMP电流（mA）</span><span class="border"></span></div>
      <div class="veneer-channel-item"><span class="border">输入功率告警</span><span class="border"></span></div>
      <div class="veneer-channel-item"><span class="border">输出功率告警</span><span class="border"></span></div>
      <div class="veneer-channel-item"><span class="border">PUMP电流告警</span><span class="border"></span></div>
      <div class="veneer-channel-item"><span class="border">模块温度告警</span><span class="border"></span></div>
      <div class="veneer-channel-item"><span class="border">PUMP温度告警</span><span class="border"></span></div>
      <div class="veneer-channel-item"><span class="border"></span><span class="border"></span></div>
    </div>

    <div class="veneer-edfa-setting-wrapper">
      <div class="veneer-edfa-item">
        <span>PUMP关断</span>
        <span>
          <select size="mini" v-model="changeForm.name1">
            <option value="1">打开</option>
            <option value="2">关闭</option>
          </select>
        </span>
      </div>
      <div class="veneer-edfa-item">
        <span>工作模式</span>

        <CustomSelect
          v-model="changeForm.name10"
          :options="[
            { label: 'APC', value: 'APC' },
            { label: 'AGC', value: 'AGC' },
            { label: 'ACC', value: 'ACC' },
            { label: '自定义', value: 'custom' },
          ]"
        />
      </div>
      <div class="veneer-edfa-item">
        <span>输入光功率门限（dBm）</span>
        <span class="edfa-after">
          <select size="mini" v-model="changeForm.name2">
            <option value="1">-20</option>
            <option value="2">-26</option>
            <option value="2">-31</option>
            <option value="3">自定义</option>
          </select>
          <input class="def-input edfa-input" type="text" />
        </span>
      </div>
      <div class="veneer-edfa-item">
        <span>输出光功率门限（dBm）</span>
        <span class="edfa-after">
          <select size="mini" v-model="changeForm.name2">
            <option value="1">-2</option>
            <option value="2">-5</option>
            <option value="2">-3</option>
            <option value="3">自定义</option>
          </select>
          <input class="def-input edfa-input" type="text" />
        </span>
      </div>
      <div class="veneer-edfa-item">
        <span>PUMP电流门限（mA）</span>
        <span class="edfa-after">
          <select v-model="changeForm.name2">
            <option value="1">600</option>
            <option value="2">800</option>
            <option value="3">自定义</option>
          </select>
          <input class="def-input edfa-input" type="text" />
        </span>
      </div>
      <div class="veneer-edfa-item">
        <span>PUMP关断电流（mA）</span>
        <span class="edfa-after">
          <select v-model="changeForm.name2">
            <option value="1">50</option>
            <option value="3">自定义</option>
          </select>
          <input class="def-input edfa-input" type="text" />
        </span>
      </div>
      <div class="veneer-edfa-item">
        <span>模块温度低门限（℃）</span>
        <span class="edfa-after">
          <select v-model="changeForm.name2">
            <option value="1">-30</option>
            <option value="1">-40</option>
            <option value="1">-50</option>
            <option value="3">自定义</option>
          </select>
          <input class="def-input edfa-input" type="text" />
        </span>
      </div>
      <div class="veneer-edfa-item">
        <span>PUMP温度低门限（℃）</span>
        <span class="edfa-after">
          <select v-model="changeForm.name2">
            <option value="1">20</option>
            <option value="3">自定义</option>
          </select>
          <input class="def-input edfa-input" type="text" />
        </span>
      </div>
      <div class="veneer-edfa-item">
        <span>模块温度高门限</span>
        <span class="edfa-after">
          <select v-model="changeForm.name2">
            <option value="1">50</option>
            <option value="2">60</option>
            <option value="3">70</option>
            <option value="4">自定义</option>
          </select>
          <input class="def-input edfa-input" type="text" />
        </span>
      </div>
      <div class="veneer-edfa-item">
        <span>PUMP温度高门限（℃）</span>
        <span class="edfa-after">
          <select v-model="changeForm.name2">
            <option value="1">30</option>
            <option value="4">自定义</option>
          </select>
          <input class="def-input edfa-input" type="text" />
        </span>
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
  components: { CustomSelect },
  data() {
    return {
      changeForm: {
        name1: "",
        name2: "1",
        name10: "APC",
      },
    };
  },
  created() {
    console.log("created");
  },
  mounted() {
    console.log("mounted");
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
