<template>
  <div class="olp-view-wrapper">
    <div class="veneer-header-wrapper">olp</div>
    <table class="veneer-title-table" border="1">
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
  </div>
</template>

<script>
export default {
  name: "olp",
  data() {
    return {};
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
