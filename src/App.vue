<template>
	<div id="app">
		<AppHeader></AppHeader>
		<AppList v-if="false"></AppList>
		<AppFooter></AppFooter>
	</div>
</template>

<script>
	import AppFooter from './components/footer/AppFooter'
	import AppHeader from './components/header/AppHeader'
	import AppList from './components/boylist/boylist'
	export default {
		name: 'app',
		components: {
			AppFooter,AppHeader,AppList
		}
	}
</script>

<style lang="scss">
	@import './style/usage/app.scss'
</style>