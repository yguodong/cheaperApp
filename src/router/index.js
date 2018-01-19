import Vue from 'vue'
import Router from 'vue-router'
//列表页面
import AppList from '../components/ylist/AppList.vue'
import AppRegister from '../components/register/AppRegister.vue'


Vue.use(Router)
import Home from '../components/home/home'

import AppBoyList from '@/components/boylist/boylist'
import AppGoods from '@/components/goods/AppGoods'
import AppYuehui from '@/components/yuehui/yuehui'
import AppMyInfo from '@/components/myinfo/myinfo'
import AppMyInfoOrder from '@/components/myinfo/order'

import AppDetail from '@/components/boylist/detail'
>>>>>>> nxm
const routes=[
	{path:'',redirect:'/home'},
	{path:'/home',name:'home',component:Home},
	{path:'/list',name:'list',component:AppList},
	{path:'/register',name:'register',component:AppRegister},
	{path:'/boylist',name:'boylist',component:AppBoyList},
	{path:'/car',name:'goods',component:AppGoods},
	{path:'/yuehui',name:'yuehui',component:AppYuehui},
<<<<<<< HEAD
	{path:'/myinfo',name:'myinfo',component:AppMyInfo},
	{path:'/order/:type',name:'order',component:AppMyInfoOrder},
=======
	{path:'/detail',name:'detail',component:AppDetail},
>>>>>>> nxm
	{path:'**',redirect:'home'}
	
]

const router= new Router({
	routes,
	mode:'history'
})

export default router
