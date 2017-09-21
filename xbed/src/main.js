// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 引入重置样式
import '@/common/style/reset.css'
// 引入 重置 font-size 
import '@/common/init'

import Vue from 'vue'
import App from './App'
import router from './router'

// 引入 mint 组件库
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
// 引入高德地图 组件
import VueAMap from "vue-amap"
// 引入 饿了么 组件库
import 'element-ui/lib/theme-default/index.css'
import Element from 'element-ui'
//  引入 axios 插件
import axios from "axios"
Vue.prototype.$http = axios

Vue.use(Element)
Vue.use(Mint)
Vue.use(VueAMap)

VueAMap.initAMapApiLoader({
  key: 'your amap key',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor']
});

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
