<template>
	<ul>
		<li>主页</li>
		<li>产品</li>
		<li>联系我们</li>
	</ul>
	<ol>
		<li v-for="value in list">
			{{value}}
		</li>
	</ol>
</template>
<script type="text/javascript">
	// es6倒模块方式
	export default{
		data(){
			return{
				list:['apple','banana','pear']
			}
		}
	}
</script>	