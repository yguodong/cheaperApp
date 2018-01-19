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
const routes=[
	{path:'',redirect:'/home'},

	{path:'/home',name:'home',component:Home},
	{path:'/list',name:'list',component:AppList},
	{path:'/register',name:'register',component:AppRegister},
	{path:'/search',name:'search',component:AppSearch},
	{path:'/boylist',name:'boylist',component:AppBoyList},
	{path:'/car',name:'goods',component:AppGoods},
	{path:'**',redirect:'home'},
]

const router= new Router({
	routes,
	mode:'history'
})

export default router
