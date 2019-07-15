<template>
  <div class="big-box">
    <div class="header">
      <span class="back">
        <img src="../image/nav-icon@2x.png" alt />
      </span>
      <span class="head">设置</span>
    </div>
    <div class="set">
      <p>设置支付密码 <a href="#">></a></p>
      <p>关于我们 <a href="#">></a></p>
      <p>隐私声明 <a href="#">></a></p>
      <input type="button" value="提交" class="putin" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Setting",
  data() {
    return {};
  },
  methods: {},
  components: {}
};
</script>

<style scoped lang="less">
.big-box {
  height: 100%;
  background: #f7f8fa;
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
  .set {
    margin: 0.16rem;
    font-size: 0.16rem;
    p {
      width: 3.42rem;
      height: 0.45rem;
      background: #fff;
      border-radius: 0.1rem;

      padding: 0.12rem;
      margin-top: 0.12rem;
      text-align: left;
      a{
        display: inline-block;
        float: right;
        color: black;
      }
    }
    .putin {
      width: 3.43rem;
      height: 0.44rem;
      background-color: #f9c307;
      border-radius: 0.22rem;
      color: #fff;
      font-size: 0.2rem;
      position: fixed;
      bottom: 0.16rem;
      left: 0.16rem;
    }
  }
}
</style>