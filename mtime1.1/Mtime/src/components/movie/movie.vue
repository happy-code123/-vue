<template>
	<div class="wrap">
		<load v-if="isLoad"></load>
		<div class="wrap_white">
			<header>
				<div class="table_v_c">
					<a href="javascript:void(0);" class="btn_back" @click="back()"></a>
					<div class="filmtool">
						<a href="javascript:void(0);" id="favBtn"></a>
						<a href="javascript:void(0);" id="shareBtn"></a>
					</div>
				</div>
			</header>
			<div class="wrap_content">
				<section class="m_cinema"  :style= "{backgroundImage:'url('+movieInfo.image+')'}">
					<div class="bg_gray"></div>
					<div class="bg_line"></div>
				</section>
				<!-- 电影信息 -->
				<article class="cinemabox">
					<div class="cinemabox_wrap">
						<div class="cinema_img">
							<img :src="movieInfo.image" alt="">
							<router-link class="i_video" :to="{path:'/index/movie/'+$route.params.id+'/video'}"></router-link>
							<div class="moviever">
								<i class="i_cine_05" :class="{'on':movieInfo.is3D}"></i>
								<i class="i_cine_04" :class="{'on':movieInfo.isIMAX}"></i>
								<i class="i_cine_15" :class="{'on':movieInfo.isDMAX}"></i>
							</div>
						</div>
						<div class="cinema_text">
							<div class="cinema_text_header">
								<h2>{{movieInfo.titleCn}}</h2>
								<p>{{movieInfo.titleEn}}</p>
							</div>
							<ul>
								<li><p>{{movieInfo.runTime}}</p></li>
								<li><p>{{typeOne}} / {{typeTwo}}</p></li>
								<li><p>{{movieDate.year}}年{{movieDate.month}}月{{movieDate.date}}日{{movieDate.location}}上映</p></li>
							</ul>
							<div class="wantWatched">
								<a href="javascript:void(0)">
									<span>我想看</span>
								</a>
								<a href="javascript:void(0)">
									<span>我要评分</span>
								</a>
							</div>
							<b class="m_score">{{movieInfo.rating}}</b>
						</div>
					</div>
				</article>
		
				<div class="cin_otherinfo">
					<p>{{movieInfo.commonSpecial}}</p>
					<div class="btn_orange">
					查影讯/购票
					</div>
				</div>
				<!-- 间隔 -->
				<div class="cin_line">
					<p></p>
				</div>
				<article class="cin_more">
					<p :class="{'on':isContentHide}" >{{movieInfo.content}}</p>
					<a href="javascript:void(0)" class="m_btn_tmore"   @click="toggleEve" :class="{'on':!isContentHide}"></a>
				</article>

				<div class="cin_line">
					<p></p>
				</div>
				<article class="cast">
					<h2>
						<b>{{movieInfo.personCount}}位演员表</b>
						<span></span>
					</h2>
					<div class="table">
						<ul>
							<li>
								<dl>
									<dt>导演</dt>
									<dd class="director_img"><img :src="director.directorImg" alt=""></dd>
									<dd>{{director.directorName}}</dd>
									<dd>{{director.directorNameEn}}</dd>
								</dl>
							</li>
							<li>
								<dl>
									<dt>主要演员</dt>
									<dd><i :style="{backgroundImage:'url('+actorOne.actorImg+')'}"></i></dd>
									<dd><p>&nbsp;{{actorOne.actor}}</p></dd>
									<dd><p>&nbsp;{{actorOne.actorEn}}</p></dd>
									<dd><a href="javascript:void(0);"><img :src="actorOne.roleImg" alt=""></a></dd>
									<dd>饰：{{actorOne.roleName}}</dd>
								</dl>
							</li>
							<li>
								<dl>
									<dt>&nbsp;</dt>
									<dd><i :style="{backgroundImage:'url('+actorTwo.actorImg+')'}"></i></dd>
									<dd><p>&nbsp;{{actorTwo.actor}}</p></dd>
									<dd><p>&nbsp;{{actorTwo.actorEn}}</p></dd>
									<dd><a href="javascript:void(0);"><img :src="actorTwo.roleImg" alt=""></a></dd>
									<dd>饰：{{actorTwo.roleName}}</dd>
								</dl>
							</li>
						</ul>
					</div>
				</article>
				<div class="cin_line">
					<p></p>
				</div>
				<article class="cast">
					<h2>
						<b>{{movieInfo.imageCount}}张图片</b>
						<span></span>
					</h2>
					<div class="film_imgs">
						<div class="flim_imgs_item" v-for="(item,index) in filmImgs">
							<img :src="item" alt="">
						</div>
					</div>
				</article>
				<div class="cin_line">
					<p></p>
				</div>

			</div>
			
		</div>
		
	</div>
</template>
<script>
import load from "@/components/load"

