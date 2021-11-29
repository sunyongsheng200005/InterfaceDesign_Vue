<template>
	<div class="backgroundblock">
		<header>
			<div class="nav">
				<ul>
					<li><a href="#" class="headnav">工作人员参数设置</a></li>
					<li><a href="#" class="headnav">单机参数设置</a></li>
					<li><a href="#" class="headnav">全局参数设置</a></li>
					<li>
						<router-link class="headnav" active-class="headeron" to="/workernotes">工作人员记录</router-link>
						</li>
					<li><a href="#" class="headnav">传感器组</a></li>
					<li>
						<router-link class="headnav" active-class="headeron" to="/onemachinecon">单机监控</router-link>
					</li>
					<li>
						<router-link class="headnav" active-class="headeron" to="/mainbox">全局监控</router-link>
					</li>
				</ul>
			</div>
			<div class="showTime"></div>
		</header>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		name: 'App',

	}
	var t = null;
	t = setTimeout(time, 1000)

	function time() {
		clearTimeout(t);
		var dt = new Date();
		var y = dt.getFullYear();
		var mt = dt.getMonth() + 1;
		var day = dt.getDate();
		var h = dt.getHours();
		var m = dt.getMinutes();
		var s = dt.getSeconds();
		document.querySelector(".showTime").innerHTML = '当前时间：' + y + "年" + mt + "月" + day + "日" + "-" + h + "时" + m +
			"分" + s + "秒";
		t = setTimeout(time, 1000);
	}
</script>

<style>
	.backgroundblock {
		width: 100%;
		height: 100%;
		background: url(./image/bgimg2.png) no-repeat;
		background-size: 100% 100%;
	}

	header {
		position: relative;
		background: url(./image/header.png) no-repeat;
		height: 80px;
		background-size: 100% 100%;
	}

	header li {
		float: right;
		list-style: none;
	}

	header .nav {
		padding-right: 40px;
	}

	header .nav ul li a {
		display: block;
		height: 63px;
		padding: 0 25px;
		line-height: 63px;
		text-decoration: none;
		color: white;
		border-left: 1px solid #cccccc;
	}

	header .headnav:hover {
		background-image: radial-gradient(rgba(95, 136, 160, 0.9), rgba(46, 72, 92, 0.9));
		border-bottom: rgb(47, 210, 251) solid 5px;
	}

	.headeron {
		background-image: radial-gradient(rgba(95, 136, 160, 0.9), rgba(46, 72, 92, 0.9));
		border-bottom: rgb(47, 210, 251) solid 5px;
	}

	header .showTime {
		position: absolute;
		left: 25px;
		color: rgba(255, 255, 255, 0.7);
		font-size: 16px;
		line-height: 60px;
		top: 0;
	}
</style>
