<template>
	<div class="coorpertate">
		<div class="titleBar">
			<router-link to='/coorperate/ownerjoin' tag='a'><i><span></span>业主加盟<span></span></i></router-link>
			<router-link to='/coorperate/clearserver'><i><span></span>清洁服务<span></span></i></router-link>
			<router-link to='/coorperate/designjoin'><i><span></span>设计师、摄影师加盟<span></span></i></router-link>
			<router-link to='/coorperate/roundjoin'><i><span></span>周边商家加盟<span></span></i></router-link>
		</div>
		<router-view></router-view>
	</div>
</template>	
<script>
export default{
	data(){
		return {
			activeIndex:1
		}
	}
}
</script>
<style scoped>
.coorpertate{
	widht:100%;
}
.titleBar{
	width:90%;margin:0 auto;overflow:auto;
}
.titleBar>a{
	display:inline-block;
	width:50%;height:.4rem;height:100%;
	float: left;
	font-size:.12rem;color:#333;
	text-align:center;
	line-height: .3rem;

}
.titleBar>a.router-link-exact-active{
	color:#0170c4;
}
.titleBar>a>i{
	display:inline-block;
	font-style: normal;
	margin:0 auto;
	position:relative !important;
}

.titleBar>a>i>span{
	display:inline-block;width:.03rem;height:.03rem;
}
.titleBar>a>i>span:first-child{
	position:absolute !important; 
	top: 50%;
    margin-top: -2px;
    margin-left: -.09rem;
}
.titleBar>a>i>span:last-child{
	position:absolute !important;
	top: 50%;
    margin-top: -2px;
    margin-left:.07rem;
}
.titleBar>a.router-link-exact-active span{
	background-color:#0170c4;
} 
</style>