<template>
	<div class="wrap">
		<div class="video_box">
			<div class="video_menu">
				<div class="video_close" @click="close"></div>
				<h2 class="video_title">{{videotitle}}</h2>
				<div class="video_share">
					<span></span>
					发送朋友
				</div>
			</div>
			<video autoplay controls :src="videosrc"></video>
		</div>
	</div>
</template>
<script>
export default {
	data(){
		return {
		}
	},
	// 将我需要的接口，向外传出
	props:["videotitle","videosrc"],
	methods:{
		// 关闭页面
		close(){
			this.$store.state.videoShow = false

		}
	}
}
</script>
<style scoped>
.wrap{
	width:100%;
	background: rgba(0,0,0,0.8);
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    color: #fff;
}
.video_box{
	width:100%;
	height:2.5rem;
	position: fixed;
	top:50%;
	left:50%;
	transform:translate(-50%,-50%);
	background: rgb(0,0,0);
}
.video_menu{
	display: flex;
	width:100%;
	height:0.43rem;

}
.video_title,.video_close,.video_share{
	float:left;
	flex:1 1 auto;
}
.video_close{
	width:0.48rem;
	height:100%;
	/*background-color: #1E1E1E;*/
	background:url("/static/img/close.png") no-repeat center;
	background-size:30%;
}
.video_title{
	width: 2.41rem;
	height:100%;
	line-height: 0.45rem;
	text-align: center;
	font-size: 0.18rem;
	color:#fff;
}
.video_share{
	box-sizing: border-box;
	padding:0 0.14rem;
	text-align: center;
	font-size: 0.12rem;

}
.video_share>span{
	display: block;
	width:100%;
	height:0.25rem;
	background:url('/static/img/img_share.png') no-repeat center;
	background-size:50% 90%;
}
.video_box>video{
	width: 100%;
	height:100%;
}

</style>