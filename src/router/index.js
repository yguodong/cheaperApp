import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)
import Home from '../components/home/home'
import AppBoyList from '@/components/boylist/boylist'
const routes=[
	{path:'',redirect:'/home'},
	{path:'/home',name:'home',component:Home},
	{path:'/boylist',name:'boylist',component:AppBoyList}
]

const router= new Router({
	routes
})

export default router
