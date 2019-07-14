<template>
  <div class="carlist-box">
      <p>车型推荐</p>
      <div class="car-list">
          <mess></mess>
          <mess></mess> <br>
          <mess></mess>
          <mess></mess>
      </div>
    <span>我也是有底线的~</span>
  </div>
</template>

<script>
//引入车辆信息
import mess from "./carmess"
export default {
  data() {
    return {

    }
  },
  methods: {

  },
  components: {
      mess
  }
}
</script >

<style scoped lang='less'>
.carlist-box{
    margin-top:.14rem;
    padding:0 .18rem;
    p{
        text-align:left;
        font-size:.14rem;
        color:#323232;
    }
    span{
        display:block;
        font-size:.15rem;
        color:#989898;
        text-align:center;
    }
    .car-list{
        margin-top:.12rem;     
        padding:0 .12rem;
        overflow: hidden;
        font-size:0;
    }
}
</style>
