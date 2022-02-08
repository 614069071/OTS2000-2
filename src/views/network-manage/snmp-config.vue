<template>
  <div>
    <div class="inner-container-title">全局配置</div>

    <div class="global-config-snmp-wrapper">
      <div class="global-info-wrapper">
        <div class="system-info-item"><span>SNMP读共同体</span><span>pulic</span></div>
        <div class="system-info-item"><span>SNMP写共同体</span><span>private</span></div>
      </div>

      <div class="change-global-snmp-btn">
        <button class="def-btn">保存配置</button>
      </div>
    </div>

    <div class="inner-container-title">SNMP Trap配置</div>

    <el-table ref="multipleTable" :data="dataTable" tooltip-effect="dark" style="width: 100%">
      <el-table-column type="index" label="序号" width="60"> </el-table-column>
      <el-table-column prop="name1" label="目标主机名称"></el-table-column>
      <el-table-column prop="name2" label="IP地址"></el-table-column>
      <el-table-column prop="name3" label="UDP通信端口"></el-table-column>
      <el-table-column prop="name4" label="状态"></el-table-column>
      <el-table-column prop="name5" label="操作" width="160">
        <template slot-scope="scope">
          <button class="def-btn">修改</button>
          <button class="def-btn">删除</button>
        </template>
      </el-table-column>
    </el-table>

    <div class="add-trap-config-wrapper" v-for="item in addTrapArg" :key="item">
      <input class="def-input" type="text" placeholder="请输入主机名称" />
      <input class="def-input" type="text" placeholder="请输入IP地址" />
      <input class="def-input" type="text" placeholder="请输入UDP通信端口" />

      <button class="def-btn">启用</button>
    </div>

    <div class="add-trap-wrapper"><button class="def-btn" @click="addTrapItme">增加Trap</button></div>
  </div>
</template>

<script>
export default {
  name: "snmp-set",
  data() {
    return {
      dataForm: {},
      dataTable: [
        {
          name1: "host222",
          name2: "192.168.1.121",
          name3: "9162",
          name4: "启用",
        },
      ],
      addTrapArg: [],
    };
  },
  methods: {
    addTrapItme() {
      const date = Date.now();
      this.addTrapArg.push(date);
    },
  },
};
</script>

<style scoped lang="scss">
.global-config-snmp-wrapper {
  padding-top: 10px;
}

.global-info-wrapper {
  border-top: 1px solid grey;
  border-left: 1px solid grey;
  .system-info-item {
    display: flex;
    align-items: center;

    span {
      height: 50px;
      line-height: 50px;
      border-right: 1px solid grey;
      border-bottom: 1px solid grey;
      color: #a7a7a7;
    }

    span:first-child {
      background-color: #f4f7fa;
      width: 30%;
      text-align: center;
    }
    span:last-child {
      flex: 1;
      padding-left: 15px;
    }
  }
}

.change-global-snmp-btn {
  margin: 13px 0 40px 0;
  text-align: right;
}

.add-trap-config-wrapper {
  white-space: nowrap;
  padding: 10px 0 0 60px;
  input {
    margin-right: 20px;
  }
}

.add-trap-wrapper {
  text-align: right;
  margin-top: 20px;
}
</style>
