<template>
  <div class="map-box">
  <baidu-map class="bm-view" :center="center" :zoom="zoom" @ready="handler" > 
  </baidu-map>
  </div>

</template>
<script>

export default {
 data () {
    return {
      center: {lng: 0, lat: 0},
      zoom: 3,
    }
  },

  methods: {
 handler ({BMap, map}) {
      console.log(BMap, map)
      this.center.lng = 113.62 
      this.center.lat = 34.75
      this.zoom = 15
      this.enableScrollWheelZoom=true
    //   map.addControl(new BMap.MapTypeControl());
      map.enableScrollWheelZoom(true);
    },
  },
  components: {

  }
}
</script >

<style scoped lang='less'>
.map-box{
    height:100%;
}
.bm-view {
  width: 100%;
  height: 100%;
//   z-index: 10;
}
</style>
