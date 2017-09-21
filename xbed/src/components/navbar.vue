<template>
	<div class="wrap">
<!-- 导航栏  -->
		<nav>
			<div class="logo">
				<img src="../common/img/logo.png" alt="">
			</div>
			<div class="nav-right">
				<div class="nav-wrap">
					<router-link :to="{path:'/'}" :class="{active:activeIndex==1}" @click.native='activeIndex = 1'>首页</router-link>
					<router-link to='/coorperate' :class="{active:activeIndex==2}" @click.native='activeIndex = 2'>加盟合作</router-link>
					<router-link v-bind:to="{path:'/profile'}" :class="{active:activeIndex==3}" @click.native='activeIndex = 3'>公司简介</router-link>
				</div>
			</div>
		</nav>
		
		<!-- 轮播图 -->
		<mt-swipe :auto='2500'>
			<mt-swipe-item v-for="(item,index) in imgSrc"><img :src="item.src" alt=""></mt-swipe-item>
		</mt-swipe>
		
	</div>
</template>
<script>
export default{
	created () {
		// 
		if(this.$route.fullPath.includes('/xbed')){
			this.activeIndex = 1
		}
		if(this.$route.fullPath.includes('/coorperate')){
			this.activeIndex = 2
		}
		if(this.$route.fullPath.includes('/profile')){
			this.activeIndex = 3
		}
		
	},
	data () {
		return {
			activeIndex:0,
			imgSrc:[
				{src:'/static/img/banner0.png'},
				{src:'/static/img/banner1.jpg'},
				{src:'/static/img/banner2.jpg'},
				{src:'/static/img/banner3.jpg'},
			]
		}
	}

}

</script>
<style scoped>
.wrap{
	width:100%;height:1.2rem;
}
 nav{
	position:absolute;top:0;left:0;
	height:0.4rem;
	width:100%;
	z-index:5;
}
.logo{
	width:25%;
	float:left;
	padding-top:.1rem;
	box-sizing:border-box;
}
.nav-right{
	width:75%;height:.4rem;float:left;
}
.nav-wrap{
	padding:0 .15rem;
	box-sizing:border-box;
}
.nav-wrap a{
	display:inline-block;
	color:#fff;
	width:30%;
	line-height:.4rem;
	font-size:.1rem;
	text-align:center;
}
.nav-wrap>a.active{
	color:#0170c4;
} 
.mint-swipe-item>img{
	width:100%;height:100%;
}

	
</style>