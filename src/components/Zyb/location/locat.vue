<template>
  <div class="big-box">
    <div class="header">
      <span class="back">
        <img src="../image/nav-icon@2x.png" alt />
      </span>
      <span class="head">城市</span>
    </div>
    <!-- 定位 -->
    <div class="locat">
      <p>定位/最近访问</p>
      <ul>
        <li>
          <ul>
            <li>
              <img src="../image/定位拷贝2@2x.png" alt />
            </li>
            <li>郑州</li>
          </ul>
        </li>
        <li>上海</li>
        <li>西藏</li>
      </ul>
    </div>
    <!-- 热门城市 -->
    <div class="hot">
      <p>热门城市</p>
      <ul>
        <li v-for="(value,index) in hot" :key="index">{{value}}</li>
        <!-- <li>郑州</li>
        <li>拉萨</li>
        <li>北京</li>
        <li>上海</li>
        <li>杭州</li>
        <li>香港</li>
        <li>广州</li>
        <li>洛阳</li>
        <li>偃师</li> -->
      </ul>
    </div>
    <!-- 右侧字母 -->
    <div class="letter">
      <a href="" v-for="(alp,num) in let" :key="num">{{alp}}</a>
      <!-- <a href>A</a>
      <a href>B</a>
      <a href>C</a>
      <a href>D</a>
      <a href>E</a>
      <a href>F</a>
      <a href>G</a>
      <a href>H</a>
      <a href>I</a>
      <a href>J</a>
      <a href>K</a>
      <a href>L</a>
      <a href>M</a>
      <a href>N</a>
      <a href>O</a>
      <a href>P</a>
      <a href>Q</a>
      <a href>R</a>
      <a href>S</a>
      <a href>T</a>
      <a href>U</a>
      <a href>V</a>
      <a href>W</a>
      <a href>X</a>
      <a href>Y</a>
      <a href>Z</a> -->
    </div>
    <!-- 字母排序的城市 -->
    <div class="zmcity">
      <ul class="rank">
        <li class="aip">A</li>
        <li class="city">
          <ul>
            <li>啊啊啊</li>
            <li>bbb</li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Locat",
  data() {
    return {
      hot:[
        "郑州",
        "拉萨",
        "北京",
        "上海",
        "杭州",
        "香港",
        "广州",
        "洛阳",
        "偃师"
      ],
      let:[
        "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
      ]
    };
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
  .locat {
    margin: 0.17rem;

    p {
      font-size: 0.15rem;
      text-align: left;
    }
    ul {
      display: flex;
      margin: 0.13rem 0;

      li {
        font-size: 0.13rem;
        width: 0.76rem;
        height: 0.25rem;
        line-height: 0.25rem;
        background: white;
        border-radius: 0.12rem;
        margin-right: 0.24rem;
        ul {
          display: flex;
          margin: 0;
          li {
            width: 0.35rem;
            margin: 0;
            img {
              width: 0.13rem;
              height: 0.16rem;
              margin: 0.05rem auto;
            }
          }
        }
      }
    }
  }
  .hot {
    margin: 0.17rem;

    p {
      font-size: 0.15rem;
      text-align: left;
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      margin: 0.13rem 0;
      li {
        font-size: 0.13rem;
        width: 0.76rem;
        height: 0.25rem;
        line-height: 0.25rem;
        background: white;
        border-radius: 0.12rem;
        margin: 0 0.24rem 0.12rem 0;
      }
    }
  }
  .letter {
    width: 0.15rem;
    height: 4.98rem;
    position: fixed;
    top: 1.23rem;
    right: 0.03rem;
    overflow: hidden;
    a {
      width: 0.15rem;
      font-size: 0.16rem;
      color: #f9c307;
      float: right;
    }
  }
  .zmcity {
    margin: 0 0.17rem;
    .rank {
      text-align: left;
      .aip {
        margin-bottom: 0.16rem;
        font-size: 0.12rem;
      }
      .city {
        font-size: 0.14rem;
        background: white;

        ul {
          li {
            padding: 0.14rem 0 0.13rem 0.11rem;
            border-bottom: 1px solid #f1f1f1;
            border-radius: 0.1rem;
          }
        }
      }
    }
  }
}
</style>