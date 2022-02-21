<template>
  <div>
    <div class="inner-header-wrapper">
      <div class="inner-container-title">查询条件</div>

      <el-form class="history-alarm-search" inline label-width="100px" :model="dataForm">
        <el-form-item label="开始日期">
          <el-date-picker size="mini" v-model="dataForm.start_time" value-format="timestamp" />
        </el-form-item>

        <el-form-item label="结束日期">
          <el-date-picker size="mini" v-model="dataForm.end_time" value-format="timestamp" />
        </el-form-item>

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

        <el-form-item label="告警等级">
          <el-select size="mini" v-model="dataForm.level" placeholder="请选择告警等级">
            <el-option label="全部" :value="255"></el-option>
            <el-option label="提示" :value="0"></el-option>
            <el-option label="次要" :value="1"></el-option>
            <el-option label="主要" :value="2"></el-option>
            <el-option label="严重" :value="3"></el-option>
          </el-select>
        </el-form-item>
      </el-form>

      <div class="history-alarm-search-submit">
        <button class="def-btn" @click="getAlarmList">查询</button>
        <button class="def-btn" @click="resetDataForm">重置</button>
      </div>
    </div>

    <div class="inner-container-title">历史警告信息</div>

    <el-table ref="multipleTable" border size="mini" :data="dataTable" tooltip-effect="dark" style="width: 100%">
      <el-table-column type="index" label="序号" width="50"></el-table-column>
      <el-table-column prop="occur_time" label="发生时间">
        <template v-slot="{ row }">
          {{ (row.occur_time * 1000) | formatTime }}
        </template>
      </el-table-column>
      <el-table-column prop="occur_time" label="结束时间">
        <template v-slot="{ row }">
          {{ (row.end_time * 1000) | formatTime }}
        </template>
      </el-table-column>
      <el-table-column prop="slot" label="槽位号"></el-table-column>
      <el-table-column prop="board_type" label="板类型">
        <template v-slot="{ row }">{{ row.board_type | mapBoardType }}</template>
      </el-table-column>
      <el-table-column prop="id" label="告警名称">
        <template v-slot="{ row }">{{ row | mapBoardAlarmName }}</template>
      </el-table-column>
      <el-table-column prop="level" label="告警等级">
        <template v-slot="{ row }">
          {{ row.level | mapAlarmLevel }}
        </template>
      </el-table-column>
      <el-table-column prop="name6" label="告警原因"></el-table-column>
      <el-table-column prop="confirm_time" label="确认时间">
        <template v-slot="{ row }">
          <template v-if="row.confirm_time">
            {{ (row.confirm_time * 1000) | formatTime }}
          </template>

          <template v-else>未确认</template>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="160">
        <template v-slot="{ row }">
          <button v-if="!row.confirm_time" class="def-btn" @click="confimAlarm(row)">确认</button>
          <button class="def-btn" @click="deleteAlarm(row)">删除</button>
        </template>
      </el-table-column>
    </el-table>

    <div class="inner-pagination-wrapper inner-pagination-colle">
      <div class="pagination-btns-wrapper">
        <button class="def-btn" @click="delCheckAlarm">删除所选条件警告</button>
        <button class="def-btn" @click="delAllAlarm">删除全部当前警告</button>
      </div>

      <div class="pagination-switch-btns">
        <button class="def-btn" @click="getAlarmList">刷新</button>
        <button class="def-btn">上一页</button>
        <button class="def-btn">下一页</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "history-alarm",
  data() {
    return {
      dataForm: {
        slot: 255,
        level: 255,
      },
      inquireLoading: false,
      dataTable: [
        // {
        //   id: 1,
        //   slot: 5,
        //   board_type: 1,
        //   alarmtype: 1,
        //   portno: 0,
        //   occur_time: 0,
        //   end_time:0,
        //   confirm_time: 0,
        // },
      ],
    };
  },
  created() {
    this.getAlarmList();
  },
  computed: {
    mapStartTime() {
      if (!this.dataForm.start_time) return;
      return parseInt(this.dataForm.start_time / 1000);
    },
    mapEndTime() {
      if (!this.dataForm.end_time) return;
      return parseInt(this.dataForm.end_time / 1000);
    },
  },
  methods: {
    resetDataForm() {
      this.dataForm = { slot: 255, level: 255 };
    },
    getAlarmList() {
      const times = { start_time: this.mapStartTime, end_time: this.mapEndTime };
      const data = { otn2000: { type: "get_histalarm", boardname: "NMU", ...this.dataForm, ...times } };

      this.$http
        .post(data)
        .then((res) => {
          this.dataTable = (res.otn2000_ack.records || []).reverse();
        })
        .catch(() => {
          this.dataTable = [];
        })
        .finally(() => {});
    },
    confimAlarm(row) {
      this.$confirm("确认当前警告吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
      })
        .then(() => {
          const { id } = row;
          const data = { otn2000: { boardname: "NMU", type: "conf_curralarm", id, confirm_time: parseInt(Date.now() / 1000) } };

          this.$http
            .post(data)
            .then((res) => {
              console.log("确认成功", res);

              this.getAlarmList();
            })
            .catch(() => {
              console.log("确认失败");
            })
            .finally(() => {});
        })
        .catch(() => {
          console.log("取消");
        });
    },
    deleteAlarm(row) {
      this.$confirm("确定删除当前警告吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
      })
        .then(() => {
          const { id } = row;
          const data = { otn2000: { boardname: "NMU", type: "del_histalarm", id } };

          this.$http
            .post(data)
            .then((res) => {
              console.log("删除成功", res);

              this.getAlarmList();
            })
            .catch(() => {
              console.log("删除失败");
            })
            .finally(() => {});
        })
        .catch(() => {
          console.log("取消");
        });
    },
    delCheckAlarm() {
      this.$confirm("确定删除所选条件的警告吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
      })
        .then(() => {
          const { slot, start_time, end_time, level } = this.dataForm;
          const data = { otn2000: { boardname: "NMU", slot, start_time, end_time, level, type: "delpart_histalarm" } };

          this.$http
            .post(data)
            .then((res) => {
              console.log("删除成功", res);

              this.getAlarmList();
            })
            .catch(() => {
              console.log("删除失败");
            })
            .finally(() => {});
        })
        .catch(() => {
          console.log("取消");
        });
    },
    delAllAlarm() {
      this.$confirm("确定删除全部历史警告吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
      })
        .then(() => {
          const data = { otn2000: { boardname: "NMU", type: "delall_histalarm" } };

          this.$http
            .post(data)
            .then((res) => {
              console.log("删除成功", res);

              this.getAlarmList();
            })
            .catch(() => {
              console.log("删除失败");
            })
            .finally(() => {});
        })
        .catch(() => {
          console.log("取消");
        });
    },
    confimCheckAlarm() {
      this.$confirm("确定确认满足条件的警告吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
      })
        .then(() => {
          const data = { otn2000: { boardname: "NMU", type: "conf_histalarm", ...this.dataForm, confirm_time: parseInt(Date.now() / 1000) } };

          this.$http
            .post(data)
            .then((res) => {
              console.log("确认成功", res);

              this.getAlarmList();
            })
            .catch(() => {
              console.log("确认失败");
            })
            .finally(() => {});
        })
        .catch(() => {
          console.log("取消");
        });
    },
    confimAllAlarm() {
      this.$confirm("确定确认所有警告吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
      })
        .then(() => {
          const data = { otn2000: { boardname: "NMU", type: "confall_histalarm", confirm_time: parseInt(Date.now() / 1000) } };

          this.$http
            .post(data)
            .then((res) => {
              console.log("确认成功", res);

              this.getAlarmList();
            })
            .catch(() => {
              console.log("确认失败");
            })
            .finally(() => {});
        })
        .catch(() => {
          console.log("取消");
        });
    },
  },
};
</script>

<style scoped>
.history-alarm-search {
  margin-top: 20px;
}

.history-alarm-search-submit {
  text-align: right;
}

.history-alarm-search-submit button + button {
  margin-left: 7px;
}
</style>
