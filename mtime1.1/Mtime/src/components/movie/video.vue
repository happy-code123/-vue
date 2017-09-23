<template>
	<div class="wrap">
		<load v-if= "isLoad"></load>
		<div class="wrap_content">
			<header>
				<div class="table_v_c">
					<a href="javascript:void(0);" class="btn_back" @click="back()"></a>
					<div class="filmTitle">
						{{movieTitle}} - 预告片&拍摄花絮
					</div>
				</div>
			</header>
			<div class="video_Content">
				<ul>
					<li v-for="(item,index) in videoList">
						<div class="npic">
							<i class="i_video" @click="openVideo(item)"></i>
							<img :src="item.image" alt="">
						</div>
						<div class="newtext">
							<dl>
								<dt>{{item.title}}</dt>
								<dd>片长：{{Math.floor(item.length/60)}} 分 {{item.length%60}} 秒</dd>
							</dl>
						</div>
					</li>
				</ul>
			</div>
		</div>
		<videoPlay v-if="$store.state.videoShow" :videotitle="videoTitle" :videosrc="videoSrc"></videoPlay>


	</div>
</template>
<script>
import load from '@/components/load'
import videoPlay from './videoPlay'

export default {
	beforeCreate(){
		this.isLoad = true;
	},
	created(){
		// 刷新页面 topnav 隐藏
		this.$store.state.topnavShow = false;

		// location地址ID 
		let lid = 290;
		// 电影ID
		let movieId =  this.$route.params.id;
		// console.log(this.$route.params.id)
		let date = new Date();
		// 当前时间
		let time = `${date.getFullYear()}`+`${date.getMonth()+1}`+`${date.getDate()}`+`${date.getHours()}`+`${date.getMinutes()}`;
	

		let url = "/m/Service/callback.mi/movie/Detail.api?movieId="+movieId+"&locationId="+lid+"&t="+time;
		// 后台获取数据
		this.$http.get(url).then( data=>{	
			this.movieTitle = data.data.titleCn;
		})

		/*
http://m.mtime.cn/Service/callback.mi/Movie/Video.api?movieId=229733&pageIndex=1&t=201782515273436695

		*/

		let url2 = '/m/Service/callback.mi/Movie/Video.api?movieId='+movieId+'&pageIndex=1&t='+time;
		this.$http.get(url2).then( data=>{
			
			this.videoList = data.data.videoList;


			// load  消失
			this.isLoad = false ;
		})



	},



	components:{
		load,
		videoPlay,
	},
	data(){
		return{
			isLoad:true,
			movieTitle:'',
			videoList:[],
			videoTitle:'',
			videoSrc:''

		}
	},
	methods:{
		// 退回上一页
		back(){
			window.location.href = "/index/movie/"+this.$route.params.id
		},
		openVideo(item){
			this.$store.state.videoShow = true
			this.videoTitle = item.title
			this.videoSrc = item.hightUrl
		}
	}
}
</script>
<style scoped>
.wrap{}
.wrap_content{}

header{
	width:100%;
	height:0.528rem;
	box-sizing: border-box;
	padding:0 0.18rem;
	position:relative;
	background:#1C2635;
}
.table_v_c,.filmTitle{
	box-sizing: border-box;
	padding: 0 0.18rem;
	width:100%;
	height:100%;
}
.filmTitle{
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
}
.btn_back{
	display:block;
	width:0.528rem;
	height:0.528rem;
	background:url("/static/img/h_btn_back.png") no-repeat;
	background-size:auto 0.2rem;
	background-position: center;
	position: absolute;
	top:0;
	left:0;
}
.filmTitle{
	text-align: center;
	line-height: 0.528rem;
	font-size:0.19rem;
	color:#fff;
}
.video_Content{
	width:100%;
	box-sizing:border-box;
	padding-left:0.18rem;
}
.video_Content>ul>li{
	display: flex;
	width:100%;
	height:0.96rem;
	padding:0.18rem 0;
	border-bottom:1px solid #ddd;
}
.npic{
	position:relative;
}
.npic,.npic>img{
	display:block;
	width:1.5rem;
	height:100%;

}
.i_video{
	display:block;
	width:0.348rem;
	height:0.348rem;
	position:absolute;
	right:0.05rem;bottom:0.05rem;
	background:url("/static/img/viceoplay.png") no-repeat;
	background-size:100%;
	background-position:center;
}
.newtext{
	width:2.07rem;
	height:100%;
	box-sizing:border-box;
	padding:0.036rem 0.18rem 0;
}
.newtext>dl>dt{
	font-size:0.18rem;
	font-weight:bolder;
}
.newtext>dl>dd{
	font-size:0.15rem;
	color:#999;
	margin-top:0.06rem;
	padding:0.048rem 0 0.024rem 0;
}





</style>