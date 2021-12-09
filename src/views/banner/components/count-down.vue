<template>
	<i>{{cumulative}}</i>
</template>

<script>
export default {
	name: 'count-down',
	props: {
		start: {
			type: Number,
			default: 0,
		},
		display: {
			type: Boolean,
			default: false,
		},
	},
	data() {
		return {
			cumulative: 0,
			timer: null,
		};
	},
	watch: {
		display(v) {
			if (!v) return;
			this.cumulative = this.start;
			this.startTimer();
		},
	},
	methods: {
		startTimer() {
			this.timer = setInterval(() => {
				this.cumulative--;
				if (this.cumulative <= 0) {
					clearInterval(this.timer);
					this.$emit('callback');
				}
			}, 1000);
		},
	},
	beforeDestroy() {
		clearInterval(this.timer);
	},
};
</script>