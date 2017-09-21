<template>
	<div class="home">
		<div class="titleBar">
			<router-link to='/xbed' ><i><span></span>Xbed<span></span></i></router-link>
			<router-link to='/ljh' ><i><span></span>丽家会<span></span></i></router-link>
			<router-link to='/lzr' ><i><span></span>蓝主人<span></span></i></router-link>
		</div>
		<router-view></router-view>
	</div>
</template>
<script>
export default{
}

</script>
<style scoped>
.home{
	widht:100%;
}
.titleBar{
	width:74%;height: .4rem;
	margin:0 auto;
}
.titleBar>a{
	display:inline-block;
	width:33.33%;height:.4rem;height:100%;
	float: left;
	font-size:.12rem;color:#333;
	text-align:center;
	line-height: .4rem;

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
	display:inline-block;
	width:.03rem;height:.03rem;
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