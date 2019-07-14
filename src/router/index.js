import Vue from 'vue'
import Router from 'vue-router'
//首页侧边栏
import Sidebar from '@/components/jqy/sidebar'
//到店取车
import Shopcar from "./../components/jqy/shopcar"
//首页
import Home from "@/components/jqy/home"

Vue.use(Router)

export default new Router({
  routes: [
    {
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
  ]
})
