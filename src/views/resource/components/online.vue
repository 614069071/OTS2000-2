<template>
	<!-- 设备在线率 -->
	<div ref="resource_online" class="resource-online-map"></div>
</template>

<script>
import * as Echarts from 'echarts';

export default {
	components: {},
	data() {
		return {};
	},
	computed: {
		options() {
			return {
				color: ['#6998F7', '#F0F2F5'],
				tooltip: {
					trigger: 'item',
					backgroundColor: '#fff',
					textStyle: {
						color: '#333', //设置文字颜色
					},
					formatter: function (e) {
						const sale = ((e.data.value / e.data.sum) * 100).toFixed(1) + '%';

						return `
              <div class="echart-tooltip-wrapper">
                <p><span>在线总数(台)&nbsp;</span><span>123456台</span></p>
                <p><span>${e.name}率</span><span>${sale}</span></p>
              </div>
            `;
					},
				},
				series: [
					{
						name: '访问来源',
						type: 'pie',
						radius: ['60%', '80%'],
						avoidLabelOverlap: false,
						itemStyle: {
							borderColor: '#fff',
							borderWidth: 3,
						},
						label: {
							show: true,
							position: 'center',
							textStyle: {
								fontSize: 24,
								color: '#333',
							},
							formatter() {
								return '33.3%';
							},
						},
						labelLine: {
							show: false,
						},
						data: [
							{ value: 33, name: '在线', sum: 100 },
							{ value: 66, name: '离线', sum: 100 },
						],
					},
				],
			};
		},
	},
	mounted() {
		this.initOnlineEcharts();
	},
	methods: {
		initOnlineEcharts() {
			this.$nextTick(() => {
				const el = this.$refs.resource_online;
				const echarts = Echarts.init(el);
				echarts.setOption(this.options);
				window.addEventListener('resize', function () {
					echarts.resize();
				});
			});
		},
	},
};
</script>

<style scoped>
.resource-online-map {
	width: 100%;
	height: 100%;
}
</style>