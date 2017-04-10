<template>
	<h3>我是主页</h3>
	<p>上线：npm run build</p>
	<ul>
		<li>
			<a v-link="{path:'/home/login'}">登录</a>
			<a v-link="{path:'/home/reg'}">注册</a>
		</li>
	</ul>
	<div class='box'>
		<router-view></router-view>
	</div>
</template>
<style scope>
	.box{
		border:1px solid red;
	}
</style>