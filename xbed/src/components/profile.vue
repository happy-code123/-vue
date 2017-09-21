<template>
	<div class="container">
		<div class="row">
			<div class="company-item">
				<div class="company-introduce-img">
					<img src="/static/img/introduce_title_03.png" alt="">
				</div>
				<div class="company-introduce">
					<p class="text-i mb">搜床科技(Xbed)集团，成立于2015年5月20日，是一家以房源共享、人力共享和全互联网化运营三大创新引领酒店业变革的互联网酒店运营企业。</p>
					<p class="text-i mb">Xbed不仅解决了传统酒店面临的运营成本不断高涨、消费者体验持续降低等核心痛点；还打破酒店行业的高门槛——让普通业主的分散房产做到自住、长租和短租功能的按需切换，实现“一间房无忧开酒店”；最终为客户提供“一键走天下”的旅居体验。</p>
					<p class="text-i mb">Xbed是多方公认的世界最先进、最全面的酒店运营互联网化解决方案。曾被世界权威科技媒体TechNode评为：“中国下一个BAT”；获得中国饭店金马奖“中国酒店共享模式领军奖”；世界互联网文化教父凯文凯利出任Xbed事业导师；并得到青松基金、启赋资本、水木华仑以及戈壁资本等多家基金机构联合巨资注入。</p>
					<p class="text-i mb">目前Xbed已经遍布广州、北京、深圳、西安、成都、武汉、长沙、郑州、南宁、石家庄、阳江、苏州、佛山、厦门、贵阳、青岛、南昌、保定等28个城市，正在势如破竹地向全国、全球扩张。</p>
				</div>
			</div>
		</div>
		<div class="company-item">
			<div class="company-introduce-img">
				<img src="/static/img/introduce_title_06.png" alt="">
			</div>
			<div class="company-introduce">
				<p class="mb"><span class="company-introduce-title">温暖</span>——Xbed模式秉持“产品走心、体验匠心”的宗旨，为客户提供“看不见的服务，看得见的呵护”，用精湛的运作和过硬的品质创造出住宿业最优的睡眠空间。</p>
				<p class="mb"><span class="company-introduce-title">连通</span>——作为最好的互联网住宿产品，Xbed相信连接胜于拥有，实现各种社会资源的动态整合，并运用科技创新连通整个世界。</p>
				<p class="mb"><span class="company-introduce-title">自由</span>——时间诚可贵，自由价更高。Xbed团队基于对生活的尊重和对社会进步的深刻理解，通过技术与产品的完美结合，把对精神与物质的高度统一、空间和时间的完整拥有作为人生旅途的最高追求。</p>
			</div>
		</div>
		<div class="company-item">
			<div class="company-introduce-img">
				<img src="/static/img/introduce_title_13.png" alt="">
			</div>
			<div class="company-introduce">
				<p class="d1">
				办公地址：广州市荔湾区信义路24号七喜创意园Xbed中心<br/>联系方式：4006099222<br/>
				客服邮箱：customer@xbed.com.cn
				</p>
			</div>
		</div>

		<div class="map">
			<el-amap vid="amapDemo" :map-manager="amapManager" :center="center" :zoom="zoom" :plugin="plugin" :events="events" class="amap"></el-amap>
		</div>


		<div class="container-item mtb40">
			<div class="company-partner-img">
				<img src="/static/img/companion_07.png" alt="">
			</div>
		</div>
		
	</div>
</template>

<script>
// 引入地图组件
import VueAMap from "vue-amap"

let amapManager = new VueAMap.AMapManager();

export default {
  data: function() {
    return {
      amapManager,
      // resizeEnable: true,
      zoom: 12,
      center: [113.243910,23.09414],
      events: {
        'moveend': () => {
        },
        'zoomchange': () => {
        },
        'click': (e) => {
        },
        init(o) {
            let marker = new AMap.Marker({
                position: [113.243910,23.09414]
            });
            marker.setMap(o);
        }
      },
      plugin: ['ToolBar', {
        pName: 'MapType',
        defaultType: 0,
        events: {
          init(o) {            
          }
        }
      }]
    }

  },
  methods: {
  }
};

</script>
<style scoped>


.container{
	width:100%;
	margin:0 auto;
	padding:0 0.15rem;
	box-sizing: border-box;
} 
.row{
	width:100%;
	background:url("/static/img/introduction_bg_03.png") no-repeat;
    background-position: left bottom;
    background-size:1rem; 
}
.company-item{
	width: 100%;
	padding-right: 0.15rem;
    padding-left: 0.15rem;
    margin-top:0.2rem;
    box-sizing: border-box;
}   
.company-introduce-img{
	width:100%;
	padding:0 0.15rem;
	box-sizing:border-box;
	text-align:center;
}
.company-introduce-img>img{
	width:1.12rem;
	height:0.51rem;
}
.company-introduce{
	margin-top:0.12rem;
	padding:0 0.15rem;
	box-sizing:border-box;
}
.company-introduce>p{
	font-size:0.1rem !important;
	color:#333;
}
.text-i{
	text-indent:0.25rem;
}
.mb{
	margin-bottom:0.04rem;
}
.mtb40{
	margin: 0.4rem 0;
}
.company-introduce-title{
	font-weight:700;
}
.d1::before{
	content:"";
	display:inline-block;
	width:2px;height:0.08rem;
	background:#000;
}
.company-partner-img{
	width:100%;
	padding:0 0.15rem;
	box-sizing:border-box;
	text-align:center;
}
.map{
	width:100%;
	height:400px;
	padding:0 0.15rem;
	box-sizing:border-box;
}

.amap{
	width:100%;
	height:400px;

}

</style>