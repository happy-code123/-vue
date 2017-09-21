import Vue from 'vue'
import Router from 'vue-router'

import home from '@/components/home/home'
import coorperate from '@/components/coorperate/coorperate'
import profile from '@/components/profile'
// 引入首页 的二级路由
import xbed from '@/components/home/page/xbed'
import ljh from '@/components/home/page/ljh'
import lzr from '@/components/home/page/lzr'

// 引入 加盟合作 的二级路由
import ownerjoin from '@/components/coorperate/page/ownerjoin'
import designjoin from '@/components/coorperate/page/designjoin'
import roundjoin from '@/components/coorperate/page/roundjoin'
import clearserver from '@/components/coorperate/page/clearserver'

Vue.use(Router)


export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      component:home,
      redirect:'/xbed',
      children:[
        {
          path:'xbed',
          component:xbed
        },
        {
          path:'ljh',
          component:ljh
        },
        {
          path:'lzr',
          component:lzr
        }
      ]
    },
    {
    	path:'/coorperate',
    	component:coorperate,
      redirect:'/coorperate/ownerjoin',
      children:[
        {
          path:'ownerjoin',
          component:ownerjoin
        },
        {
          path:'clearserver',
          component:clearserver
        },
        {
          path:'designjoin',
          component:designjoin
        },
        {
          path:'roundjoin',
          component:roundjoin
        }
      ]
    },
    {
    	path:'/profile',
    	component: profile

    }

  ]
})
