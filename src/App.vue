<template>
	<div id="app">
		<AppHeader @child-info="get" :isTopShow='isTopShow'></AppHeader>
		<AppList v-if="false"></AppList>
		<AppFooter :gdShow='gdShow' :gdHide="gdHide"></AppFooter>
		<BackTop v-back-top v-scroll-show:700="isBackShow" :isshow="isBackShow"></BackTop>
		<router-view :AppHeaderList='AppHeaderList' ></router-view>
	</div>
</template>

<script>
	import bus from './components/modules/bus'
	import AppFooter from './components/footer/AppFooter'
	import AppHeader from './components/header/AppHeader'
	import AppList from './components/boylist/boylist'
	import BackTop from './components/common/back-top'
	export default {
		name: 'app',
		data:function(){
			return {
				isTopShow:true,
				AppHeaderList:"11",
				isBoyList:false,
				isBackShow: {value: false},
				sec:{}
			}
		},
		components: {
			AppFooter,AppHeader,AppList,BackTop
		},
		methods:{
			get(id){
				this.AppHeaderList=id
				//console.log(this.AppHeaderList)
			},
			isBoy(){
				this.isBoyList=true
			},
			gdShow(){
				this.isTopShow=false
			},
			gdHide(){
				this.isTopShow=true
			},
			


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