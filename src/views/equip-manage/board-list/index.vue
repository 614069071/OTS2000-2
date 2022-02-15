<template>
  <div>
    <div class="inner-container-title">单板列表</div>

    <el-table border size="mini" :data="dataTable" tooltip-effect="dark" style="width: 100%">
      <el-table-column prop="slot" label="槽位号" width="100">
        <template v-slot="{ row }">
          {{ `slot ${row.slot}` }}
        </template>
      </el-table-column>
      <el-table-column prop="status" label="槽位状态">
        <template v-slot="{ row }">
          {{ row.status ? "在位" : "脱位" }}
        </template>
      </el-table-column>
      <el-table-column prop="boardname" label="单板型号">
        <template v-slot="{ row }">
          <template v-if="row.status">
            {{ row.boardname | unifiedBoardName }}
          </template>
        </template>
      </el-table-column>
      <el-table-column prop="h_ver" label="硬件版本">
        <template v-slot="{ row }">
          <template v-if="row.status">
            {{ row.h_ver }}
          </template>
        </template>
      </el-table-column>
      <el-table-column prop="s_ver" label="软件版本">
        <template v-slot="{ row }">
          <template v-if="row.status">
            {{ row.s_ver }}
          </template>
        </template>
      </el-table-column>
      <el-table-column prop="mfgdate" label="生产日期">
        <template v-slot="{ row }">
          <template v-if="row.status">
            {{ row.mfgdate }}
          </template>
        </template>
      </el-table-column>
      <el-table-column label="详情信息" width="100">
        <template v-slot="{ row }">
          <button v-if="row.status" @click="lookDetail(row)">点击查看</button>
        </template>
      </el-table-column>
    </el-table>

    <pupur :visible.sync="dialogVisible">
      <component :is="boardType" :info="boardData" :visible="dialogVisible"></component>
    </pupur>
  </div>
</template>

<script>
import { isSimilar } from "@/utils";
import Nmu from "./board-type/nmu";
import Edfa from "./board-type/edfa";
import Olp from "./board-type/olp";
import Otu10g from "./board-type/otu10g";
import Otu25g from "./board-type/otu25g";
import Otu100g from "./board-type/otu100g";
import Dco200g from "./board-type/dco200g";
import Ocp10g from "./board-type/ocp10g";
import Similar from "./board-type/similar";

export default {
  name: "board-list",
  components: { Nmu, Edfa, Olp, Otu10g, Otu25g, Otu100g, Dco200g, Ocp10g, Similar },
  data() {
    return {
      dataForm: {},
      inquireLoading: false,
      dataTable: [], //ocp2x10g/d16/d40/dcm/edfa/m16/m40/md8/md16sfa/md16sfb/nmu/olp/otu4x10g/otu4x25g/otu40g100g/otucfpdco200g"
      dialogVisible: false,
      boardType: "",
      boardTilte: "",
      boardData: {},
    };
  },
  created() {
    this.getboardList();
  },
  filters: {
    unifiedBoardName(v) {
      const boardNames = {
        otu10g: "4*10G OTU",
        otu25g: "4*25G OTU",
        ocp10g: "2*10G OCP",
        otu100g: "40&100G OTU",
        dco200: "200G CFP2 DCO",
        m16: "M16",
        d16: "D16",
        md8: "MD8",
        m40: "M40",
        d40: "D40",
        md16sfa: "MD16SFA",
        md16sfb: "MD16SFB",
        dcm: "DCM",
        edfa: "EDFA",
        NMU: "NMU",
        olp: "OLP",
      };

      return boardNames[v] || v;
    },
  },
  methods: {
    getboardList() {
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
    lookDetail(data) {
      const boardName = data.boardname.toLowerCase();
      if (isSimilar(boardName)) {
        this.boardType = "similar";
      } else {
        this.boardType = boardName;
      }

      this.boardTilte = boardName;
      this.boardData = data;
      this.dialogVisible = true;
    },
  },
};
</script>

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
.board-header-wrapper {
  background-color: #fff;
  display: flex;
  & > div {
    margin: auto;
    // transform: scale(1.5);
  }
}

.board-inner-wrapper {
  width: 1000px;
  height: 84px;
  border: 1px solid #aaa;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  margin: 0 auto;
}

.board-table {
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
    min-height: 26px;
    line-height: 26px;
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
  }

  .el-date-editor.el-input {
    width: 100%;
  }
}

.board-change-btns {
  text-align: right;
  padding: 10px 10px;
  background-color: #fff;
}

.board-table-container {
  flex: 1;
  overflow: auto;
  position: relative;
  padding: 0 10px;
  background-color: #fff;
}

.board-table-title {
  background-color: #fff;
  padding: 10px 10px 0 10px;
}
</style>
