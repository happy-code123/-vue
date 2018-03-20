<template>
	<div class="wrap">
		<load v-if="false" ></load>
		<div class="topbar_wrap">
			<div class="topbar">
				<a  href="javascript:void(0);"  @click="back"></a>
				<p class="input">
					<input type="text" placeholder="影片/影院/影人,任你搜" >
				</p>
				<button>搜索</button>
			</div>
		</div>
		<div class="content_wrap">
			<div class="hot_search">
				<h3>热门搜索</h3>
			</div>
			<div class="content">
				<div class="hot_movie" v-for= "item in keywords">{{item}}</div>
			</div>
		</div>
	



	</div>
</template>
<script>
	import load from "@/components/load.vue"

	export default{
		beroreCreate(){
			
		},
		created(){
			
			// 刷新页面 topnav 隐藏
			this.$store.state.topnavShow = false;
			/*
			// 热门搜索电影
			https://m.mtime.cn/Service/callback.mi/Search/HotKeyWords.api?t=20183201525722319

			*/
			let date = new Date();
			let time = `${date.getFullYear()}` + `${date.getMonth() + 1}` + `${date.getDate()}`+`${date.getHours()}`+`${date.getMinutes()}`+`${date.getSeconds()}`
			console.log(time)
			
			this.$http.get('/m/Service/callback.mi/Search/HotKeyWords.api?t='+time).then( data => {
				console.log(data)
				this.keywords = data.data.keywords;
				

			})




		},
		data(){
			return {
				isLoad:true,
				keywords:[]
			}
		},
		methods:{
			back(){
				window.location.href = "/index"
			}
		},
		components:{
			load
		}
	}
</script>
<style scoped>
.topbar_wrap{
	width:100%;
	height:0.528rem;
	background:#1C2635;
	padding-right:;
}
.topbar>a{
	display:inline-block;
	width:0.528rem;
	height:0.528rem;
	background:url("/static/img/h_btn_back.png") no-repeat;
	background-size:auto 0.2rem;
	background-position: center;
	vertical-align: middle;
}
.input{
	display:inline-block;
	height:0.4rem;
	background:url("/static/img/search_ico_01.png") no-repeat .5em center;
	background-size:0.2rem;
	background-color: #fff;
	border:1px solid #d8d8d8;
	border-radius: 0.1rem;
	padding:0 0.3rem 0 0.33rem;
	box-sizing:border-box;
	line-height:0.35rem;
	vertical-align: middle;
}
.input>input{
	display: inline-block;
	width:1.6rem;
	font-size:0.15rem;
	color:#333;
	border:none;
	outline: none;
}
.topbar>button {
	margin-left:0.12rem;
	padding:0.06rem 0.13rem;
	background:#1C2635;
	border-radius:5px;
	color:#fff;
	outline: none;
	border:0.01rem solid #cdcdcd;
}
.content_wrap{
	width:100%;
	height:4.52rem;
}
.hot_search{
	padding:0.084rem 0.18rem;
	color:#999999;
	background:#F6F6F6;
	border-top:0.01rem solid #E4E4E4;
	border-bottom:0.01rem solid #E4E4E4;
}
.content{
	padding:0.1rem;
	box-sizing:border-box;
}
.hot_movie{
	display:inline-block;
	padding:0.05rem 0.15rem; 
	border:0.01rem solid #b6dcff;
	color:#1e7dd7;
	border-radius:15px;
	font-size:0.16rem;
	margin-top:0.11rem;
	margin-left:0.12rem;
}




</style>