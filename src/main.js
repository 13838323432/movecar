// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
<<<<<<< HEAD
=======

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default global options } */);

import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

import Vuex from 'vuex';
Vue.use(Vuex);

let store = new Vuex.Store({
  state:{
    num:500,
  },
  mutations:{
    change(state,v){
      state.num = v;
    },
    changes(state,a){
      state.num = a;
    }
  }
})

>>>>>>> chenlulu37/master
Vue.config.productionTip = false
//引用swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper,  )
//引入vant组件
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
//引入地图组件
import BaiduMap from 'vue-baidu-map'
Vue.use(BaiduMap, {
  ak: '0dWyNG1uG7vQLwHkhrj9m8Mf4P4UsCOt'
})

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
