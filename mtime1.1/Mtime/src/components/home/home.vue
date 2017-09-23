<template>
	<div class="wrap">
		<load v-if="isLoad"></load>
		<!-- 搜索栏 -->
		<div class="search">
			<div class="head_search">
				<div class="cityshow">
					<b><router-link to="/citylist">城市</router-link></b>
					<i></i>
				</div>
				<p class="input">
					<router-link to="/search">
						<span>影片/影院/影人,任你搜</span>
					</router-link>
				</p>
			</div>
		</div>
		<!-- 正在热映 -->
		<div class="hotmovie">
			<h2>
				<i></i>
				<router-link :to="{path:'/index'}">正在热映( {{totalNum}}部 )</router-link>
			</h2>
			<ul>
				<li v-for= "(item,index) in hotmovie">
					<router-link :to="{path:'/index/movie/'+item.id}" >
						<div class="hotmovie-item">
							<div class="mpic">
								<img :src="item.img" alt="">
								<span class="tags" v-show="(item.r) > 0">{{item.r}}</span>
							</div>
							<p>
								<span>{{item.t}}</span>
							</p>
						</div>
					</router-link>

				</li>
			</ul>
			<h2 class="line">
				<i></i>
				<router-link :to="{path:'/index'}">即将上映( {{comingMovieNum}}部 )</router-link>
			</h2>

		</div>
		<!-- 今日热点 -->
		<div class="todayHot">
			<h2>
				<a href="###">今日热点</a>
			</h2>
			<ul>
				<li v-for= "(item,index) in hotPoints">
					<div class="table">
						<div class="todaypic">
							<img :src="item.img" alt="">
						</div>
						<div class="todaytext">
							<h2>{{item.title}}</h2>
							<p><span>{{item.desc}}</span></p>
							<p><span>{{new Date(parseInt(item.publishTime)*1000).toLocaleString()}}</span></p>
						</div>
					</div>
				</li>
			</ul>
		</div>
	
	</div>
</template>

<script>
import load from "@/components/load"


export default{
	beroreCreate(){
		this.isLoad = true
	},
	created () {

		/*

http://m.mtime.cn/Service/callback.mi/Showtime/LocationMovies.api?locationId=290&t=201781111552785091

http://m.mtime.cn/Service/callback.mi/PageSubArea/GetFirstPageAdvAndNews.api?t=201781916235984534



/Service/callback.mi/Showtime/LocationMovies.api?locationId="+lID+"&t="+time
		*/

		let date = new Date();
		// 拿到当前时间
		let time = `${date.getFullYear()}`+`${date.getMonth()+1}`+`${date.getDate()}`+`${date.getHours()}`+`${date.getMinutes()}`
		let lID = 290;
		this.$http.get("/m/Service/callback.mi/Showtime/LocationMovies.api?locationId="+lID+"&t="+time).then( data => {
			
			this.totalNum = data.data.ms.length;
			this.comingMovieNum = data.data.totalComingMovie;
			this.hotmovie = data.data.ms.splice(0,8);
			
		});

		this.$http.get("/m/Service/callback.mi/PageSubArea/GetFirstPageAdvAndNews.api?t="+time).then( data =>{
			this.hotPoints = data.data.hotPoints;


			// load 消失 
			
			this.isLoad = false;
			
			
		})
		


	},
	mounted(){

	},
	
	data () {
		return {
			isLoad:true,
			// 正在热映总数
			totalNum:0,
			// 即将上映总数
			comingMovieNum:0,
			// 热映电影
			hotmovie:[],
			// 今日热点
			hotPoints:[],

		}
	},
	components:{
		load
	}
}



</script>

