<template>
<div class="shop-wrap">
	<div class="shop">
		<h2>shop页面</h2>	
		<div class="shopList">
			<div class="shopList-item" v-bind:class="{active:activeListIndex == 'all'}" v-on:click='changeAll'>全部商品</div>
			<div class="shopList-item" v-for="(item,index) in classifyCount" v-bind:class="{active:activeListIndex==index}" @click="changeClassify(item)">{{item.name}}</div>
		</div>
		<div class="shopProduct" >
			<div class="shopProduct-item" v-for='(item,index) in activePagePro'>
				<h3>{{item.title}}</h3>
				<p>{{item.describe}}</p>
				<span>$ {{item.price}}</span>
				<span class='btn' @click='addCart(item)'>购买</span>
				<span>类型 : {{item.classify}}</span>
			</div>
		</div>
		<div class="botton-bar">
			<div class="btn" v-for='(item,index) in pageCount' v-on:click='changeBtn(index)' :class='{active:activeBtn==index}'>{{index+1}}</div>
		</div>
	</div>
</div>
	
</template>	
<script>

export default{
	created:function(){
		// http://192.168.23.1:8081/db
		this.$http.get('http://localhost:8081/db')
		.then(data=>{
			this.products=data.data.products;
			this.staticPro =data.data.products;
			this.classifyCount=data.data.classifyCount;
		})

	},
	data(){
		return {
			//用于保存全部数据，这样就不会每用一次去请求一次
			staticPro:[],
			
			products:[],
			// 商品分类数组
			classifyCount:[],
			//活动的分页按钮下标
			activeBtn:0,
			// 活动的列表下标
			activeListIndex:'all'
		}
	},

	components:{	
	},

	methods:{
		// 全部分类按钮
		changeAll(){
			this.activeBtn=0;
			this.activeListIndex='all';
			/*this.$http.get('http://localhost:8081/db')
			.then(data=>{
				var temporaryPro=data.data.products;
				this.products = temporaryPro;
			})*/
			this.products = this.staticPro;
		},
		// 列表 按钮
		changeClassify(item){
			this.activeBtn=0;
			this.activeListIndex = this.classifyCount.indexOf(item);
			
			/*this.$http.get('http://localhost:8081/db')
			.then(data=>{
				var temporaryPro=data.data.products;
				this.products = temporaryPro.filter((item)=>{
					return item.classify  === this.activeIndex
				})
			})*/

			this.products = this.staticPro.filter(item =>{
				return item.classify  == this.activeListIndex
			})
		},
		//  分页按钮
		changeBtn(index){
			 this.activeBtn=index
		},




		// 添加购物车
		addCart(item){
			this.$store.dispatch("addCart",item)
		}






	},

	computed:{
		// 动态计算的商品已经分好页的数量
		activePagePro(){
			let start = this.activeBtn*3;
			let end =  (this.activeBtn+1)*3;
			return this.products.slice(start,end)
		},
		// 动态计算的分页列表
		pageCount(){
			return Math.ceil(this.products.length/3)
		}
	}

}

</script>
<style scoped>
.shop-wrap{
	width:100%;height:100%;position:relative;
}
.botton-bar{
	position:absolute;bottom:150px;right:30px;
}
.botton-bar .btn{
	display:inline-block;
	padding:5px 12px;background:yellow;
	margin-right:3px;cursor:pointer;
}
.btn.active{
	background-color: red;
}
.shop{
	width:100%;
}
.shopList{
	width:30%;height:100%;float:left;
}
.shopProduct{
	width:65%;height:100%;float:right;
}
.shopList-item{
	width:100%;padding:15px 0;text-align:center;
	background-color:rgba(0,0,0,.1);
	margin-bottom:10px;cursor:pointer;
}
.shopList-item.active{background-color:green;}
.shopProduct-item{
	position:relative;margin-bottom:25px;
}

.shopProduct-item h3{margin:8px 0;}
.shopProduct-item span{
	display:block;;
}
.shopProduct-item .btn{
	padding:10px 25px;background-color:green;font-size:20px;
	position: absolute;top:30px;right:10px;
	cursor:pointer;border-radius:5px;
}

</style>