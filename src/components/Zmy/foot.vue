<template>
  <div>
    <div class="foot">
      {{ text }}
    </div>
  </div>
</template>

<script>
export default {
  props:['text'],
  data() {
    return {

    }
  },
  methods: {

  },
  components: {

  }
}
</script>

<style scoped lang='less'>
.foot{
  position: fixed;
  bottom: 0;
  margin: 0 .16rem .16rem .16rem;
  width: 3.43rem;
  height: .39rem;
  background: #F9C307;
  color: white;
  line-height: .39rem;
  font-size:.16rem;
  border-radius: .2rem
}

</style>
