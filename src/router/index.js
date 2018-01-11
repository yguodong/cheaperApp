import Vue from 'vue'
import Router from 'vue-router'
//列表页面
import AppList from '../components/ylist/AppList.vue'
import AppRegister from '../components/register/AppRegister.vue'

Vue.use(Router)
import Home from '../components/home/home'

const routes=[
	{path:'',redirect:'/home'},

	{path:'/home',name:'home',component:Home},
	{path:'/list',name:'list',component:AppList},
	{path:'/register',name:'register',component:AppRegister},
	{path:'**',redirect:'home'}
]

const router= new Router({
	routes
})

export default router