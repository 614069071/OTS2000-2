<template>
  <div class="similar-cps-wrapper cps-wrapper">
    <div class="veneer-header-wrapper">
      <div class="similar-veneer-wrapper">
        <img v-if="info.status" :src="require(`../../../../assets/images/veneer/${info.boardname.toLowerCase()}.png`)" alt="" />
      </div>
    </div>

    <div class="veneer-table-title">
      <table class="veneer-table" border="1">
        <tr>
          <td>硬件版本</td>
          <td>{{ `${veneerTitleData.h_rev ? "V" + veneerTitleData.h_rev : ""}` }}</td>
          <td>软件版本</td>
          <td>{{ `${veneerTitleData.s_rev ? "V" + veneerTitleData.s_rev : ""}` }}</td>
          <td>协议版本</td>
          <td>{{ `${veneerTitleData.p_rev ? "V" + veneerTitleData.p_rev : ""}` }}</td>
        </tr>
        <tr>
          <td>生产日期</td>
          <td>
            <el-date-picker v-if="$store.state.iSuper" v-model="veneerTitleData.mfgdate" size="mini" type="date" value-format="yyyy-MM-dd" />

            <template v-else>
              {{ veneerTitleData.mfgdate }}
            </template>
          </td>
          <td>序列号</td>
          <td>
            <input class="def-input" v-if="$store.state.iSuper" type="text" v-model="veneerTitleData.sn" />

            <template v-else>
              {{ veneerTitleData.sn }}
            </template>
          </td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>设备类型</td>
          <td>{{ veneerTitleData.device_type }}</td>
          <td>状态</td>
          <td>{{ veneerTitleData.status ? "在位" : "脱位" }}</td>
          <td>信息描述</td>
          <td>
            <input class="def-input" type="text" v-model="veneerTitleData.desc" />
          </td>
        </tr>
      </table>
    </div>

    <div class="venner-change-btns">
      <button class="def-btn" @click="refreshTitle">刷新</button>
      <button class="def-btn" @click="setTilte">应用</button>
    </div>
  </div>
</template>

<script>
// ["m16", "d16", "md8", "m40", "d40", "md16sfa", "md16sfb", "dcm"]
export default {
  name: "similar",
  props: ["info", "visible"],
  data() {
    return {
      veneerTitleData: {},
    };
  },
  created() {
    console.log("created");
  },
  mounted() {
    console.log("mounted");
    this.getVeneerTitle(this.info.slot)
      .then((res) => {
        this.veneerTitleData = res.otn2000_ack;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  watch: {
    visible(n) {
      if (!n) return;
      console.log("this.info", this.info);
      this.getVeneerTitle(this.info.slot)
        .then((res) => {
          this.veneerTitleData = res.otn2000_ack;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  methods: {
    getVeneerTitle(slot) {
      return this.$http.post({
        otn2000: {
          type: "get_title",
          boardname: this.info.boardname,
          slot,
        },
      });
    },
    refreshTitle() {
      this.getVeneerTitle(this.info.slot)
        .then((res) => {
          this.veneerTitleData = res.otn2000_ack;
          this.$message("成功");
        })
        .catch((err) => {
          console.log(err);
          this.$message("失败");
        });
    },
    setTilte() {
      const { mfgdate, sn, desc } = this.veneerTitleData;
      const { boardname, slot } = this.info;
      const iSuperData = this.$store.state.iSuper ? { mfgdate, sn } : {};
      const data = { otn2000: { type: "post_title", boardname, desc, slot, ...iSuperData } };

      this.$http
        .post(data)
        .then((res) => {
          console.log("setTilte", res);
          this.$message("成功");
        })
        .catch((err) => {
          console.log(err);
          this.veneerTitleData.desc = "";
          this.$message("失败");
        });
    },
  },
};
</script>

<style lang="scss">
.similar-veneer-wrapper {
  width: 434px;
  height: 50px;
  border: 1px solid #000;
}
</style>
