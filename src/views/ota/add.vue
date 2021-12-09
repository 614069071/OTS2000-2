<template>
	<div class="ota-view-wrapper">
		<el-form ref="put_form" class="put-form-wrapper" @submit.native.prevent :rules="rules" :model="putFormData" inline label-width="84px">
			<el-row class="inner-item">
				<div class="inner-container-title">升级对象</div>

				<div class="editor-item">

					<el-form-item label="升级模块" prop="module" required>
						<el-select v-model="putFormData.module" placeholder="请选择">
							<el-option value="all" label="整包"></el-option>
						</el-select>
					</el-form-item>

					<el-form-item label="应用ID" prop="applicationId" required>
						<el-select v-model="putFormData.applicationId" placeholder="请选择">
							<el-option value="1" label="HD12"></el-option>
						</el-select>
					</el-form-item>

					<el-form-item label="设备型号" prop="modelId" required>
						<el-select v-model="putFormData.modelId" placeholder="请选择">
							<el-option value="1" label="百盒"></el-option>
						</el-select>
					</el-form-item>

				</div>

			</el-row>

			<el-row class="inner-item">
				<div class="inner-container-title">版本信息</div>

				<div class="editor-item">
					<el-row>
						<el-form-item label="版本号" prop="version" required>
							<el-input v-model="putFormData.version" maxlength="25" placeholder="请输入版本号" />
						</el-form-item>
					</el-row>

					<el-row>
						<el-form-item label="包名" prop="packageNames" required>
							<el-input v-model="putFormData.packageNames" maxlength="25" placeholder="请输入包名" />
						</el-form-item>
					</el-row>

					<el-row>
						<el-form-item label="备注" prop="remarks">
							<el-input class="memo-textarea" type="textarea" v-model="putFormData.remarks" placeholder="请输入内容" maxlength="500" :autosize="{minRows:3,maxRows:6}" />
						</el-form-item>
					</el-row>

					<el-row>
						<el-form-item label="上传软件包" :error="uploadFileErrorMes">
							<div class="upload-bin-wrapper">
								<input id="upload_bin" type="file" accept=".bin" hidden @change="uploadBinFileChange">

								<label for="upload_bin" class="upload-bin-button" v-show="!(binFile && binFile.name)">
									<i class="el-icon-plus"></i>
								</label>

								<div class="upload-file-wrapper" v-show="binFile && binFile.name">
									<div class="upload-file-inner">
										<div class="upload-bin-img">
											<img src="@/assets/images/bin.svg" alt="">
										</div>

										<div class="bin-file-name ellipsis">{{binFile ? binFile.name : ''}}</div>
									</div>

									<label for="upload_bin" class="upload-re-button">重新上传</label>
								</div>
							</div>
						</el-form-item>
					</el-row>

					<el-row>
						<el-form-item label="是否发布">
							<el-switch inactive-value="0" active-value="1" v-model="putFormData.isRelease" @change="switchRelease"></el-switch>
						</el-form-item>
					</el-row>
				</div>
			</el-row>
		</el-form>

		<div class="save-wrapper">
			<el-button type="primary" @click="saveForm">确认</el-button>
			<el-button @click="cancelForm">取消</el-button>
		</div>

		<el-dialog title="谨慎！是否确认发布版本" :visible.sync="dialogVisible" width="30%">
			<span>您将发布版本，发布后无法撤回！<br />所有设备将可自动升级，升级后无法回退版本，请谨慎操作！</span>
			<span slot="footer" class="dialog-footer">
				<el-button @click="dialogVisible = false">取 消</el-button>
				<el-button type="primary" @click="submitForm">确 定</el-button>
			</span>
		</el-dialog>
	</div>
</template>

<script>
export default {
	name: 'ota-add',
	data() {
		return {
			putFormData: {
				applicationId: '',
				isRelease: '',
				modelId: '',
				module: '',
				packageNames: '',
				remarks: '',
				upgradePlanId: '',
				version: '',
			},
			binFile: null,
			binFileInfo: { size: '', upgradeUrl: '' },
			rules: {
				module: [{ required: true, message: '请选择升级模块' }],
				applicationId: [{ required: true, message: '请选择应用ID' }],
				modelId: [{ required: true, message: '请选择设备型号' }],
				version: [{ required: true, message: '请选输入版本号' }],
				packageNames: [{ required: true, message: '请输入包名' }],
			},
			dialogVisible: false,
			uploadFileErrorMes: '',
		};
	},
	beforeRouteLeave(to, from, next) {
		const routers = this.$store.state.breadcrumbRouter;
		const have = routers.some((e) => e.path === '/ota/add');

		if (!have) {
			this.$vnode.parent.componentInstance.keys = [];
			this.$vnode.parent.componentInstance.cache = [];
		}

		next();
	},
	methods: {
		uploadBinFileChange(e) {
			const [bin] = e.target.files;

			if (!bin) return;
			this.uploadFileErrorMes = '';
			this.binFile = bin;
		},
		uploadFile() {
			const loading = this.$loading();

			if (this.binFile) {
				const fd = new FormData();
				fd.append('file', this.binFile);

				return new Promise((resolve) => {
					this.$http
						.upload(fd)
						.then(({ datas }) => {
							console.log(datas);

							this.binFileInfo = { size: datas.size, upgradeUrl: datas.url };
							resolve(true);
							loading.close();
						})
						.catch((err) => {
							console.log(err);
							resolve(false);
							loading.close();
						});
				});
			} else {
				this.$message({ type: 'error', message: '请选择要上传的软件包' });
				Promise.resolve(false);
			}
		},
		valideForm() {
			return new Promise((resolve) => {
				this.$refs.put_form.validate((filed) => {
					resolve(filed);
				});
			});
		},
		async saveForm() {
			const flag = await this.valideForm();

			if (this.putFormData.isRelease === '1') {
				const have = await this.switchRelease();
				if (have) {
					this.dialogVisible = flag;
				}
			} else {
				if (!flag) return;

				this.submitForm();
			}
		},
		cancelForm() {
			this.$router.push('/ota');
			this.$store.commit('DELETE_CACHE_BREAD', '/ota/add');
		},
		staticSubmit() {
			const data = Object.assign({}, this.putFormData, this.binFileInfo || {});
			const loading = this.$loading();

			this.$http
				.addUpgradePlan(data)
				.then((res) => {
					loading.close();
					if (res.resp_code) {
						this.$message({ type: 'error', message: res.resp_msg });
					} else {
						this.$message({ type: 'success', message: '添加成功' });
						this.$store.commit('DELETE_CACHE_BREAD', '/ota/add');
						this.$router.push('/ota');
					}

					this.dialogVisible = false;
				})
				.catch(() => {
					loading.close();
					this.$message({ type: 'error', message: '添加失败' });
				});
		},
		async submitForm() {
			if (this.binFile) {
				const flag = await this.uploadFile();
				flag && this.staticSubmit();
				return;
			}
			this.staticSubmit();
		},
		// 是否发布切换
		async switchRelease() {
			const valid = await this.valideForm();
			const isFileHave = !!this.binFile;

			return new Promise((resolve) => {
				if (valid && isFileHave) {
					resolve(true);
					this.uploadFileErrorMes = '';
				} else {
					resolve(false);
					this.uploadFileErrorMes = '请上传软件包';
				}
			});
		},
	},
};
</script>

<style lang="scss">
@import url(./index.scss);
</style>