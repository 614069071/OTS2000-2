<template>
  <div>
    <div class="inner-container-title">{{ $t("USER_MANAGE.USER_LIST") }}</div>

    <el-table :data="dataTable" tooltip-effect="dark" style="width: 100%">
      <!-- <el-table-column type="index" label="序号" width="50"> </el-table-column> -->
      <el-table-column prop="name1" :label="$t('USER_MANAGE.USER_NAME')"></el-table-column>
      <el-table-column prop="name2" :label="$t('COMMON.PASSWORD')"></el-table-column>
      <el-table-column prop="name3" :label="$t('USER_MANAGE.USER_LEVEL')"></el-table-column>
      <el-table-column prop="name4" :label="$t('USER_MANAGE.CREATE_TIME')"></el-table-column>
      <el-table-column :label="$t('USER_MANAGE.CHANGE_PASSWORD')" width="160">
        <template>
          <button class="def-btn">{{ $t("COMMON.CHANGE") }}</button>
          <button class="def-btn">{{ $t("COMMON.DELETE") }}</button>
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
      <button class="def-btn">{{ $t("COMMON.REFRESH") }}</button>
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
  methods: {
    addUserItem() {
      this.addUserArg.push(Date.now());
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
