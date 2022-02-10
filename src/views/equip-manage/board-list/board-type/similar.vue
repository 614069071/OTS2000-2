<template>
  <div class="similar-cps-wrapper cps-wrapper">
    <div class="board-header-wrapper">
      <div class="similar-board-wrapper">
        <img v-if="info.status" :src="require(`../../../../assets/images/board/${info.boardname.toLowerCase()}.png`)" alt="" />
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
          <td></td>
          <td></td>
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

export default {
  name: "similar",
  mixins: [mixins],
  data() {
    return {};
  },
};
</script>

<style lang="scss">
.similar-board-wrapper {
  width: 434px;
  height: 50px;
  border: 1px solid #000;
}
</style>
