<template>
	<div class="wrap">
		<div class="footer">
			<div class="link">
				<ul>
					<li>
						<router-link :to="{path:'/index'}">首页</router-link>
					</li>
					<li>
						<router-link to="/ticket">购票</router-link>
					</li>
					<li>
						<router-link to="/shop">商城</router-link>
					</li>
					<li>
						<router-link to="/news">发现</router-link>
					</li>
					<li>
						<router-link to="/mine">我的</router-link>
					</li>
				</ul>
			</div>
			<div class="footlink">
				<ul class="foot_ul"> 
					<li>
						<router-link to="/"><span>PC版</span></router-link>
					</li>
					
					<li>
						<router-link to="/"><span>客户端下载</span></router-link>
					</li>
				
					<li>
						<router-link to="/"><span>意见反馈</span></router-link>
					</li>
				
					<li>
						<router-link to="/"><span>帮助中心</span></router-link>
					</li>

				</ul>
			</div>
			<div class="copy">
				<p class="foot_logo"></p>
				<p>
					<span>Copyright</span>
					<span>2006-2007</span>
					<span>Mtime.com Inc. All rights reserved.</span>
				</p>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	created () {

		// 问题部分; 底部导航浪和头部不一致

		// console.log(this.$route)
		// if(this.$route.fullPath.includes("/")){
		// 	this.activeIndex = 1
		// }
		// if(this.$route.fullPath.includes("/ticket")){
		// 	this.activeIndex = 2
		// }
		// if(this.$route.fullPath.includes("/shop")){
		// 	this.activeIndex = 3
		// }
		// if(this.$route.fullPath.includes("/news")){
		// 	this.activeIndex = 4
		// }
		// if(this.$route.fullPath.includes("/mine")){
		// 	this.activeIndex = 5
		// }
	},
	




}
	





</script>
<style scoped>
.footer{
	background-color:#F6F6F6;
}
.link{
	width:100%;
	background-color:#fff;
	border-top: 1px solid #f6f6f6;
}
ul{
	display:flex;
	flex-flow:row nowrap;
}
ul>li{
	text-align:center;
	flex:1 1 auto;
}

ul>li>a{
	display:inline-block;
	padding:0.16rem 0;
	font-size:0.15rem;
	color: #0074c5
}
ul>li>a>span{
	color:#333;
	font-size:0.12rem;
}
.copy{
	padding-bottom:0.24rem;
}
.copy>p{
	text-align:center;
}

.foot_logo{
	padding:0.12rem 0;
	background:url("/static/img/fot_logo.png") no-repeat center;
	background-size:contain;
}
.foot_ul>li{
	position:relative;
}
.foot_ul>li:nth-child(n+2)::before{
	content:"";
	display:inline-block;
	width:1px;
	height:0.11rem;
	background: #d8d8d8;
	position:absolute;
	left:0;
	top:42%;
}
.copy>p>span{
	font-size:0.11rem;
	color: #cdcdcd;
}

</style>