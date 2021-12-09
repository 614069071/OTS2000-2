<template>
	<div class="banner-editor-view-wrapper">
		<el-form ref="put_form" class="put-form-wrapper" @submit.native.prevent :rules="rules" :model="putFormData" inline label-width="80px">
			<el-row class="inner-item" v-if="isAppStartEitor">
				<div class="inner-container-title">启动页广告</div>

				<div class="editor-item">
					<div class="la-upload-tip f-12">只能上传jpg/png/h5文件，且不超过5M，建议尺寸为750*1334px
						<el-popover placement="right" trigger="click" :disabled="!startFileList.length" @show="startPopoverShow" @hide="startPopoverHide">
							<div class="start-sample-popover sample-popover-wrapper">
								<Carousel :list="startFileList" :autoplay="startAutoplay" :interval="startNum"></Carousel>
								<div class="skip-start-banner-wrapper">
									<span>跳过<CountDown :display="startAutoplay" :start="countDownTime" @callback="countDownCallback"></CountDown></span>
								</div>
							</div>
							<button class="la-upload-popover-btn f-14" slot="reference">示例</button>
						</el-popover>
					</div>
					<el-upload action="#" list-type="picture-card" accept=".png,.jpg,.jpeg" :file-list="startFileList" multiple :on-preview="handlePictureCardPreview" :on-remove="startUploadRemove" :on-change="startUploadChange" :auto-upload="false">
						<i class="el-icon-plus"></i>
					</el-upload>

					<div class="start-show-time show-time">
						<span class="f-14">显示时长(s)</span>
						<el-input-number v-model.number="putFormData.startPageShowDuration" controls-position="right" :min="1" :max="10"></el-input-number>
					</div>
				</div>
			</el-row>

			<el-row class="inner-item" v-else>
				<div class="inner-container-title">Banner广告</div>

				<div class="editor-item">
					<div class="la-upload-tip f-12">只能上传jpg/png/h5文件，且不超过5M，建议尺寸为702*290px
						<el-popover placement="right" trigger="click" :disabled="!bannerFileList.length" @show="bannerPopoverShow" @hide="bannerPopoverHide">
							<div class="banner-sample-popover sample-popover-wrapper">
								<div class="banner-carousel-wrapper">
									<Carousel :list="bannerFileList" :autoplay="bannerAutoplay" :interval="bannerNum" height="112px"></Carousel>
								</div>
							</div>
							<button class="la-upload-popover-btn" slot="reference">示例</button>
						</el-popover>
					</div>

					<el-upload action="#" list-type="picture-card" :file-list="bannerFileList" accept=".png,.jpg,.jpeg" multiple :on-preview="handlePictureCardPreview" :on-remove="bannerUploadRemove" :on-change="bannerUploadChange" :auto-upload="false">
						<i class="el-icon-plus"></i>
					</el-upload>

					<div class="banner-show-time show-time">
						<span>显示时长(s)</span>
						<el-input-number v-model.number="putFormData.bannerShowDuration" controls-position="right" :min="1" :max="10"></el-input-number>
					</div>
				</div>
			</el-row>

			<el-row class="inner-item">
				<div class="inner-container-title">投放范围</div>

				<el-col :span="8">
					<el-form-item required label="选择订单" prop="orderCode">
						<el-select v-model="putFormData.orderCode" placeholder="请选择订单">
							<el-option value="123456" label="123456"></el-option>
							<el-option value="654321" label="654321"></el-option>
						</el-select>
					</el-form-item>
				</el-col>

				<el-col :span="8">
					<el-form-item label="选择地域">
						<el-select v-model="putFormData.cityId" placeholder="请选择地域">
							<el-option v-for="city in putCitys" :key="city.cid" :value="city.cid" :label="city.city"></el-option>
						</el-select>
					</el-form-item>
				</el-col>

				<el-col :span="8">
					<el-form-item required label="选择日期" prop="date">
						<el-date-picker v-model="putFormData.date" type="daterange" value-format="yyyy-MM-dd" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"></el-date-picker>
					</el-form-item>
				</el-col>

				<el-col :span="8">
					<el-form-item required label="选择平台" prop="putPlatform">
						<el-select v-model="putFormData.putPlatform" placeholder="请选择平台">
							<el-option value="0" label="不限"></el-option>
							<el-option value="1" label="IOS"></el-option>
							<el-option value="2" label="Android"></el-option>
						</el-select>
					</el-form-item>
				</el-col>
			</el-row>
		</el-form>

		<div class="save-wrapper">
			<el-button type="primary" @click="submit">保存</el-button>
		</div>

		<el-dialog :visible.sync="dialogVisible" width="400px">
			<img :src="previewSrc" alt="">
		</el-dialog>
	</div>
