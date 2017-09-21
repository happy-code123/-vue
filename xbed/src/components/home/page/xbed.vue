<template>
	<div class="wrap">
		
		<containerleft :title='data.title' :description="data.description" :info="data.info" :wxsrc='data.wxsrc' :imgsrc="data.imgsrc" :qrcode="data.qrcode"></containerleft>
		
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
				title:'Xbed',
				description:'无限可能',
				info:"微信扫码关注Xbed公众号,开启您的奇妙之旅",
				wxsrc:'static/img/xbed_2d_barcode.png',
				imgsrc:'static/img/phone.png',
				qrcode:'Xbed公众号'
			}

		}
	}
}
</script>
<style scoped>
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
