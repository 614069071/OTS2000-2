<template>
  <div class="current-alarm-view-wrapper view-wrapper">
    <div class="inner-header-wrapper current-alarm-header-wrapper">
      <div class="inner-container-title">查询条件</div>

      <el-form class="current-alarm-search" inline label-width="100px" :model="dataForm">
        <el-form-item label="起止日期">
          <el-date-picker v-model="dataForm.name7" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"> </el-date-picker>
        </el-form-item>

        <el-form-item label="选择槽号">
          <el-select v-model="dataForm.name3" placeholder="请选择订单状态">
            <el-option label="全部" value="1"></el-option>
            <el-option label="槽位1" value="2"></el-option>
          </el-select>
        </el-form-item>
      </el-form>

      <div class="current-alarm-search-submit">
        <button class="def-btn">查询</button>
        <button class="def-btn">重置</button>
      </div>
    </div>

    <div class="inner-container-wrapper banner-list">
      <div class="inner-container-title">当前警告信息</div>
      <el-table ref="multipleTable" :data="dataTable" tooltip-effect="dark" style="width: 100%">
        <el-table-column prop="name1" label="位置"></el-table-column>
        <el-table-column prop="name2" label="告警级别"></el-table-column>
        <el-table-column prop="name3" label="告警信息"></el-table-column>
        <el-table-column prop="name4" label="告警原因"></el-table-column>
        <el-table-column prop="name5" label="发生时间"></el-table-column>
        <el-table-column prop="name6" label="清除时间"></el-table-column>
        <el-table-column prop="name7" label="确认时间"></el-table-column>
        <el-table-column prop="name8" label="告警状态"></el-table-column>
        <el-table-column label="操作" width="160">
          <template slot-scope="scope">
            <button class="def-btn">编辑</button>
            <button class="def-btn">删除</button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <div class="inner-pagination-wrapper inner-pagination-colle">
      <div class="pagination-btns-wrapper">
        <button class="def-btn">删除满足条件的警告</button>
        <button class="def-btn">清除全部警告</button>
        <button class="def-btn">确认满足条件的警告</button>
        <button class="def-btn">确认全部警告</button>
      </div>

      <div class="pagination-switch-btns">
        <button class="def-btn">上一页</button>
        <button class="def-btn">下一页</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "order-inquire",
  data() {
    return {
      dataForm: {},
      inquireLoading: false,
      dataTable: [
        {
          name1: "1",
          name2: "2",
          name3: "2000",
          name4: "500",
          name5: "2021.08.24",
          name6: "2021.08.24",
          name7: "2021.08.24",
          name8: "KH00001",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style scoped>
.current-alarm-header-wrapper {
  padding-bottom: 20px;
}
.current-alarm-search {
  margin-top: 20px;
}

.current-alarm-search-submit {
  text-align: right;
}

.current-alarm-search-submit button + button {
  margin-left: 7px;
}
</style>
