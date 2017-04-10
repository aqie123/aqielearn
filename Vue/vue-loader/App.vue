<template>
	
<div id="app">
	<h3>vue-loader+vue-router</h3>
	<div>
		<a v-link="{path:'/home'}">主页</a>
		<a v-link="{path:'/news'}">新闻</a>
		<!-- 这里加斜杠不然会出错 -->
	</div>
	<div>
		<router-view></router-view>	
	</div>
	
</div>
	
</template>

<style>
	body{
		background-color: #ff0;
	}
	.v-link-active{
		font-size: 20px;
		color:#f00;
	}

</style>

<script>
	// import Menu from  './components/Menu.vue'		//引入菜单
	/*export default{
		data(){
			return{
				msg:'welcome Vue ^_^'
			}
		},
		methods:{
			change(){
				this.msg='Opened the door to the new world!'
			}
			
		},
		components:{
			'my-menu':Menu
		}
	}*/

</script>