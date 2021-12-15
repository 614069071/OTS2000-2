<template>
  <div class="veneer-list-view-wrapper view-wrapper">
    <div class="inner-header-wrapper">
      <div class="inner-container-title">设备框图</div>
      <div class="veneer-block-diagram-wrapper">
        <!-- 设备框图 -->
      </div>
    </div>

    <div class="inner-container-wrapper banner-list">
      <div class="inner-container-title">单板列表</div>
      <el-table ref="multipleTable" :data="dataTable" tooltip-effect="dark" style="width: 100%">
        <el-table-column prop="slot" label="订单编号"></el-table-column>
        <el-table-column prop="boardType" label="SN"></el-table-column>
        <el-table-column prop="hardwareVerson" label="订单数量"></el-table-column>
        <el-table-column prop="softwareVersion" label="单价（台）"></el-table-column>
        <el-table-column prop="produceDate" label="设备型号"></el-table-column>
        <el-table-column label="详情信息" width="160">
          <template slot-scope="scope">
            <el-button @click="lookDetail" type="primary" size="mini">查看</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "veneer-list",
  data() {
    return {
      dataForm: {},
      inquireLoading: false,
      dataTable: new Array(15).fill({
        id: 1,
        slot: "SLOT#1",
        slotStatus: "在位",
        boardType: "4*10G OTU",
        hardwareVerson: "1.1.0.2",
        softwareVersion: "4.0.1",
        produceDate: "2021-5-20",
        detail: "点击查看",
      }),
    };
  },
  methods: {
    lookDetail() {
      console.log("查看详情");
    },
  },
};
</script>

<style>
.veneer-block-diagram-wrapper {
  width: 80%;
  height: 200px;
  background-color: grey;
  background: url("../../assets/images/machine1.png") center/contain no-repeat;
  margin: 0 auto;
}
</style>
