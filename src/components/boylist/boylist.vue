<template>
	<div class="boy-list"> 
		<app-beautiful :AppHeaderList='AppHeaderList'></app-beautiful>
		<h5 v-if="istitle">
			<span v-model="title">{{title}}</span>
		</h5>
		<div>
			<dl v-for="(goods,i) in list">

				<router-link to="/detail" tag="dt" :style="{'background':'url('+goods.info.cover_image+') no-repeat center center','background-size':'cover'}" @click.native="goodID(i)">
					<em></em>
					<em></em>
				</router-link>
				<dd>
					<router-link to="/detail" tag="div" class="where" @click.native="goodID(i)">
						<p>
							<span>{{goods.info.country}}  | {{goods.info.title_desc}}</span>
							<i v-for="txt in goods.info.icon_display">{{txt.txt}}</i>
						</p>
						<em>[{{goods.info.brand_name}}]{{goods.info.description}}</em>
					</router-link>
					<div class="price">
						<span>￥{{goods.info.price}}</span>
						<p @click="addGoods({id:goods.info.goods_id,name:goods.info.brand_name,des:goods.info.goods_name,price:goods.info.price,country:goods.info.country,AppHeaderList,isNum,img:goods.info.cover_image})">
							<em>{{goods.info.add_cart_num}}<br/>加入购物车</em>
							<i class="fa fa-shopping-cart"></i>
						</p>
					</div>
				</dd>
			</dl>
		</div>	
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
	import { Indicator } from 'mint-ui';
	import { Toast } from 'mint-ui';
	import Vue from 'vue'
	import bus from '../modules/bus'
	import axios from 'axios'
	import AppBeautiful from './beautiful'
	import { mapActions } from 'vuex'
	export default{
		name:'boy-list',
		props:['AppHeaderList'],
		data:function(){
			return {
				list:[],
				isdisplay:false,
				isNum:1,
				title:'',
				istitle:false,
				detailID:""
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
					//console.log(res.data.data)
					that.title = res.data.data.goods_list.txt
					if(that.title == ''){
						that.istitle=false
					}else{
						that.istitle=true
					}
					var result= res.data.data.goods_list.list
					var a = result.filter((item)=>{
						if(item.info){
							return item.info;
						}else{
							return false;
						}
					})
					a.forEach((item)=>{
						that.list.push(item)
					})
					//console.log(that.list)
				})
			},
			goTop(){
				document.documentElement.scrollTop = document.body.scrollTop= 0
				//console.log(document.body.clientHeight)
			},
			goTopShow(){
				if(scrollY > 700){
					this.isdisplay=true
				}else{
					this.isdisplay=false
				}
				if(scrollY >= (document.body.clientHeight || document.documentElement.clientHeight) - 1000){
					this.isNum++;
					this.getData()
				}
			},
			goodID(id){
				//console.log(this.list[id].info.goods_id)
				this.detailID = this.list[id].info.goods_id
				this.$emit("change-id",this.detailID)
			},
			...mapActions(['addGoods'])
		},
		created(){
			this.getData()
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