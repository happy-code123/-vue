import Vue from 'vue'
import Router from 'vue-router'
import shop from '@/components/shop'
import pay from '@/components/pay'



Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
	    {
	      path: '/',
	      component: shop
	    },
	    {
	      path: '/pay',
	      component: pay
	    }

	]
})
