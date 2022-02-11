<template>
  <div class="similar-cps-wrapper cps-wrapper">
    <div class="board-header-wrapper">
      <div class="similar-board-wrapper">
        <component :data="info" :is="info.boardname"></component>
      </div>
    </div>

    <div class="board-table-title">
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
            <el-date-picker v-if="$store.state.iSuper" v-model="titeData.mfgdate" size="mini" type="date" value-format="yyyy-MM-dd" />

            <template v-else>
              {{ titeData.mfgdate }}
            </template>
          </td>
          <td>序列号</td>
          <td>
            <input class="def-input" v-if="$store.state.iSuper" type="text" v-model="titeData.sn" />

            <template v-else>
              {{ titeData.sn }}
            </template>
          </td>
          <td>{{ titeData.bdtype ? "板型号" : "" }}</td>
          <td>{{ titeData.bdtype }}</td>
        </tr>
        <tr>
          <td>设备类型</td>
          <td>{{ titeData.device_type }}</td>
          <td>状态</td>
          <td>{{ titeData.status ? "在位" : "脱位" }}</td>
          <td>信息描述</td>
          <td>
            <input class="def-input" type="text" v-model="titeData.desc" />
          </td>
        </tr>
      </table>
    </div>

    <div class="board-change-btns">
      <button class="def-btn" @click="refreshTitle">刷新</button>
      <button class="def-btn" @click="setTilte">应用</button>
    </div>
  </div>
</template>

<script>
// ["m16", "d16", "md8", "m40", "d40", "md16sfa", "md16sfb", "dcm"]
import mixins from "@/utils/mixins";
import M16 from "@/components/board/m16";
import D16 from "@/components/board/d16";
import Md8 from "@/components/board/md8";
import M40 from "@/components/board/m40";
import D40 from "@/components/board/d40";
import Dcm from "@/components/board/dcm";
import Md16sfa from "@/components/board/md16sfa";
import Md16sfb from "@/components/board/md16sfb";

export default {
  name: "similar",
  props: ["info"],
  mixins: [mixins],
  components: { M16, D16, Md8, M40, D40, Md16sfa, Md16sfb, Dcm },
};
</script>
