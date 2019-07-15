<template>
  <div class="chose-car">
    <div class="getcar">
      <p>
        <span class="dian"></span>取车地点
      </p>
      <div class="container">
        <span>郑州</span>
        <span>国贸360店</span>
      </div>
      <p class="chose_">
        <span :class="{'bg':!bol}" @touchstart="fn" class="door">上门</span>
        <span :class="{'bg':bol}" @touchstart="fn" class="shop">到店</span>
      </p>
    </div>
    <div class="returncar">
          <p>
        <span class="dian"></span>还车地点
      </p>
      <div class="container">
        <span>郑州</span>
        <span>二七</span>
      </div>
      <p class="chose_">
        <span :class="{'bg':!bol_}" @touchstart="f1" class="door">上门</span>
        <span :class="{'bg':bol_}" @touchstart="f1" class="shop">到店</span>
      </p>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bol: true,
      bol_: true
    };
  },
  methods: {
    fn() {
      this.bol = !this.bol;
    },
    f1() {
      this.bol_ = !this.bol_;
    }
  },
  components: {}
};
</script >

<style scoped lang='less'>
.chose-car {
    position:absolute;
    bottom:.33rem;
  left:.16rem;
  width: 3.5rem;
  height: 1.42rem;
  background: white;
  border-radius: 0.07rem;
  padding: 0.08rem 0.11rem 0.33rem 0.11rem;
  display: flex;
  flex-direction: column;
  .getcar,
  .returncar {
    height: 0.53rem;
    border-bottom: 0.01rem solid #ccc;
    box-sizing: border-box;
    padding: 0.12rem 0 0.1rem 0;
    font-size: 0;
  }
  .getcar,.returncar {
      position:relative;
    p {
      font-size: 0.12rem;
      color: #7a7a7a;
      text-align: left;
      .dian {
        display: inline-block;
        width: 0.1rem;
        height: 0.1rem;
        background: #f8c507;
        border-radius: 50%;
        margin-right: 0.1rem;
      }
    }
    .container {
      position: relative;
      font-size: 0.15rem;
      color: #525050;
      text-align: left;
      text-indent: 0.17rem;
      span:nth-child(1) {
        margin-right: 0.22rem;
      }
    }
    .chose_ {
      padding: 0;
      font-size: 0;
      position: absolute;
      right: 0;
      bottom: .07rem;
      background: #ccc;
      border-radius:.16rem;
      .door,
      .shop {
        font-size: 0.12rem;
        text-align: center;
        width: 0.44rem;
        height:.16rem;
        line-height:.14rem;
        display: inline-block;
        margin: 0;
      }
      .bg {
        background: #fb8c00;
        border-radius: 0.08rem;
        color: white;
        line-height: 0.16rem;
      }
    }
  }
}
</style>
