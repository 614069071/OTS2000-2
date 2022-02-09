<template>
  <div>
    <div class="inner-container-title">IP地址配置</div>
    <div class="ip-config-form-wrapper">
      <div class="config-form-item"><span>IP地址</span><input class="def-input" type="text" /></div>
      <div class="config-form-item"><span>子网掩码</span><input class="def-input" type="text" /></div>
      <div class="config-form-item"><span>网关</span><input class="def-input" type="text" /></div>
      <div class="config-form-item"><span>端口</span><span>9091</span></div>
      <div class="config-form-item"><span>MAC地址</span><span>3a:3a:3a:3a:3a:3a</span></div>
    </div>

    <div class="ip-config-form-submit">
      <button class="def-btn">修改</button>
      <button class="def-btn">保存设置</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ip-config",
  data() {
    return {
      dataForm: {},
    };
  },
  methods: {},
};
</script>

<style scoped lang="scss">
.ip-config-form-wrapper .config-form-item {
  margin-top: 18px;
  display: flex;

  span:first-child {
    width: 50%;
    height: 32px;
    line-height: 32px;
    text-align: center;
  }
}

.ip-config-form-submit {
  text-align: right;
}
</style>
