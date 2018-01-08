<template>
	<div id="app">
		<AppHeader @child-info="get"></AppHeader>
		<router-view :AppHeaderList='AppHeaderList'></router-view>
		<AppFooter></AppFooter>
	</div>
</template>

<script>
	import bus from './components/modules/bus'
	import AppFooter from './components/footer/AppFooter'
	import AppHeader from './components/header/AppHeader'
	import AppList from './components/boylist/boylist'
	export default {
		name: 'app',
		data:function(){
			return {
				AppHeaderList:"11",
				isBoyList:false
			}
		},
		components: {
			AppFooter,AppHeader,AppList
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