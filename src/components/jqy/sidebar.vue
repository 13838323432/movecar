<template>
  <div class="side-box" :class="{'ani':bol}" @touchstart="fn" >
    <div class="side-content" >
      <!-- 用户信息 -->
      <div class="side-use">
        <img src="./../../assets/logo.png" alt />
        <h3>派大星</h3>
        <p>
          <span>
            <img src="./../../assets/logo.png" alt />
          </span>
          大众会员
          <span>></span>
        </p>
      </div>
      <!-- 列表 -->
      <div class="side-list">
        <ul>
          <li>
            <router-link to="/sidebar">
              <img src="./../../assets/logo.png" alt />
              钱包
            </router-link>
          </li>
          <li>
            <router-link to="/sidebar">
              <img src="./../../assets/logo.png" alt />订单
            </router-link>
          </li>
          <li>
            <router-link to="/sidebar">
              <img src="./../../assets/logo.png" alt />行程
            </router-link>
          </li>
          <li>
            <router-link to="/sidebar">
              <img src="./../../assets/logo.png" alt />驾驶证
            </router-link>
          </li>
          <li>
            <router-link to="/sidebar">
              <img src="./../../assets/logo.png" alt />设置
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// 引用公共bus.js进行传值
import Bus from './bus.js'
export default {
  data() {
    return {
      bol:''
    };
  },
   mounted: function () {
          var vm = this
          // 用$on事件来接收参数
          Bus.$on('priceChange', (data) => {
            console.log(data)
            vm.bol = data
          })
        },
  methods: {
    fn(){
      this.bol=''
    }
  },
  components: {}
};
</script >

<style scoped lang='less'>

.side-box {
  position:absolute;
  top:0;
  left:-10rem;
  width:100%;
  height:100%;
  background: rgba(117, 115, 115, 0.3);
  height: 100%;
  z-index:999;
  .side-content {
    background: white;
    height: 100%;
    width: 2.3rem;
    .side-use {
      box-sizing: border-box;
      width: 1.57rem;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-content: center;
      padding-top: 0.14rem;
      padding-bottom: 0.15rem;
      border-bottom: 0.01rem solid #ccc;
      img {
        width: 0.72rem;
        height: 0.72rem;
        border-radius: 50%;
        margin: 0 auto;
        background: #ccc;
      }
      h3 {
        font-size: 0.17rem;
        color: #333;
        margin: 0.1rem 0;
      }
      p {
        font-size: 0.11rem;
        color: #999;
        height: 0.12rem;
        line-height: 0.12rem;
        span:nth-child(1) {
          background: #ebebeb;
          width: 0.25rem;
          height: 0.11rem;
          display: inline-block;
          border-radius: 0.03rem;
          margin-right: 0.07rem;
          img {
            width: 0.09rem;
            height: 0.09rem;
            margin: auto;
          }
        }
        span:nth-child(2) {
          line-height: 0.12rem;
          margin-left: 0.1rem;
        }
      }
    }
    //列表
    .side-list {
      padding-top: 0.13rem;
      padding-left: 0.32rem;
      li {
        height: 0.24rem;
        margin-bottom: 0.25rem;
        a {
          display: flex;
          align-items: center;
          font-size: 0.15rem;
          height: 100%;
          color: #333;
          img {
            display: inline-block;
            margin-right: 0.12rem;
            width: 0.24rem;
            height: 0.2rem;
            background: rgb(44, 43, 43);
          }
        }
      }
    }
  }
}
.ani{
position:absolute;
top:0;
left:0;
}
</style>
