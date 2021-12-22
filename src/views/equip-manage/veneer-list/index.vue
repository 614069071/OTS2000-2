<template>
  <div class="veneer-list-view-wrapper view-wrapper">
    <div class="inner-header-wrapper">
      <div class="veneer-block-diagram-wrapper">
        <!-- 设备框图 -->
      </div>
    </div>

    <div class="inner-container-wrapper veneer-list">
      <div class="inner-container-title">单板列表</div>
      <el-table border :data="dataTable" tooltip-effect="dark" style="width: 100%">
        <el-table-column prop="slot" label="槽位号"></el-table-column>
        <el-table-column prop="status" label="槽位状态">
          <template slot-scope="scoped">
            {{ scoped.row.status ? "在位" : "脱位" }}
          </template>
        </el-table-column>
        <el-table-column prop="boardname" label="单板型号"></el-table-column>
        <!-- <el-table-column prop="name4" label="序列号" min-width="140"></el-table-column> -->
        <el-table-column prop="h_ver" label="硬件版本"></el-table-column>
        <el-table-column prop="s_ver" label="软件版本"></el-table-column>
        <el-table-column prop="mfgdate" label="生产日期"></el-table-column>
        <el-table-column label="详情信息" width="100">
          <template slot-scope="scope">
            <button class="veneer-look-btn" @click="lookDetail(scope.$index, scope.row)">点击查看</button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <el-dialog :title="`${veneerType.toUpperCase()}详情`" :visible.sync="dialogVisible" width="70%">
      <component :is="veneerType" :info="veneerData" :visible="dialogVisible"></component>
    </el-dialog>
  </div>
</template>

<script>
import Nmu from "./components/nmu";
import Edfa from "./components/edfa";

export default {
  name: "veneer-list",
  components: { Nmu, Edfa },
  data() {
    return {
      dataForm: {},
      inquireLoading: false,
      dataTable: [{ boardname: "edfa", slot: 6 }],
      dialogVisible: false,
      veneerType: "",
      veneerData: {},
    };
  },
  created() {
    this.getVeneerList();
  },
  methods: {
    getVeneerList() {
      this.$http
        .post({
          otn2000: {
            boardname: "board_view",
            type: "get_info",
          },
        })
        .then((res) => {
          if (!res) return;
          this.dataTable = res.otn2000_ack.channels || [];
        })
        .catch((err) => {
          console.log(err);
        });
    },

    lookDetail(index, data) {
      console.log("查看详情", data.boardname);
      this.veneerType = data.boardname;
      this.veneerData = data;

      this.dialogVisible = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.veneer-block-diagram-wrapper {
  width: 80%;
  height: 200px;
  background-color: grey;
  background: url("../../../assets/images/machine1.png") center/contain no-repeat;
  margin: 0 auto;
}

.veneer-look-btn {
  color: #696969;
}

.veneer-list {
  margin-top: 40px;
}
</style>

<style>
.border {
  height: 36px;
  line-height: 36px;
  border-right: 1px solid #e8e8e8;
  border-bottom: 1px solid #e8e8e8;
  text-align: center;
  box-sizing: border-box;
}
</style>
