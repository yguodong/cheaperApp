<template>
	<div id="app">
		<AppHeader></AppHeader>
		<AppFooter></AppFooter>
		<BackTop v-back-top v-scroll-show:700="isBackShow" :isshow="isBackShow"></BackTop>
		<router-view></router-view>
	</div>
</template>

<script>
	import AppFooter from './components/footer/AppFooter'
	import AppHeader from './components/header/AppHeader'
	import AppList from './components/boylist/boylist'
	import BackTop from './components/common/back-top'
	export default {
		name: 'app',
		data:function(){
			return{
				isBackShow: {
					value: false
				}
			}
		},
		components: {
			AppFooter,AppHeader,AppList,BackTop
		}
	}
</script>

<style lang="scss">
	@import './style/usage/app.scss'
</style>