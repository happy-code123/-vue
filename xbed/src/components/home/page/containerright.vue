<template>
	<div class="container-wrap">
		<div class="container">
			<div class="container-img">
				<!-- <img src="static/img/phone.png" alt=""> -->
				<img :src="imgsrc" alt="">
			</div>
			<div class="container-right">
				<p class='f14'>{{title}}</p>
				<p class='f14'>{{description}}</p>
				<p class='f12'>{{info}}</p>
				<!-- <img src="static/img/xbed_2d_barcode.png" alt=""> -->
				<img :src="wxsrc" alt="">
				<span class='f12 f12-bg'>{{qrcode}}</span>
			</div>
		</div>
	</div>
</template>
<script>
export default{
	data(){
		return {
		}
	},
	props:["title","description","info","wxsrc","imgsrc","qrcode"]
}
</script>
<style scoped>
.container-wrap{
	width:100%;height:2.4rem;
	background-color:#F9F9F7;
	box-sizing:border-box; 
}
.container{
	width:80%;height:2.4rem;
	padding-top:.25rem;
	margin:0 auto;
	overflow:auto;
}
.container-right,.container-img{
	width:50%;
	float:left;
}
.container-img>img{
	width:100%;
	height:100%;
}
.container-right{
	padding-left:0.1rem;
	box-sizing:border-box;
}
.container-right>p:first-child{font-weight:600;}
.container-right>img{
	display:block;
	width:.6rem;height:.6rem;
	margin-bottom:0.04rem;
}
.f12{font-size:.12rem;margin-bottom:0.04rem;}
.f12-bg{
    border-radius: 5px;
    background-color:#FC7623;
    color: white;
    padding:0.01rem 0.03rem;
}
.f14{
	font-size:.14rem;
	margin:.06rem 0;
}
</style>
