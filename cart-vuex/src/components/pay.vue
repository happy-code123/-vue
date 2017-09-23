<template>
	<div class="pay">
		<h2>pay 页面</h2>
		<hr>
		<table>
			<tr class='product'>
				<th>数量</th>
				<th>商品名称</th>
				<th>单价</th>
				<th>小计</th>
				<th></th>
			</tr>

			<tr class='product' v-for="(item,index) in cart">	
				<td>
					<div class="count" >
						<span v-on:click='decrease(item)'> - </span>
						<span>  {{item.num}} </span>
						<span v-on:click='increase(item)'> + </span>
					</div>
				</td>
				<td calss='pro-name'>{{item.title}}</td>	
				<td>$ {{item.price}}</td>
				<td>{{(item.price*item.num).toFixed(2)}}</td>
				<td><div class="delete" v-on:click='del(item)'>删除</div></td>
			</tr>

		</table>					

	</div>	
</template>

<script>

export default {
	methods:{
		increase(item){
			this.$store.dispatch('increase',item)
		},
		decrease(item){
			if(item.num > 1){
				this.$store.dispatch('decrease',item)
			}
		},
		del(item){
			this.$store.dispatch('del',item)
		}

	},
	computed:{
		cart(){
			return this.$store.state.cart
		},
		
		count(){
			return this.$store.getters.count
		}

		
	}



}

</script>

<style scoped>
.pay{
	width:100%;
}
.product{
	width:100%;
}
.count{
	/*margin:10px 0;*/
	height:35px;border:1px solid gray;border-radius:5px;
}
table tr th:nth-child(n+2){width:200px;}
table tr td{text-align:center;padding:10px 0;}
.count>span{
	display:inline-block;float:left;
	width:35px; height:35px;
	text-align: center;line-height: 35px;
	font-size:20px;
	cursor:pointer;
}
.count>span:nth-child(2){
	width:80px;height:35px;
	border-left: 1px solid gray;border-right:1px solid gray;
	cursor:text;
}
.pro-name{
	width:100px;
}
.delete{
	width:50px;height:30px;margin:auto;
	text-align:center;line-height: 30px;
	background-color:#F0AC4D; border-radius:5px;
	cursor:pointer;
}

</style>