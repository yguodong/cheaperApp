<template>
	<div id="app">
		<AppHeader></AppHeader>
		<AppFooter></AppFooter>
	</div>
</template>

<script>
	import AppFooter from './components/footer/AppFooter'
	import AppHeader from './components/header/AppHeader'
	export default {
		name: 'app',
		components: {
			AppFooter,AppHeader
		}
	}
</script>

<style lang="scss">
	@import './style/usage/app.scss'
</style>