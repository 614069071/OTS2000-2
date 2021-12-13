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
        <el-table-column type="index" label="序号" width="50"> </el-table-column>
        <el-table-column prop="name2" label="用户名称"></el-table-column>
        <el-table-column prop="name3" label="用户级别"></el-table-column>
        <el-table-column prop="name4" label="创建时间"></el-table-column>
        <el-table-column label="修改密码" width="120">
          <template slot-scope="scope">
            <el-button type="danger" size="mini">点击修改</el-button>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="120">
          <template slot-scope="scope">
            <el-button type="primary" size="mini">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>

      <div class="inner-pagination-wrapper inner-pagination-colle">
        <div class="pagination-btns-wrapper">
          <el-button size="mini" type="primary">新增用户</el-button>
        </div>
        <el-pagination background layout="prev,pager,next,jumper" :total="1000" />
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
      dataTable: [
        {
          name2: "webadmin",
          name3: "管理员",
          name4: "2020-2-10",
        },
      ],
    };
  },
  methods: {},
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
</style>
