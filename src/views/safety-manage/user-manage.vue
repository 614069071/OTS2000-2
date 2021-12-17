<template>
  <div class="user-manage-view-wrapper view-wrapper">
    <div class="inner-header-wrapper">
      <div class="inner-container-title">设备框图</div>
      <div class="user-manage-diagram-wrapper">
        <!-- 设备框图 -->
      </div>
    </div>

    <div class="inner-container-wrapper banner-list">
      <div class="inner-container-title">SNMP Trap配置</div>

      <el-table ref="multipleTable" :data="dataTable" tooltip-effect="dark" style="width: 100%">
        <!-- <el-table-column type="index" label="序号" width="50"> </el-table-column> -->
        <el-table-column prop="name1" label="用户名称"></el-table-column>
        <el-table-column prop="name2" label="密码"></el-table-column>
        <el-table-column prop="name3" label="用户级别"></el-table-column>
        <el-table-column prop="name4" label="创建时间"></el-table-column>
        <el-table-column label="修改密码" width="160">
          <template slot-scope="scope">
            <button class="def-btn">点击修改</button>
            <button class="def-btn">删除</button>
          </template>
        </el-table-column>
      </el-table>

      <div class="add-user-config-wrapper" v-for="item in addUserArg" :key="item">
        <input class="def-input" type="text" placeholder="用户名称" />
        <input class="def-input" type="text" placeholder="密码" />
        <input class="def-input" type="text" placeholder="创建时间" />
        <el-select size="small" v-model="dataForm.name3">
          <el-option label="管理员" value="1"></el-option>
          <el-option label="一般用户" value="2"></el-option>
        </el-select>
        <button class="def-btn">确定</button>
      </div>

      <div class="user-btns-wrapper">
        <button class="def-btn">刷新</button>
        <button class="def-btn">应用</button>
        <button class="def-btn" @click="addUserItem">新增用户</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "veneer-list",
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
.user-manage-diagram-wrapper {
  width: 80%;
  height: 200px;
  background-color: grey;
  background: url("../../assets/images/machine1.png") center/contain no-repeat;
  margin: 0 auto;
}

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
