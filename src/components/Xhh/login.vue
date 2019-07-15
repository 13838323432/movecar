<template>
  <div>
      <div class="register">
<div class="log">
    <img src="./../../image/xhh/图层2@2x.png" alt="">
</div>
<div class="box">
  <div class="input">
<span class="spimg"><img src="./../../image/xhh/个人@2x.png" alt=""></span>
<span class="spinput"><input type="text" required placeholder="请输入您的帐号"></span>
</div>
<div class="input inputa">
<span class="spimg"><img src="./../../image/xhh/密码@2x.png" alt=""></span>
<span class="spinput"><input type="password" required placeholder="请输入您的密码"></span>
</div>
<button>登录</button>
<p class="tp">
  <router-link to="/register">
  <span>注册账号</span>
  </router-link>
  <span>忘记密码？</span>
</p>
<p class="tpa">
  <span></span>
  <span class="spa">社交账号登录</span>
  <span></span>
</p>
<footer>
  <img src="./../../image/xhh/形状2@2x.png" alt="">
  <img src="./../../image/xhh/形状3@2x.png" alt="">
  <img src="./../../image/xhh/形状4@2x.png" alt="">
</footer>
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
     font-size:0;
.log{
    margin-top:.81rem;
    margin-left:1.27rem;
    img{
        width: 1.32rem;
        height:.76rem;
    }
}
.box{
  padding:.16rem .12rem;
    margin:.16rem;
    width:3.43rem;
    height:4.1rem;
    background:rgba(255,255,255,1);
    box-shadow:0px 5px 20px 0px rgba(223,223,223,0.91);
    border-radius:20px;
        .input{
            width:3.19rem;
            height:.5rem;
            background:rgba(245,245,245,1);
            border-radius:10px;
            text-align: left;
            overflow: hidden;
            .spimg{
              display: inline-block;
              width: .17rem;
              height:.2rem;
              margin-top:.16rem;
              margin-left:.12rem;
              font-size:0;
              
              img{
                width:100%;
                height:100%;
              }
            }
            .spinput{
            display: inline-block;
            width:2.72rem;
            height:.5rem;
            font-size: 0;
            float:right;
            input{
              width:100%;
            height:100%;
            }
            }
            input{
             background:rgba(245,245,245,1);
            }
           input::-webkit-input-placeholder{
               font-size:.14rem;
               font-weight:400;
               background:rgba(245,245,245,1);
               color:rgba(153,153,153,1);
               line-height:14px;
               
        }
    }
    .inputa{
      margin-top:.16rem;
    }
    button{
      border:none;
       margin-top:.34rem;
        width:3.19rem;
        height:.5rem;
        background:rgba(249,195,7,1);
        color:rgba(255,255,255,1);
        font-weight:bold;
        font-size:.16rem;
        border-radius:23px;
    }
    .tp{
      margin-top:.38rem;
        span{
          font-size: .12rem;
          text-align: left;
          font-family:PingFang-SC-Regular;
          font-weight:400;
          color:rgba(51,51,51,1);
          overflow: hidden;
        }
        span:nth-child(1){
          float:left;
          margin-left:.26rem;
        }
        span:nth-child(2){
          float:right;
          margin-right:.16rem;
        }
    }
    .tpa{
      margin-top:.87rem;
      span{
        display:inline-block;
        width:.83rem;
        border-top:1px solid rgba(204,204,204,1);
      }
      .spa{
        display:inline-block;
        height:.12rem;
        border:none;
        margin-left:.22rem;
        margin-right:.37rem;
        font-size:12px;
        font-family:PingFang-SC-Regular;
        font-weight:400;
        color:rgba(154,172,189,1);
        line-height: .12rem;
      }
    }
    footer{
      margin-top:.28rem;
      font-size:0;
      img{
        margin-left:.61rem;
      width:.32rem;
      height:.32rem;
      float:left;
     }
    }
}
}
</style>
