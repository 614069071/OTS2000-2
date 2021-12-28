<template>
  <div class="similar-cps-wrapper">
    <div class="veneer-header-wrapper">similar {{ info.boardname }}</div>
    <table class="veneer-table veneer-title-table" border="1">
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
          <input class="def-input veneer-input" v-if="$store.state.iSuper" type="text" v-model="veneerTitleData.mfgdate" />

          <template v-else>
            {{ veneerTitleData.mfgdate }}
          </template>
        </td>
        <td>序列号</td>
        <td>
          <input class="def-input veneer-input" v-if="$store.state.iSuper" type="text" v-model="veneerTitleData.sn" />

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
          <input class="def-input veneer-input" type="text" v-model="veneerTitleData.desc" />
        </td>
      </tr>
    </table>

    <div class="venner-change-btns">
      <button class="def-btn" @click="refreshTitle">刷新</button>
      <button class="def-btn" @click="changeTilte">应用</button>
    </div>
  </div>
</template>

<script>
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
    changeTilte() {
      const iSuperData = this.$store.state.iSuper
        ? {
            mfgdate: this.veneerTitleData.mfgdate,
            sn: this.veneerTitleData.sn,
          }
        : {};

      const data = {
        otn2000: {
          type: "post_title",
          boardname: this.info.boardname,
          desc: this.veneerTitleData.desc,
          slot: this.info.slot,
          ...iSuperData,
        },
      };

      this.$http
        .post(data)
        .then((res) => {
          console.log("changeTilte", res);
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
