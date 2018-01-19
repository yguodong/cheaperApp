<template>
	<div class="app-goods">
		<div class="shopTop">
			<span>我的购物车</span>
			<i @click="gShow" v-if="car.length">编辑</i>
		</div>
		<div class="shopCenter">
			<div class="kong" v-if="!car.length">
				<span></span>
				<p>购物车里没有东西哦,快去挑选吧~</p>
				<router-link to="/home" tag="i">逛逛首页</router-link>
			</div>
			<div class="shop" v-else>
				<p>
					<span>无敌价</span>
					<i>价格无敌，手慢无</i>
				</p>
				<ul v-for="(item,i) in car" :key="item.id" class="shopColor">
					<li>
						<strong :class="{hover:item.isTclass}" @click="Iclass(i)"></strong>
					</li>
					<li :style="{'background-image':'url('+item.img+')'}">
						<i>仅剩7件</i>
					</li>
					<li>
						<p>[{{item.name}}]{{item.des}}</p>
						<em>{{item.country}}</em>
						<div>
							<strong>¥{{item.price}}.00</strong>
							<span>
								<i @click="reduceGoods({id:item.id,name:item.name,des:item.des,price:item.price,country:item.country,AppHeaderList:item.AppHeaderList,isNum:item.isNum})">-</i>
								<strong>{{item.num}}</strong>
								<i @click="addGoods({id:item.id,name:item.name,des:item.des,price:item.price,country:item.country,AppHeaderList:item.AppHeaderList,isNum:item.isNum})">+</i>
							</span>
						</div>
					</li>
				</ul>
			</div>
			<div class="fix">
				<ul>
					<li @click="nClass">
						<strong :class="{hover:isClass}" @click="Fclass"></strong>全部
					</li>
					<li v-show="Nshow">
						<span>
							<strong>合计:
								<i>{{num}}件</i>
							</strong>
							<strong>总额:¥{{money}}.00</strong>
						</span>
						<em>去结算(
							<i>4</i> )
						</em>
					</li>
					<li v-if="!Nshow">
						<strong>移入收藏夹</strong>
						<em @click="removeGoods">删除</em>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script> 
	import { mapState,mapGetters,mapActions } from 'vuex'
	import * as g from '../../store/g_type.js'
	import * as a from '../../store/a_type.js'
	export default{
		name:'app-goods',
		data:function(){
			return {
				isClass:false,
				Nshow:true
			}
		},
		computed:{
			...mapState(['car','AppHeaderList','isNum','isTclass']),
			...mapGetters([g.MONEY,g.NUM])
		},
		methods:{
			...mapActions([a.INITCAR,a.ADDGOODS,a.REDUCEGOODS,a.ICLASS,a.FCLASS,a.REMOVEGOODS]),
			nClass(){
				this.isClass = !this.isClass
			},
			gShow(){
				this.Nshow = !this.Nshow
			}
		},
		created(){
			this.initCar()
		}
	}
</script>

<style>
</style>