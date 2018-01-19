<template>
	<div class="app-home">
		<div class="home-header">
			<div class="home-header-pic">
				<img v-for="(hImg,i) in headerImg" :src="hImg.cover" />
			</div>
			<div class="home-header-pic2">
				<img v-for="(hlImg,i) in headerListImg" :src="hlImg.cover" />
			</div>
		</div>

		<div class="home-content">
			<div class="title1" v-for="cLise in contentList">
				{{cLise.txt}}
				<div v-for="img1 in cLise.list" class="on-Img">
					<img v-for="img2 in img1.list" :src="img2.tpl_id==1?img2.cover:''" alt="" />
				</div>
				<p style="border-bottom: 1px solid red;">距离结束还有{{cLise.end_time}}秒</p>
			</div>

			<div v-for="clisee in contentListt" class="title2">

				<div class="title2-title">
					{{clisee.txt}}
				</div>
				<div class="title2-content" v-for="cl in clisee.list">

					<img width="100%" :src="cl.cover_image" />
					<p>{{cl.title_desc}}</p>
					<span>[{{cl.brand_name}}]{{cl.goods_name}}</span>
					<div class="title2-picCar">
						<em>￥{{cl.price}}</em>
						<b>{{cl.add_cart_num}}人加入购物车|<i class="fa fa-shopping-cart"></i></b>
					</div>

				</div>

			</div>
		</div>

		<div class="guess">
			<div class="guess-title">
				<p></p>&nbsp;&nbsp;&nbsp;&nbsp;猜你喜欢&nbsp;&nbsp;&nbsp;&nbsp;
				<p></p>
			</div>
			<div class="guess-list">
				<dl v-for="gList in guessList">
					<dt><img :src="gList.cover_image"/>
					<em>
						<img src="http://img.daling.com/data/files/mobile/2016/03/16/14581236684140.png"/>
					</em>
					<em></em>
					</dt>
					<dd>
						<a href="#">
							<strong> {{gList.brand_country}} |{{gList.title_desc}}</strong>
							<em>[{{gList.goods_show_desc}}]</em>
						</a>
						<div>
							<span>
							<strong>￥{{gList.price}}</strong>
							<a href=""></a>
							
							</span>

						</div>
						<p>{{gList.add_cart_num}}人已加入购物车</p>
					</dd>
				</dl>
			</div>
		</div>
	</div>

</template>

<script>
	import axios from 'axios'
	export default {
		name: 'app-home',
		data() {
			return {
				headerImg: [],
				headerListImg: [],
				contentList: [],
				contentListt: [],
				guessList: [],
				contentimg: []
			}
		},
		methods: {
			getHomeHeaderImg() {
				let that = this
				axios.get('http://localhost:4000/dl/api/index/index', {
						params: {
							_: Date.now()
						}
					}).then((response) => {
						that.headerImg = response.data.data.activity_list
						that.headerListImg = response.data.data.index_select_range
						var i1 = response.data.data.complex[0]
						var i2 = response.data.data.complex[1]
						var i3 = response.data.data.complex[2]
						var i4 = response.data.data.complex[3]
						that.contentList.push(i1, i2, i3, i4)
						response.data.data.complex.forEach((item) => {
							item.list.filter((str) => {
								if(str.tpl_id == '7' || !str.tpl_id) {
									return str.tpl_id;
								}

							})
						})

						var i5 = response.data.data.complex[4]
						var i6 = response.data.data.complex[5]
						that.contentListt.push(i5, i6)

						function getLocalTime(nS) {
							return new Date(parseInt(nS) * 1000).toLocaleString().replace(/:\d{1,2}$/, ' ');
						}

					}),

					axios.get('http://localhost:4000/dl/api/index/getGuess', {
						params: {
							_: Date.now()
						}
					}).then((response) => {
						var b = response.data.data.list
						that.guessList = response.data.data.list

					})
			}
			
		},
		created() {
			this.getHomeHeaderImg()
		},
		mounted(){
			window.addEventListener('scroll',function(){
				if(scrollY>700){
					console.log(2)
				}
			})
		}
	}
</script>

<style>

</style>