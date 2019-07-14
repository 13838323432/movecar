<template>
  <div>
    <swiper :options="swiperOption">
      <!-- swiper-slides -->
      <!-- <slot name="swiper-img"></slot> -->
    <swiper-slide>I'm Slide 1</swiper-slide>
    <swiper-slide>I'm Slide 2</swiper-slide>
    <swiper-slide>I'm Slide 3</swiper-slide>
    <swiper-slide>I'm Slide 4</swiper-slide>
      <div :class="{'swiper-pagination':bol}" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  props:{
    bol:{
      type:Boolean,
      default:true,
    },
    effect:{
      type:String,
      default:"slide"
    },
    delay:{
      type:Number,
      default:2000
    }
  },

  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        },
         autoplay:{
           delay:this.delay,
           disableOnInteraction: false,
         },
         loop: true,
        effect:this.effect,
      }
    };
  },
  methods: {},
  components: {}
};
</script >

<style scoped lang='less'>
.swiper-container{
    margin-top:0rem;
    height:1.13rem;
}
.swiper-pagination{
    top:-.1rem;
}
.swiper-slide {
  width:100%;
img{
  width:100%;
}
}
</style>
