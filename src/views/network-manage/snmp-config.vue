<template>
  <div class="snmp-config-view-wrapper view-wrapper">
    <div class="inner-header-wrapper">
      <div class="inner-container-title">设备框图</div>
      <div class="snmp-config-diagram-wrapper">
        <!-- 设备框图 -->
      </div>
    </div>

    <div class="inner-container-wrapper banner-list">
      <div class="inner-container-title">全局配置</div>
      <div class="global-config-snmp-wrapper">
        <div class="global-info-wrapper">
          <div class="system-info-item"><span>SNMP读共同体</span><span>pulic</span></div>
          <div class="system-info-item"><span>SNMP写共同体</span><span>private</span></div>
        </div>
        <el-button class="change-global-snmp-btn" type="primary">修改</el-button>
      </div>

      <div class="inner-container-title">SNMP Trap配置</div>

      <el-table ref="multipleTable" :data="dataTable" tooltip-effect="dark" style="width: 100%">
        <el-table-column type="index" label="序号" width="50"> </el-table-column>
        <el-table-column prop="name2" label="目标主机名称"></el-table-column>
        <el-table-column prop="name3" label="UDP通信端口"></el-table-column>
        <el-table-column prop="name4" label="状态"></el-table-column>
        <el-table-column prop="name5" label="操作" width="160">
          <template slot-scope="scope">
            <el-button type="warning" size="mini">修改</el-button>
            <el-button type="danger" size="mini">删除</el-button>
          </template>
        </el-table-column>
      </el-table>

      <div class="inner-pagination-wrapper">
        <div>
          <el-button size="mini" type="primary">增加Trap</el-button>
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
          name2: "host 238",
          name3: "192.168.1.212",
          name4: "9162",
          name5: "启用",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style scoped lang="scss">
.snmp-config-diagram-wrapper {
  width: 80%;
  height: 200px;
  background-color: grey;
  background: url("../../assets/images/machine1.png") center/contain no-repeat;
  margin: 0 auto;
}

.global-config-snmp-wrapper {
  display: flex;
}

.global-info-wrapper {
  width: 70%;
  display: flex;
  flex-wrap: wrap;
  border-top: 1px solid grey;
  border-left: 1px solid grey;
  .system-info-item {
    width: 50%;
    display: flex;
    align-items: center;

    span {
      height: 48px;
      border-right: 1px solid grey;
      border-bottom: 1px solid grey;
      line-height: 48px;
    }

    span:first-child {
      background-color: #f4f7fa;
      width: 120px;
      text-align: center;
    }
    span:last-child {
      flex: 1;
      padding-left: 15px;
    }
  }
}

.change-global-snmp-btn {
  margin-left: 20px;
}

.snmp-config-view-wrapper .inner-pagination-wrapper {
  display: flex;
  justify-content: space-between;
}
</style>
