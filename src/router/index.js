import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)
import AppBoyList from '@/components/boylist/boylist.vue'

export default new Router({
  routes: [
  	{path:'/boylist',name:'boylist',component:AppBoyList}
  ]
})
