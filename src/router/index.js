import Vue from 'vue'
import Router from 'vue-router'
<<<<<<< HEAD
//首页侧边栏
import Sidebar from '@/components/jqy/sidebar'
//到店取车
import Shopcar from "./../components/jqy/shopcar"
//首页
import Home from "@/components/jqy/home"
=======
<<<<<<< HEAD
import HelloWorld from '@/components/HelloWorld'
import Guide from './../components/Xhh/guide.vue'//引导页
=======
>>>>>>> chenlulu37/master


import Carlist from '@/components/Zyb/thecarlist/carlist'
import Attestation from '@/components/Zyb/attescar/attestation'
import Setting from '@/components/Zyb/setting/setting'
import Locat from '@/components/Zyb/location/locat'
import Shop from '@/components/Zyb/shop/shop'

//充值页面
import Recharge from './../page/Zmy/recharge/recharge.vue'
//充值成功
import Recharge_success from './../page/Zmy/recharge_success/recharge_success.vue'
//我的钱包
import Wallet from './../page/Zmy/wallet/wallet.vue'


// 2J列表
// 附近门店
import Fjshop from '@/components/Zyb/shop/2jpag/fjshop'
// 金水
import Jsshop from '@/components/Zyb/shop/2jpag/jsshop'
// 二七
import Eqshop from '@/components/Zyb/shop/2jpag/eqshop'
// 航空港
import Gcshop from '@/components/Zyb/shop/2jpag/gcshop'
// 经开
import Jkshop from '@/components/Zyb/shop/2jpag/jkshop'
// 郑东
import Zdxshop from '@/components/Zyb/shop/2jpag/zdxshop'
// 中原
import Zyshop from '@/components/Zyb/shop/2jpag/zyshop'



>>>>>>> 9ac0df025258c5c85939f2319c85f7590065f49d

import Shaixuana from './../components/Xhh/shaixuana.vue'//价格筛选
import Shaixuanb from './../components/Xhh/shaixuanb.vue'//车型筛选
import Register from './../components/Xhh/register.vue'//注册
import Login from './../components/Xhh/login.vue'//登录
Vue.use(Router)

export default new Router({
  routes: [
    //引导页

    {
<<<<<<< HEAD
      path: '/sidebar',
      name: 'Sidebar',
      component: Sidebar
    },
    {
      path: '/',
      name: 'Shopcar',
      component: Shopcar
    },
    {
      path: '/shopcar',
      name: 'Shopcar',
      component: Shopcar
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
=======
<<<<<<< HEAD
      path: '/',
      name: 'Guide',
      component: Guide
    },
    {
      path: '/guide',
      name: 'Guide',
      component: Guide
    },
//价格筛选
    {
      path: '/shaixuana',
      name: 'Shaixuana',
      component: Shaixuana
     
},
//车型筛选
{
  path: '/shaixuanb',
  name: 'Shaixuanb',
  component: Shaixuanb
},
//注册
{
  path: '/register',
  name: 'Register',
  component: Register
},
//登录
{
  path: '/login',
  name: 'Login',
  component: Login
},
=======
      path: '/Carlist',
      name: 'Carlist',
      component: Carlist
    },
    {
      path: '/Attestation',
      name: 'Attestation',
      component: Attestation
    },
    {
      path: '/Setting',
      name: 'Setting',
      component: Setting
    },
    {
      path: '/Locat',
      name: 'Locat',
      component: Locat
    },
    {
      path: '/Shop',
      name: 'Shop',
      component: Shop,
      children:[
        {
          path: '/',
          name: '',
          component: Fjshop
        },
        {
          path: 'Fjshop',
          name: 'Fjshop',
          component: Fjshop
        },
        {
          path: 'Jsshop',
          name: 'Jsshop',
          component: Jsshop
        },
        {
          path: 'Eqshop',
          name: 'Eqshop',
          component: Eqshop
        },
        {
          path: 'Gcshop',
          name: 'Gcshop',
          component: Gcshop
        },
        {
          path: 'Jkshop',
          name: 'Jkshop',
          component: Jkshop
        },
        {
          path: 'Zdxshop',
          name: 'Zdxshop',
          component: Zdxshop
        },
        {
          path: 'Zyshop',
          name: 'Zyshop',
          component: Zyshop
        },
      ]
    },
    {
      path:'/recharge',
      name:'Recharge',
      component:Recharge
    },
    {
      path:'/recharge_success',
      name:'Recharge_success',
      component:Recharge_success
    },
    {
      path:'/wallet',
      name:'Wallet',
      component:Wallet
    }
>>>>>>> 9ac0df025258c5c85939f2319c85f7590065f49d
>>>>>>> chenlulu37/master
  ]
})
