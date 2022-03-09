<template>
  <div>
    <div class="inner-header-wrapper">
      <div class="upgrade-switch-wrapper">
        <div class="upgrade-logo-wrapper"></div>
        <div class="upgrade-item f18" :class="current === 'backup-reboot' ? 'active' : ''" @click="current = 'backup-reboot'">{{ $t("UPGRADE.BACKUP_AND_RESTORE") }}</div>
        <div class="upgrade-item f18" :class="current === 'system-upgrade' ? 'active' : ''" @click="current = 'system-upgrade'">{{ $t("UPGRADE.SYS_UPGRADE") }}</div>
        <div class="upgrade-item f18" :class="current === 'board-upgrede' ? 'active' : ''" @click="current = 'board-upgrede'">{{ $t("UPGRADE.BOARD_UPGRADE") }}</div>
      </div>
    </div>

    <div>
      <component :is="current"></component>
    </div>
  </div>
</template>

<script>
import BackupReboot from "./backup-reboot";
import SystemUpgrade from "./system-upgrade";
import boardUpgrede from "./board-upgrede";

export default {
  name: "upgrade",
  components: { BackupReboot, SystemUpgrade, boardUpgrede },
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
  margin-bottom: 20px;

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
