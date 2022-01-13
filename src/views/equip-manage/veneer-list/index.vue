<template>
  <div class="veneer-list-view-wrapper view-wrapper">
    <div class="inner-header-wrapper">
      <!-- 设备框图 -->
      <div class="veneer-block-diagram-wrapper">
        <Structure :list="dataTable"></Structure>
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

    <pupur :visible.sync="dialogVisible">
      <component :is="veneerType" :info="veneerData" :visible="dialogVisible"></component>
    </pupur>
  </div>
</template>

<script>
import Nmu from "./veneer-type/nmu";
import Edfa from "./veneer-type/edfa";
import Olp from "./veneer-type/olp";
import Otu10g from "./veneer-type/otu10g";
import Otu25g from "./veneer-type/otu25g";
import Otu40g100g from "./veneer-type/otu40g100g";
import Otucfpdco200g from "./veneer-type/otucfpdco200g";
import Ocp10g from "./veneer-type/ocp10g";
import Similar from "./veneer-type/similar";

import Structure from "../../../components/structure";

export default {
  name: "veneer-list",
  components: { Nmu, Edfa, Olp, Otu10g, Otu25g, Otu40g100g, Otucfpdco200g, Ocp10g, Similar, Structure },
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
// 单板构图 start

// 单板构图 end

.veneer-look-btn {
  color: #696969;
}

.veneer-list {
  margin-top: 20px;
}
</style>

<style lang="scss">
$border-color: #aaa;

.cps-wrapper {
  // background-color: #fff;
  // padding: 0 10px 10px 10px;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-sizing: border-box;
}
// 单板详情表格
.veneer-header-wrapper {
  background-color: #fff;
  display: flex;
  & > div {
    margin: auto;
    // transform: scale(1.5);
  }
}

.veneer-inner-wrapper {
  width: 1000px;
  height: 84px;
  border: 1px solid #aaa;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  margin: 0 auto;
}

.veneer-table {
  width: 100%;
  border-collapse: collapse !important;
  display: flex;
  flex-direction: column;
  border: none;
  border-right: 1px solid $border-color;
  border-bottom: 1px solid $border-color;

  thead {
    position: sticky;
    top: 0;
    left: 0;
    background-color: #fff !important;
    z-index: 100;

    .coll-2,
    .coll-3,
    .coll-4 {
      text-align: center;
    }
  }

  tr,
  th {
    display: flex;
    border: none;
    font-weight: normal;
  }

  td {
    min-height: 34px;
    line-height: 34px;
    flex: 1;
    position: relative;
    padding: 0 3px;
    box-sizing: border-box;
    text-align: center;
    display: flex;
    box-sizing: border-box;
  }

  td > * {
    margin: auto 0;
  }

  .coll-2,
  .coll-3,
  .coll-4 {
    height: 100%;
    background-color: #fff;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    padding: 0 2px;
    text-align: left;
    box-sizing: border-box;
  }

  .coll-2 {
    width: 200%;
  }

  .coll-3 {
    width: 300%;
  }

  .coll-4 {
    width: 400%;
  }

  .coll-2 > .def-input,
  .coll-3 > .def-input,
  .coll-4 > .def-input,
  td > .def-input {
    width: 100%;
    max-width: 240px;
    height: 28px;
  }

  .el-date-editor.el-input {
    width: 100%;
  }
}

.venner-change-btns {
  text-align: right;
  padding: 20px 10px;
  background-color: #fff;
}

.veneer-table-container {
  flex: 1;
  overflow: auto;
  position: relative;
  padding: 0 10px;
  background-color: #fff;
}

.veneer-table-title {
  background-color: #fff;
  padding: 20px 10px 0 10px;
}
</style>
