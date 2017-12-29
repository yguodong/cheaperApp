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
	#app{
	    width:100%;
	    height:100%;
	    overflow-y:scroll;
	}
	.hide{
		display:none;
	}
	.boy-list{
		width:100%;
		background:#fff;
		overflow-y:auto;
		dl{
			width:100%;
			padding:0.09rem;
			padding-top:0;
			font-family: arial, 'Hiragino Sans GB', '\5b8b\4f53', sans-serif;
			dt{
				height:2.57rem;
				position:relative;
				em{
					position:absolute;
					right:0.05rem;
					top:0.05rem;
					display:block; 
					width:0.25rem;
					height:0.29rem;  
					&:nth-child(1){
						background: url('http://img.daling.com/data/files/mobile/2016/03/17/14581833597481.png') no-repeat 0 -0.03rem;
						background-size:100% 100%;
					}
					&:nth-child(2){
						background: url('http://img.daling.com/data/files/mobile/2016/03/16/14581236684140.png') no-repeat 0 -0.03rem;
						background-size:100% 100%;
						right:0.35rem;
					}
				}
			}
			dd{
				.where{
					p{
						padding-top:0.06rem;
						span{
							line-height:0.13rem;
						}
						i{
							display: inline-block;
							line-height: 0.17rem;
							padding:0 0.02rem;
							font-size:0.13rem;
							background:#ff5d5a;
							color:#fff;
							border-radius:0.02rem;
						}
					}
					em{
						display:inline-block;
						font-size:0.11rem;
						line-height:0.17rem;
						width:100%;
						overflow:hidden;
						white-space:nowrap;
						text-overflow:ellipsis;
						margin-top:0.03rem;
						color:#9f9f9f;
					}
				}
				.price{
					overflow:hidden;
					span{
						float:left;
						line-height:0.34rem;
						font-size:0.16rem;
						color:#ff4a30;
					}
					p{
						float:right;
						width:1.08rem;
						height:0.34rem;
						display:flex;
						align-items:center;
						border:0.01rem solid #b5b5b5;
						border-radius:0.04rem;
						box-shadow:0 0 0.05rem #b5b5b5;
						em{
							display:inline-block;
							font-size:0.1rem;
							line-height:0.12rem;
							text-align:center;
							border-right:0.01rem solid #b5b5b5;
							margin-right:0.07rem;
							padding:0 0.05rem;
						}
					}
				}
			}
		}
		.list-fixed{
			position:fixed;
			bottom:0.54rem;
			z-index:10;
			right:0.09rem;
			width:0.39rem;
			.list-top{
				width:0.39rem;
				height:0.39rem;
				text-align:center;
				span{
					display:inline-block;
					width:100%;
					height:100%;
					background:#f5f5f5;
					border-radius: 50%;
					line-height:0.39rem;
					border:0.01rem solid #ccc;
				}
			}
			.list-car{
				width:0.39rem;
				height:0.39rem;
				text-align:center;
				margin-top:0.09rem;
				span{
					display:inline-block;
					width:100%;
					height:100%;
					background:#f5f5f5;
					border-radius: 50%;
					line-height:0.39rem;
					border:0.01rem solid #ccc;
				}
			}
		}
	}
</style>