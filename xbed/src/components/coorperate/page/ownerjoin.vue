<template>
	<div class="wrap">
		<div class="join-introduce">
			<p>Xbed蓝主人是搜床科技（Xbed）集团针对业主服务而打造的APP，主要服务于房间的主人，用全方位监控体系，动态管理及维护业主的房间,随时了解房间动态,自由上下线;同时,平台整合各方资源,实现:金融贷款、保险购买、理财、物资运作等功能,最大程度让业主获取更多利益的同时,实现快速自主提现。
        	</p>
        	<p>—— Xbed蓝主人</p>
		</div>
		<div class="container">
			<div class="container-img">
				<img src="/static/img/ouradvantage03.png" alt="">
			</div>
			<table class="advantage-item">
				<tbody>
					<tr>
						<td class='col-md'>
							<img src="/static/img/advantage_03.png" alt="">
						</td>
						<td class="col-text">
							<p>三大系统对接</p>
							<p>您只需提供房间,其他一切由平台搞定</p>
							<p>
								1. 蓝主人--为业主提供最全面的房间动态管理,收益透明化;
							</p>
							<p>
								2. Xbed--互联网酒店平台;
							</p>
							<p>
								3. 丽家会--提供酒店客房清洁、维护等运营服务的联盟;
							</p>
						</td>
					</tr>
				</tbody>
			</table>
			<div class="col-xs">
				<hr>
			</div>
			<table class="advantage-item">
				<tbody>
					<tr>
						<td class='col-md'>
							<img src="/static/img/advantage_07.png" alt="">
						</td>
						<td class="col-text">
							<p>三大优势助您无忧加入</p>
							<p>收入丰厚,服务配套,房间长保常新</p>
							<p>
								1. 物业加入Xbed后所得收入比普通收入高,同时做到现金可随时查看,转账,透明及时;
							</p>
							<p>
								2. Xbed对物业超级"管家"式管理,丽家会签约的清洁服务人员会提供专业的房间清洁服务,平台的其他供应商会提供统一的配套服务;
							</p>
							<p>
								3. 物业处于运营状态,实现长保常新、专业的检查和维修团队,会对房间进行定期检查和维修,同时Xbed有严格的入住守则,确保对房间质量的维护。
							</p>
						</td>
					</tr>
				</tbody>
			</table>
			<div class="col-xs">
				<hr>
			</div>
			<table class="advantage-item">
				<tbody>
					<tr>
						<td class='col-md'>
							<img src="/static/img/advantage_11.png" alt="">
						</td>
						<td class="col-text">
							<p>产品特色</p>
							<p>客房非标准化,体验更加极致,收益更为丰厚</p>
							<p>
								1. Xbed打破客房传统标准化;
							</p>
							<p>
								2. 蓝主人将客房打造成各种风格;
							</p>
							<p>
								3. 让客户更有机会感受品质的极致体验;
							</p>
							<p>
								4. 让您的房子加入Xbed获取更高收益。
							</p>
						</td>
					</tr>
				</tbody>
			</table>
			<div class="col-xs">
				<hr>
			</div>
			<table class="advantage-item">
				<tbody>
					<tr>
						<td class='col-md'>
							<img src="/static/img/advantage_15.png" alt="">
						</td>
						<td class="col-text">
							<p>加入说明</p>
							<p>选择Xbed就是选择一种生活方式</p>
							<p>
								1. 上线后房费收入的7%做为平台运作服务费用于日常运作;
							</p>
							<p>
								2. 加入前期只需支付一次性平台加入费1000元/套房;
							</p>
							<p>
								3. Xbed免费提供电子密码锁及互联网系统支持;
							</p>
							<p>
								4. 根据房量收取相应保证金(1000元~5000元)。
							</p>
						</td>
					</tr>
				</tbody>
			</table>
			<div class="container-img">
				<img src="/static/img/join_us_07.png" alt="">
			</div>
		</div>

		<!-- 表单 -->
		<div class="owner_joinus">
			<div class="joinus-row">
				<p>业主名称或授权人名称&nbsp;:</p>
				<input type="text" placeholder="请填写中文名字"
				:class="{'input_btn':isNameError}" v-model="userName" @blur="checkName">
				<div class="join-tips" v-show="isNameError">
					<p class="fred" >请填写中文名字</p>
				</div>
			</div>

			<div class="joinus-row">
				<p>手机号码&nbsp;:</p>
				<input type="text" placeholder="请填写手机号码" v-model="userPhone" :class="{'input_btn':isPhoneError}" @blur="checkPhone" >
				<div class="join-tips" v-show="isPhoneError">
					<p class="fred" >请填写手机号码</p>
				</div>
			</div>

			<div class="sex-container">
				<div class="row-name">性别&nbsp;:</div>
				
				<div class="row-sex"> 
					<span class="radio_input" @click="sex='man'"><i :class="{'on':sex=='man'}" ></i></span><span class="row-sex-name">男</span>
					<span class="radio_input" @click="sex='woman'"><i :class="{'on':sex=='woman'}"></i></span><span class="row-sex-name">女</span>
					<input type="hidden" :value="sex">
				</div>
			</div>
			
			<div class="joinus-row">
				<p>计划加盟的地址</p>
				<div class="row-info">
					<div class="row-pro row-wid" >
						<select name="owner_province" id="owner_province" @change="changePro">
						<option value="0" selected>省</option>
							<option v-for="(item,index) in provinceList"  :value="item.ProID" >{{item.ProName}}</option>
						</select>
					</div>
					<div class="row-city row-wid">
						<select name="owner_city" id="owner_city"  v-on:change="changeCity">
						<option value="0"  selected>市</option>
							<option  v-for="(item,index) in cityList" :value="item.CityID">{{item.CityName}}</option>
						</select>
					</div>
					<div class="row-county row-wid row-wid-none">
						<select name="owner_county" id="owner_county" @change="changeCounty">
						<option value="0"  selected>县/区</option>
							<option  v-for="(item,index) in countyList"  :value="item.Id" >{{item.DisName}}</option>
						</select>
					</div>
				</div>	
				<div class="owner-region-tips-info fred" v-show="isCityError">请选择城市</div>
			</div>
			<div class="joinus-row">
				<input type="text" placeholder="详细地址" v-model="userAddressInfo" @blur="checkAddress" @focus="checkCity"  :class="{'input_btn':isAddressError}" >
				<p class="owner-address-tips fred" v-show="isAddressError">请填写详细地址</p>
			</div>
			<div class="joinus-row text-wrap">
				<p>留言&nbsp;:</p>
				<textarea class="text_btn" v-model="userMessage"></textarea>
			</div>
			<div class="joinus-row ">
				<p>了解我们的渠道</p>
				<div class="row-se">
					<div class="col-it">
						<span class="radio_input" @click="place='家人/朋友'"><i :class="{'on':place=='家人/朋友'}" ></i></span><span class="row-sex-name">家人/朋友</span>
					</div>
					<div class="col-it">
						<span class="radio_input" @click="place='线下宣传/活动'"><i :class="{'on':place=='线下宣传/活动'}" ></i></span><span class="row-sex-name">线下宣传/活动</span>
					</div>
					<div class="col-it">
						<span class="radio_input" @click="place='网上'"><i :class="{'on':place=='网上'}" ></i></span><span class="row-sex-name">网上</span>
					</div>
					<div class="col-it">
						<span class="radio_input" @click="place='其他'"><i :class="{'on':place=='其他'}" ></i></span><span class="row-sex-name">其他</span>
					</div>
					<input type="hidden" :value="place">
				</div>
			</div>
			<div class="joinus-row mt50">
				<div class="submit_btn" @click="checkOwnerForm">立刻申报参加Xbed业主共创计划</div>
			</div>
			<div class="joinus-row mt10 mb50 p-0">加入咨询电话：18105771342（周女士）020-81775645（蓝主人）</div>
			
		</div>
	</div>
