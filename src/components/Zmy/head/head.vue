<template>
  <div class="header">
    <div class="title"></div>
    <div class="tit">
      <span>{{ txt }}</span>
      <slot name="left"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "headr",
  props: ["txt"],
  data() {
    return {};
  },
  methods: {},
  components: {}
};
</script>
<style scoped lang='less'>
.header {
  width: 100%;
  // height: .65rem;
  background: #f9c307;
  font-size: 0.17rem;
  box-sizing: border-box;
  color: white;
  .title {
    padding: 0.05rem 0.08rem 0 0.08rem;
  }
  .tit {
    position: relative;
    box-sizing: border-box;
    padding: 0.16rem 0.08rem 0.13rem 0.08rem;
    span {
        text-align: center;
      }
      .left {
        // display: inline-block;
        position: absolute;
        left: 0.08rem;
        top: 0.19rem;
        width: 0.09rem;
        height: 0.15rem;
      
    }
  }
}
</style>
