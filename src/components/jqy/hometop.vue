<template>
  <div class="home-top" >
    <img @touchstart="show" src="./../../assets/logo.png" alt />
    <div class="home-center">
      <span>
        <router-link to="/home">地图找车</router-link>
      </span>
      <span>
        <router-link to="/shopcar">到店取车</router-link>
      </span>
    </div>
  </div>
</template>

<script>
// 引用公共bus.js进行传值
import Bus from './bus.js'
export default {
  data() {
    return {
      bol:true
    };
  },
  methods: {
    show(){
      console.log(this.bol)
        Bus.$emit('priceChange',this.bol) 
    }
  },
  components: {}
};
</script >

<style scoped lang='less'>
.home-top {
  position: absolute;
  top: 0;
  left: 0;
  height: 0.45rem;
  padding: 0.03rem 0.16rem 0.03rem 0.16rem;
  background: #f8c507;
  position: relative;
  box-sizing: border-box;
  display: flex;
  justify-content: start;
  font-size: 0;
  img {
    width: 0.37rem;
    height: 0.37rem;
    border-radius: 50%;
    margin-right: 0.7rem;
  }
  .home-center {
    display: flex;
    align-content: center;
    .router-link-exact-active {
      border-bottom: 0.02rem solid white;
    }
    span {
      display: inline-block;
      width: 0.67rem;
      margin-right: 0.05rem;
      line-height: 0.35rem;
      text-align: center;
      a {
        display: inline-block;
        width: 100%;
        font-size: 0.12rem;
        color: white;
      }
    }
  }
}
</style>