</template>
<script>

export default{
	created () {
		this.$http.get('http://localhost:8081/address').then( data =>{
			this.addressData = data.data
			this.provinceList = data.data.provinceList

			// console.log(data.data.provinceList)
			this.cityList = data.data.cityList.filter(data => {
				return this.provinceList[0].ProID == data.ProID
			})
			this.countyList= data.data.countyList.filter(data =>{
				return this.cityList[0].CityID == data.CityID
			})

		})
	},
	data(){
		return {
			// 用户姓名的值
			userName:'',
			// 用户的姓名错误提示信息，默认不显示
			isNameError:false,
			// 用户手机号的值
			userPhone:'',
			// 用户的手机错误提示信息，默认不显示
			isPhoneError:false,
			// 用户的性别
			sex:'man',

			//存储用户的地址信息
			userAddress:{},
			// 存储用户的详细地址
			userAddressInfo:'',
			// 用户的城市错误提示信息
			isCityError:false,
			// 用户的地址错误提示信息
			isAddressError:false,
			// 用户留言信息
			userMessage:"",
			// 用户了解的渠道方式
			place:"家人/朋友",

			// 存储所有的省市区数据
			addressData:{},
			// 存储 省/直辖市
			provinceList:[],
			// 存储 市
			cityList:[],
			// 存储 区/县
			countyList:[]

		}
	},

	methods:{
		// 判断省，包含的市
		changePro(ele){
			this.countyList=[]
			this.cityList = []
			this.userAddress = {}
			let id = ele.target.value
			this.userAddress.ProID = id
			this.cityList=this.addressData.cityList.filter( data =>{
				return id == data.ProID
			})
			this.countyList = this.addressData.countyList.filter( data =>{
				return this.cityList[0].CityID == data.CityID
			})

		},
		// 判断市，包含的县
		changeCity(ele){
			let id = ele.target.value
			this.userAddress.CityID = id
			// console.log(this.userAddress)
			this.countyList=this.addressData.countyList.filter( data =>{
				return id == data.CityID
			})
		},
		// 存储用户的 （省 市 县/区） 信息
		changeCounty(ele){
			let id= ele.target.value
			this.userAddress.CountyID = id
			// console.log(this.userAddress)
			if(id){
				this.isCityError = false
			}
		},


		// 检查姓名输入
		checkName (e) {
			e.preventDefault()
			let val = e.target.value
			// 判断输入内容是否存在
			if (val === "") {
				this.isNameError = true
			}else{
				// 判断用户名是否是中文（即过滤掉所有数字字母下划线空格等）
				let reg = /^[\u4e00-\u9fa5]+$/;
				if(!reg.test(val)){
					this.isNameError = true
				}else{
					this.isNameError = false
				}
			}
		},
		// 检查手机号输入
		checkPhone (e) { 
			e.preventDefault()
			let val = e.target.value
			// 判断用户的手机号(默认11位号码)
			let reg = /^1[3,5,8,7]\d{9}$/
			if(reg.test(val)){
				this.isPhoneError = false
			}else{
				this.isPhoneError = true
			}

		},
		// 检查城市的输入
		checkCity (e) {
			e.preventDefault()
			let address =  this.userAddress

			if(!address.ProID||!address.CityID||!address.CountyID){
				this.isCityError = true
			}else{
				this.isCityError = false
			}
			if(address.ProID==33||address.ProID==34){
				this.isCityError = false
			}
		},
		// 检查地址输入
		checkAddress (e) {
			e.preventDefault()
			let val = e.target.value
			if (!val) {
				this.isAddressError = true
			}else{
				this.isAddressError = false
			}
		},

		// 提交用户信息
		checkOwnerForm () {
			if(!this.userName){
				this.isNameError = true
				return 
			}else if(!this.userPhone){
				this.isPhoneError = true
				return
			}else if(!this.userAddress.ProID ||!this.userAddress.CityID ){
				this.isCityError = true
				return
			}else if(!this.userAddressInfo){
				this.isAddressError = true
				return 
			}else {
				let userInfo = {
					name:this.userName,
					phone:this.userPhone,
					sex:this.sex,
					address:this.userAddress,
					addressInfo: this.userAddressInfo,
					message:this.userMessage,
					place:this.place
				}
				this.$http.post("http://localhost:8081/userInfo",userInfo).then(data => {
					console.log(data.data)
				})
			}
		}
	}
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
	padding:0 .15rem;
	box-sizing:border-box;
}
.container-img{
	width:100%;pa
	padding:0 .15rem;
	box-sizing:border-box;
	margin-top:.2rem;
	margin-bottom:.25rem;
}
.col-md{
	width:16%;
	display:table-cell;
	text-align:center;
}
.col-md>img{
	vertical-align: middle;
	height:.36rem;
	width:.37rem;
}
.col-text>p{
	font-size: .12rem;
	color:#333;
	margin-bottom:.1rem;
	padding:0 .15rem;
	box-sizing:border-box;
}
.col-text>p:nth-child(1){
	font-weight:bolder;
}
.col-xs{
	width:100%;
	margin:0.3rem 0;
	max-height:1px;
}
.col-xs>hr{
	height:0;
	color:#333;
	border:0;
	border-top: 1px solid #eee;
}

