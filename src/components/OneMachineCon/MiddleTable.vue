<template>
	<div class="middle-table ">
		<div class="middle-table-top ">
			<ul>
				<li style="background-color: rgb(50, 124, 159)">全部</li>
				<li>黄色异常</li>
				<li>红色异常</li>
			</ul>
		</div>
		<div class="middle-table-input ">
			筛选：<input type="text " class="inputmodel " value="1111 ">
			<input type="button" value="确定"
				style="border-radius: 3px; margin-left: 5px; background-color:#1b4d8a;color: white;width: 40px;height: 25px; ">
		</div>
		<div class="table-box ">
			<table class="table-bordered ">
				<thead style="background-color:rgba(96,101,120, 0.5); ">
					<td style="width: 18%; ">时间</td>
					<td style="width: 18%; ">维修人员编号</td>
					<td style="width: 36%; ">异常描述</td>
					<td style="width: 18%; ">处理方式</td>
					<td style="width: 10%; ">查看</td>
				</thead>
				<tbody>
					<tr>
						<td>3</td>
						<td>D018 D013</td>
						<td>13:00</td>
						<td></td>
						<td>*</td>
					</tr>
					<tr style="background-color:rgba(96,101,120, 0.5); ">
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>3</td>
						<td>D018 D013</td>
						<td>13:00</td>
						<td></td>
						<td>*</td>
					</tr>
					<tr style="background-color:rgba(96,101,120, 0.5); ">
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>3</td>
						<td>D018 D013</td>
						<td>13:00</td>
						<td></td>
						<td>*</td>
					</tr>
					<tr style="background-color:rgba(96,101,120, 0.5); ">
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>3</td>
						<td>D018 D013</td>
						<td>13:00</td>
						<td></td>
						<td>*</td>
					</tr>
					<tr style="background-color:rgba(96,101,120, 0.5); ">
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>3</td>
						<td>D018 D013</td>
						<td>13:00</td>
						<td></td>
						<td>*</td>
					</tr>
					<tr style="background-color:rgba(96,101,120, 0.5); ">
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>3</td>
						<td>D018 D013</td>
						<td>13:00</td>
						<td></td>
						<td>*</td>
					</tr>
					<tr style="background-color:rgba(96,101,120, 0.5); ">
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr style="background-color:rgba(96,101,120, 0.5); ">
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr style="background-color:rgba(96,101,120, 0.5); ">
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr style="background-color:rgba(96,101,120, 0.5); ">
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr style="background-color:rgba(96,101,120, 0.5); ">
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr style="background-color:rgba(96,101,120, 0.5); ">
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'MiddleTable'
	}
</script>

<style scoped="scoped">
	.middle-table {
		width: 70%;
		height: 100%;
		float: left;
	}

	.middle-table-top {
		float: left;
		width: 100%;
		border-bottom: 1px solid rgba(62, 90, 112, 0.3);
	}

	.middle-table-top ul {
		margin-left: 10px;
	}

	.middle-table-top ul li:hover {
		background-color: rgb(50, 124, 159);
	}

	.middle-table-top ul li {
		background-color: rgb(36, 80, 109);
		float: left;
		width: 111px;
		height: 35px;
		line-height: 35px;
		text-align: center;
		margin-right: 6px;
		border-radius: 5px 5px 0px 0px;
		transform: perspective(65px) rotateX(12deg);
	}

	.middle-table-input {
		width: 100%;
		float: left;
		color: white;
		margin-left: 10px;
		margin-top: 10px;
	}

	.inputmodel {
		-web-kit-appearance: none;
		-moz-appearance: none;
		box-sizing: border-box;
		border: 1px solid rgb(62, 90, 112);
		color: #6a6f77;
		outline: 0;
		padding: 0 1em;
		text-decoration: none;
		background-color: rgba(28, 45, 65, 0.5);
		height: 23px;
	}

	.table-box {
		float: left;
		width: 100%;
		overflow: auto;
		height: 85%;
		margin-top: 10px;
		border: 2px solid rgb(62, 90, 112);
		border-left: 0px;
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
	thead{
		height: 30px;
	}
	.table-bordered td {
		border-left: solid 2px rgb(62, 90, 112);
	}
</style>
