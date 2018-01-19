<template>
	<div class="app-search"> 
		<div class="guess-list">
			<dl v-for="gList in jap">
				<dt><img :src="gList.cover_image"/>
				<em>
					<img src="http://img3.daling.com/data/files/mobile/2016/03/17/14581833597481.png"/>
				</em>
				<em></em>
				</dt>
				<dd>
					<a href="#">
						<strong> {{gList.country}} |{{gList.title_desc}}</strong>
						<em>[{{gList.brand_name}}]{{gList.goods_name}}</em>
					</a>
					<div>
						<span>
						<strong>￥{{gList.price}}</strong>
						<a href=""></a>
						<em >
							<i class="fa fa-shopping-cart"></i>
						</em>
						</span>
						
					</div>
					<p>{{gList.add_cart_num}}人已加入购物车</p>
				</dd>
			</dl>
		</div>
	</div>
</template>
<script>
	import Vue from 'vue'
	import bus from '../modules/bus'
	import axios from 'axios'
	
	export default{
		name:"app-search",
		data:function(){
			return {
				jap:[]
			}
		},
		methods:{
			shuju(){
				let that=this;
				bus.$on('abc',content=>{
					console.log(content)
					// http://touch.daling.com/search.html?tags=%E5%85%AD%E6%9C%88%E6%97%A0%E6%95%8C&is_recommend=1&id=87&key=app_menu_more
					// axios.get("http://localhost:4000/dl/search.html?app_from_page=search&sort=default&size=20&page=1&tags='+content.tags+'is_recommend='+content.is_commend+'&id='+content.id+'&key'+content.key",{
					 axios.get("http://localhost:4000/dl/api/goods/search?app_from_page=search&sort=default&size=20&page=1&tags=%E5%85%AD%E6%9C%88%E6%97%A0%E6%95%8C&is_recommend=1&id=87&key=app_menu_more&_=1516326791781",{
                	params:{_t:Date.now()}
           		}).then((response)=>{
           		 console.log(response.data.data.list)
            	that.jap=response.data.data.list
           		console.log(that.jap)
                })

				
			})
		}
			},
			
		created(){
			this.shuju()//console.log(this.sec)
			
		}
	}
</script>

<style lang="scss">
	
</style>