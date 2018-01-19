<template>
	<div class="app-my">
		<div class="header">
			<img src="http://img.cdn.daling.com/data/files/mobile/2015/02/13/14238003676745.png" />
			<span>达令网用户</span>
		</div>
		<div class="content-top">
			<div class="content-top1">
				<i class="fa fa-file-text-o"></i><span>我的订单</span>
			</div>

			<div class="content-top2">
				<router-link :to='{name:"order",params:{type:"order"}}' tag="span" >全部订单</router-link><i class="fa fa-angle-right"></i>
			</div>
		</div>
		<div class="content-top3">
			<ul>
				<li>
					<i class="fa fa-hourglass-o"></i>
					<router-link :to='{name:"order",params:{type:"money"}}' tag="span" >待付款</router-link>
				</li>
				<li>
					<i class="fa fa-truck"></i>
					<router-link :to='{name:"order",params:{type:"by"}}' tag="span">待收货</router-link>
				</li>
				<li>
					<i class="fa fa-pencil"></i>
					<span>待评价</span>
				</li>
				<li>
					<i class="fa fa-database"></i>
					<span>退货</span>
				</li>
			</ul>
		</div>
		<div class="myinfo-main">
			<div class="myinfo-main1">
				我的钱包
			</div>
			<div class="myinfo-main2">
				<ul>
					<li>
						<em>6</em>
						<i>优惠券</i>
					</li>
					<li>
						<em>0.00</em>
						<i>余额</i>
					</li>
					<li>
						<em>5</em>
						<i>达令币</i>
					</li>
				</ul>
			</div>
		</div>
		<div class="myinfo-bottom">
			<ul>
				<li>
					<div class="myinfo-bottomL">
						<i class="fa fa-money"></i>
						<span>我的优惠券</span>
					</div>
					<i class="fa fa-angle-right"></i>
				</li>
				<li>
					<div class="myinfo-bottomL">
						<i class="fa fa-heart-o"></i>
						<span>我的收藏</span>
					</div>
					<i class="fa fa-angle-right"></i>
				</li>
				<li>
					<div class="myinfo-bottomL">
						<i class="fa fa-map-marker"></i>
						<span>我的地址</span>
					</div>
					<i class="fa fa-angle-right"></i>
				</li>
				<li>
					<div class="myinfo-bottomL">
						<i class="fa fa-tag"></i>
						<span>浏览记录</span>
					</div>
					<i class="fa fa-angle-right"></i>
				</li>
			</ul>
		</div>
		<div class="esc-myinfo" @click="removStorage()">
			退出当前登录账户{{type}}
		</div>
	</div>
	
</template>

<script>
	import { mapState, mapActions } from 'vuex'

	import axios from "axios"
	export default {
		name: 'app-my',
		data() {
			return {
				user: '',
				arr: []

			}
		},
		computed: {
			...mapState(['info','type']),
		},
		methods: {
			removStorage() {
				localStorage.removeItem('axfInfo')
				this.$router.push({
					path: '/register'
				})
			},
			...mapActions(['initInfo'])

		},
		mounted() {
			this.initInfo()
			setTimeout(() => {
				this.user = this.info || ''
				if(!this.info.length) {
					this.$router.push({
						path: '/register'
					})
				}
			}, 400)
		}
	}
</script>
<style lang="scss">
	.app-my {
		position: relative;
		.header {
			width: 100%;
			height: 1.2rem;
			background-image: url("https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3403917565,1418020261&fm=27&gp=0.jpg");
			img {
				position: absolute;
				width: 50px;
				height: 50px;
				border-radius: 50%;
				left: 44%;
				top: 0.2rem
			}
			span {
				left: 42.5%;
				top: 0.8rem;
				position: absolute;
				color: #fff
			}
		}
		.content-top {
			margin-top: 0.2rem;
			background: #fff;
			display: flex;
			justify-content: space-between;
			padding-left: 0.2rem;
			padding-right: 0.2rem;
			line-height: 0.4rem;
			border-bottom: 1px solid #ccc;
			.content-top1 {
				font-size: 16px;
				width: 1rem;
				span {
					margin-left: 0.2rem;
				}
			}
			.content-top2 {
				font-size: 14px;
				color: #858385;
				width: 1rem;
				i {
					margin-left: 0.2rem;
				}
			}
		}
		.content-top3 {
			background: #fff;
			color: #858385;
			ul {
				display: flex;
				li {
					display: flex;
					width: 25%;
					height: 0.8rem;
					padding: 0.15rem 0;
					flex-direction: column;
					text-align: center;
					justify-content: space-between;
				}
			}
		}
		.myinfo-main {
			margin-top: 0.2rem;
			background: #fff;
			.myinfo-main1 {
				padding: 0.05rem 0.1rem;
				border-bottom: 1px solid #ccc;
			}
			.myinfo-main2 {
				ul {
					display: flex;
					justify-content: space-around;
					li {
						display: flex;
						width: 33.3333%;
						flex-direction: column;
						text-align: center;
						border-right: 1px solid #ccc;
					}
				}
			}
		}
		.myinfo-bottom {
			
			margin-top: 0.2rem;
			background: #fff;
			ul {
				li {
					font-size: 16px;
					width: 100%;
					padding: 0.05rem 0.3rem;
					height: 0.4rem;
					line-height: 0.4rem;
					display: flex;
					justify-content: space-between;
					.myinfo-bottomL {
						span {
							margin-left: 0.1rem;
						}
					}
					i{
						line-height: 0.4rem;
					}
				}
			}
		}
		.esc-myinfo{
			margin-top: 0.2rem;
			margin-bottom: 0.6rem;
			width:3rem;
			text-align: center;
			height:0.5rem;
			line-height: 0.5rem;
			background: red;
			color: #fff;
			margin-left: 0.4rem;
		}
	}
</style>