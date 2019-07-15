<template>
  <div class="big-box">
    <div class="header">
      <span class="back">
        <img src="../image/nav-icon@2x.png" alt />
      </span>
      <span class="head">
        <input type="text" placeholder="请输入地址寻找门店" />
      </span>
    </div>
    <!-- 用车城市 -->
    <div class="orientation">
      <p>用车城市</p>
      <a href="#">郑州 ></a>
    </div>
    <!-- 区域 -->
    <div class="area">
      <ul>
        <li
          v-for="(value,index) in site"
          :key="index"
          class="li"
          :class="{click:index == 0}"
          @click="click(index)"
        >
          <router-link :to="value.to">{{value.text}}</router-link>
        </li>

        
      </ul>
      <!-- 2j路由 -->
      <div class="rouw">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Shop",
  data() {
    return {
      site: [
        {to:'/Shop/fjshop',text:'附近门店'},
        {to:'/Shop/jsshop',text:'金水区'},
        {to:'/Shop/gcshop',text:'城管区'},
        {to:'/Shop/eqshop',text:'二七区'},
        {to:'/Shop/zyshop',text:'中原区'},
        {to:'/Shop/gcshop',text:'惠济区'},
        {to:'/Shop/jkshop',text:'高新区'},
        {to:'/Shop/gcshop',text:'郑东新区'},
        {to:'/Shop/fjshop',text:'龙湖区'},
        {to:'/Shop/jkshop',text:'经开区'},
        {to:'/Shop/gcshop',text:'航空港区'},
        
        
      ],
      num: 0
    };
  },
  methods: {
    click(index) {
      let li = document.getElementsByClassName("li");
      li[this.num].classList.remove("click");
      li[index].classList.add("click");
      this.num = index;
    }
  },
  components: {}
};
</script>

<style scoped lang="less">
.big-box {
  height: 100%;
  background: #f7f8fa;

  .header {
    width: 100%;
    height: 0.52rem;
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
      margin-left: 0.15rem;
      // padding-bottom: 0.07rem;
      font-size: 0.18rem;
      color: white;
      font-weight: 500;
      letter-spacing: 1px;

      input {
        width: 2.9rem;
        height: 0.3rem;
        border-radius: 0.15rem;
        text-align: center;

        background: url("../image/icon_fangdajing@2x.png") no-repeat white 20%
          47%;
        background-size: 0.15rem 0.16rem;
      }
    }
  }
  // 用车城市
  .orientation {
    display: flex;
    justify-content: space-between;
    margin: 0.17rem 0.16rem 0.13rem 0.16rem;
    font-size: 0.15rem;
    color: #999;
    a {
      color: #666;
    }
  }
  // 区域
  .area {
    font-size: 0.13rem;
    text-align: left;
    display: flex;
    .click {
      background: white;
    }
    ul {
      width: 1.03rem;
      li {
        padding: 0.18rem 0.16rem;
        border-bottom: 1px solid #f1f1f1;
        a {
          color: #666;
        }
      }
    }
    .rouw {
      width: 2.72rem;
      background: white;
    }
  }
}
</style>