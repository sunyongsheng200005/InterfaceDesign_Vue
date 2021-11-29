<template>
	<div class="mainbox">
		<div class="panel-left">
			<div class="panel-top bar">
				<IndexTable></IndexTable>
				<Map></Map>
			</div>
			<div class="panel-bottom">
				<ContainerBlock :PieHeader="PieHeaderDay" :containerId="containerIdDay" :containerdata="containerdata">
				</ContainerBlock>
				<ContainerBlock :PieHeader="PieHeaderMonth" :containerId="containerIdMonth"
					:containerdata="containerdata"></ContainerBlock>
				<ContainerBlock :PieHeader="PieHeaderYear" :containerId="containerIdYear"
					:containerdata="containerdata"></ContainerBlock>
			</div>
		</div>
		<div class="panel-right">
			<PanelRigheTable :PrtHeader="PieHeaderDay"></PanelRigheTable>
			<PanelRigheTable :PrtHeader="PieHeaderMonth"></PanelRigheTable>
			<PanelRigheTable :PrtHeader="PieHeaderYear"></PanelRigheTable>
		</div>
	</div>
</template>

<script>
	import IndexTable from './mainbox/IndexTable.vue'
	import Map from './mainbox/Map.vue'
	import ContainerBlock from './publicponents/ContainerBlock.vue'
	import PanelRigheTable from './mainbox/PanelRightTable.vue'
	export default {
		name: 'MainBox',
		data() {
			return {
				PieHeaderDay: "当日预警统计",
				PieHeaderMonth: "当月预警统计",
				PieHeaderYear: "当年预警统计",
				containerIdDay: "containerday",
				containerIdMonth: "containermonth",
				containerIdYear: "containeryear",
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
			IndexTable,
			ContainerBlock,
			Map,
			PanelRigheTable
		}
	}
</script>

<style>
	.mainbox {
		width: 100%;
		height: 1000px;
		margin: 0 auto;
		padding: 8px 8px 0;
	}

	.panel-left {
		float: left;
		width: 72%;
	}

	.panel-top {
		float: left;
		width: 100%;
		padding-right: 10px;
	}

	.panel-bottom {
		margin-top: 10px;
		float: left;
		width: 100%;
		padding-right: 10px;
	}

	.panel-right {
		width: 28%;
		float: right;
		border: 2px solid rgb(32, 43, 60);
		background-color: rgba(2, 43, 60, 0.8);
	}
</style>
