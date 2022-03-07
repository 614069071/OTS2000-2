<template>
  <div>
    <div class="inner-container-title">单板列表<button class="button-refresh-board-list" @click="refresh">刷新</button></div>

    <el-table border size="mini" :data="dataTable" tooltip-effect="dark" style="width: 100%">
      <el-table-column prop="slot" label="槽位号" width="100">
        <template v-slot="{ row }">
          {{ `SLOT ${row.slot}` }}
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
      <board-view :info="boardData" :visible.sync="dialogVisible"></board-view>
    </pupur>
  </div>
</template>

<script>
import BoardView from "./board-view";

export default {
  name: "board-list",
  components: { BoardView },
  data() {
    return {
      dataForm: {},
      inquireLoading: false,
      dataTable: [],
      dialogVisible: false,
      boardType: "",
      boardTilte: "",
      boardData: {},
    };
  },
  mounted() {
    this.$bus.$on("onBoardView", v => {
      this.lookDetail(v);
    });

    this.$bus.$on("onBoardList", v => {
      this.dataTable = v;
    });
  },
  beforeDestroy() {
    this.$bus.$off("onBoardView");
    this.$bus.$off("onBoardList");
  },
  filters: {
    unifiedBoardName(v) {
      const boardNames = {
        otu10g: "4*10G OTU",
        otu25g: "4*25G OTU",
        ocp10g: "2*10G OCP",
        otu100g: "40&100G OTU",
        dco200g: "200G CFP2 DCO",
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
    lookDetail(data) {
      const { boardname, status } = data;

      if (!status) return;

      const boardName = boardname.toLowerCase();

      this.boardType = boardName;
      this.boardTilte = boardName;
      this.boardData = data;
      this.dialogVisible = true;
    },
    refresh() {
      this.$bus.$emit("updateBoardView");
    },
  },
};
</script>
