<template>
  <div class="button_">
  <button>{{text}}</button>
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
    height:.44rem;
    margin:0 .16rem;
    background:#f8c507;
    line-height:.44rem;
    text-align:center;
    font-size:.15rem;
    border-radius: .22rem;
     color:white; 
        button{
            background: none;
             height:.44rem;
        }
    
}
</style>
