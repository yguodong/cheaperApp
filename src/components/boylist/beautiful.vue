<template>
	<div class="app-beautiful">
		<ul :class="{hide:isKong}">
			<li v-for="(_title,index) in titleList"  :class='isHover == index ? "hover" : ""' @click = "getList(index)">{{_title.title}}</li>
		</ul>
		<ol :class="{hide:isKong}">
			<li v-for="cList in childList">
				<em :style="{'background-image':'url('+cList.category_img_url+')'}"></em>
				<i></i>
			</li>
		</ol>
	</div>
</template>

<script>
	import bus from '../modules/bus'
	import axios from 'axios'
	export default {
		name:'app-beautiful',
		props:['AppHeaderList'],
		data:function(){
			return {
				titleList:[],
				isHover:0,
				childList:[],
				isKong:false
			}
		},
		methods:{
			getList(index){
				this.isHover = index
				let that=this
				axios.get('http://localhost:4000/dl/api/channel/index?channel_id='+this.AppHeaderList+'&is_one_with_four=1&page=1&appversion=5.7.5&app_from_page=tab_daling',{
					params:{_:Date.now()}
				}).then((res)=>{
					//console.log(res.data.data)
					if(!res.data.data.module_list.length){
						that.isKong=true
					}else{
						that.isKong=false
						that.titleList=res.data.data.module_list[0].list
						that.childList=that.titleList[index].list
					}		
				})
			}
		},
		mounted(){
			bus.$on('m-list',function(){
				this.getList(0)
			}.bind(this))
		}
	}
</script>

<style>
</style>