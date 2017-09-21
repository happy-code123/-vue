<template>
	<div class="wrap">
		<div class="slide">
			<div class="slide-left">
				<p>{{title}}</p>
				<p>{{content}}</p>
				<p>{{contentadd}}</p>
			</div>
			<div class="slide-right">
				<img :src="src" alt="">
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
	width:45%;
	margin-left:8.333%;;
	margin-top:.3rem;
	float:left;
}
.slide-left>p{
	font-size:.12rem;margin-bottom:.12rem;
}
.slide-left>p:first-Child::before{
	content:"";
	display:inline-block;width:0.03rem;height:0.1rem;
	background:#000;
	vertical-align:baseline;
	margin-right:.1rem;
} 
.slide-right{
	float:right;
	width:41.667%;height:100%;
}
.slide-right>img{
	height:100%;
}

	
</style>