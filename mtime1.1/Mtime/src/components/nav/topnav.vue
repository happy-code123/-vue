<template>
	<div class="wrap">
		<div class="menu">
			<ul>
				<li><img class="logo_mtime" src="/static/img/logo_mtime.png"></li>
				<li>
					<router-link :to="{path:'/index'}" tag="a" :class="{'on':$route.fullPath.includes('/index')}" >首页</router-link>
				</li>
				<li>
					<router-link to="/ticket"  tag="a" :class="{'on':$route.fullPath.includes('/ticket')}">购票</router-link>
				</li>
				<li>
					<router-link to="/shop"  tag="a" :class="{'on':$route.fullPath.includes('/shop')}" >商城</router-link>
				</li>
				<li>
					<router-link to="/news" tag="a" :class="{'on':$route.fullPath.includes('/news')}" >发现</router-link>
				</li>
				<li>
					<router-link to="/mine" tag="a" ><img src="/static/img/ico_my.png" class="ico_my" alt=""></router-link>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
export default {
	created () {
		
		// 避免刷新页面后，当前页面的丢失
		/*if(this.$route.fullPath.includes("/")){
			console.log(1111)
			this.activeIndex = 1
		}
		if(this.$route.fullPath.includes("/ticket")){
			this.activeIndex = 2
		}
		if(this.$route.fullPath.includes("/shop")){
			this.activeIndex = 3
		}
		if(this.$route.fullPath.includes("/news")){
			this.activeIndex = 4
		}
		if(this.$route.fullPath.includes("/mine")){
			this.activeIndex = 5
		}*/

	},
	data(){
		return {
			// activeIndex:0
			
		}
	}
}

	
</script>
<style scoped>
.wrap{
	width:100%;
	height:0.53rem;
}
.menu{
	box-sizing:border-box;
	height:100%;
	background-color:#1C2635;
}
.menu>ul{
	width:100%;heihgt:100%;
	display:flex;
	flex:row nowrap;
}
ul>li{
	height:100%;
	flex:1 1 auto;
	line-height:0.53rem;
	text-align:center;
	box-sizing: border-box;
}
ul>li:firstChild{
	flex-grow:1.5;
}
.logo_mtime{
	width:0.67rem;
	height:0.21rem;
	text-align:center;
	vertical-align: middle
}
.ico_my{
	width:0.16.7rem;
	height:0.21rem;
	vertical-align: middle;
}
ul li a{
	display:inline-block;
	height:0.53rem;
	color:#BBBBBB;
	font-size:0.14rem;
	box-sizing:border-box;
	/*background:#fff;*/
}
ul li a.on{
	color:#fff;
    font-size:0.15rem;
	border-bottom:0.03rem solid #F6F6F6;
	font-weight:bolder;

}
</style>