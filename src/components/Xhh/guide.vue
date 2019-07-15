<template>
  <div>
    <div class="swiper-container" >
      <div class="swiper-wrapper lead-box">
        <div class="swiper-slide lead-boxs">
          <img src="./../../image/xhh/yindao-01.png" alt class="lead-img">
          <p>实时叫车</p>
           <p>周边车源充足，随叫随到</p>
            <ul class="ull">
                <li class="one li"></li>
                <li class="li"></li>
                <li class="li"></li>
            </ul>
        </div>
        <div class="swiper-slide lead-boxs">
          <img src="./../../image/xhh/yindao-02.png" alt class="lead-img">
          <p>确认车辆信息</p>
  <p>实时跟踪定位，安全便达</p>
            <ul class="ull">
                <li  class="li"></li>
                <li class="one li"></li>
                <li class="li"></li>
            </ul>
        </div>
        <router-link to="/register" class="swiper-slide lead-boxs">
        
          <img src="./../../image/xhh/yindao-03.png" alt class="lead-img">
           <p>准确定位</p>
          <p>准时，准点，安全出行</p>
            <ul class="ull">
                <li class="li"></li>
                <li class="li"></li>
                <li  class="one li"></li>
            </ul>
        
        </router-link>
      </div>
    </div>

  </div>
</template>

<script>
import Swiper from "./../../../node_modules/swiper/dist/js/swiper.js";
export default {
  data() {
    return {};
  },
  mounted() {
    this.mySwiper();
   
  },
  methods: {
    mySwiper() {
      let mySwiper = new Swiper(".swiper-container", {
        direction: "horizontal",
        pagination: {
          el: ".swiper-pagination"
        }
      });
    }
  },
  components: {}
};
</script>

<style scoped lang="less">
@import "./../../../node_modules/swiper/dist/css/swiper.min.css";
* {
  margin: 0;
  padding: 0;
  height: 100%;
}
body{
}
.lead-boxs {
  width: 100%;
  height: 100%;
  
}
p{
    color:#262628;
    font-size: .3rem;
    margin-top:.65rem;
}
p:nth-child(3){
    margin-top:.19rem;
    font-size: .17rem;
}
.lead-img {
 width: 2.78rem;
    height:2.78rem;
    margin:0 .5rem;
    margin-top: 1.43rem;
}
.dian {
  position: absolute;
  top: 93.7%;
}
.ull{
    overflow: hidden;
  margin:0 auto;
  margin-top:.69rem;
  width:.9rem;
  height:.06rem;
}
.li{
    float:left;
  width:.3rem;
  height:.06rem;
  background:rgba(239,239,244,1);
  border-radius:3px;
}
.one{
    background:rgba(76,229,177,1);
border-radius:3px;
}
</style>