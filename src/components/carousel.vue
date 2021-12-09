<template>
	<div class="la-carousel-wrapper">
		<el-carousel arrow="never" :initial-index="initial" :height="height" :indicator-position="list.length === 2 ? 'none' : 'inside'" trigger="click" :autoplay="autoplay" :interval="interval * 1000" loop @change="change">
			<el-carousel-item v-for="item in list" :key="item.url">
				<img :src="item.url" alt="">
			</el-carousel-item>

			<template v-if="list.length === 2">
				<el-carousel-item v-for="item in list" :key="item.url + '0'">
					<img :src="item.url" alt="">
				</el-carousel-item>
			</template>
		</el-carousel>

		<div class="la-carousel-dot-wrapper" v-if="list.length === 2">
			<span class="la-carousel-dot-item" :class="{active:(currentIndex % 2) === index}" v-for="(item,index) in 2" :key="index"></span>
		</div>
	</div>
</template>

<script>
export default {
	name: 'la-carousel',
	props: {
		list: {
			type: Array,
			default: () => [],
		},
		interval: {
			type: Number,
			default: 3000,
		},
		autoplay: {
			type: Boolean,
			default: false,
		},
		height: {
			type: String,
			default: '505px',
		},
	},
	data() {
		return {
			currentIndex: 0,
			initial: 0,
		};
	},
	methods: {
		change(index) {
			this.currentIndex = index;
		},
	},
	beforeDestroy() {
		this.initial = 0;
	},
};
</script>

<style>
.el-carousel__indicator button {
	width: 4px;
	height: 4px;
	border-radius: 50%;
}
.la-carousel-wrapper {
	position: relative;
}
.la-carousel-dot-wrapper {
	position: absolute;
	display: inline-flex;
	bottom: 11px;
	left: 50%;
	transform: translateX(-50%);
	z-index: 100;
}

.la-carousel-dot-item {
	width: 4px;
	height: 4px;
	border-radius: 50%;
	background-color: rgba(255, 255, 255, 0.5);
}

.la-carousel-dot-item.active {
	background-color: #fff;
}

.la-carousel-dot-item + .la-carousel-dot-item {
	margin-left: 8px;
}
</style>