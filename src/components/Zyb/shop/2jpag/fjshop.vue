<template>
  <div class="send">
    <div class="one">
      <h1>
        郑州动物园送车点
        <span>0.69KM</span>
      </h1>
      <h2>郑州市花园路103号(郑州市动物园对面路西地 面停车场)</h2>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  components: {}
};
</script>

<style scoped lang='less'>
.send {
  padding: 0.16rem 0.17rem 0 0.11rem;
  .one {
    font-size: 0.16rem;
    h1 {
      font-size: 0.16rem;
      display: flex;
      justify-content: space-between;
      color: #666;
      padding-bottom: 0.12rem;
      span {
        font-size: 0.09rem;
        color: #999;
      }
    }
    h2{
      font-size: 0.14rem;
      color: #999;
      padding-bottom: 0.16rem;
      border-bottom:1px solid #f1f1f1;
    }
  }
}
</style>
