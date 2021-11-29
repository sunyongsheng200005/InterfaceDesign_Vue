<template>
	<div class="map-two-box containerblock" :class="containerId">
		<div class="containerheader iconfont">
			&#xe61e;{{PieHeader}}
		</div>
		<div class="container">
			<div :id="containerId" style="height: 100%"></div>
		</div>
	</div>
</template>

<script>
	import * as echarts from 'echarts'
	export default {
		name: 'ContainerBlock',
		props: {
			PieHeader: String,
			containerId: String,
			containerdata: Array
		},
		data() {
			return {
				Pieoption: {
					legend: {
						top: 'bottom',
						data: ["并网", "待机", "维护", "故障", "中断"],
						textStyle: {
							color: '#ffffff' //字体颜色
						},
					},
					color: ['rgb(41,230,163)', 'rgb(254,228,20)', 'rgb(236,88,255)', 'red', 'rgb(197,198,195)'],
					series: [{
						name: 'Nightingale Chart',
						type: 'pie',
						radius: ['50%', '80%'],
						label: {
							show: true,
							position: 'outside',
							formatter: '{d}%'
						},
						data: this.containerdata
					}]
				},
			}
		},
		methods: {
			CreateEcharts() {
				var myChart = echarts.init(document.getElementById(this.containerId));
				if (this.Pieoption && typeof this.Pieoption === 'object') {
					myChart.setOption(this.Pieoption);
				}

			}
		},
		mounted: function() {
			this.CreateEcharts();
		}
	}
</script>

<style scoped="scoped">
	.containerblock {
		margin-right: 10px;
		float: left;
		width: 32.7%;
	}

	.container {
		background-color: rgba(255, 255, 255, 0.2);
		width: 100%;
		height: 230px;
	}

	.containerheader {
		background-color: rgb(104, 112, 115);
		padding: 5px 0px;
		padding-left: 7px;
		color: aliceblue;
	}

	.containeryear {
		margin-right: 0px;
	}

	.iconfont {
		font-family: "iconfont" !important;
		font-size: 16px;
		font-style: normal;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	@font-face {
		font-family: 'iconfont';
		src: url('../../font/iconfont.woff2?t=1637320655844') format('woff2'), url('../../font/iconfont.woff?t=1637320655844') format('woff'), url('../../font/iconfont.ttf?t=1637320655844') format('truetype');
	}
</style>
