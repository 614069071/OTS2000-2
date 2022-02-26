<template>
  <div class="board-view-wrapper">
    <div class="board-view-view-wrapper">
      <component v-if="info.boardname" :is="'board-' + info.boardname.toLowerCase()" :info="info"></component>
    </div>

    <div class="board-view-form-wrapper">
      <table class="board-table" border="1">
        <tr>
          <td>硬件版本</td>
          <td>{{ `${titeData.h_rev ? "V" + titeData.h_rev : ""}` }}</td>
          <td>软件版本</td>
          <td>{{ `${titeData.s_rev ? "V" + titeData.s_rev : ""}` }}</td>
          <td>协议版本</td>
          <td>{{ `${titeData.p_rev ? "V" + titeData.p_rev : ""}` }}</td>
        </tr>
        <tr>
          <td>生产日期</td>
          <td>
            <el-date-picker v-if="iSuper" v-model="titeData.mfgdate" size="mini" type="date" value-format="yyyy-MM-dd" />

            <template v-else>
              {{ titeData.mfgdate }}
            </template>
          </td>
          <td>序列号</td>
          <td>
            <input class="def-input" v-if="iSuper" type="text" v-model="titeData.sn" />

            <template v-else>
              {{ titeData.sn }}
            </template>
          </td>
          <td>板型号</td>
          <td>{{ titeData.bdtype }}</td>
        </tr>
        <tr>
          <td>设备类型</td>
          <td>{{ titeData.device_type }}</td>
          <td>状态</td>
          <td>{{ titeData.status ? "告警" : "正常" }}</td>
          <td>信息描述</td>
          <td><input class="def-input" type="text" maxlength="30" v-model="titeData.desc" /></td>
        </tr>
        <tr>
          <td>MAC地址</td>
          <td>
            <input class="def-input" v-if="iSuper" type="text" v-model="titeData.mac_address" />

            <template v-else>
              {{ titeData.mac_address }}
            </template>
          </td>
          <td>槽位号</td>
          <td>{{ info.slot }}</td>
          <td></td>
          <td></td>
        </tr>
      </table>
    </div>

    <div class="board-change-btns">
      <button class="def-btn" :disabled="refreshTitleDisabled" @click="getTitle">刷新</button>
      <button class="def-btn" :disabled="setTilteDisabled" @click="setTilte">应用</button>
    </div>

    <div class="board-type-container" v-if="info.boardname && ['m16', 'd16', 'md8', 'm40', 'd40', 'md16sfa', 'md16sfb', 'dcm'].indexOf(info.boardname) < 0">
      <component ref="board" :is="info.boardname.toLowerCase()" :info="{ ...titeData, ...info }"></component>
    </div>
  </div>
</template>

<script>
import Nmu from "./nmu";
import Edfa from "./edfa";
import Olp from "./olp";
import Otu10g from "./otu10g";
import Otu25g from "./otu25g";
import Otu100g from "./otu100g";
import Dco200g from "./dco200g";
import Ocp10g from "./ocp10g";
import BoardNmu from "@/components/board/nmu";
import BoardOlp from "@/components/board/olp";
import BoardD16 from "@/components/board/d16";
import BoardD40 from "@/components/board/d40";
import BoardM16 from "@/components/board/m16";
import BoardM40 from "@/components/board/m40";
import BoardMd8 from "@/components/board/md8";
import BoardDcm from "@/components/board/dcm";
import BoardEdfa from "@/components/board/edfa";
import BoardOcp10g from "@/components/board/ocp10g";
import BoardOtu10g from "@/components/board/otu10g";
import BoardOtu25g from "@/components/board/otu25g";
import BoardOtu100g from "@/components/board/otu100g";
import BoardDco200g from "@/components/board/dco200g";
import BoardMd16sfa from "@/components/board/md16sfa";
import BoardMd16sfb from "@/components/board/md16sfb";
import { storages, isSimilar } from "@/utils";