export default{
	/*
	http://m.mtime.cn/Service/callback.mi/movie/Detail.api?movieId=229733&locationId=290&t=20178232314372556
	*/
	beforeCreate(){
		this.isLoad = true;
	},
	created(){
		// 刷新页面 topnav 隐藏
		this.$store.state.topnavShow= false;


		let lid = 290;
		let movieId =  this.$route.params.id;
		// console.log(this.$route.params.id)
		let date = new Date();
		let time = `${date.getFullYear()}`+`${date.getMonth()+1}`+`${date.getDate()}`+`${date.getHours()}`+`${date.getMinutes()}`;
	

		let url = "/m/Service/callback.mi/movie/Detail.api?movieId="+movieId+"&locationId="+lid+"&t="+time;
		this.$http.get(url).then( data => {
			
			this.movieInfo = data.data;
			this.typeOne = this.movieInfo.type[0];
			this.typeTwo = this.movieInfo.type[1];
			// 
			this.movieDate.location = this.movieInfo.release.location;

			// 拿到日期信息
			var dateInfo =  this.movieInfo.release.date;
			var arr = dateInfo.split("-");
			this.movieDate.year = arr[0];
			this.movieDate.month = arr[1];
			this.movieDate.date = arr[2];

			this.director = this.movieInfo.director;
			this.actorOne = this.movieInfo.actorList[0];
			this.actorTwo = this.movieInfo.actorList[1];
			this.filmImgs = this.movieInfo.images;

			
			// 请求完数据 load 关闭
			this.isLoad = false;

		})

		

	},
	mounted(){

	},

	data(){
		return {
			isLoad:true,
			// 电影信息
			movieInfo:{},
			// 电影类型
			typeOne:"",
			typeTwo:"",
			//  电影日期与地点
			movieDate:{
				year:"",
				month:"",
				date:"",
				location:""
			},
			// 判断电影文章内容是否隐藏
			isContentHide:true,
			director:{},
			actorOne:{},
			actorTwo:{},
			// 电影图片
			filmImgs:[],

		}
	},
	components:{
		load
	},
	methods:{
		// 退回上一页
		back(){
			// window.history.back();
			window.location.href = "/index"
		},
		toggleEve(){
			this.isContentHide = !this.isContentHide
		}
	}
}


	
</script>
<style scoped> 
.wrap{}
.wrap_white{
	width:100%;
	position:relative;
}
header{
	width:100%;
	height:0.528rem;
	box-sizing: border-box;
	padding:0 0.18rem;
	position:relative;
	z-index:5;
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
.filmtool{
	position: absolute;
	top:0;
	right:0;
	margin-right:0.05rem;
}
#favBtn{
	display:block;
	width:0.528rem;
	height:0.528rem;
	float:left;
	background:url("/static/img/i_h_collection.png") no-repeat;
	background-size:auto 0.28rem;
	background-position: center;
}
#shareBtn{
	display:block;
	width:0.528rem;
	height:0.528rem;
	float:left;
	background:url("/static/img/i_h_share.png") no-repeat;
	background-size:auto 0.28rem;
	background-position: center;
}
.wrap_content{
	width:100%;
	position: relative;
	top:-0.528rem;
	left:0;
}
.m_cinema{    
	width:100%;
	height:1.35rem;
	position: relative;
	background-size:cover;
}
.bg_gray{
	width:100%;
	height:100%;
	background-color:rgba(0,0,0,0.6);
}
.bg_line{
	width:100%;
	height:0.16rem;
	background: url("/static/img/cinemainfo_bg.png") no-repeat;
	background-position:center;
	background-size:100% 100%;
	position:absolute;
	bottom:0;
	left:0;
}
.cinemabox{
	width:100%;
	height:1.92rem;
	margin-top:-0.828rem;
} 
.cinemabox_wrap{
	display:flex;
	width:100%;
	height:100%;
	padding-left:0.18rem;
	box-sizing:border-box;
}
.cinema_img,.cinema_text{
	float:left;
}
.cinema_img{
	width:1.26rem;
	height:100%;
	padding:2.5px;
	box-sizing: border-box;
	position: relative;
	background: #fff;
	margin-right:0.15rem;
}
.cinema_img>img{
	display:block;
	width:100%;
	height:100%;
}
.i_video{
	display:block;
	width:0.564rem;
	height:0.564rem;
	position:absolute;
	top:0;left:0;right:0;bottom:0;
	margin:auto;
	background:url("/static/img/viceoplay.png") no-repeat;
	background-size:100%;
	background-position:center;
}
.moviever{
	width:0.38rem;
	position:absolute;
	top:0.15rem;
	right:0.1rem;
}

