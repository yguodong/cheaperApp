<template>
	<div class="boy-list"> 
		<app-beautiful :AppHeaderList='AppHeaderList'></app-beautiful>
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
						<i class="fa fa-shopping-cart"></i>
					</p>
				</div>
			</dd>
		</dl>
		<div class="list-fixed" v-if="true">
			<div class="list-top" @click="goTop" v-if="isdisplay">
				<span class="fa fa-upload"></span>
			</div>
			<div class="list-car">
				<span class="fa fa-shopping-cart"></span>
			</div>
		</div>
	</div>
</template>
<script>
	import Vue from 'vue'
	import bus from '../modules/bus'
	import axios from 'axios'
	import AppBeautiful from './beautiful'
	export default{
		name:'boy-list',
		props:['AppHeaderList'],
		data:function(){
			return {
				list:[],
				isdisplay:false,
				isNum:1
			}
		},
		components:{
			AppBeautiful
		},
		methods:{
			getData(){
				//console.log(this.AppHeaderList)
				var that=this
				axios.get('http://localhost:4000/dl/api/channel/index?channel_id='+this.AppHeaderList+'&is_one_with_four=0&page='+this.isNum+'&appversion=5.7.5&app_from_page=tab_daling',{
					params:{_:Date.now()}
				}).then((res)=>{
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
				if(scrollY > 700){
					this.isdisplay=true
				}else{
					this.isdisplay=false
				}
			}
		},
		created(){
			this.getData()
//			console.log(this.list)
		},
		mounted(){  
			window.addEventListener("scroll",this.goTopShow)
      		bus.$on('change-list',function(){
      			this.list=[]
      			//console.log(this.AppHeaderList)
				this.getData()
			}.bind(this))
  		}
	}
</script>

<style lang="scss">
	
</style>