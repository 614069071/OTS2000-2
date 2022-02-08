<template>
  <div>
    <div class="inner-container-title">设置时间</div>

    <div class="system-info-wrapper">
      <div class="system-info-item-other">
        <span class="item-before"><el-radio v-model="dataForm.name1" label="1">手动</el-radio></span>
        <span class="item-after"><el-date-picker size="mini" v-model="dataForm.name7" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"> </el-date-picker></span>
      </div>
      <div class="system-info-item-other">
        <span class="item-before"><el-radio v-model="dataForm.name1" label="2">自动从互联网获取NTP Server</el-radio></span>
        <span class="item-after"><input class="def-input" v-model="dataForm.name3"/></span>
      </div>
      <div class="system-info-item-other"><span class="item-before">系统运行时间</span><span class="item-after">21分钟</span></div>

      <div class="inner-container-title">机箱温度</div>
      <div class="system-info-item-other">
        <span class="item-before">最低温度</span>
        <span class="item-after"><input type="text" class="def-input" /> ℃</span>
      </div>

      <div class="system-info-item-other">
        <span class="item-before">最高温度</span><span class="item-after"><input type="text" class="def-input" /> ℃</span>
      </div>
    </div>

    <div class="system-info-btns">
      <button class="def-btn">刷新</button>
      <button class="def-btn">应用</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "system-info",
  data() {
    return {
      dataForm: {
        name3: 1,
      },
    };
  },
  methods: {},
};
</script>

<style scoped lang="scss">
.system-info-btns {
  text-align: right;
}

.system-info-wrapper {
  .system-info-item-other {
    display: flex;
    align-items: center;
    color: #919191;

    & > span {
      width: 50%;
      height: 48px;
      line-height: 48px;
    }
  }
}
</style>
