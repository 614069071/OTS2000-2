<template>
  <div class="upgrade-view-wrapper view-wrapper">
    <div class="inner-header-wrapper">
      <div class="upgrade-switch-wrapper">
        <div class="upgrade-logo-wrapper"></div>
        <div class="upgrade-item f18" :class="current === 'backup-reboot' ? 'active' : ''" @click="current = 'backup-reboot'">备份与恢复设置</div>
        <div class="upgrade-item f18" :class="current === 'system-upgrade' ? 'active' : ''" @click="current = 'system-upgrade'">系统升级</div>
        <div class="upgrade-item f18" :class="current === 'veneer-upgrede' ? 'active' : ''" @click="current = 'veneer-upgrede'">单板升级</div>
      </div>
    </div>

    <div class="inner-container-wrapper banner-list">
      <component :is="current"></component>
    </div>
  </div>
</template>

<script>
import BackupReboot from "./backup-reboot";
import SystemUpgrade from "./system-upgrade";
import VeneerUpgrede from "./veneer-upgrede";

export default {
  name: "upgrade",
  components: { BackupReboot, SystemUpgrade, VeneerUpgrede },
  data() {
    return {
      current: "backup-reboot",
      dataForm: {},
      addUserArg: [],
      dataTable: [
        {
          name1: "webadmin",
          name2: "****",
          name3: "管理员",
          name4: "2020-2-10",
        },
      ],
    };
  },
  methods: {
    addUserItem() {
      this.addUserArg.push(Date.now());
    },
  },
};
</script>

<style scoped lang="scss">
.upgrade-switch-wrapper {
  display: flex;
  align-items: flex-end;
  background-image: linear-gradient(#00366b, #006db6);
  border-radius: 33px;
  padding-left: 30px;
  height: 47px;
  margin-bottom: 40px;

  .upgrade-logo-wrapper {
    width: 63px;
    height: 47px;
    background: url(../../../assets/images/logo.png) center/contain no-repeat;
  }
  .upgrade-item {
    width: 170px;
    height: 47px;
    line-height: 65px;
    color: #fff;
    cursor: pointer;
    text-align: center;
  }

  .upgrade-item.active {
    background-color: #dfe0e0;
    color: #003366;
    background: url(../../../assets/images/grayBox.png) bottom center/contain no-repeat;
  }

  // .upgrade-item.active:before {
  // }

  // .upgrade-item.active:after {
  //   background: url(../../../assets/images/c-right.png) center/cover no-repeat;
  // }
}
</style>
