<template>
	<div class="footer">
		<div class="footer-item-wrap">
			<div class="footer-item">
				<img src="/static/img/xbed_code.png" alt="">
				<p>xbed</p>
			</div>
			<div class="footer-item">
				<img src="/static/img/li_code.png" alt="">
				<p>丽家会</p>
			</div>
			<div class="footer-item">
				<img src="/static/img/new_blue_hoster_06.png" alt="">
				<p>蓝主人</p>
			</div>
		</div>
		<div class="company-info">
			<p>广州搜床网络科技有限公司 | <a href="###">粤ICP备1505****号</a></p>
			<p>广州市荔湾区信义路24号七喜创意园Xbed中心 | 联系电话 400609****</p>
		</div>
	</div>
</template>
<script>
export default{
}
</script>
<style scoped>
.footer{
	width:100%;
	height:1.76rem;
	background:url('../../static/img/home_footer_bg.jpg') no-repeat;
	background-size:cover;
	padding-top:.2rem;
}
.footer-item{
	width:33.3%;height:.84rem;
	float:left;
	text-align:center;
}
.footer-item-wrap{
	overflow: hidden;
}
.footer-item img{
	width:.48rem;height:.48rem;
}
.footer-item p{
	font-size:.12rem;
	color:#fff;
	opacity:.6;
	margin:.1rem 0;
}
.company-info{
	margin-top:.25rem;
	font-size:.12rem;
	width:100%;
}
.company-info p,.company-info p>a{
	text-align:center;
	opacity:0.6;color:#fff;
}
.company-info p{
	margin-bottom:.1rem;
}
	
</style>