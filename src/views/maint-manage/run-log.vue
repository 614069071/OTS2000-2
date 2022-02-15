<template>
  <div class="run-log-page">
    <div class="inner-container-title">日志列表</div>

    <el-table ref="multipleTable" :data="dataTable" tooltip-effect="dark" style="width: 100%">
      <el-table-column prop="name1" label="操作对象"></el-table-column>
      <el-table-column prop="name2" label="操作内容"></el-table-column>
      <el-table-column prop="name3" label="动作"></el-table-column>
      <el-table-column prop="name4" label="操作时间"></el-table-column>
      <el-table-column prop="name5" label="操作方式"></el-table-column>
      <el-table-column label="操作" width="120">
        <template v-slot="scope">
          <button class="def-btn">删除</button>
        </template>
      </el-table-column>
    </el-table>

    <div class="inner-pagination-wrapper inner-pagination-colle">
      <div class="pagination-btns-wrapper">
        <button class="def-btn">删除全部日志</button>
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
  name: "run-log",
  data() {
    return {
      dataForm: {},
      dataTable: [
        {
          name1: "webadmin",
          name2: "串口",
          name3: "修改",
          name4: "2020-2-10",
          name5: "aaa",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style scoped lang="scss">
.inner-pagination-wrapper {
  display: flex;
  justify-content: space-between;
}
</style>
