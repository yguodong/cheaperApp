<template>
	<div class="boy-list">
		<dl v-for="goods in list">
			<dt :style="{'background':'url('+goods.info.cover_image+') no-repeat center center','background-size':'cover'}">
				<em></em>
				<em></em>
			</dt>
			<dd>
				<div class="where">
					<p>
						<span>{{goods.info.country}}  | {{goods.info.title_desc}}</span>
						<i v-for="txt in goods.info.icon_display">{{txt.txt}}</i>
					</p>
					<em>[{{goods.info.brand_name}}]{{goods.info.description}}</em>
				</div>
				<div class="price">
					<span>￥{{goods.info.price}}</span>
					<p>
						<em>{{goods.info.add_cart_num}}<br/>加入购物车</em>
						<i class="icon icon-cart"></i>
					</p>
				</div>
			</dd>
		</dl>
		<div class="list-fixed" v-if="true">
			<div class="list-top" @click="goTop">
				<span class="icon icon-up"></span>
			</div>
			<div class="list-car">
				<span class="icon icon-cart"></span>
			</div>
		</div>
	</div>
</template>
<script>
	import axios from 'axios'
	export default{
		name:'boy-list',
		data:function(){
			return {
				list:[],
				isdisplay:false
			}
		},
		methods:{
			getData(){
				var that=this
				axios.get('http://localhost:4000/dl/api/channel/index?channel_id=11&is_one_with_four=0&page=1&appversion=5.7.5&app_from_page=tab_daling',{
					params:{_:Date.now()}
				}).then((res)=>{
					//console.log(res.data.data.goods_list.list)
					var res= res.data.data.goods_list.list
					var a = res.filter((item)=>{
						if(item.info){
							return item.info;
						}else{
							return false;
						}
					})
					a.forEach((item)=>{
						this.list.push(item)
					})
				})
			},
			goTop(){
				document.documentElement.scrollTop = 0
			},
			goTopShow(){
				let cHeight = document.documentElement.clientHeight || document.body.clientHeight
				let t = document.documentElement.scrollTop || document.body.scrollTop
				console.log(t)
			}
		},
		created(){
			this.getData()
//			console.log(this.list)
		},
		mounted(){  
      		window.addEventListener('touchmove',this.goTopShow)
    	}
	}
</script>

<style lang="scss">
	
</style>