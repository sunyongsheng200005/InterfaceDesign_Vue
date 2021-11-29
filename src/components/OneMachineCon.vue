<template>
	<div class="onemachinecon">
		<div class="container-left">
			<table>
				<thead>
					<tr>
						<td>型号</td>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>1</td>
					</tr>
					<tr>
						<td>2</td>
					</tr>
					<tr>
						<td>3</td>
					</tr>
					<tr>
						<td>4</td>
					</tr>
				</tbody>

			</table>
		</div>
		<div class="container-right ">
			<div class="container-right-top ">
				<MiddleTable></MiddleTable>
				<MiddlePicture></MiddlePicture>
			</div>
			<div class="container-right-bottom ">
				<StatChart></StatChart>
				<ContainerBlock :PieHeader="PieHeaderDay" :containerId="containerIdDay" :containerdata="containerdata"
					style="width: 30%; margin-right: 0px; height: 100%;"></ContainerBlock>
			</div>
		</div>
	</div>
</template>

<script>
	import MiddleTable from './OneMachineCon/MiddleTable.vue'
	import MiddlePicture from './OneMachineCon/MiddlePicture.vue'
	import StatChart from './publicponents/StatChart.vue'
	import ContainerBlock from './publicponents/ContainerBlock.vue'
	export default {
		name: 'OneMachineCon',
		data() {
			return {
				PieHeaderDay: "当日预警统计",
				containerIdDay: "containerday",
				containerdata: [{
						value: 11,
						name: '并网',
					},
					{
						value: 1,
						name: '待机'
					},
					{
						value: 1,
						name: '维护'
					},
					{
						value: 3,
						name: '故障'
					},
					{
						value: 1,
						name: '中断'
					},
				]
			}
		},
		components: {
			MiddleTable,
			MiddlePicture,
			StatChart,
			ContainerBlock

		}
	}
</script>

<style>
	ul,
	li {
		list-style: none;
		color: white;
	}

	a {
		text-decoration: none;
		color: rgb(85, 146, 212);
		border-spacing: 0px;
		color: white;
	}

	table {
		text-align: center;
		border-spacing: 0px;
		color: white;
	}
</style>

<style scoped="scoped">
	/deep/.container {
		background-color: rgba(55, 55, 55, 0.5);
		width: 100%;
		height: 100%;
	}

	.onemachinecon {
		width: 100%;
		height: 95.5%;
	}

	.container-left {
		width: 10%;
		background-color: rgba(24, 41, 61, 0.5);
		float: left;
		height: 100%;
		overflow: auto;
	}

	.container-left table {
		width: 100%;
	}

	.container-left table thead {
		background-color: rgb(29, 96, 141);
		height: 40px;
		line-height: 40px;
	}

	.container-left table tbody {
		height: 40px;
		line-height: 40px;
	}

	.container-left table tbody td:hover {
		background-color: rgb(29, 96, 141);
	}

	.container-right {
		margin-left: 2px;
		width: 89.5%;
		float: right;
		border: 1px solid rgb(62, 90, 112);
		height: 100%;
	}

	.container-right-top {
		width: 100%;
		height: 65%;
	}

	.container-right-bottom {
		width: 100%;
		float: left;
		height: 30%;
	}
</style>
