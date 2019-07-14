<template>
  <div class="time">
    <div class="nowtime">
      <p class="nowdate"></p>
      <p class="nowweek"></p>
    </div>
    <div class="adjust">
      <span id="show">1天</span>
      <input type="range" step="1" value="1" max="10" min="1" name="1" id="time_" @input="change" />
    </div>
    <div class="futime">
      <p class="fudate"></p>
      <p class="fuweek"></p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    var nowday = document.getElementsByClassName("nowdate")[0];
    var nowweek = document.getElementsByClassName("nowweek")[0];

    var fuday = document.getElementsByClassName("fudate")[0];
    var fuweek = document.getElementsByClassName("fuweek")[0];
    let nowtime = new Date();
    let day = nowtime.getDate();
    let fuday_ = nowtime.getDate() + 1;
    let week = nowtime.getDay();
    let fuweek_ = nowtime.getDay() + 1;
    let month = nowtime.getMonth();
    console.log(fuweek);
    console.log(day, week);
    console.log(fuday_, fuweek_);
    switch (fuweek_) {
      case 0:
        fuweek.innerHTML = "星期日";
        break;
      case 1:
        fuweek.innerHTML = "星期一";
        break;
      case 2:
        fuweek.innerHTML = "星期二";
        break;
      case 3:
        fuweek.innerHTML = "星期三";
        break;
      case 4:
        fuweek.innerHTML = "星期四";
        break;
      case 5:
        fuweek.innerHTML = "星期五";
        break;
      case 6:
        fuweek.innerHTML = "星期六";
        break;
      case 7:
        fuweek.innerHTML = "星期日";
        break;
    }
    switch (month) {
      case 0:
        fuday.innerHTML = "1月" + fuday_ + "日";
        break;
      case 1:
        fuday.innerHTML = "2月" + fuday_ + "日";
        break;
      case 2:
        fuday.innerHTML = "3月" + fuday_ + "日";
        break;
      case 3:
        fuday.innerHTML = "4月" + fuday_ + "日";
        break;
      case 4:
        fuday.innerHTML = "5月" + fuday_ + "日";
        break;
      case 5:
        fuday.innerHTML = "6月" + fuday_ + "日";
        break;
      case 6:
        fuday.innerHTML = "7月" + fuday_ + "日";
        break;
      case 7:
        fuday.innerHTML = "8月" + fuday_ + "日";
        break;
      case 8:
        fuday.innerHTML = "9月" + fuday_ + "日";
        break;
      case 9:
        fuday.innerHTML = "10月" + fuday_ + "日";
        break;
      case 10:
        fuday.innerHTML = "11月" + fuday_ + "日";
        break;
      case 11:
        fuday.innerHTML = "12月" + fuday_ + "日";
        break;
    }
    switch (week) {
      case 0:
        nowweek.innerHTML = "星期日";
        break;
      case 1:
        nowweek.innerHTML = "星期一";
        break;
      case 2:
        nowweek.innerHTML = "星期二";
        break;
      case 3:
        nowweek.innerHTML = "星期三";
        break;
      case 4:
        nowweek.innerHTML = "星期四";
        break;
      case 5:
        nowweek.innerHTML = "星期五";
        break;
      case 6:
        nowweek.innerHTML = "星期六";
        break;
    }
    switch (month) {
      case 0:
        nowday.innerHTML = "1月" + day + "日";
        break;
      case 1:
        nowday.innerHTML = "2月" + day + "日";
        break;
      case 2:
        nowday.innerHTML = "3月" + day + "日";
        break;
      case 3:
        nowday.innerHTML = "4月" + day + "日";
        break;
      case 4:
        nowday.innerHTML = "5月" + day + "日";
        break;
      case 5:
        nowday.innerHTML = "6月" + day + "日";
        break;
      case 6:
        nowday.innerHTML = "7月" + day + "日";
        break;
      case 7:
        nowday.innerHTML = "8月" + day + "日";
        break;
      case 8:
        nowday.innerHTML = "9月" + day + "日";
        break;
      case 9:
        nowday.innerHTML = "10月" + day + "日";
        break;
      case 10:
        nowday.innerHTML = "11月" + day + "日";
        break;
      case 11:
        nowday.innerHTML = "12月" + day + "日";
        break;
    }
  },
  methods: {
    change() {
      let time = document.getElementById("time_");
      let date = document.getElementById("show");
      date.innerHTML = time.value + "天";

      var fuday = document.getElementsByClassName("fudate")[0];
      var fuweek = document.getElementsByClassName("fuweek")[0];
      fuday.innerHTML = "";
      fuweek.innerHTML = "";
      let nowtime_ = new Date();
      let date_=nowtime_.getDate()+4;
      console.log(date_)
      let newtime=new Date("2019 7 "+date_)
        console.log(newtime)
      let month = nowtime_.getMonth();
      // switch (fuweek_) {
      //   case 0:
      //     fuweek.innerHTML = "星期日";
      //     break;
      //   case 1:
      //     fuweek.innerHTML = "星期一";
      //     break;
      //   case 2:
      //     fuweek.innerHTML = "星期二";
      //     break;
      //   case 3:
      //     fuweek.innerHTML = "星期三";
      //     break;
      //   case 4:
      //     fuweek.innerHTML = "星期四";
      //     break;
      //   case 5:
      //     fuweek.innerHTML = "星期五";
      //     break;
      //   case 6:
      //     fuweek.innerHTML = "星期六";
      //     break;
      //   case 7:
      //     fuweek.innerHTML = "星期日";
      //     break;
      // }
      // switch (month) {
      //   case 0:
      //     fuday.innerHTML = "1月" + fuday_ + "日";
      //     break;
      //   case 1:
      //     fuday.innerHTML = "2月" + fuday_ + "日";
      //     break;
      //   case 2:
      //     fuday.innerHTML = "3月" + fuday_ + "日";
      //     break;
      //   case 3:
      //     fuday.innerHTML = "4月" + fuday_ + "日";
      //     break;
      //   case 4:
      //     fuday.innerHTML = "5月" + fuday_ + "日";
      //     break;
      //   case 5:
      //     fuday.innerHTML = "6月" + fuday_ + "日";
      //     break;
      //   case 6:
      //     fuday.innerHTML = "7月" + fuday_ + "日";
      //     break;
      //   case 7:
      //     fuday.innerHTML = "8月" + fuday_ + "日";
      //     break;
      //   case 8:
      //     fuday.innerHTML = "9月" + fuday_ + "日";
      //     break;
      //   case 9:
      //     fuday.innerHTML = "10月" + fuday_ + "日";
      //     break;
      //   case 10:
      //     fuday.innerHTML = "11月" + fuday_ + "日";
      //     break;
      //   case 11:
      //     fuday.innerHTML = "12月" + fuday_ + "日";
      //     break;
      // }
    }
  },
  components: {}
};
</script >

<style scoped lang='less'>
.time {
  height: 0.65rem;
  padding: 0.1rem 0.17rem;
  font-size: 0.2rem;
  color: #333;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  .adjust {
    position: relative;
    #show {
      margin-bottom: 0.04rem;
      position: absolute;
      top: -0.08rem;
      left: 0.5rem;
    }
  }
  .nowweek,
  .fuweek {
    font-size: 0.12rem;
    color: #959595;
  }

  #time_ {
    height: 2px;
    background: rgb(116, 110, 110);
    rang {
      border-radius: 50%;
    }
  }
}
</style>
