

//引入模块
import Home from './components/Home.vue'
import News from './components/News.vue'
import Login from './components/Login.vue'
import Reg from './components/Reg.vue'

import Detail from './components/Detail.vue'
//配置路由规则
export default{
	'/home':{
		component:Home,
		subRoutes:{				//路由嵌套
			'login':{
				component:Login,		//注意子组件格式
			},
			'reg':{
				component:Reg
			}
		}
	},
	'/news':{
		component:News,
		subRoutes:{
			'detail/:id':{
				component:Detail
			}
		}
	}
}