<template>
	<div class="panel-top-left">
		<h4>当日风机维修表</h4>
		<div class="input-div">筛选：<input type="text"
				style="background-color: transparent;color: white;width: 200px;height: 20px;" placeholder="请输入测点">
			<input type="button" value="重置"
				style="border: none;background-color:#1b4d8a;color: white;width: 35px;height: 20px;">
		</div>
		<div class="panel-left-table">
			<table class="table-bordered">
				<thead>
					<td align="center" style="width: 18%;">风机编号</td>
					<td align="center" style="width: 36%;">维修人员编号</td>
					<td align="center" style="width: 18%;">入塔时间</td>
					<td align="center" style="width: 18%;">出塔时间</td>
					<td align="center" style="width: 10%;">查看</td>
				</thead>
				<tbody>
					<tr style="background-color:rgba(96,101,120, 0.5);">
						<td align="center">3</td>
						<td align="center">D018 D013</td>
						<td align="center">13:00</td>
						<td align="center"></td>
						<td align="center">*</td>
					</tr>
					<tr>
						<td align="center">3</td>
						<td align="center">D018 D013</td>
						<td align="center">13:00</td>
						<td align="center"></td>
						<td align="center">*</td>
					</tr>
					<tr style="background-color:rgba(96,101,120, 0.5);">
						<td align="center"></td>
						<td align="center"></td>
						<td align="center"></td>
						<td align="center"></td>
						<td align="center"></td>
					</tr>
					<tr>
						<td align="center"></td>
						<td align="center"></td>
						<td align="center"></td>
						<td align="center"></td>
						<td align="center"></td>
					</tr>
					<tr style="background-color:rgba(96,101,120, 0.5);">
						<td align="center"></td>
						<td align="center"></td>
						<td align="center"></td>
						<td align="center"></td>
						<td align="center"></td>
					</tr>
					<tr>
						<td align="center"></td>
						<td align="center"></td>
						<td align="center"></td>
						<td align="center"></td>
						<td align="center"></td>
					</tr>
					<tr style="background-color:rgba(96,101,120, 0.5);">
						<td align="center"></td>
						<td align="center"></td>
						<td align="center"></td>
						<td align="center"></td>
						<td align="center"></td>
					</tr>
					<tr>
						<td align="center"></td>
						<td align="center"></td>
						<td align="center"></td>
						<td align="center"></td>
						<td align="center"></td>
					</tr>
					<tr style="background-color:rgba(96,101,120, 0.5);">
						<td align="center"></td>
						<td align="center"></td>
						<td align="center"></td>
						<td align="center"></td>
						<td align="center"></td>
					</tr>
					<tr>
						<td align="center"></td>
						<td align="center"></td>
						<td align="center"></td>
						<td align="center"></td>
						<td align="center"></td>
					</tr>
					<tr style="background-color:rgba(96,101,120, 0.5);">
						<td align="center"></td>
						<td align="center"></td>
						<td align="center"></td>
						<td align="center"></td>
						<td align="center"></td>
					</tr>
					<tr>
						<td align="center"></td>
						<td align="center"></td>
						<td align="center"></td>
						<td align="center"></td>
						<td align="center"></td>
					</tr>
					<tr style="background-color:rgba(96,101,120, 0.5);">
						<td align="center"></td>
						<td align="center"></td>
						<td align="center"></td>
						<td align="center"></td>
						<td align="center"></td>
					</tr>
				</tbody>


			</table>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'IndexTable'
	}
</script>

<style>
	.panel-top-left {
		float: left;
		height: 500px;
		/* width: 350px; */
		width: 33.3%;
		border: 2px solid rgb(32, 43, 60);
		background-color: rgba(2, 43, 60, 0.7);
	}

	.panel-top-left h4 {
		padding-left: 10px;
		height: 38px;
		width: 100%;
		color: white;
		line-height: 38px;
		text-align: left;
		font-size: 15px;
		font-weight: 400;
		background-color: rgb(49, 125, 158);
	}

	.panel-top-left .input-div {
		margin-top: 20px;
		font-size: 8px;
		color: white;
	}


	.panel-top-left .panel-left-table {
		width: 100%;
		height: 395px;
		overflow: auto;
		margin-top: 10px;
	}

	.table-bordered {
		width: 100%;
		font-size: 12px;
		color: white;
		border-spacing: 0px;
	}

	.table-bordered tr {
		height: 30px;
	}

	.table-bordered td {
		border-left: solid 2px rgb(62, 90, 112);
	}
</style>
