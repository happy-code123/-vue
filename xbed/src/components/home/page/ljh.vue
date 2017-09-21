<template>
	<div class="wrap">
		
		<containerright :title='data.title' :description="data.description" :info="data.info" :wxsrc='data.wxsrc' :imgsrc="data.imgsrc" :qrcode="data.qrcode"></containerright>
		
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
import containerright from './containerright'

export default {
	components:{
		slideleft,
		slideright,
		containerright
	},
	data(){
		return {
			info:[
				{
					'src':'static/img/new_index_li_16.png',
					'title':"扫码开门",
					'content':"无需房卡，无需钥匙",
					'contentadd':"二维码开门安全快捷"
				},
				{
					'src':'static/img/new_index_li_15.png',
					'title':"多样导航",
					'content':"地址导航多样化",
					'contentadd':"清洁流程导航图文并茂"
				}
			],
			data:{
				title:'丽家会',
				description:'一个美丽的组织',
				info:"扫描二维码下载APP，开启你的奇妙之旅",
				wxsrc:'static/img/li_code_03.png',
				imgsrc:'static/img/new_index_li_03.png',
				qrcode:"Android"
			}

		}
	}
}
</script>
<style scoped>
.container-slide-wrap{
	width:100%;
	height:1.7rem;
	background:#fff;
	padding:.4rem 0;
}
.container-slide{
	width:90%;
	height:1.7rem;
	margin:0 auto;
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
