<template>
  <div>
    告警管理
  </div>
</template>

<script>
export default {
  name: "manage-alarm",
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
