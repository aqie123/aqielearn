// npm init --yes  生成package.json
// shift + 右键 文件夹  进入cmd
// import 模块名 from 地址
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import routerConfig from './router.config.js'

Vue.use(VueRouter);



//配置路由
const router = new VueRouter();

//配置路由规则
router.map(routerConfig)		//json格式
//开始跳转
router.redirect({
	'/':'/home'
})

//开启路由
router.start(App,'#app');
/*
new Vue({
	el:'body',
	components:{
		app:App
	}
})
*/