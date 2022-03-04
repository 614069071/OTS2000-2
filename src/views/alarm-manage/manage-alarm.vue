<template>
  <div>
    <div class="inner-container-title">告警管理</div>

    <el-form class="current-alarm-search" inline label-width="100px" :model="dataForm" @submit.native.prevent>
      <el-form-item label="槽位号">
        <el-select size="mini" v-model="dataForm.slot" placeholder="请选择槽位号">
          <el-option label="全部" :value="255"></el-option>
          <el-option :label="`槽位${slot}`" :value="slot" v-for="{ slot } in onlineBoardList" :key="slot"></el-option>
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

    <el-table border size="mini" :data="dataTable" tooltip-effect="dark" style="width: 100%">
      <el-table-column type="index" label="序号" width="50"></el-table-column>
      <el-table-column prop="slot" label="槽位号" width="60"></el-table-column>
      <el-table-column prop="board_type" label="板类型" width="120">
        <template v-slot="{ row }">{{ row.board_type | mapBoardType }}</template>
      </el-table-column>
      <el-table-column prop="portno" label="端口" width="60"></el-table-column>
      <el-table-column label="告警名称">
        <template v-slot="{ row }">{{ row | mapBoardAlarmName }}</template>
      </el-table-column>
      <el-table-column prop="level" label="告警等级" width="80">
        <template v-slot="{ row }">
          {{ row.level | mapAlarmLevel }}
        </template>
      </el-table-column>
      <el-table-column prop="status" label="告警状态" width="100">
        <template v-slot="{ $index }">
          <select size="mini" v-model="dataTable[$index].status" placeholder="请选择告警等级">
            <option label="屏蔽" :value="1"></option>
            <option label="正常" :value="0"></option>
          </select>
        </template>
      </el-table-column>
      <!-- <el-table-column label="操作" width="70">
        <template>
          <button class="def-btn">应用</button>
        </template>
      </el-table-column> -->
    </el-table>

    <div class="alarm-list-controls">
      <button class="def-btn" @click="submitAlarm">应用</button>
      <button class="def-btn" @click="getAlarmList">刷新</button>
      <button class="def-btn" :disabled="prevDisabled" @click="prevPage">上一页</button>
      <button class="def-btn" :disabled="nextDisabled" @click="nextPage">下一页</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "manage-alarm",
  data() {
    return {
      dataForm: {
        slot: 8,
        portno: 255,
        level: 255,
      },
      inquireLoading: false,
      dataTable: [],
      onlineBoardList: [],
      page: 1,
      total: 30,
      prevDisabled: true,
      nextDisabled: true,
    };
  },
  created() {
    this.getAlarmList();
  },
  mounted() {
    this.$bus.$on("onBoardList", v => {
      this.onlineBoardList = v.filter(e => e.status && e.boardname !== "NMU");
    });
  },
  beforeDestroy() {
    this.$bus.$off("onBoardList");
  },
  methods: {
    getAlarmList() {
      const data = { otn2000: { type: "get_alarmconfig", boardname: "NMU", ...this.dataForm, start_page: this.page, rows: this.total } };

      this.$http
        .post(data)
        .then(res => {
          const { cfg_records = [], total_pages } = res.otn2000_ack;
          const result = cfg_records || [];
          result.forEach(e => (e.static = e.status));
          this.dataTable = result;

          if (result.length < this.total) {
            this.prevDisabled = this.page === 1;
            this.nextDisabled = true;
          } else {
            if (this.page >= total_pages) {
              this.prevDisabled = false;
              this.nextDisabled = true;
            } else if (this.page <= 1) {
              this.prevDisabled = true;
              this.nextDisabled = false;
            } else {
              this.prevDisabled = false;
              this.nextDisabled = false;
            }
          }
        })
        .catch(() => {
          this.dataTable = [];
        });
    },
    submitAlarm() {
      const cfg_records = this.dataTable.filter(e => e.static !== e.status);

      if (!cfg_records.length) return;

      const data = { otn2000: { slot: cfg_records[0]["slot"], type: "post_alarmconfig", cfg_records } };

      console.log(data);

      this.$http
        .post(data)
        .then(() => {
          this.getAlarmList();
        })
        .catch(() => {
          alert("配置失败");
        });
    },
    prevPage() {
      this.page -= 1;
      this.getAlarmList();
    },
    nextPage() {
      this.page += 1;
      this.getAlarmList();
    },
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
