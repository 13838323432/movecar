<template>
  <div >
    <top></top>
    <side></side>
    home
  </div>
</template>

<script>
//头部组件
import top from "./hometop";
// 侧边栏
import side from "./sidebar"
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
    side
  }
};
</script >

<style scoped lang='less'>
</style>
