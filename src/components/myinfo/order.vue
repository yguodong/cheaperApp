<template>
<div class="app-yuehuiTop">
		<div @click='type = "order"' class="film-type" :class="{active:type == 'order'}">
        	全部订单
        </div>
        <div @click='type = "money"' class="film-type" :class="{active:type == 'money'}">
        	待付款
        </div>
        <div @click='type = "by"' class="film-type" :class="{active:type == 'by'}">
        	待收货 
        </div>
       <div class="order-content">
        	
        </div>
</div>
 
</template>

<script>
	export default{
		name:'app-yuehuiTop',
		data(){
			return{
				type:"order"
			}
		},
		mounted(){


			this.type=this.$route.params.type
		}
	}
</script>

<style lang="scss">
	.app-yuehuiTop{		
		height: 46px;
	    margin: 0 auto;
	    display: flex;
	    font-size: 16px;color: #6a6a6a;
	    background: #ddd;
	    .film-type{
	    	width:33.3333%;
	    	text-align: center;line-height: 46px;
	    	
	    	&.active{
	    		    color: purple;
	    	}
	    } 
	}
	
</style>