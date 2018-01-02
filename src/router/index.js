import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import Home from '../components/home/home'
const routes=[
	{path:'',redirect:'/home'},
	{path:'/home',name:'home',component:Home},
]

const router= new Router({
	routes
})

export default router