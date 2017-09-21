<template>
	<div class="wrap">
		<div class="container-wrap">
			<div class="container">
				<div class="container-left">
					<p class='f14'>{{data.title}}</p>
					<p class='f14'>{{data.description}}</p>
					<p class='f12'>{{data.info}}</p>
					<img :src="data.wxsrc" alt="">
					<span class='f12 f12-bg'>{{data.qrcode}}</span>
				</div>
				<div class="container-img">
					<img :src="data.imgsrc" alt="">
				</div>
			</div>
		</div>
		<div class="container-slide-wrap">
			<div class="container-slide">
				<mt-swipe :auto='4000' :show-indicators="false" :speed="0">
					<mt-swipe-item>
					<slideleft :src="info[0].src" :title="info[0].title" :content="info[0].content" :contentadd="info[0].contentadd"></slideleft>
					</mt-swipe-item>
					<mt-swipe-item >	
					<slideright :src="info[1].src" :title="info[1].title" :content="info[1].content"
					:contentadd="info[1].contentadd"></slideright>
					</mt-swipe-item>
				</mt-swipe>
			</div>
		</div>
		
	</div>
</template>
<script>
// 引入轮播的组件
import slideleft from "./slideleft"
import slideright from './slideright'

import containerleft from './containerleft'

export default {
	components:{
		slideleft,
		slideright,
		containerleft
	},
	data(){
		return {
			info:[
				{
					'src':'static/img/phone_5.png',
					'title':"安全有保障",
					'content':"智能门锁、入住信息管理",
					'contentadd':"令您高枕无忧"
				},
				{
					'src':'static/img/phone_2.jpg',
					'title':"温暖",
					'content':"极具关怀设计的品质房间，",
					'contentadd':"使你进入房间的第一步便有如归家"
				}
			],
			data:{
				title:'蓝主人',
				description:'一间房就可以开酒店',
				info:"微信扫码关注Xbed公众号,开启您的奇妙之旅",
				wxsrc:'static/img/new_blue_hoster_06.png',
				imgsrc:'static/img/blue_hoster_phone_04.png',
				qrcode:'蓝主人公众号'
			}

		}
	}
}
</script>
<style scoped>
.container-wrap{
	widht:100%;height:2.4rem;background-color:#F0F5FC;
	padding-bottom: .2rem;
	position:relative;
}
.container{
	width:80%;height:2rem;padding:.2rem 0;margin:0 auto;
	
}
.container-left,.container-img{
	width:50%;float:left;
}
.container-left{
	padding-right:0.1rem;box-sizing:border-box;
}
.container-left>p:first-child{font-weight:600;}
.container-left>img{
	display:block;width:.6rem;height:.6rem; margin-bottom:0.04rem;
}
.f12{font-size:.12rem;margin-bottom:0.04rem;}
.f12-bg{
    border-radius: 5px;
    background-color: #3282ed;
    color: white;
    padding:0.01rem 0.03rem;
}
.f14{font-size:.14rem;margin:.06rem 0;}

.container-img{
	position:absolute;bottom:0;right:0;
	padding-right:.2rem;box-sizing: border-box;
}
.container-img>img{
	width:100%;
}
.container-slide-wrap{
	width:100%;height:1.7rem;bakcground:#fff;
	padding:.4rem 0;
}
.container-slide{
	width:90%;height:1.7rem;margin:0 auto;
}
.mint-swipe-item{
	opacity:0;
	transform:translate3d(0,0,0)!important;
}
.mint-swipe-item.is-active{
	opacity:1;
	transition:1.5s !important;
	transform:translate3d(0,0,0)!important;
}

</style>
