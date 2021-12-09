<template>
	<div class='ota-detail-view-wrapper'>
		<h2 class="ota-detail-title">固件升级详情</h2>

		<div class="ota-detail-view-inner">
			<el-row>
				<el-col :span="12">
					<div class="detail-item">
						<div>创建人</div>
						<div>雷豪</div>
					</div>
				</el-col>
				<el-col :span="12">
					<div class="detail-item">
						<div>创建时间</div>
						<div>{{putFormData.createTime | formatTimeYMDHMS}}</div>
					</div>
				</el-col>
			</el-row>

			<el-row>
				<el-col :span="12">
					<div class="detail-item">
						<div>升级模块</div>
						<div>{{putFormData.module}}</div>
					</div>
				</el-col>
				<el-col :span="12">
					<div class="detail-item">
						<div>应用ID</div>
						<div>{{putFormData.applicationId}}</div>
					</div>
				</el-col>
			</el-row>

			<el-row>
				<el-col :span="12">
					<div class="detail-item">
						<div>设备型号</div>
						<div>{{putFormData.modelId}}</div>
					</div>
				</el-col>
				<el-col :span="12">
					<div class="detail-item">
						<div>版本号</div>
						<div>{{putFormData.version}}</div>
					</div>
				</el-col>
			</el-row>

			<el-row>
				<el-col :span="12">
					<div class="detail-item">
						<div>包名</div>
						<div>{{putFormData.packageNames}}</div>
					</div>
				</el-col>
				<el-col :span="12">
					<div class="detail-item">
						<div>是否发布</div>
						<div>{{putFormData.isRelease == "1" ? '已':'未'}}发布</div>
					</div>
				</el-col>
			</el-row>

			<el-row>
				<el-col>
					<div class="detail-item">
						<div>备注</div>
						<div>{{putFormData.remarks}}</div>
					</div>
				</el-col>
			</el-row>

			<el-row>
				<el-col>
					<div class="detail-item bin-install-wrapper">
						<div>安装包</div>
						<div>
							<template v-if="putFormData.upgradeUrl">
								<div class="bin-image-wrapper">
									<img src="@/assets/images/bin.svg" alt="">
								</div>
								<span class="bin-install-name">{{(putFormData.upgradeUrl || '').split('/').pop()}}</span>
							</template>
						</div>
					</div>
				</el-col>
			</el-row>
		</div>

	</div>
</template>

<script>
import * as utils from '@/utils';

export default {
	name: 'ota-detail',
	data() {
		return {
			putFormData: {},
		};
	},
	activated() {
		const otaCache = utils.storages.get('OTA_DETAIL_CACHE');

		this.putFormData = otaCache;
	},
};
</script>

<style scoped lang='css'>
.ota-detail-view-wrapper {
	margin: 0 34px;
}

.ota-detail-title {
	height: 70px;
	line-height: 70px;
	font-size: 16px;
	font-weight: 700;
}

.ota-detail-view-inner {
	border-left: 1px solid #e6ebf5;
	border-top: 1px solid #e6ebf5;
}

.detail-item {
	display: flex;
	align-items: center;
}

.detail-item > div {
	height: 100%;
	min-height: 48px;
	line-height: 48px;
	display: flex;
	align-items: center;
	border-right: 1px solid #e6ebf5;
	border-bottom: 1px solid #e6ebf5;
}

.detail-item > div:first-child {
	width: 150px;
	background-color: #f5f7fa;
	color: #909399;
	justify-content: center;
}

.detail-item > div:last-child {
	flex: 1;
	padding: 0 20px;
	color: var(--font-color-3);
}

.bin-image-wrapper {
	width: 60px;
}

.bin-install-wrapper {
	height: 120px;
}

.bin-install-name {
	margin-top: 47px;
}
</style>