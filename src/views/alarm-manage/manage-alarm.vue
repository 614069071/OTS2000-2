<template>
  <div>
    <div class="inner-container-title">告警管理</div>

    <el-form class="current-alarm-search" inline label-width="100px" :model="dataForm">
      <el-form-item label="槽位号">
        <el-select size="mini" v-model="dataForm.slot" placeholder="请选择槽位号">
          <el-option label="全部" :value="255"></el-option>
          <el-option label="槽位1" :value="1"></el-option>
          <el-option label="槽位2" :value="2"></el-option>
          <el-option label="槽位3" :value="3"></el-option>
          <el-option label="槽位4" :value="4"></el-option>
          <el-option label="槽位5" :value="5"></el-option>
          <el-option label="槽位6" :value="6"></el-option>
          <el-option label="槽位7" :value="7"></el-option>
          <el-option label="槽位8" :value="8"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="端口号">
        <el-select size="mini" v-model="dataForm.portno" placeholder="请选择槽位号">
          <el-option label="全部端口" :value="255"></el-option>
          <el-option label="端口1" :value="1"></el-option>
          <el-option label="端口2" :value="2"></el-option>
          <el-option label="端口3" :value="3"></el-option>
          <el-option label="端口4" :value="4"></el-option>
          <el-option label="端口5" :value="5"></el-option>
          <el-option label="端口6" :value="6"></el-option>
          <el-option label="端口7" :value="7"></el-option>
          <el-option label="端口8" :value="8"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="告警等级">
        <el-select size="mini" v-model="dataForm.level" placeholder="请选择告警等级">
          <el-option label="全部" :value="255"></el-option>
          <el-option label="提示" :value="0"></el-option>
          <el-option label="次要" :value="1"></el-option>
          <el-option label="主要" :value="2"></el-option>
          <el-option label="严重" :value="3"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item>
        <button class="def-btn" @click="getAlarmList">查询</button>
      </el-form-item>
    </el-form>

    <el-table ref="multipleTable" border size="mini" :data="dataTable" tooltip-effect="dark" style="width: 100%">
      <el-table-column type="index" label="序号" width="50"></el-table-column>
      <el-table-column prop="name1" label="槽位号" width="60"></el-table-column>
      <el-table-column prop="name2" label="板类型" width="120"></el-table-column>
      <el-table-column prop="name3" label="端口" width="60"></el-table-column>
      <el-table-column prop="name4" label="告警名称"> </el-table-column>
      <el-table-column prop="name5" label="告警等级" width="80"> </el-table-column>
      <el-table-column prop="name6" label="告警状态" width="80"></el-table-column>
      <el-table-column label="操作" width="70">
        <template>
          <button class="def-btn">屏蔽</button>
        </template>
      </el-table-column>
    </el-table>

    <div class="alarm-list-controls">
      <button class="def-btn">应用</button>
      <button class="def-btn">刷新</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "manage-alarm",
  data() {
    return {
      dataForm: {
        slot: 255,
        portno: 255,
        level: 255,
      },
      alarmSolot: 8,
      inquireLoading: false,
      dataTable: [
        {
          name1: "8",
          name2: "NUM",
          name3: "1",
          name4: "SFP1模块不在位",
          name5: "次要",
          name6: "屏蔽",
        },
      ],
    };
  },
  methods: {
    getAlarmList() {
      const data = { otn2000: { type: "get_alarmconfig", slot: this.alarmSolot, boardname: "NMU" } };

      this.$http
        .post(data)
        .then((res) => {
          this.dataTable = (res.otn2000_ack.cfg_records || []).reverse();
        })
        .catch(() => {
          this.dataTable = [];
        });
    },
    resetDataForm() {},
  },
};
</script>

<style scoped>
.form-alarm-container {
  padding: 10px 0;
}

.alarm-list-controls {
  padding: 10px 0;
  text-align: right;
}
</style>
