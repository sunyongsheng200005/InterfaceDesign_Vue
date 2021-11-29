<template>
	<div class="bottom-left ">
		<div class="containerheader iconfont">
			&#xe61e;{{statchartheader}}
		</div>
		<div class="container" style="padding:auto;">
			<div id="containercategory" style="height: 100%"></div>
		</div>
	</div>
</template>

<script>
	import * as echarts from 'echarts'

	export default {
		name: 'StatChart',
		props:{
			statchartheader:String
		},
		data() {
			return {
				catoption: {
					xAxis: {
						type: 'category',
						data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
					},
					yAxis: {
						type: 'value'
					},
					series: [{
						data: [
							120, {
								value: 200,
								itemStyle: {
									color: '#a90000'
								}
							},
							150,
							80,
							70,
							110,
							130
						],
						type: 'bar'
					}]
				},
			}
		},
		mounted: function() {
			this.CreateStateChart();
		},
		methods: {
			CreateStateChart() {
				var domcategory = document.getElementById("containercategory");
				var myChartcategory = echarts.init(domcategory);
				if (this.catoption && typeof this.catoption === 'object') {
					myChartcategory.setOption(this.catoption);
				}
			}
		}
	}
</script>

<style scoped="scoped">
	.bottom-left {
		float: left;
		height: 100%;
		width: 70%;
	}

	.container {
		background-color: rgba(55, 55, 55, 0.5);
		width: 100%;
		height: 100%;
	}

	.containerheader {
		background-color: rgb(104, 112, 115);
		padding: 5px 0px;
		padding-left: 7px;
		color: aliceblue;
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
