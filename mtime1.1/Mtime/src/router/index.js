import Vue from 'vue'
import Router from 'vue-router'

// 引入需要的组件
// import Hello from '@/components/Hello'
import Home from "@/components/home/home"
import Shop from "@/components/shop/shop"
import Ticket from "@/components/ticket/ticket"
import News from '@/components/news/news'
import Mine from '@/components/mine/mine'
import Search from '@/components/search/search'
import Citylist from '@/components/search/citylist'
import Movie from "@/components/movie/movie"
import Video from "@/components/movie/video"




Vue.use(Router)

// 配置路由
export default new Router({
    mode:"history",
    routes: [
        {
            path:"/",
            redirect:"/index"
        },
        {
          	path: '/index',
          	component: Home
        },
        {
    	  	path:'/ticket',
    	  	component:Ticket
        },
        {
            path: '/shop',
            component: Shop
        },
        {
        	path:'/news',
        	component:News
        },
        {
        	path:'/mine',
        	component:Mine
        },
        {
        	path:'/search',
        	component:Search
        },
        {
            path:'/citylist',
            component:Citylist
        },
        {
            path:"/index/movie/:id",  // 传递路由参数
            component:Movie
        },
        {
            path:"/index/movie/:id/video",
            component:Video
        },

        

    ]
})
