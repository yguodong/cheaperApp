<template>
	<div id="app">
		<AppHeader :isTopShow='isTopShow'></AppHeader>
		<AppList v-if="false"></AppList>
		<AppFooter :gdShow='gdShow' :gdHide="gdHide"></AppFooter>
		<router-view></router-view>
	</div>
</template>

<script>
	import AppFooter from './components/footer/AppFooter'
	import AppHeader from './components/header/AppHeader'
	import AppList from './components/boylist/boylist'
	export default {
		name: 'app',
		data:function(){
			return {
				isTopShow:true
			}
		},
		components: {
			AppFooter,AppHeader,AppList
		},
		methods:{
			gdShow(){
				this.isTopShow=false
			},
			gdHide(){
				this.isTopShow=true
			}
		}
		
	
	}	
</script>

<style lang="scss">
	@import './style/usage/app.scss'
</style>