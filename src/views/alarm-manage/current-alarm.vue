<template>
  <div class="current-alarm-view-wrapper view-wrapper">
    <div class="inner-header-wrapper">
      <el-form inline label-width="100px" :model="dataForm">
        <el-form-item label="起止日期">
          <el-date-picker v-model="dataForm.name7" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"> </el-date-picker>
        </el-form-item>

        <el-form-item label="选择槽号">
          <el-select v-model="dataForm.name3" placeholder="请选择订单状态">
            <el-option label="全部" value="1"></el-option>
            <el-option label="槽位1" value="2"></el-option>
          </el-select>
        </el-form-item>

        <el-button type="primary">查询</el-button>
        <el-button>重置</el-button>
      </el-form>
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
            <el-button type="primary" size="mini">编辑</el-button>
            <el-button type="danger" size="mini">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <div class="inner-pagination-wrapper">
      <div>
        <el-button size="mini" type="danger">删除满足条件的警告</el-button>
        <el-button size="mini" type="danger">清除全部警告</el-button>
        <el-button size="mini" type="warning">确认满足条件的警告</el-button>
        <el-button size="mini" type="warning">确认全部警告</el-button>
      </div>
      <el-pagination background layout="prev, pager, next, jumper" :total="1000" />
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
