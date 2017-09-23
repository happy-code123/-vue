// 引入
import Vue from 'vue'
import Vuex from 'vuex'
// import Resource from 'vue-resource'


// 使用 vuex 组件
Vue.use(Vuex)
// Vue.use(Resource)

const state = {
	cart:[]
}

const actions = {
	//  获取数据，作为参数，提交到 mutation
	getCart({commit}){
		let url = 'http://localhost:8081/cart'
		Vue.http.get(url).then(data => {

			commit('GET_CART',data.data)
		})
	},

	addCart({commit},item){
		let url = 'http://localhost:8081/cart?shop_id='+item.shop_id;
		Vue.http.get(url).then( data =>{
			
			// 购物车中是否已经有这项商品
			if(data.data.length > 0){
				let obj=data.data[0]
				let url ='http://localhost:8081/cart/'+obj.id
				
				Vue.http.put(url,{
					  "shop_id":obj.shop_id,
				      "title": obj.title,
				      "price": obj.price,
				      "num": ++obj.num,
				}).then( data => {
					console.log(data.data)
					console.log("购物车已有商品");
					commit('ADD_CART',data.data)
				})
			// else 代表的是购物车中没有，即要添加进去
			}else{
				let obj = {
					  "shop_id":item.shop_id,
				      "title": item.title,
				      "price": item.price,
				      "num": 1,
				}
				Vue.http.post(url,obj)
				.then( data => {
					console.log(data.data)
					console.log("没有商品")
					commit('ADD_CART',data.data)
				})
			}	
		})	
	},
	increase({commit},item){
		let url = 'http://localhost:8081/cart/'+item.id; 
		let obj ={
	          "shop_id":item.shop_id,
		      "title": item.title,
		      "price": item.price,
		      "num": ++item.num,
		}
		Vue.http.put(url,obj).then(data =>{
			console.log(data.data)
			commit('INCREASE',data.data)
		},data=>{
			console.log(data+'err')
		})
	},
	decrease({commit},item){
		let url = 'http://localhost:8081/cart/'+item.id; 
		let obj ={
	          "shop_id":item.shop_id,
		      "title": item.title,
		      "price": item.price,
		      "num": --item.num,
		}
		Vue.http.put(url,obj).then(data =>{
			console.log(data.data)
			commit('INCREASE',data.data)
		},data=>{
			console.log(data+'err')
		})
	},
	del({commit},item){
		let url = 'http://localhost:8081/cart/'+item.id
		Vue.http.delete(url).then(()=>{
			commit('DEL',item)
		})
	}
}

const mutations = {
	
	// 添加购物车
	ADD_CART(state,data){
		console.log(state,data)
		if(data.num > 1){
			for(let i=0;i<state.cart.length;i++){
				if(state.cart[i].shop_id == data.shop_id){
					state.cart[i].num++
				}
			}
		}else{
			state.cart.push(data)
		}
	},

	// 初始获取数据
	GET_CART(state,data){
		state.cart=data;
		console.log(state.cart)
	},

	// 增加
	INCREASE(state,data){
		for(var i=0;i<state.cart.length;i++){
			if(state.cart[i].shop_id == data.shop_id){
				state.cart[i].num= data.num
			}
		}
	},

	// 减少  
	DECREASE(state,data){
		for(var i=0;i<state.cart.length;i++){
			if(state.cart[i].shop_id == data.shop_id){
				state.cart[i].num=data.num
			}
		}
	},
	// 删除  
	DEL(state,data){
		for(let i=0;i<state.cart.length;i++){
			if(state.cart[i].shop_id==data.shop_id){
				state.cart.splice(i,1)
			}
		}
	}

}



//类似计算属性（state状态管理中的计算属性）
const getters = {
	count(state){
		let result=0;
		for(let i=0;i<state.cart.length;i++){
			result =result + state.cart[i].num
		}
		return result;
	},
	price(state){
		let result = 0;
		for(let i=0;i<state.cart.length;i++){
			result =result+state.cart[i].num*state.cart[i].price
		}
		return result;
	}	
}


// 实例化
export default new Vuex.Store({
	state,
	actions,
	mutations,
	getters
})