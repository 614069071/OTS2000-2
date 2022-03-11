<template>
  <div>
    <div class="inner-container-title">{{ $t("USER_MANAGE.USER_LIST") }}</div>

    <el-table :data="dataTable" border size="mini" tooltip-effect="dark" style="width: 100%">
      <!-- <el-table-column type="index" label="序号" width="50"> </el-table-column> -->
      <el-table-column prop="username" :label="$t('USER_MANAGE.USER_NAME')"></el-table-column>
      <el-table-column prop="privilege" :label="$t('USER_MANAGE.USER_LEVEL')">
        <template v-slot="{ row }">
          {{ row.privilege | mapRoleName }}
        </template>
      </el-table-column>
      <el-table-column prop="create_time" :label="$t('USER_MANAGE.CREATE_TIME')">
        <template v-slot="{ row }">
          {{ row.create_time | formatTime }}
        </template>
      </el-table-column>
      <el-table-column :label="$t('USER_MANAGE.CHANGE_PASSWORD')" width="160">
        <template v-slot="{ row }">
          <button class="def-btn">{{ $t("COMMON.CHANGE") }}</button>
          <button class="def-btn" v-if="row.privilege == '0'">{{ $t("COMMON.DELETE") }}</button>
        </template>
      </el-table-column>
    </el-table>

    <div class="add-user-config-wrapper" v-for="item in addUserArg" :key="item">
      <input class="def-input" type="text" :placeholder="$t('USER_MANAGE.INPUT_USER_NAME')" />
      <input class="def-input" type="text" :placeholder="$t('USER_MANAGE.INPUT_USER_PASSWORD')" />
      <el-select size="small" :placeholder="$t('USER_MANAGE.INPUT_USER_LEVEL')" v-model="dataForm.name3">
        <el-option :label="$t('USER_MANAGE.ADMIN')" value="1"></el-option>
        <el-option :label="$t('USER_MANAGE.AVERAGE')" value="2"></el-option>
      </el-select>
      <button class="def-btn">{{ $t("COMMON.SUBMIT") }}</button>
    </div>

    <div class="user-btns-wrapper">
      <button class="def-btn" @click="getUserList">{{ $t("COMMON.REFRESH") }}</button>
      <button class="def-btn">{{ $t("COMMON.SUBMIT") }}</button>
      <button class="def-btn" @click="addUserItem">{{ $t("USER_MANAGE.ADD_USER") }}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "user-manage",
  data() {
    return {
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
  filters: {
    mapRoleName(v) {
      return ["一般用户", "生产用户", "管理员"][v] || v;
    },
  },
  created() {
    this.getUserList();
  },
  methods: {
    addUserItem() {
      this.addUserArg.push(Date.now());
    },
    getUserList() {
      this.dataTable = [];

      const data = { otn2000: { boardname: "NMU", type: "get_userlist" } };

      this.$http
        .post(data)
        .then(({ otn2000_ack: { userlist = [] } }) => {
          this.dataTable = userlist;
        })
        .catch(err => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped lang="scss">
.add-user-config-wrapper {
  padding-right: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
}

.user-btns-wrapper {
  margin-top: 10px;
  text-align: right;
}
</style>
