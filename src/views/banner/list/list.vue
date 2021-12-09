<template>
	<div class="banner-list-view-wrapper">
		<div class="inner-header-wrapper">
			<el-form inline label-width="80px" @submit.native.prevent>
				<el-form-item label="快速查询">
					<el-input v-model="keyword" placeholder="请输入关键字搜索" suffix-icon="el-icon-search" @keyup.enter.native="getBannerList(1)"></el-input>
				</el-form-item>

				<el-form-item>
					<el-button type="primary" @click="$router.push('/banner/add')">新增</el-button>
				</el-form-item>
			</el-form>
		</div>

		<div class="inner-container-wrapper banner-list">
			<div class="inner-container-title">广告管理列表</div>
			<el-table ref="multipleTable" :data="dataTable" tooltip-effect="dark" style="width: 100%">
				<el-table-column prop="loginAccount" label="账号名" width="120"></el-table-column>
				<el-table-column prop="name" label="姓名" width="120"></el-table-column>
				<el-table-column prop="city" label="投放地域"></el-table-column>
				<el-table-column prop="customerName" label="投放客户"></el-table-column>
				<el-table-column label="投放时段" min-width="140">
					<template v-slot="scoped">
						{{scoped.row.startTime | formatTimeYMD}} 至 {{scoped.row.endTime | formatTimeYMD}}
					</template>
				</el-table-column>
				<el-table-column prop="createTime" label="创建时间" min-width="140">
					<template v-slot="scoped">
						{{scoped.row.createTime | formatTimeYMDHMS}}
					</template>
				</el-table-column>
				<el-table-column label="操作" width="160">
					<template v-slot="scoped">
						<el-button @click="formEditorClick(scoped.row)" plain type="primary" size="mini">编辑</el-button>
						<el-button size="mini" @click="formDeleteClick(scoped.$index,scoped.row.id)">删除</el-button>
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
import { storages } from '@/utils';

export default {
	name: 'banner-list',
	data() {
		return {
			dataTable: [],
			keyword: '',
			pageSize: 1,
			total: 10,
			page: 1,
		};
	},
	activated() {
		this.getBannerList();
	},
	methods: {
		getBannerList() {
			const parmas = {
				customerName: this.keyword,
				page: this.page,
				pageSize: this.pageSize,
			};

			this.$http
				.getAdList(parmas)
				.then(({ datas = {} }) => {
					this.dataTable = datas.data || [];
					this.total = datas.count;
				})
				.catch((err) => {
					console.log(err);
				});
		},
		formEditorClick(data) {
			storages.set('BANNER_CACHE', data);
			this.$router.push('/banner/editor');
		},
		formDeleteClick(index, id) {
			console.log(index, id);

			console.log(index, id);

			this.$confirm('确定删除？')
				.then(() => {
					this.$http
						.deleteAd(id)
						.then((res) => {
							console.log(res);
							this.$message({
								type: 'success',
								message: '删除成功',
							});
							this.dataTable.splice(index, 1);
						})
						.catch((err) => {
							console.log(err);
							this.$message('删除失败');
						});
				})
				.catch(() => {});
		},
		pagerChange(v) {
			this.page = v;
			this.getBannerList();
		},
	},
};
</script>