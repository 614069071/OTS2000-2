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
        <el-table-column prop="name1" label="槽位号"></el-table-column>
        <el-table-column prop="name2" label="槽位状态"></el-table-column>
        <el-table-column prop="name3" label="单板型号"></el-table-column>
        <el-table-column prop="name4" label="序列号" min-width="140"></el-table-column>
        <el-table-column prop="name5" label="硬件版本"></el-table-column>
        <el-table-column prop="name6" label="软件版本"></el-table-column>
        <el-table-column prop="name7" label="生产日期"></el-table-column>
        <el-table-column label="详情信息" width="100">
          <template slot-scope="scope">
            <button class="veneer-look-btn" @click="lookDetail(scope.$index, scope.row)">点击查看</button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <el-dialog title="单板详情" :visible.sync="dialogVisible" width="70%"><Nmu></Nmu></el-dialog>
  </div>
</template>

<script>
import Nmu from "./components/nmu";

export default {
  name: "veneer-list",
  components: { Nmu },
  data() {
    return {
      dataForm: {},
      inquireLoading: false,
      dataTable: new Array(1).fill({
        name1: "SLOT#1",
        name2: "在位",
        name3: "edfa",
        name4: "nms20212102544",
        name5: "1.1.0.2",
        name6: "4.0.1",
        name7: "2121-5-20",
      }),
      dialogVisible: false,
    };
  },
  methods: {
    lookDetail(index, data) {
      console.log("查看详情", data);

      this.dialogVisible = true;

      this.$http
        .post({
          otn2000: {
            boardname: "sys_view",
            type: "get_info",
          },
        })
        .then((res) => {
          console.log("get_info", res);
        })
        .catch((err) => {
          console.log(err);
        });
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
