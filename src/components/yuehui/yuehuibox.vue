<template>
<div class="app-yuehuibox">
	<div class="yh-content">
		<img :src="info.cover_image"/>
		<p>{{info.goods_show_name}}</p>
		<span>{{info.goods_show_desc}}</span>	
			
		<div class="yh-picCar">
			<em>￥{{info.price}}.00</em>
			<b>{{info.add_cart_num}}人加入购物车<i class="fa fa-shopping-cart"></i></b>			
		</div>
		
	</div>
</div>
</template>

<script>
	
	export default{
		name:'app-yuehuibox',
		props:['info']
	}
</script>

<style>
</style>