.i_cine_05,.i_cine_04,.i_cine_15{
	padding:1px;
	display:block;
	margin-bottom:0.06rem;
	box-sizing:border-box;
}
.i_cine_05{
	display:none;
	width:100%;
	height:0.26rem;
	background:url("/static/img/iv_cine_05.png") no-repeat;
	background-position:center;
	background-size:100%; 
}
.i_cine_05.on{
	display:block;
}
.i_cine_04{
	display:none;
	width:100%;
	height:0.26rem;
	background:url("/static/img/iv_cine_04.png") no-repeat;
	background-position:center;
	background-size:100%;
}
.i_cine_04.on{
	 display:block;
}
.i_cine_15{
	display:none;
	width:100%;
	height:0.37rem;
	background:url("/static/img/iv_cine_15.png") no-repeat;
	background-position:center;
	background-size:100%; 
}
.i_cine_15.on{
	display:block;
}
.cinema_text{
	width:2.14rem;
	position:relative;
}
.cinema_text_header{
	margin:0.06rem 0.18rem 0.192rem 0;
	color:#fff;
}
.cinema_text_header>h2{
	font-size:0.2rem;
	margin-bottom:0.02rem;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space:nowrap;
}
.cinema_text_header>p{
	font-size:0.14rem;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space:nowrap;
}
.cinema_text>ul>li{
	margin-bottom:0.048rem;
}
.cinema_text>ul>li>p{
	color:#333;
	font-size:0.13rem;
	font-weight:bold;
}
.wantWatched{
	display:flex;
	margin-top:0.08rem;
}
.wantWatched>a{
	display:block;
	width: 0.94rem;
	height:0.38rem;
	border:1px solid gray;
	border-radius: 0.2rem;
	line-height:0.38rem;
	text-align:center;
	margin-right:0.05rem;
}
.wantWatched>a>span{
	color:#333;
	font-size:0.16rem;
}
.m_score{
	display:block;
	width:0.33rem;
	height:0.337rem;
	background-color:#659D0E;
	position:absolute;
	top:0.55rem;
	right:0.15rem;
	color:#fff;
	font-size:0.13rem;
	line-height:0.337rem;
	text-align:center;
}
 .cin_otherinfo{
	width:100%;
	padding:0.096rem 0 0.14rem 0;
	text-align:center;
}
.cin_otherinfo>p{
	color:#FF8600;
	font-size:0.16rem;
}
.btn_orange{
	margin:0 auto;
	width:88%;
	height:0.466rem;
	background-color:#FF8600;
	line-height:0.466rem;
	border-radius: 0.233rem;
	font-size:0.16rem;
	font-weight:bold;
	color:#fff;
	margin-top:0.17rem;
	margin-bottom:0.13rem;
}
.cin_line{
	width:100%;
	height:0.14rem;
	background:#f6f6f6;
}
.cin_line p{
	width:100%;
	height:2px;
    overflow: hidden;
    background: #fff;
    box-shadow: 0 0.2em 0.2em  rgba(51,51,51,0.05);
}
.cin_more{
	width:100%;
	box-sizing: border-box;
	padding:0.13rem 0.18rem 0;
}
.cin_more>p{
	color:#333;
	font-size:0.16rem;
	overflow: hidden;
}
.cin_more>p.on{
	overflow : hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
}
.m_btn_tmore{
	display:block;
	width:100%;
	height:0.34rem;
	background:url("/static/img/i-tmore.png") no-repeat center;
	background-size:auto 0.1rem;
}
.m_btn_tmore.on{
	transform:rotate(180deg);
}
.cast{
	padding:0.048rem 0.18rem 0.024rem;

}
.cast>h2{
	padding:0.12rem 0;
	position:relative;
}
.cast>h2>b{
	font-size:0.18rem;
	color:#333;
}
.cast>h2>span{
	display:block;
	width:0.18rem;
	height:0.15rem;
	position:absolute;
	right:0;
	top:35%;
	background:url("/static/img/i-tmore.png") no-repeat center;
	background-size:100%;
	transform:rotate(-90deg);
}
.table>ul{
	display:flex;
	padding-bottom:0.08rem;
}
.table>ul>li{
	float:left;
	width:1.02rem;
	flex: 1 1 auto;
	box-sizing: border-box;
	font-size:0.14rem;
	padding-bottom:0.048rem;
}
.table>ul>li>dl{
	padding-bottom: 0.2rem;
}
.table>ul>li>dl>dd{
	width:100%;
	margin-top:0.04rem;
}
.table>ul>li:first-child{
	padding-right:0.08rem;
}
.table>ul>li:nth-child(2){
	border-left:1px solid #d8d8d8;
	padding-left:0.12rem;
	margin-right:0.12rem;
}
.director_img{
	width:1.02rem;
	height:1.55rem;
	margin-bottom:0.15rem;
}
.table>ul>li>dl>dd{
	text-align: center;
}
.table>ul>li>dl>dd>i{
	display:block;
	width:1.02rem;
	height:1.02rem;
	background-size:cover;
}
.table>ul>li>dl>dd>p{
	font-size:0.12rem;
	white-space: nowrap;
	overflow:hidden;
	text-overflow:ellipsis;
}
.table>ul>li>dl>dd>a>img{
	margin-top:0.2rem;
	width:0.48rem;
	height:0.48rem;
}
.film_imgs{
	display:flex;
	flex-flow:row nowrap;
	padding-bottom:0.15rem;
}
.flim_imgs_item{
	width:0.79rem;
	height:0.79rem;
	flex:1 1 auto;
	margin:0 0.025rem;
}
.flim_imgs_item>img{
	display: block;
	width:100%;
	height:100%;
}















</style>