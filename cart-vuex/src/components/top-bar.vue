<template>
	<div class="top-bar">
		<div class="top-bar-leftTitle" ><router-link :to="{path:'/'}" tag="a">运动商店</router-link></div>
		<div class="top-bar-rightTitle">
			<div class="shop-info">
				你的购物车<span> {{count}} </span> $<span>{{price.toFixed(2)}}</span>美元 
			</div>
			<div class="shop-pay">
				<router-link to="/pay" tag='a'>check out</router-link>
			</div>
		</div>
	</div>
</template>
<script>
export default{
	data(){
		return{

		}  
	},
	computed:{
		count(){
			return this.$store.getters.count
		},
		price(){
			return this.$store.getters.price
		}
	}


}


</script>
<style scoped>
	.top-bar{
		width:100%;height:30px;background:#333;padding:10px 0;color:#fff;line-height:50px;
	}
	.top-bar-leftTitle{
		float:left;height:100%;line-height:35px;
	}
	.top-bar-leftTitle>a{text-decoration: none;color:#fff;margin-left:10px;}
	.top-bar-rightTitle{
		float:right;height:100%;line-height:35px;
	}
	.shop-info,.shop-pay{
		display:inline-block;margin-right:15px;
	}
	.shop-pay{
		background:#fff;color:#333;cursor:pointer;
		border-radius:5px;
	}
    .shop-pay>a{
		text-decoration: none;color:#333;padding:5px 5px;

    }
</style>