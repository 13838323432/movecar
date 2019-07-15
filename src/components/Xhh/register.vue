<template>
  <div>
      <div class="register">
<div class="header">
      <router-link to="/guide">
        <img src="./../../image/xhh/返回(1)拷贝6@2x.png" alt />
       </router-link>
</div>
<div class="log">
    <img src="./../../image/xhh/图层2@2x.png" alt="">
</div>
<div class="ipt">
<div class="top">
<input type="text" required placeholder="请输入手机号">
<input type="text" required placeholder="请输入验证码">
<input type="password" required placeholder="请输入密码">
<div class="right">获取验证码</div>
</div>
 <router-link to="/login">
<button>注册</button>
<p>点击注册表示同意《平价租车协议》</p>
</router-link>
</div>
  </div>
  </div>
</template>

<script>
export default {
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

<style scoped lang="less">

.register{
.header {
    margin-top:.35rem;
    margin-left:.32rem;
  a {
      width: 0.09rem;
      height: 0.16rem;
    img {
      width: 0.09rem;
      height: 0.16rem;
    }
  }
  }
.log{
    margin-top:.24rem;
    margin-left:1.23rem;
    img{
        widows: 1.32rem;
        height:.76rem;
    }
}
.ipt{
    margin:.2rem;
    width:3.43rem;
    height:4.1rem;
    background:rgba(255,255,255,1);
    box-shadow:0px 5px 20px 0px rgba(223,223,223,0.91);
    border-radius:20px;
    .top{
        width:3.11rem;
        height:1.58rem;
        margin-left:.13rem; 
        font-size:0;
        position: relative;
        input{
            margin:0;
            width:100%;
            height:.4rem;
            border-bottom: 1px solid rgba(232,232,232,1); 
        }
           input::-webkit-input-placeholder{
               font-size:14px;
               font-weight:400;
               color:rgba(153,153,153,1);
               line-height:14px;
               padding-left:.53rem;
        }
        input:nth-child(1){
            margin-top:.35rem;
        }
        .right{
            width:.99rem;
            height:.29rem;
            border:1px solid rgba(153,153,153,1);
            border-radius:5px;
            font-size:.14rem;
            font-family:PingFang-SC-Regular;
            font-weight:400;
            color:rgba(255,0,0,1);
            line-height:.29rem;
            position: absolute;
            top:.8rem;
            left:1.9rem;

        }
    }
    button{
        width:2.95rem;
        height:.45rem;
        background:rgba(249,195,7,1);
        color:rgba(255,255,255,1);
        font-weight:bold;
        font-size:.16rem;
        border-radius:23px;
    }
    p{
        font-size:.14rem;
        margin-top:.06rem;
        font-weight:400;
        color:rgba(102,102,102,1);
    }
}
}
</style>
