<template>
	<div class="wrap">
		<div class="slide">
			<div class="slide-left">
				<img :src="src" alt="">
			</div>
			<div class="slide-right">
				<p>{{title}}</p>
				<p>{{content}}</p>
				<p>{{contentadd}}</p>
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
	props:["src","title","content","contentadd"]
}
</script>
<style scoped>
.wrap,.slide{
	width:100%;height:100%;
}
.slide-left{
	width:41.667%;margin-left:8.333%;height:100%;
	float:left;
}
.slide-right>p{
	font-size:.12rem;margin-bottom:.12rem;
}
.slide-right>p:first-Child::before{
	content:"";
	display:inline-block;
	width:0.03rem;height:0.1rem;
	background:#000;
	vertical-align:baseline;
	margin-right:.1rem;
} 
.slide-right{
	float:right;
	width:45%;
	margin-top:.3rem;
}
.slide-left>img{
	height:100%;
}

	
</style>