.owner_joinus{
	width:91.667%;
	padding:0.05rem 0.2rem;
	margin:0 auto;
	box-sizing: border-box;
}
.joinus-row{
	margin-top:0.08rem;
	font-size: .12rem
}
.joinus-row p{
	font-size: .12rem;
	color:#333;
}
.joinus-row>input{
	width: 100%;
	border: 1px solid rgb(169, 169, 169);
	padding-left: 10px;
	font-size: .12rem;
	color:#333;
    background: #fff;
    box-sizing: border-box;
}
/*未填写正确信息是显示红色*/
.joinus-row>input.input_btn{
	border: 1px solid #f76120 !important;
}
.fred{
	line-height:0.4rem;
	color:#f76120 !important;
}

.sex-container{
	width: 100%;
	margin-top: 0.02rem;
	overflow: hidden;
}
.row-name{
	width:16.667%;
	display: inline-block;
	padding-top:0.02rem;
	font-size:0.12rem;
}
.row-sex{
	display: inline-block;
	vertical-align:top;
	font-size:0.12rem;
}
.radio_input{
	display:inline-flex;
	width:0.09rem;height:0.09rem;
	border: 1px solid #d3d3d3;
    border-radius: 50%;
    background: #fff;
    margin-right:0.03rem;
    vertical-align:middle;
    flex-flow:row nowrap;
    justify-content: center;
    align-items: center;
}
.radio_input>i.on{
	display:inline-block;
	width:0.05rem;height:0.05rem;
    border-radius: 50%;
    background: #0a74cf;
}
.row-sex-name{
	vertical-align:middle;
	margin-right:0.1rem;
}
.row-info{width:100%;overflow:auto;}
.row-wid{
	width:33.3333%;
	float:left;
	padding-right:0.05rem;
	box-sizing: border-box;
}
.row-wid.row-wid-none{
	padding-right:0;
}
.row-wid>select{
	width:100%;height:.16rem;
	line-height:.14rem !important;
	font-size:0.12rem;
	color: #a0a0a0;
}

.row-wid>select>option{
	font-size:0.12rem;
}
.address-wrap{
	width:100%;
	font-size:0.12rem;
	padding:0.08rem 0;
}
.text_btn{
	width:100%;height:1.5rem;
	overflow: auto;
}
.text-wrap{
	box-sizing: border-box;
	padding-right:0.08rem;
}
.row-se{
	width:100%;overflow: auto;
}
.col-it{
	width:50%;
	float:left;
}
.mt50{margin-top:0.5rem;}
.mt10{margin-top:0.1rem;}
.mb50{margin-bottom: 0.5rem;}

.submit_btn{
	padding:0.01rem 0.1rem;
	background-color: #0a74cf;
    border-bottom: 0.04rem solid #0b5797;
    margin:0 auto;
    text-align:center;
    color:#fff;
}
.p-0{
	text-align:center;
	padding:0 0.15rem;
}






</style>