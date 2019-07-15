<template>
  <div class="big-box">
    <div class="header">
      <span class="back">
        <img src="../image/nav-icon@2x.png" alt />
      </span>
      <span class="head">评价列表</span>
    </div>
    <div class="driving">
      <h1>请按图示上传驾照（正、负页）照片</h1>
      <h2>
        <img src="../image/photo@2x.png" alt />
      </h2>
      <h2>
        <img src="../image/photo@2x.png" alt />
      </h2>
      <input type="button" value="提交" class="putin" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Attestation",
  data() {
    return {};
  },
  methods: {},
  components: {}
};
</script>

<style scoped lang="less">

.big-box {
 
  .header {
    width: 100%;
    height: 0.45rem;
    background-color: #f9c307;
    display: flex;
    padding-top: 0.135rem;
    align-items: center;
    .back {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 0.32rem;
      height: 100%;
      img {
        width: 0.09rem;
        height: 0.16rem;
      }
    }
    .head {
      margin-left: 1.275rem;
      font-size: 0.18rem;
      color: white;
      font-weight: 500;
      letter-spacing: 1px;
    }
  }
  .driving {
    background: #f7f8fa;
    height: 100%;
    h1 {
      font-size: 0.14rem;
      color: rgb(153, 153, 153);
      padding-top: 0.43rem;
    }
    h2 {
      background: #fff;
      width: 2.38rem;
      height: 1.65rem;
      margin: 0.15rem 0.78rem;
      position: relative;
      border-radius: 0.1rem;
      img {
        width: 0.48rem;
        height: 0.48rem;
        position: absolute;
        top: 0.61rem;
        left: 0.95rem;
      }
    }
    .putin {
      margin-top: 1.24rem;
      width: 3.43rem;
      height: 0.44rem;
      background-color: #f9c307;
      border-radius: 0.22rem;
      color: #fff;
      font-size: 0.2rem;
    }
  }
}
</style>