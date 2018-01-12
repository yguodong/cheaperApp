<template>
<div class="app-yuehuiTop">
	<div @click='type = "todayFlashGoods"' class="film-type" :class="{active:type == 'todayFlashGoods'}">
        	今日约惠
        </div>
        <div @click='type = "todayFlashGoodsForenotice"' class="film-type" :class="{active:type == 'todayFlashGoodsForenotice'}">
        	约惠预告
        </div>
</div>
</template>

<script>
	import bus from "../modules/bus"
	export default{
		name:'app-yuehuiTop',
		data(){
        	return {
        		type:'todayFlashGoods'
        	}
       },
       watch:{
        	type(){
        		bus.$emit('change-type',this.type)
        	}
        }
	}
</script>

<style lang="scss">
	.app-yuehuiTop{		
		height: 46px;
	    margin: 0 auto;
	    display: flex;
	    font-size: 16px;color: #6a6a6a;
	    .film-type{
	    	width: 50%;
	    	text-align: center;line-height: 46px;
	    	
	    	&.active{
	    		    color: purple;
    				border-bottom: 3px solid purple;
	    	}
	    }
	    
	    
	}
</style>