<template>
	<div class="app-header">
		<div class="header-top" v-if="isdownShow">
			<div class="top-ico">
				<img src="http://img.cdn.daling.com/assets/web-touch/dl-icon1.b02ba9.png" />
			</div>
			<div class="top-text">
				<em>前往新人专区 专享新人福利</em>
				<i>连续荣获App Store最佳购物类应用</i>
			</div>
			<div class="top-right">
				<span>立即下载</span>
				<i @click="downShow" class="yo-ico">&#xf077;</i>
			</div>
		</div>
		<div class="search" ref="po">
			<div class="search_input">
				<i class="yo-ico">&#xf067;</i>
				<input type="search" placeholder="搜索商品" data-search-input="">
			</div>
			<div class="search-menu">
				<ul>
					<li v-for="hdList in headerList">{{hdList.title}}</li>
					<div class="search-menu-list">
						<i @click="popupVisible=!popupVisible" class="yo-ico">&#xf031;</i>
					</div>
				</ul>
			</div>
		</div>
		<mt-popup width=100% v-model="popupVisible" position="top">
			<div class="mt-list">
				<ul>
					<li v-for="hdList in headerList">{{hdList.title}}</li>
				</ul>
			</div>

		</mt-popup>
	</div>

</template>

<script>
	import axios from 'axios'
	export default {
		name: 'app-header',
		data() {
			return {
				headerList: [],
				popupVisible: false,
				isdownShow: true
			}
		},
		methods: {
			getHeaderList() {
				let that = this
				axios.get('http://localhost:4000/dl/api/menu/homeChannel', {
					params: {
						_: Date.now()
					}
				}).then((response) => {
					that.headerList = response.data.data
				})
			},
			downShow(isdownShow) {
				this.isdownShow = !this.isdownShow
				this.$refs.po.style.marginTop = 0
			},
		},
		created() {
			this.getHeaderList()
		},
		mounted() {

			//			window.addEventListener('scroll', this.Hposition)
		}

	}
</script>

<style lang="scss">

</style>