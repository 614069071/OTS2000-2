<template>
	<div class="ota-view-wrapper view-wrapper">
		<div class="inner-header-wrapper">
			<el-button class="add-ota-button" type="primary" @click="$router.push('/ota/add')">
				添加发布计划
			</el-button>
		</div>

		<div class="inner-container-wrapper banner-list">
			<div class="inner-container-title">订单数据</div>
			<el-table ref="multipleTable" :data="dataTable" tooltip-effect="dark" style="width: 100%">
				<el-table-column prop="module" label="升级模块">
					<template slot-scope="scoped">
						{{scoped.row.module === 'all' ? '整包':''}}
					</template>
				</el-table-column>
				<el-table-column prop="version" label="版本号"></el-table-column>
				<el-table-column prop="isRelease" label="是否发布">
					<template slot-scope="scoped">
						{{+scoped.row.isRelease ? '已发布':'未发布'}}
					</template>
				</el-table-column>
				<el-table-column prop="upgradeCount" label="升级数量"></el-table-column>
				<el-table-column prop="applicationsName" label="应用名称"></el-table-column>
				<el-table-column prop="applicationsNo" label="设备型号"></el-table-column>
				<el-table-column label="操作" width="200">
					<template slot-scope="scope">
						<el-button size="mini" plain type="primary" @click="formDetailClick(scope.$index,scope.row)">查看详情</el-button>
						<el-button size="mini" plain type="primary" @click="formEditorClick(scope.$index,scope.row)">编辑</el-button>
					</template>
				</el-table-column>
			</el-table>
		</div>

		<div class="inner-pagination-wrapper">
			<el-pagination background layout="prev,pager,next,jumper" :page-size="pageSize" :total="total" @current-change="pagerChange" />
		</div>
	</div>
</template>

<script>
import * as utils from '@/utils';

export default {
	name: 'order-inquire',
	data() {
		return {
			dataTable: [],
			pageSize: 10,
			page: 1,
			total: 0,
		};
	},
	activated() {
		this.getUpgradeColle();
	},
	methods: {
		getUpgradeColle() {
			const params = { page: this.page, pageSize: this.pageSize };

			this.$http
				.getUpgradePlanInfo(params)
				.then(({ datas }) => {
					this.dataTable = datas.data || [];
					this.total = datas.count;
				})
				.catch((err) => {
					console.log(err);
				});
		},
		pagerChange(v) {
			this.page = v;
			this.getUpgradeColle();
		},
		formDetailClick(i, v) {
			utils.storages.set('OTA_DETAIL_CACHE', v);
			this.$router.push('/ota/detail');
		},
		formEditorClick(i, v) {
			utils.storages.set('OTACACHE', v);
			this.$router.push('/ota/editor');
		},
	},
};
</script>

<style scoped>
.add-ota-button {
	margin-left: 24px;
}
</style>