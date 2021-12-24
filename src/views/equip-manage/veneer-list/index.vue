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
        <el-table-column prop="boardname" label="单板型号">
          <template slot-scope="scope">
            <template v-if="scope.row.status">
              {{ scope.row.boardname }}
            </template>
          </template>
        </el-table-column>
        <el-table-column prop="h_ver" label="硬件版本">
          <template slot-scope="scope">
            <template v-if="scope.row.status">
              {{ scope.row.h_ver }}
            </template>
          </template>
        </el-table-column>
        <el-table-column prop="s_ver" label="软件版本">
          <template slot-scope="scope">
            <template v-if="scope.row.status">
              {{ scope.row.s_ver }}
            </template>
          </template>
        </el-table-column>
        <el-table-column prop="mfgdate" label="生产日期">
          <template slot-scope="scope">
            <template v-if="scope.row.status">
              {{ scope.row.mfgdate }}
            </template>
          </template>
        </el-table-column>
        <el-table-column label="详情信息" width="100">
          <template slot-scope="scope">
            <button v-if="scope.row.status" class="veneer-look-btn" @click="lookDetail(scope.$index, scope.row)">点击查看</button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <el-dialog :title="`${veneerTilte.toUpperCase()}详情`" :visible.sync="dialogVisible" width="70%" :append-to-body="true">
      <component :is="veneerType" :info="veneerData" :visible="dialogVisible"></component>
    </el-dialog>
  </div>
</template>

<script>
import Nmu from "./veneer-type/nmu";
import Edfa from "./veneer-type/edfa";
import Olp from "./veneer-type/olp";
import Otu4x10g from "./veneer-type/otu4x10g";
import Otu4x25g from "./veneer-type/otu4x25g";
import Otu40g100g from "./veneer-type/otu40g100g";
import Otucfpdco200g from "./veneer-type/otucfpdco200g";
import Ocp2x10g from "./veneer-type/ocp2x10g";
import Similar from "./veneer-type/similar";

export default {
  name: "veneer-list",
  components: { Nmu, Edfa, Olp, Otu4x10g, Otu4x25g, Otu40g100g, Otucfpdco200g, Ocp2x10g, Similar },
  data() {
    return {
      dataForm: {},
      inquireLoading: false,
      dataTable: [], //ocp2x10g/d16/d40/dcm/edfa/m16/m40/md8/md16sfa/md16sfb/nmu/olp/otu4x10g/otu4x25g/otu40g100g/otucfpdco200g"
      dialogVisible: false,
      veneerType: "",
      veneerTilte: "",
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
      const veneerName = data.boardname.toLowerCase();
      const similarVeneerArg = ["m16", "d16", "md8", "m40", "d40", "md16sfa", "md16sfb", "dcm"];
      if (similarVeneerArg.includes(veneerName)) {
        this.veneerType = "similar";
      } else {
        this.veneerType = veneerName;
      }

      this.veneerTilte = veneerName;
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

<style lang="scss">
// 单板详情表格
.veneer-header-wrapper {
  height: 77px;
  border: 1px solid red;
}

.veneer-table {
  $border-color: #e8e8e8;
  width: 100%;
  border-collapse: collapse !important;
  margin-top: 20px;
  border-left: 1px solid $border-color;
  border-top: 1px solid $border-color;
  border-bottom: none;
  border-right: none;

  tr {
    display: flex;
    border: none;
  }

  td {
    min-height: 34px;
    line-height: 34px;
    color: #666;
    flex: 1;
    border-right: 1px solid $border-color;
    border-bottom: 1px solid $border-color;
    border-left: none;
    border-top: none;
    position: relative;
    padding: 0 10px;
    box-sizing: border-box;
    text-align: center;
  }

  .no-right-border {
    border-right: 1px solid transparent;
  }

  .coll-2 {
    width: 200%;
    text-align: center;
    position: absolute;
    left: 0;
  }

  .coll-4 {
    width: 400%;
    text-align: center;
    position: absolute;
    left: 0;
  }

  .veneer-input {
    height: 28px;
    width: 90%;
  }
}

.veneer-title-table {
  td {
    width: 16.66%;
  }
}

.venner-change-btns {
  text-align: right;
  margin-top: 20px;
}
</style>