<style scoped>
.wrap{
	background-color:#F6F6F6;
}
.search{
	width:100%;
	background: #f6f6f6;
	border-bottom: 1px solid #d8d8d8;
	padding: 0.1rem 0;
}
.head_search{
	width:90%;
	margin:0 auto;
    box-sizing:border-box;
}
.cityshow,.input{
	display:inline-block;
}
.cityshow{
	margin-right:0.2rem;
}
.cityshow>b{
	font-size:0.16rem;
	line-height:0.4rem;
	font-weight: normal;

}
.cityshow>b>a{
	color:#333;
}
.cityshow>i{
	display: inline-block;
	width:0.1rem;
	height:0.1rem;
	background:url("/static/img/i_city.png") no-repeat center;
	background-size:0.1rem;
}
.input{
	height:0.40rem;
	background:url("/static/img/search_ico_01.png") no-repeat .5em center;
	background-size:0.2rem;
	background-color: #fff;
	border:1px solid #d8d8d8;
	border-radius: 0.1rem;
	padding:0 0.3rem;
	box-sizing:border-box;
	line-height:0.4rem;
}
.input>a{
	display: inline-block;
	width:2rem;
	font-size:0.15rem;
	color:#333;
}

.hotmovie{
	width:100%;
	background-color: #fff;
	padding:0.06rem 0.18rem 0.18rem;
	box-sizing:border-box;
}
.hotmovie>h2{
	position:relative;
}
.line{
	margin-top:0.05rem;
	border-top:1px solid #d8d8d8;
}
.hotmovie>h2>a,.todayHot>h2>a{
	display:block;
	width:100%;
	height:100%; 
	color:#333;
	font-size: 0.18rem;
	padding:0.075rem 0;
}
.hotmovie>h2>i{
	display:block;
	width:0.167rem;
	height:0.099rem;
	margin-top:-0.04rem;
	background:url("/static/img/i-tmore.png") no-repeat center center;
	background-size:cover;
	position: absolute;
	right:0;
	top:50%;
	transform:rotate(-90deg);
}
.hotmovie>ul{
	width:100%;
	overflow:hidden;
}
.hotmovie>ul>li{
	width:25%;
	height:1.75rem;
	float:left;
	padding:0 0.033rem;
	box-sizing:border-box;

}
.hotmovie-item{
	width:100%;
	height:100%;
}
.mpic{
	width:100%;
	height: 1.16rem;
	position:relative;
}
.mpic>img{
	width:100%;
	height:100%;
}
.tags{
	display:block;
	width:0.24rem;
	height:0.215rem;
	background-color:#659d0e;
	line-height:0.215rem;
	text-align:center;
	font-size:0.14rem;
	color:#fff;
	position: absolute;
	top:0.03rem;
	right:0.03rem;
}
.hotmovie-item>p{
	width:100%;
	text-align:center;
	padding-top:0.06rem;
}
.hotmovie-item>p>span{
	display:inline-block;
	width:100%;
	height:0.4rem;
	text-align: center;
	color:#333;
	font-size:0.16rem;
	overflow: hidden;
	/*white-space:nowrap;*/
	/*text-overflow:ellipsis;*/
}
.todayHot{
	margin-top:0.14rem;
	width:100%;
	background-color: #fff;
	padding:0.06rem 0.18rem 0 0.18rem;
	box-sizing:border-box;
}
.todayHot>ul{
	width:100%;
}
.todayHot>ul>li{
	width:100%;
	padding:0.156rem 0;
	border-bottom:1px solid #d8d8d8;
}
.todayHot>ul>li:first-Child{
	padding-top:0;
}
.todayHot>ul>li:last-Child{
	border-bottom:none;
}
.table{
	display:flex;
	width:3.39rem;
	height:0.96rem;
}
.todaypic,.todaytext{
	float:left;
}
.todaypic{
	width:1.34rem;
	height:100%;
	margin-right:0.12rem;
	flex:1 1 auto;
}
.todaypic>img{
	display:block;
	width:1.34rem;
	height:100%;
}
.todaytext{
	width:1.94rem;
	flex:1 1 auto;
}
.todaytext>h2{
	font-size: 0.16rem;
	color:#333;
	padding-bottom: 0.048rem
}
.todaytext>p{
	box-sizing: border-box;
	padding:0.048rem 0;

}
.todaytext>p>span{
	display:block;
	width:100%;
	color:#777;
	font-size: 0.12rem;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

</style>