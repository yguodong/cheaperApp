<template>
	<div class="app-yuehui">
		<Yuehui></Yuehui>
		<YuehuiBox v-for="yList in yhGoodList" :key="yList.goods_id" :info="yList"></YuehuiBox>
		<router-view></router-view>
	</div>
</template>

<script>
	import axios from 'axios'
	import bus from '../modules/bus'
	import Yuehui from './yuehuiTop'
	import YuehuiBox from './yuehuiBox'
	export default {
		name: 'app-yuehui',
		data() {
			return {
				type:"todayFlashGoods",
				yhGoodList: []
			}
		},
		components: {
			Yuehui,
			YuehuiBox
		},
		methods: {
			getYhGoodList() {
				let that = this
				axios.get('http://localhost:4000/dl/api/promotion/'+that.type+'?page=1', {
					params: {
						_: Date.now()
					}
				}).then((response) => {
					that.yhGoodList = response.data.data.flash_list[0].list
				})
			},
			changeType() {
				this.yhGoodList = []
				this.getYhGoodList()
			}
		},
		mounted() {
			let that = this
			bus.$on("change-type", (type) => {
				that.type = type
				that.changeType()
			})
			that.getYhGoodList()
		}

	}
</script>

<style>

</style>