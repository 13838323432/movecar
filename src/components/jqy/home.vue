<template>
  <div>
    <top class="home-top_"></top>
    <side></side>
    <map_></map_>
    <chosecar></chosecar>
    <button_ text="去选车" class="posi_"></button_>
  </div>
</template>
<script>
//头部组件
import top from "./hometop";
// 侧边栏
import side from "./sidebar"
//引入地图
import map_ from "./map"
//引入选车组件
import chosecar from "./chosecar"
//引入按钮组件
import button_ from "./button"
export default {
  data() {
    return {
      bol:''
    };
  },
  methods: {
   
  },
  components: {
    top,
    side,
    map_,
    chosecar,
    button_,
  }
};
</script >

<style scoped lang='less'>
div{
  height:100%;
}
.posi_{
  position:absolute;
  bottom:.13rem;
  left:.65rem;
  width:2.45rem;
}
</style>
