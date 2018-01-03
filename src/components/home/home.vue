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
			<ul>
				<li v-for="cList in contentList">
					
				</li>
			</ul>
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
				ltImg: []
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
					that.contentList = response.data.data.complex
				})
			}
		},
		created() {
			this.getHomeHeaderImg()
		}
	}
</script>

<style>

</style>