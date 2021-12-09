<template>
	<div class="banner-editor-view-wrapper">
		<el-form ref="put_form" class="put-form-wrapper" @submit.native.prevent :rules="rules" :model="putFormData" inline label-width="80px">
			<el-row class="inner-item">
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

					<el-upload action="#" list-type="picture-card" accept=".png,.jpg,.jpeg" multiple :on-preview="handlePictureCardPreview" :on-remove="startUploadRemove" :on-change="startUploadChange" :auto-upload="false" :file-list="startFileList">
						<i class="el-icon-plus"></i>
					</el-upload>

					<div class="start-show-time show-time">
						<span class="f-14">显示时长(s)</span>
						<el-input-number v-model.number="putFormData.startPageShowDuration" controls-position="right" :min="1" :max="10"></el-input-number>
					</div>
				</div>
			</el-row>

			<el-row class="inner-item">
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

					<el-upload action="#" list-type="picture-card" accept=".png,.jpg,.jpeg" multiple :file-list="bannerFileList" :on-preview="handlePictureCardPreview" :on-remove="bannerUploadRemove" :on-change="bannerUploadChange" :auto-upload="false">
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
import { isArray } from '@/utils';

export default {
	name: 'banner-add',
	components: { Carousel, CountDown },
	data() {
		return {
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
	beforeRouteLeave(to, from, next) {
		const routers = this.$store.state.breadcrumbRouter;
		const have = routers.some((e) => e.path === '/banner/add');

		if (!have) {
			this.$vnode.parent.componentInstance.keys = [];
			this.$vnode.parent.componentInstance.cache = [];
		}

		next();
	},
	computed: {
		countDownTime() {
			return this.startFileList.length * this.startNum;
		},
	},
	created() {
		this.getCitys();
	},
	activated() {},
	methods: {
		handlePictureCardPreview(file) {
			this.previewSrc = file.url;
			this.dialogVisible = true;
		},
		startPopoverShow() {
			this.startAutoplay = true;
		},
		startPopoverHide() {
			this.startAutoplay = false;
		},
		startUploadChange(file, files) {
			this.startFileList = files;
		},
		startUploadRemove(file, files) {
			this.startFileList = files;
		},
		bannerPopoverShow() {
			this.bannerAutoplay = true;
		},
		bannerPopoverHide() {
			this.bannerAutoplay = false;
		},
		bannerUploadChange(file, files) {
			this.bannerFileList = files;
		},
		bannerUploadRemove(file, files) {
			this.bannerFileList = files;
		},
		uploadFile() {
			const fd = new FormData();
			const uploads = [...this.startFileList, ...this.bannerFileList];
			let uploadType = '';

			if (uploads.length === 1) {
				// 单文件上传
				fd.append('file', uploads[0].raw);
				uploadType = 'upload';
			} else if (uploads.length >= 2) {
				// 多文件上传
				uploads.forEach((e) => fd.append('files', e.raw));
				uploadType = 'uploads';
			}

			return new Promise((resolve, reject) => {
				if (!uploads.length) return resolve({});

				this.$http[uploadType](fd)
					.then(({ datas }) => {
						const images = isArray(datas) ? datas : [datas];
						const startFileListLength = this.startFileList.length;
						const startPageAd = images.slice(0, startFileListLength);
						const bannerAd = images.slice(startFileListLength);
						const uploads = { bannerAd, startPageAd };
						resolve(uploads);
					})
					.catch((err) => {
						reject(err);
					});
			});
		},
		submit() {
			if (!this.startFileList.length && !this.bannerFileList.length) {
				return this.$message({
					type: 'warning',
					message: '请至少上传一张启动页或广告图',
				});
			}

			this.$refs.put_form
				.validate()
				.then(() => {
					this.uploadFile()
						.then((res) => {
							const addFormData = Object.assign({}, this.putFormData, res);

							return this.$http.addAd(addFormData);
						})
						.then((res) => {
							// 关闭当前页面，跳转至广告列表界面
							this.$store.commit('DELETE_CACHE_ROUTER', '/banner/add');
							this.$router.push('/banner');
						})
						.catch((err) => {});
				})
				.catch(() => {});
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
				.catch((err) => {});
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