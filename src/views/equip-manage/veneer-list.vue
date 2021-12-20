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
            <button class="veneer-look-btn" @click="lookDetail">点击查看</button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <el-dialog title="单板详情" :visible.sync="dialogVisible" width="70%">
      <div class="veneer-header-wrapper">我是图</div>
      <div class="veneer-main-wrapper">
        <div class="veneer-channel-item"><span class="border">硬件版本</span><span class="border"></span></div>
        <div class="veneer-channel-item"><span class="border">软件件版本</span><span class="border"></span></div>
        <div class="veneer-channel-item"><span class="border">协议版本</span><span class="border"></span></div>
        <div class="veneer-channel-item"><span class="border">生产日期</span><span class="border"></span></div>
        <div class="veneer-channel-item"><span class="border">序列号</span><span class="border"></span></div>
        <div class="veneer-channel-item"><span class="border">运行时间</span><span class="border"></span></div>
        <div class="veneer-channel-item"><span class="border">设备类型</span><span class="border"></span></div>
        <div class="veneer-channel-item"><span class="border">状态</span><span class="border"></span></div>
        <div class="veneer-channel-item"><span class="border">信息描述</span><span class="border"></span></div>
      </div>

      <div class="venner-change-btns">
        <button class="def-btn">刷新</button>
        <button class="def-btn">应用</button>
      </div>

      <div class="venner-change-info-wrapper">
        <div class="venner-change-info-item">
          <span class="border">SFP端口</span>
          <span class="border">SFP1</span>
          <span class="border">SFP2</span>
          <span class="border">SFP3</span>
        </div>
      </div>

      <div class="venner-change-info-wrapper">
        <div class="venner-change-info-item">
          <span class="border">ETH端口</span>
          <span class="border">ETH1</span>
          <span class="border">ETH2</span>
          <span class="border">ETH3</span>
        </div>
      </div>
    </el-dialog>
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
        name1: "SLOT#1",
        name2: "在位",
        name3: "nms",
        name4: "nms20212102544",
        name5: "1.1.0.2",
        name6: "4.0.1",
        name7: "2121-5-20",
      }),
      dialogVisible: false,
    };
  },
  methods: {
    lookDetail() {
      console.log("查看详情");

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
  background: url("../../assets/images/machine1.png") center/contain no-repeat;
  margin: 0 auto;
}

.veneer-look-btn {
  color: #696969;
}

.veneer-list {
  margin-top: 40px;
}

.veneer-header-wrapper {
  height: 77px;
  border: 1px solid red;
}

.border {
  height: 36px;
  line-height: 36px;
  border-right: 1px solid #e8e8e8;
  border-bottom: 1px solid #e8e8e8;
  text-align: center;
  box-sizing: border-box;
}

.veneer-main-wrapper {
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;
  border-top: 1px solid #e8e8e8;
  border-left: 1px solid #e8e8e8;

  .veneer-channel-item {
    width: 33.33%;
    display: flex;
  }

  .veneer-channel-item span:first-child {
    width: 40%;
    text-align: center;
  }

  .veneer-channel-item span:last-child {
    flex: 1;
    padding-left: 10px;
  }
}
.venner-change-btns {
  text-align: right;
  padding: 10px 0;
}

.venner-change-info-wrapper {
  margin-top: 40px;
  border-top: 1px solid #e8e8e8;
  border-left: 1px solid #e8e8e8;
  .venner-change-info-item {
    display: flex;

    span {
      width: 25%;
    }
  }
}
</style>
