<template>
	<div id="app">
		<AppFooter></AppFooter>
	</div>
</template>

<script>
	import AppFooter from './components/footer/AppFooter'
	export default {
		name: 'app',
		components: {
			AppFooter
		}
	}
</script>

<style lang="scss">
	@import './style/usage/app.scss'
</style>