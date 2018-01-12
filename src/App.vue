<template>
	<div id="app">
		<AppHeader @child-info="get"></AppHeader>
		<AppFooter></AppFooter>
		<BackTop v-back-top v-scroll-show:700="isBackShow" :isshow="isBackShow"></BackTop>
		<router-view :AppHeaderList='AppHeaderList'></router-view>
	</div>
</template>

<script>
	import bus from './components/modules/bus'
	import AppFooter from './components/footer/AppFooter'
	import AppHeader from './components/header/AppHeader'
	import AppList from './components/boylist/boylist'
	import BackTop from './components/common/back-top'
	import Yuehui from './components/yuehui/yuehui'
	export default {
		name: 'app',
		data:function(){
			return {
				AppHeaderList:"11",
				isBoyList:false,
				isBackShow: {
					value: false
				}
			}
		},
		components: {
			AppFooter,AppHeader,AppList,BackTop,Yuehui
		},
		methods:{
			get(id){
				this.AppHeaderList=id
				//console.log(this.AppHeaderList)
			},
			isBoy(){
				this.isBoyList=true
			}
		},
		mounted(){
			bus.$on('m-boy',function(){
				this.isBoy()
			}.bind(this))
		}
	}
</script>

<style lang="scss">
	@import './style/usage/app.scss'
</style>