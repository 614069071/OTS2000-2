<template>
  <div class="olp-cps-wrapper">
    <div class="veneer-header-wrapper">olp</div>
    <table class="veneer-table veneer-title-table" border="1">
      <tr>
        <td>硬件版本</td>
        <td>{{ veneerTitleData.h_rev }}</td>
        <td>软件版本</td>
        <td>{{ veneerTitleData.s_rev }}</td>
        <td>协议版本</td>
        <td>{{ veneerTitleData.mfgdate }}</td>
      </tr>
      <tr>
        <td>生产日期</td>
        <td>{{ veneerTitleData.mfgdate }}</td>
        <td>序列号</td>
        <td>{{ veneerTitleData.serialnum }}</td>
        <td>运行时间</td>
        <td>{{ veneerTitleData.run_time }}</td>
      </tr>
      <tr>
        <td>设备类型</td>
        <td>{{ veneerTitleData.device_type }}</td>
        <td>状态</td>
        <td>{{ veneerTitleData.status }}</td>
        <td>信息描述</td>
        <td>{{ veneerTitleData.desc }}</td>
      </tr>
    </table>

    <div class="venner-change-btns">
      <button class="def-btn">刷新</button>
      <button class="def-btn">应用</button>
    </div>

    <table class="veneer-table veneer-title-table" border="1">
      <tr>
        <td>工作状态</td>
        <td></td>
        <td></td>
        <td></td>
        <td>主线路设置</td>
        <td></td>
      </tr>
      <tr>
        <td>主线路收光信号</td>
        <td>{{ veneerTitleData.mfgdate }}</td>
        <td>备线路收光信号</td>
        <td>{{ veneerTitleData.serialnum }}</td>
        <td>备本地收光信号</td>
        <td>{{ veneerTitleData.run_time }}</td>
      </tr>
      <tr>
        <td>强制倒换</td>
        <td>
          <CustomSelect
            v-model="veneerTitleData.mode"
            :options="[
              { label: 'APC', value: 'APC' },
              { label: 'AGC', value: 'AGC' },
              { label: 'ACC', value: 'ACC' },
              { label: '自定义', value: 'custom' },
            ]"
          />
        </td>
        <td>是否回切</td>
        <td>{{ veneerTitleData.status }}</td>
        <td>回切WTR时间</td>
        <td>{{ veneerTitleData.desc }}</td>
      </tr>
      <tr>
        <td>主备初始差异（dB）</td>
        <td>{{ veneerTitleData.device_type }}</td>
        <td>倒换条件差异值（dB）</td>
        <td>{{ veneerTitleData.status }}</td>
        <td>告警门限</td>
        <td>{{ veneerTitleData.desc }}</td>
      </tr>
      <tr>
        <td>时间设置</td>
        <td>{{ veneerTitleData.device_type }}</td>
        <td>IP地址设置</td>
        <td>{{ veneerTitleData.status }}</td>
        <td></td>
        <td></td>
      </tr>
    </table>

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
  name: "olp",
  components: { CustomSelect },
  data() {
    return {
      veneerTitleData: {},
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

<style scoped lang="css"></style>
