<template>
	<div class="wrap">
		<load v-if="isLoad" ></load>
		<!-- 搜索栏 -->
		<div class="search">
			<div class="head_search">
				<div class="cityshow">
					<b><router-link to="">{{currentCity}}</router-link></b>
					<i></i>
				</div>
				<p class="input">
					<input type="text" id="searchbox" placeholder="筛选影院" >
					
				</p>
				<router-link to="" class="searchbtn">搜索</router-link>
			</div>
		</div>
		<div class="class_box">
			<ul>
				<li><span >离我最近</span><i></i></li>
				<li><span>全城</span><i></i></li>
				<li><span>影音特效</span><i></i></li>
			</ul>
		</div>
		<div class="viewbox">
			<ul>
				<li v-for = "item in cinemaList">
					<dl>
						<dt>
							<p>{{item.cinameName}}</p>
							<p v-show="item.minPrice "><b>{{item.minPrice /100}}</b><span>元起</span></p>
						</dt>
						<dd></dd>
						<dd>{{item.address}}</dd>
						<dd><i v-show='item.feature.has3D'>3D</i> <i v-show='item.feature.hasFeature4D'>4D</i> <i v-show='item.feature.hasFeature4K'>4K</i> <i v-show="item.feature.hasIMAX">IMAX</i> <i v-show="item.feature.hasFeatureDolby">杜比</i> <i v-show="item.feature.hasFeatureHuge">巨幕</i> <i v-show='item.feature.hasVIP'>VIP</i> <i v-show='item.feature.hasLoveseat'>情侣座</i> <i v-show="item.feature.hasPark">停车场</i></dd>
					</dl>
				</li>
			</ul>
		</div>
		
	</div>
</template>
<script>
	
	import load from "@/components/load"

	export default{

		/*
		https://ticket-m.mtime.cn/api/proxy/ticket/OnlineLocationCinema/OnlineCinemasByCity.api?locationId=365&_=1521280237802
		
		*/

		created(){
			let date = new Date();
			let time =`${date.getFullYear()}`+`${date.getMonth()+1}`+`${date.getDate()}`+`${date.getHours()}`+`${date.getMinutes()}`
			console.log(time)
			var locationId = 366;
			console.log(Date.now())
			this.$http.get('/ticket-m/api/proxy/ticket/OnlineLocationCinema/OnlineCinemasByCity.api?locationId='+ locationId +'&_='+Date.now()).then( data => {
				console.log(data)
				this.cinemaList = data.data;
				this.isLoad = false;
			})

		},
		method(){
			
		},
		data(){
			return {
				isLoad:true,
				currentCity:"深圳",
				cinemaList:[]
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
	line-height:0.35rem;
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
	height:0.35rem;
	background:url("/static/img/search_ico_01.png") no-repeat .5em center;
	background-size:0.2rem;
	background-color: #fff;
	border:1px solid #d8d8d8;
	border-radius: 0.1rem;
	padding:0 0.3rem 0 0.34rem;
	box-sizing:border-box;
	line-height:0.32rem;
}

#searchbox{
	display:inline-block;
	width:1.18rem;
	height:0.3rem;
	box-sizing:border-box;
	font-size:0.15rem;
	border:none;
	outline:none;
	vertical-align: middle;
	
}
.searchbtn{
	display:inline-block;
	width:0.7rem;
	height:0.3rem;
	color:#333;
	margin-left:0.08rem;
	text-align:center;
	vertical-align: middle;
	line-height:0.3rem;
}
.class_box,.class_box>ul{
	width:100%;
	height:0.4rem;
	border-bottom:1px solid #d8d8d8;
}
.class_box>ul{
	display:flex;
	flex-flow:row nowrap;
	
}
.class_box>ul>li{
	flex-grow:1;
	margin:0.11rem 0;
	box-sizing:border-box;
	float:left;
	text-align:center;
	border-right:1px solid #d8d8d8;
}
.class_box>ul>li:last-Child{border-right:none;}
.class_box>ul>li>span{
	font-size:0.14rem;
	color:#777;
	
}

.viewbox,.viewbox>ul{
	width:100%;
	box-sizing:border-box;
}
.viewbox>ul>li{
	margin-left:0.1rem;
	padding:0.15rem 0.15rem 0.15rem 0;
	border-bottom:1px solid #d8d8d8;
}
.viewbox>ul>li>dl>dt{width:100%;height:0.22rem;font-size:0.16rem;color:#333;}
.viewbox>ul>li>dl>dt>p{display:inline-block;}
.viewbox>ul>li>dl>dt>p:first-child{
	float:left;
}
.viewbox>ul>li>dl>dt>p:last-child{
	float:right;
	color:#ff8600;
}
.viewbox>ul>li>dl>dt>p:last-child span{font-size:0.12rem;}
.viewbox>ul>li>dl>dd{
	margin-top:0.07rem;
	color:#777;
	font-size:0.14rem;
}
.viewbox>ul>li>dl>dd>i{
	didplay:inline-block;
	padding:0.01rem;
	border:1px solid #6d8297;
	color:#6d8297;
	font-size:0.12rem !important;
	font-style:normal;

}

</style>