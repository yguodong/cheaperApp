import Vue from 'vue'
import Router from 'vue-router'
//列表页面
import AppList from '../components/ylist/AppList.vue'
import AppRegister from '../components/register/AppRegister.vue'
import AppSearch from '../components/ysearch/AppSearch.vue'

Vue.use(Router)
import Home from '../components/home/home'

import AppBoyList from '@/components/boylist/boylist'
import AppGoods from '@/components/goods/AppGoods'
import AppYuehui from '@/components/yuehui/yuehui'
import AppDetail from '@/components/boylist/detail'
import AppMyInfo from '@/components/myinfo/myinfo'
import AppMyInfoOrder from '@/components/myinfo/order'
const routes=[
	{path:'',redirect:'/home'},
	{path:'/home',name:'home',component:Home},
	{path:'/list',name:'list',component:AppList},
	{path:'/register',name:'register',component:AppRegister},
	{path:'/search',name:'search',component:AppSearch},
	{path:'/boylist',name:'boylist',component:AppBoyList},
	{path:'/car',name:'goods',component:AppGoods},
	{path:'/yuehui',name:'yuehui',component:AppYuehui},
	{path:'/detail',name:'detail',component:AppDetail},
	{path:'/myinfo',name:'myinfo',component:AppMyInfo},
	{path:'/order/:type',name:'order',component:AppMyInfoOrder},
	{path:'**',redirect:'home'}
	
]

const router= new Router({
	routes,
	mode:'history'
})

export default router