</template>

<script>
import Carousel from '@/components/carousel';
import CountDown from '../components/count-down';
import { isArray, storages } from '@/utils';

export default {
	name: 'banner-editor',
	components: { Carousel, CountDown },
	data() {
		return {
			isAppStartEitor: true,
			startNum: 1,
			startAutoplay: false,
			startFileList: [],
			bannerNum: 1,
			bannerAutoplay: false,
			bannerFileList: [],
			previewSrc: '',
			dialogVisible: false,
			putFormData: {
				startPageShowDuration: '',
				bannerShowDuration: '',
				orderCode: '',
				cityId: '',
				putPlatform: '',
				date: [],
				adId: '',
			},
			putCitys: [],
			rules: {
				orderCode: [{ required: true, message: '请选择订单', trigger: 'blur' }],
				date: [{ required: true, message: '请选择日期', trigger: 'blur' }],
				putPlatform: [
					{ required: true, message: '请选择平台', trigger: 'blur' },
				],
			},
		};
	},
	computed: {
		countDownTime() {
			return this.startFileList.length * this.startNum;
		},
	},
	created() {
		console.log('banner-editor');
		this.getCitys();
	},
	activated() {
		const bannerCache = storages.get('BANNER_CACHE');
		const files = bannerCache.adFiles || [];

		if (!bannerCache) return;

		const {
			displayDuration = 1,
			orderCode,
			city = '',
			putPlatform = '',
			date,
			id,
		} = bannerCache;

		this.putFormData = {
			startPageShowDuration: displayDuration,
			bannerShowDuration: displayDuration,
			orderCode,
			city,
			putPlatform: `${putPlatform}`,
			date,
			adId: id,
		};
		this.isAppStartEitor = +bannerCache.putLocation === 1;
		const playArg = files.map((e) => ({ ...e, url: e.images }));

		if (this.isAppStartEitor) {
			this.startFileList = playArg;
		} else {
			this.bannerFileList = playArg;
		}
	},
	deactivated() {
		this.startFileList = [];
		this.bannerFileList = [];
	},
	methods: {
		handlePictureCardPreview(file) {
			this.previewSrc = file.url;
			this.dialogVisible = true;
		},
		startPopoverShow() {
			console.log('startPopoverShow');
			this.startAutoplay = true;
		},
		startPopoverHide() {
			console.log('startPopoverHide');
			this.startAutoplay = false;
		},
		startUploadChange(file, files) {
			console.log(file, files);
			this.startFileList = files;
			console.log(this.startFileList, 'startFileList');
		},
		startUploadRemove(file, files) {
			console.log(file, files, 'handleRemove');
			this.startFileList = files;
		},
		bannerPopoverShow() {
			console.log('bannerPopoverShow');
			this.bannerAutoplay = true;
		},
		bannerPopoverHide() {
			console.log('bannerPopoverHide');
			this.bannerAutoplay = false;
		},
		bannerUploadChange(file, files) {
			console.log(file, files);
			this.bannerFileList = files;
			console.log(this.bannerFileList);
		},
		bannerUploadRemove(file, files) {
			console.log(file, files, 'handleRemove');
			this.bannerFileList = files;
		},
		uploadFile() {
			const fd = new FormData();
			let uploads = null;
			if (this.isAppStartEitor) {
				uploads = this.startFileList.filter((e) => e.raw);
			} else {
				uploads = this.bannerFileList.filter((e) => e.raw);
			}

			let uploadType = '';

			if (uploads.length === 1) {
				// 单文件上传
				fd.append('file', uploads[0].raw);
				uploadType = 'upload';

				console.log('单文件上传');
			} else if (uploads.length >= 2) {
				// 多文件上传
				uploads.forEach((e) => fd.append('files', e.raw));
				uploadType = 'uploads';
				console.log('多文件上传');
			}

			return new Promise((resolve, reject) => {
				if (!uploads.length) return resolve([]);

				this.$http[uploadType](fd)
					.then(({ datas }) => {
						const images = isArray(datas) ? datas : [datas];

						resolve(images);
					})
					.catch((err) => {
						reject(err);
					});
			});
		},
		submit() {
			this.$refs.put_form
				.validate()
				.then(() => {
					console.log('通过');
					this.$load();

					this.uploadFile()
						.then((res) => {
							let playbackFiles = [];
							let putType = '';
							let putTypeFiles = '';

							if (this.isAppStartEitor) {
								putType = 'startPageAd';
								putTypeFiles = 'startFileList';
							} else {
								putType = 'bannerAd';
								putTypeFiles = 'bannerFileList';
							}

							playbackFiles = this[putTypeFiles]
								.filter((e) => !e.raw)
								.map((item) => {
									return {
										contentType: item.contentType || null,
										createTime: item.createTime,
										id: item.id,
										name: item.name,
										isImg: true,
										size: null,
										path: null,
										url: item.images,
										source: null,
										updateTime: item.updateTime,
									};
								});

							const addFiles = [...playbackFiles, ...res];

							this.$load();

							const editorFormData = Object.assign({}, this.putFormData, {
								[putType]: addFiles,
							});

							console.log('editorFormData', editorFormData);

							return this.$http.updateAd(editorFormData);
						})
						.then((res) => {
							this.$message({
								type: 'success',
								message: '修改成功',
							});
							console.log('editor', res);
						})
						.catch((err) => {
							this.$message({
								type: 'error',
								message: '修改失败',
							});
							console.log(err);
						});
				})
				.catch(() => {
					console.log('不通过');
				});
		},
		countDownCallback() {
			this.startAutoplay = false;
		},
		getCitys() {
			this.$http
				.getCity()
				.then(({ datas = [] }) => {
					this.putCitys = datas;
				})
				.catch((err) => {
					console.log(err);
				});
		},
	},
};
</script>

