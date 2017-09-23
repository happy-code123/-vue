import Vue from 'vue'
import App from './App'
import router from './router'

// 引入状态管理
import store from "./store"

// 引入 axios
import axios from 'axios'
Vue.prototype.$http = axios


// 引入重设font-size  和  去除默认样式
import "@/common/js/resize"
import "@/common/style/reset"

//	引入mint-ui 组件
import 'mint-ui/lib/style.css'
import MintUI from 'mint-ui'
Vue.use(MintUI)



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
// 导航钩子控制 topnav 的显示隐藏 
router.beforeEach((to,from,next)=> {
	if( to.path === "/index" || to.path === "/ticket" || to.path === "/news" || to.path === "/shop" ){	
		store.state.topnavShow = true
	}else {
		store.state.topnavShow = false
	}
	next();
})