<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
import setRem from '../static/js/rem'
export default {
  name: 'App',
  component:{},
  mounted(){
    console.log(setRem);
    setRem.setRem();
    window.onresize= setRem.setRem;
    // this.$router.push('/home')    //home
  }
}
</script>

<style>
@import url('../static/css/common.css');
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