export default {
  name: "board-view",
  props: {
    info: {
      type: Object,
      default: () => ({}),
    },
    visible: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    BoardOtu10g,
    BoardNmu,
    BoardOlp,
    BoardD16,
    BoardD40,
    BoardM16,
    BoardM40,
    BoardMd8,
    BoardDcm,
    BoardEdfa,
    BoardOcp10g,
    BoardOtu25g,
    BoardOtu100g,
    BoardDco200g,
    BoardMd16sfa,
    BoardMd16sfb,
    Nmu,
    Edfa,
    Olp,
    Otu25g,
    Otu10g,
    Otu100g,
    Dco200g,
    Ocp10g,
  },
  data() {
    return {
      iSuper: storages.get("__iSuper__") || false,
      titeData: {
        sn: "",
        desc: "",
        h_rev: "",
        p_rev: "",
        s_rev: "",
        bdtype: "",
        status: "",
        mfgdate: "",
        device_type: "",
        mac_address: "",
      },
      refreshTitleDisabled: false,
      setTilteDisabled: false,
    };
  },
  watch: {
    visible(n) {
      if (!n) return;
      console.log("board-view mixins");
      this.getDetail();
    },
  },
  mounted() {
    // console.log("info", this.info);
    // console.log("board", this.$refs.board);
  },
  methods: {
    getTitle() {
      const { boardname, slot } = this.info;
      const data = { otn2000: { type: "get_title", boardname, slot } };

      this.setTilteDisabled = true;
      this.refreshTitleDisabled = true;

      return new Promise((resolve, reject) => {
        this.$http
          .post(data)
          .then((res) => {
            this.titeData = res.otn2000_ack;

            resolve(res.otn2000_ack);
          })
          .catch((err) => {
            reject(err);
          })
          .finally(() => {
            this.setTilteDisabled = false;
            this.refreshTitleDisabled = false;
          });
      });
    },
    setTilte() {
      const { mfgdate, sn, desc } = this.titeData;
      const { boardname, slot } = this.info;
      const iSuperData = this.iSuper ? { mfgdate, sn } : {};
      const data = { otn2000: { type: "post_title", boardname, desc, slot, ...iSuperData } };

      this.setTilteDisabled = true;
      this.refreshTitleDisabled = true;

      this.$http
        .post(data)
        .then(() => {
          this.setTilteDisabled = false;

          this.getTitle();
        })
        .catch(() => {
          this.setTilteDisabled = false;
          this.refreshTitleDisabled = false;
          alert("配置失败");
        });
    },
    getDetail() {
      this.getTitle()
        .then(() => {
          const { boardname } = this.info;
          const isHave = isSimilar(boardname);

          return !isHave && this.$refs.board.getInfo();
        })
        .then(() => {})
        .catch(() => {});
    },
  },
};
</script>

<style lang="scss">
$border-color: #aaa;

.board-view-wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.board-view-view-wrapper {
  width: 521px;
  min-height: 60px;
  max-height: 120px;
  margin: 0 auto 10px;
  position: relative;
}

.board-type-container {
  flex: 1;
  overflow: hidden;
}

// 单板详情表格
.cps-wrapper {
  // background-color: #fff;
  // padding: 0 10px 10px 10px;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-sizing: border-box;
}
.board-header-wrapper {
  background-color: #fff;
  position: relative;
  height: 60px;

  // & > div {
  //   left: 50%;
  //   margin-left: -280px;
  // }
}

.board-inner-wrapper {
  width: 1000px;
  height: 84px;
  border: 1px solid #aaa;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  margin: 0 auto;
}

.board-table {
  width: 100%;
  border-collapse: collapse !important;
  display: flex;
  flex-direction: column;
  border: none;
  border-right: 1px solid $border-color;
  border-bottom: 1px solid $border-color;

  thead {
    position: sticky;
    top: 0;
    left: 0;
    background-color: #fff !important;
    z-index: 100;

    .coll-2,
    .coll-3,
    .coll-4 {
      text-align: center;
    }
  }

  tr,
  th {
    display: flex;
    border: none;
    font-weight: normal;
  }

  td {
    min-height: 26px;
    line-height: 26px;
    flex: 1;
    position: relative;
    padding: 0 3px;
    box-sizing: border-box;
    text-align: center;
    display: flex;
    box-sizing: border-box;
  }

  td > * {
    margin: auto 0;
  }

  .coll-2,
  .coll-3,
  .coll-4 {
    height: 100%;
    background-color: #fff;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    padding: 0 2px;
    text-align: left;
    box-sizing: border-box;
  }

  .coll-2 {
    width: 200%;
  }

  .coll-3 {
    width: 300%;
  }

  .coll-4 {
    width: 400%;
  }

  .coll-2 > .def-input,
  .coll-3 > .def-input,
  .coll-4 > .def-input,
  td > .def-input {
    width: 100%;
    max-width: 240px;
  }

  .el-date-editor.el-input {
    width: 100%;
  }
}

.board-change-btns {
  text-align: right;
  padding: 10px 10px;
  background-color: #fff;
}

.board-table-container {
  flex: 1;
  overflow: auto;
  position: relative;
  // padding: 0 10px;
  background-color: #fff;
}

.board-table-title {
  background-color: #fff;
  padding: 10px 10px 0 10px;
}
</style>
