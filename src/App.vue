<template>
	<div id="app">
		<AppHeader @child-info="get" :isTopShow='isTopShow'></AppHeader>
		<AppList v-if="false"></AppList>
		<AppFooter :gdShow='gdShow' :gdHide="gdHide"></AppFooter>
		<BackTop v-back-top v-scroll-show:700="isBackShow" :isshow="isBackShow"></BackTop>
		<router-view :AppHeaderList='AppHeaderList' @change-id="ndetailID" :detailID="detailID"></router-view>
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
				isTopShow:true,
				AppHeaderList:"11",
				isBoyList:false,
				isBackShow: {
					value: false
				},
				detailID:""
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
			},
			gdShow(){
				this.isTopShow=false
			},
			gdHide(){
				this.isTopShow=true
			},
			ndetailID(id){
				this.detailID = id
				//console.log(this.detailID)
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