<style lang="scss">
.banner-editor-view-wrapper {
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}

.la-upload-tip {
	height: 31px;
	line-height: 26px;
	color: var(--font-color);
	.la-upload-popover-btn {
		color: var(--default-color);
		cursor: pointer;
	}
}
.sample-popover-wrapper {
	width: 285px;
	height: 505px;
	background-size: contain;
	background-repeat: no-repeat;
	background-position: center;
	box-sizing: border-box;
}

.banner-sample-popover {
	padding-top: 70px;
	background-image: url(../../../assets/images/banner-carousel.png);
}

.banner-carousel-wrapper {
	width: 269px;
	height: 112px;
	margin: 0 auto;
	overflow: hidden;
	border-radius: 4px;
}

.show-time {
	margin-top: 24px;
	& > span {
		margin-right: 14px;
		color: var(--font-color);
	}
}

.save-wrapper {
	height: 56px;
	line-height: 56px;
	text-align: center;
	background-color: #fff;
	position: sticky;
	bottom: 0;
	left: 0;
	z-index: 10;
	box-shadow: 0px 0px 30px rgba(53, 53, 53, 0.05);
	.el-button {
		width: 98px;
	}
}

.put-form-wrapper {
	.el-form-item {
		margin-right: 48px;
		.el-input {
			width: 240px;
		}
	}
}

.skip-start-banner-wrapper {
	position: absolute;
	right: 22px;
	top: 36px;
	z-index: 100;
	width: 50px;
	height: 20px;
	line-height: 20px;
	text-align: center;
	background-color: rgba(0, 0, 0, 0.6);
	border-radius: 10px;
	color: #fff;
	white-space: nowrap;

	span {
		font-size: 13px;
		transform: scale(0.8);
		display: block;
		white-space: nowrap;
	}
}
</style>