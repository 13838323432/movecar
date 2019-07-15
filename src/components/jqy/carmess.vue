<template>
  <div class="carmess-box" >
          <div class="mess">
              <router-link to="/home">
                    <img src="./shopcar-img/car_lanniao@2x.png" alt="">
                    <p>日产轩逸  <span>￥93</span>/日均</p>
              </router-link>
          </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {

  },
  components: {

  }
}
</script >

<style scoped lang='less'>
    .carmess-box{
        float:left;
        width:1.57rem;
        height:.9rem;
        background: #f6f9f9;
        box-sizing:border-box;
        .mess{
            padding:.1rem .1rem;
            img{
                width:1.5rem;
                height:.45rem;
            }
            p{
                font-size:.13rem;
                color:#333;
                text-align:center;
                span{
                    margin-left:.08rem;
                    color:#fbcc45;
                }
            }
        }
    }
</style>
