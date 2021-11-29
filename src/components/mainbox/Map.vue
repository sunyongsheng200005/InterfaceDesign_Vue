<template>
	<div class="map">
		<div class="mapblock" >
			<div id="container"></div>
		</div>
	</div>
</template>

<script>
	import * as echarts from 'echarts'
	export default {
		name: 'Map',
		data() {
			return {
				option: {
					title: {
						text: '全景视图',
					},
					tooltip: {},
					legend: [{
						data: ["并网(11)", "待机(1)", "维护(1)", "故障(3)", "中断(1)"]
					}],
					animationDurationUpdate: 1500,
					animationEasingUpdate: 'quinticInOut',
					series: [{
						name: 'Les Miserables',
						type: 'graph',
						layout: 'none',
						symbolSize: 50,
						symbol: 'path://M883.23,487.8a8.44,8.44,0,0,0-4.09-5.73c-2.46-1.26-4.92-1.26-7,.38q-73.3,43.62-142.92,93c-40.58,30.69-67.62,49.15-70.46,67.17a11.94,11.94,0,0,0,1.64,5.74c3.66,5.35,8.57,5.35,12.29,5.73,32.77-.82,141.72-52.05,236.75-104.48a6.87,6.87,0,0,0,3.71-5.73,7.9,7.9,0,0,0-2.46-6.55,77.45,77.45,0,0,1-27.47-49.54ZM963.13,532a55.76,55.76,0,1,0-53.29-55.71A55.77,55.77,0,0,0,963.13,532ZM927.91,400.53c2,1.64,4.48,1.64,6.93.82a78,78,0,0,1,56.53,0,5.75,5.75,0,0,0,2.89.44,7,7,0,0,0,4.1-1.26,7.21,7.21,0,0,0,3.28-6.12,1685.76,1685.76,0,0,0-10.27-169.57,483.46,483.46,0,0,0-9.83-58.17c-4.92-13.92-4.48-24.57-18.41-27.46-13.92,2.89-13.92,13.54-18.45,27.46-10.66,43-18.41,137.2-20,227.74a8.31,8.31,0,0,0,3.28,6.12Zm269.9,180.22c-41-30.31-94.21-65.53-143.74-95.4a8.26,8.26,0,0,0-7-.44,7.12,7.12,0,0,0-4.09,5.73,79.79,79.79,0,0,1-28.68,48.77,8.25,8.25,0,0,0-2.84,6.56,7.57,7.57,0,0,0,3.67,6.11C1111,605,1224,661.09,1256.79,661.85c3.71,0,8.19-.38,11.91-5.29a11.17,11.17,0,0,0,1.63-5.74c-3.27-18.4-31.56-38.06-72.52-70.07ZM970.89,569.28H957.78a26.87,26.87,0,0,0-26.21,27L918.46,926.89c0,14.75,11.91,27,26.22,27H984c14.36,0,26.21-12.29,26.21-27L997.16,596.32a26.88,26.88,0,0,0-26.22-27Z',
						categories: [{
							name: "并网(11)",
							itemStyle: {
								color: 'rgb(41,230,163)'
							}
						}, {
							name: "待机(1)",
							itemStyle: {
								color: 'rgb(254,228,20)'
							}
						}, {
							name: "维护(1)",
							itemStyle: {
								color: 'rgb(236,88,255)'
							}
						}, {
							name: "故障(3)",
							itemStyle: {
								color: 'red'
							}
						}, {
							name: "中断(1)",
							itemStyle: {
								color: 'rgb(197,198,195)'
							}
						}],
						data: [{
							name: '1',
							x: 100,
							y: 500,
							category: 3,
							tooltip: {
								formatter: '风机编号：{b0}<br />' + "型号" + ':' + "Myse3.2-145" + '<br />' +
									"风速" + ':' +
									"2m/s" + '<br />' + "功率" + ':' + "0KW" + '<br />' + "状态" + ':' + "故障" +
									'<br />' + "实时负荷" + ':' + "0%"
							},
						}, {
							name: '2',
							value: 999,
							x: 150,
							y: 500,
							category: 0
						}, {
							name: '3',
							value: 999,
							x: 200,
							y: 500,
							category: 0

						}, {
							name: '4',
							value: 999,
							x: 300,
							y: 500,
							symbolSize: 0,
						}, {
							name: '5',
							value: 999,
							x: 500,
							y: 500,
							category: 4

						}, {
							name: '6',
							value: 999,
							x: 600,
							y: 500,
							category: 0

						}, {
							name: '7',
							value: 999,
							x: 100,
							y: 300,
							category: 3
						}, {
							name: '8',
							value: 999,
							x: 150,
							y: 300,
							category: 0
						}, {
							name: '9',
							value: 999,
							x: 250,
							y: 300,
							category: 0

						}, {
							name: '10',
							value: 999,
							x: 300,
							y: 300,
							symbolSize: 0,

						}, {
							name: '11',
							value: 999,
							x: 500,
							y: 300,
							category: 0

						}, {
							name: '12',
							value: 999,
							x: 600,
							y: 300,
							category: 1

						}, {
							name: '13',
							value: 999,
							x: 100,
							y: 200,
							category: 3
						}, {
							name: '14',
							value: 999,
							x: 150,
							y: 200,
							category: 0
						}, {
							name: '15',
							value: 999,
							x: 250,
							y: 200,
							category: 0

						}, {
							name: '16',
							value: 999,
							x: 300,
							y: 200,
							symbolSize: 0,

						}, {
							name: '17',
							value: 999,
							x: 500,
							y: 200,
							category: 0

						}, {
							name: '18',
							value: 999,
							x: 600,
							y: 200,
							category: 0

						}, {
							name: '19',
							value: 999,
							x: 178,
							y: 350,
							category: 0

						}, {
							name: '20',
							value: 999,
							x: 492,
							y: 350,
							category: 2

						}],
						links: [{
							source: "4",
							target: "3"
						}, {
							source: '3',
							target: '2'
						}, {
							source: '2',
							target: '1'
						}, {
							source: '4',
							target: '5'
						}, {
							source: '5',
							target: '6'
						}, {
							source: '4',
							target: '10'
						}, {
							source: '10',
							target: '9'
						}, {
							source: '9',
							target: '8'
						}, {
							source: '8',
							target: '7'
						}, {
							source: '9',
							target: '19'
						}, {
							source: '10',
							target: '11'
						}, {
							source: '11',
							target: '12'
						}, {
							source: '10',
							target: '20'
						}, {
							source: '10',
							target: '16'
						}, {
							source: '16',
							target: '15'
						}, {
							source: '15',
							target: '14'
						}, {
							source: '14',
							target: '13'
						}, {
							source: '16',
							target: '17'
						}, {
							source: '17',
							target: '18'
						}],
						lineStyle: {
							opacity: 1,
							color: "rgb(28,207,254)",
							width: 2,
							curveness: 0,
							type: 'solid',
						}
					}],
				}
			}
		},
		mounted: function() {
			this.CreateEcharts();
		},
		methods: {
			CreateEcharts() {
				var dom = document.getElementById("container");
				var myChart = echarts.init(dom);
				if (this.option && typeof this.option === 'object') {
					myChart.setOption(this.option);
				}
				// setTimeout(() => {
				// 	echarts.drawLine();
				// }, 200);
			}
		}
	}
</script>

<style>
	.map {
		float: right;
		margin-top: 2px;
		height: 500px;
		width: 66.1%;
	}
	.mapblock{
		width: 100%;
		height: 100%;
		background: url(../../image/background.png) no-repeat; 
		background-size: 100% 100%;
	}
	#container{
		width: 100%;
		height: 100%
	}
</style>
