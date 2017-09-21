<template>
	<div class="wrap">
		<div class="join-introduce">
			<p>感谢众多优秀的商家和合作伙伴，为Xbed提供高品质的设施和服务，创造了最佳的商旅住宿空间!
        	</p>
        	<p>—— Xbed</p>
		</div>
		<div class="container">
			<div class="container-img">
				<img src="/static/img/join_us_03.png" alt="">
			</div>
			<div class="row">
				<table v-for="(item,index) in partnerInfo">
					<tbody>
						<tr>
							<td class="col-md">
								<img :src="item.logoSrc" alt="">
							</td>
							<td class="col-xs border-common-right">
								<p class="f18 mt10">
									<b>{{item.name}}</b>
								</p>
								<p class="f12 mt10">{{item.descript}}</p>
							</td>
						</tr>
					</tbody>
				</table>
			</div>

			<div class="container-img">
				<img src="/static/img/join_us_07.png" alt="">
			</div>
			<p>商家合作，请发邮件至 <span class="cmail uline"> sj@xbed.com.cn</span> ,一起创造最棒的住宿产品！</p>
		</div>
	</div>
</template>
<script>
export default {
	created(){
		this.$http.get("http://localhost:8081/partnerInfo").then(data => {
			this.partnerInfo = data.data
		})
	},

	data () {
		return {
			// 合作信息数据
			partnerInfo:[]
		}
	},

}

	



</script>
<style scoped>
.join-introduce{
	padding:.25rem 0;
	background-color:#F0F5FC;
	color:#333;
}
.join-introduce>p{
	padding-right: 0.3rem;
    padding-left: 0.3rem;
    margin:0 auto;
    font-size: .12rem;
}
.join-introduce>p:last-child{
	margin:.1rem 0;
	margin-right:15px;
	text-align:right;
}
.container{
	widht:100%;
	padding:0 0.15rem;
	box-sizing:border-box;
}
.container-img{
	width:100%;
	padding:0 .15rem;
	box-sizing:border-box;
	margin-top:.2rem;
}
.uline{
	font-size:0.1rem;
	text-decoration: underline;
}
.cmail{
	color: #1e8cd7;
	text-align:center;
}
.container>p{
	font-size:0.12rem;
	color:#333;
	text-align:center;
	margin-bottom: 0.3rem;
}
.row{
	width:83.3333%;
	margin:0 auto;
	margin-bottom: 0.4rem;
}
table{
	margin-top:0.1rem;
}
.col-md{
	width:25%;
	display:table-cell;
	text-align:center;
	border: 1px solid #a3a3a3;
}
.col-xs{
	width:75%;
	padding: 0 0.15rem;
	box-sizing:border-box;color:#333;
}
/*.col-xs b{font-weight:700;}*/
.col-md>img{
	height:0.24rem;
	vertical-align: middle;
}
.border-common-right{
    border-top: 1px solid #a3a3a3;
    border-bottom: 1px solid #a3a3a3;
    border-right: 1px solid #a3a3a3;
}
.f12{font-size:0.12rem;}
.f18{font-size:0.18rem;}
.mt10{margin:0.1rem 0;}
</style>
