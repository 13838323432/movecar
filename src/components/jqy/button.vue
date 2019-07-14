<template>
  <div class="button_">
    <router-link to="/home"><button>{{text}}</button></router-link>  
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  props:['text'],
  methods: {

  },
  components: {

  }
}
</script >

<style scoped lang='less'>
.button_{
    margin:0 .16rem;
    background:#f8c507;
    line-height:.44rem;
    text-align:center;
    font-size:.15rem;
    border-radius: .22rem;
    a{
        button{
            background: none;
            color:white;
             height:.44rem;
        }
    }
}
</style>
