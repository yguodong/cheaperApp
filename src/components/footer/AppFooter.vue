<template>
	<div class="app-footer">
		<ul>
		<router-link to="/home" tag="li" @click.native="gdHide">
			<i class="yo-ico">&#xe604;</i>
			<span>首页</span>
		</router-link>
		<router-link to="/list" tag="li" @click.native="gdShow">
			<i class="yo-ico">&#xe651;</i>
			<span>分类</span>
		</router-link>
		<router-link to="/yuehui" tag="li">
			<i class="yo-ico">&#xe669;</i>
			<span>约惠</span>
		</router-link>
		<router-link to="/car" tag="li">
		<i class="yo-ico">&#xe501;</i>
			<span>购物车</span>
		</router-link>
		<router-link to="/register" tag="li" @click.native="gdShow">
			<i class="yo-ico">&#xe603;</i>
			<span>我的</span>
		</router-link>
		</ul>
	</div>
</template>

<script>
	

	export default {
		name: 'app-footer',
		props:['gdShow','gdHide'],
		methods:{
			
		}
	}
</script>

<style lang="scss">

</style>