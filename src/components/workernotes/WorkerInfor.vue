<template>
	<div class="WorkerInfor">
		<div class="workerpic">
			<img style="width: 100%;" src="../../image/sys.png">
		</div>
		<div class="Infor">
			<p><span class="Inforname"><div>ID:</div></span><span class="Inforcontext">A001</span></p>
			<p><span class="Inforname"><div>姓名:</div></span><span class="Inforcontext">孙</span></p>
			<p><span class="Inforname"><div>联系方式:</div></span><span class="Inforcontext">17600000000</span></p>
			<p><span class="Inforname"><div>msg1:</div></span><span class="Inforcontext">msg1msg1msg1</span></p>
			<p><span class="Inforname"><div>msg2:</div></span><span class="Inforcontext">msg2msg2msg2</span></p>
			<p><span class="Inforname"><div>msg3:</div></span><span class="Inforcontext">msg3msg3msg3</span></p>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'WorkerInfor'
	}
</script>

<style scoped="scoped">
	.WorkerInfor {
		width: 30%;
		float: right;
		height: 100%;
		background-color: rgba(24, 41, 61, 0.5);
	}

	.workerpic {
		width: 50%;

		margin: 0px auto;
		margin-top: 10%;
	}

	.Infor {
		width: 70%;
		margin: 0px auto;
		color: white;
		background-color: rgb(16,40,73);
	}

	.Infor p {
		width: 100%;
		line-height: 30px;
	}

	.Inforname {
		float: left;
		display: block;
		width: 40%;
	}
	.Inforname div{
		float: right;
	}
	.Inforcontext{
		padding-left: 10px;
	}
</style>
