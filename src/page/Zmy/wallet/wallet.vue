<template>
  <div>
    <Header txt="我的钱包">
      <router-link to='' slot="left" class="left">
        <img src="./../img/icon_back@2x.png"/>
      </router-link>      
    </Header>
    <div class="content">
      <div class="jifen">
        <ul>
          <li>
            <a href>
              <span>1200</span>
              <span>积分</span>
            </a>
          </li>
          <li>
            <a href>
              <span>1200</span>
              <span>余额</span>
            </a>
          </li>
          <li>
            <a href>
              <span>2030</span>
              <span>平驾币</span>
            </a>
          </li>
        </ul>
      </div>
      <div class="card">
        <div class="one">
          <img src="./img/zhaoshang.png" alt />
          <div class="right">
            <p>招商银行</p>
            <p>储蓄卡</p>
          </div>
        </div>
        <div class="two">
          <img src="./img/chinabank.png" alt />
          <div class="right">
            <p>招商银行</p>
            <p>储蓄卡</p>
            <p>6225 **** **** 7678</p>
          </div>
        </div>
      </div>
      <div class="add">添加新的银行卡</div>
      <div class="tt">
        <p>说明:</p>
        <ol type=1>
          <li> 1平币=1元</li>
          <li> 平驾币可用于冲抵租车消费</li>
          <li> 平驾币不可取现</li>
          <li> 1积分=1元，每单最高可使用积分冲抵40%的租车费用&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;添加银行卡</li>
        </ol>
      </div>
    </div>
    <router-link to='/recharge'>
      <Foot text='现在去充值'></Foot>
    </router-link>
    
  </div>
</template>

<script>
import Header from "./../../../components/Zmy/head/head";
import Foot from "./../../../components/Zmy/foot";
export default {
  data() {
    return {};
  },
  methods: {},
  components: {
    Header,
    Foot
  }
};
</script>

<style scoped lang='less'>
.content {
  .jifen {
    width: 100%;
    height: 1.16rem;
    font-size: 0.24rem;
    color: #333333;
    box-sizing: border-box;
    // padding-bottom: .16rem;
    ul {
      display: flex;
      flex-direction: row;
      height: 100%;
      li {
        // padding-top: 1rem;
        flex: 1;
        a {
          color: #333333;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-top: 0.53rem;
          font-weight: bold;
          span:nth-child(2) {
            padding-top: 0.05rem;
            font-size: 0.14rem;
            font-weight: normal;
          }
        }
      }
    }
  }
  .card {
    height: 1.76rem;
    position: relative;
    top: 0.16rem;
    left: 0.16rem;
    .one {
      position: absolute;
      width: 3.43rem;
      height: 1.03rem;
      background: #ff6666;
      border-radius: 0.1rem;
      z-index: 1;
      overflow: hidden;
      .right {
        float: left;
        font-size: 0.16rem;
        color: white;
        margin-top: 0.15rem;
        font-weight: heavy;
        text-align: left;
        p:nth-child(2) {
          font-size: 0.13rem;
        }
      }
    }
    .two {
      position: absolute;
      top: 0.73rem;
      width: 3.43rem;
      height: 1.03rem;
      background: #f3c200;
      border-radius: 0.1rem;
      z-index: 2;
      overflow: hidden;
      .right {
        float: left;
        font-size: 0.16rem;
        color: white;
        margin-top: 0.15rem;
        font-weight: heavy;
        text-align: left;
        p:nth-child(2) {
          font-size: 0.13rem;
        }
        p:nth-child(3) {
          font-size: 0.15rem;
          margin-top: 0.18rem;
        }
      }
    }
    img {
      margin: 0.3rem 0.29rem 0 0.3rem;
      width: 0.45rem;
      height: 0.45rem;
      float: left;
    }
  }
  .add {
    width: 3.43rem;
    height: 0.38rem;
    line-height: 0.38rem;
    font-size: 0.15rem;
    margin-top: 0.38rem;
    background: #f3c200;
    border-radius: 0.05rem;
    margin-left: 0.16rem;
    color: white;
  }
  .tt{
    margin: .18rem .16rem 0.11rem .16rem;
    p{
        font-size: .12rem;
        padding: .12rem 0 0 .12rem;
        list-style: none;
        text-align: left;
        font-weight: bold;
      }
    ol{
      font-size: .14rem;
      text-align: left;
      font-weight: bold;
      
      li{
        list-style: decimal;
        padding: 0.05rem .15rem 0.05rem 0;
        margin-left: .26rem;
      }
    }

  }
}
</style>
