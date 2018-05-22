<template>
	<div class="wrap">
		<div class="img_wrap">
			<div class="img_outer">
				<div class="img_inner">
					<div  v-for="(item,index) in img"   :style="{backgroundImage:'url('+item+')'}" ></div>
				</div>
				
			</div>
			<p>奋力加载中. . .</p>
		</div>
		
	</div>
</template>
<script>
export default{
	
	mounted(){
		var div = document.querySelector('.img_inner')
		var i = 1;

		// load 动画函数
		function load (){
			/*var duration  =  10;
			var startTime = new Date();
			
			var persent;
			requestAnimationFrame(function step(){
				var currentTime = new Date();
				
				persent =  Math.min(1, (currentTime-startTime)/duration );
				console.log(persent)
				div.style.left = -i%25*1.35+"rem";
				div.style.top = 0 ;
				i++;
				
				requestAnimationFrame(step)
				
			})*/

			setTimeout(function step(){
				div.style.left = -i%25*1.35+"rem";
				div.style.top = 0 ;
				i++;
				setTimeout(step,50)
			},100)
		}

		load();
		
	},
	data(){
		return  {
			img:[
				"/static/img/load01.png",
				"/static/img/load02.png",
				"/static/img/load03.png",
				"/static/img/load04.png",
				"/static/img/load05.png",
				"/static/img/load06.png",
				"/static/img/load07.png",
				"/static/img/load08.png",
				"/static/img/load09.png",
				"/static/img/load10.png",
				"/static/img/load11.png",
				"/static/img/load12.png",
				"/static/img/load13.png",
				"/static/img/load14.png",
				"/static/img/load15.png",
				"/static/img/load16.png",
				"/static/img/load17.png",
				"/static/img/load18.png",
				"/static/img/load19.png",
				"/static/img/load20.png",
				"/static/img/load21.png",
				"/static/img/load23.png",
				"/static/img/load24.png",
				"/static/img/load25.png",
				"/static/img/load01.png"
			]
		}
	}
}


</script>
<style scoped>
.wrap{
	position:fixed;
	top:0;
	left: 0;
	right: 0;
	bottom: 0;
	background:#fff;
	z-index: 100;

}
.img_wrap{
	width:1.35rem;
	height:1.35rem;
	border-radius: 50%; 
	position:fixed;
	top:0;
	left: 0;
	right: 0;
	bottom: 0;
	margin:auto;
	background: #666666;
}
.img_outer{
	width:100%;
	height:100%;
	position:relative;
	overflow: hidden;
}
.img_inner{
	width:67.5rem;
	height:1.35rem;
	position: absolute;
}
 .img_inner>div{
 	width:1.35rem;
 	height:1.35rem;
	background-repeat: no-repeat;
	background-position: center center;
	background-size:50% 90%;
	float:left;

} 
.img_wrap>p{
	color:#999;
	font-size:0.15rem;
	text-align:center;
	margin-top:0.1rem;
}
	
</style>