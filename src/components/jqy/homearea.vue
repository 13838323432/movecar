<template>
  <div class="home-area ">
      <ul>
          <li>
              <span>{{region}}</span>
              <span class="arrow"></span>
              <div class="mess">
                  <h3>{{district}}</h3>
                  <span>{{remark}}</span>
              </div>
              <p class="chose">
                  <span :class="{'bg':!bol}" @touchstart="fn">上门</span>
                  <span :class="{'bg':bol}"  @touchstart="fn" >到店</span>
              </p>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
        bol:true
    }
  },
  props:{
      region:'',
      district:'',
      remark:'',
  },
  methods: {
fn(){
    this.bol=!this.bol
}
  },
  components: {

  }
}
</script >

<style scoped lang='less'>
.home-area{
    height:.91rem;
    font-size:0;
    padding:0 .16rem;
    li{
        display:flex;
        justify-content: space-between;
        align-items: center;
        font-size:0;
        padding:.23rem 0;
        span:nth-child(1){
            font-size:.16rem;
            color:#333;
        }
        .arrow{
        width:0;
        height: 0;
        margin-top:.08rem;
        border-top:.08rem solid #d3d3d3;
        border-left:.08rem solid transparent;
        border-bottom:.08rem solid transparent;
        border-right:.08rem solid transparent;
        }
        .mess{
            display:flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            h3{
                font-size:.14rem;
                color:#333;
                margin-bottom:.04rem;
            }
            span{
                display:inline-block;
                height:.16rem;
                width:1.13rem;
                line-height:.15rem;
                color:white;
                font-size:.1rem;
                background: #FB8C00;
                border-radius:.07rem;
                padding:0 .04rem;
            }
        }
        .chose{
            display:flex;
            background: #DFDFDF;
            border-radius: .08rem;
            height:.17rem;
            .bg{
                background: #FB8C00;
                 border-radius: .08rem;
                 color:white;
                 line-height:.16rem;
            }
            span{
                display: inline-block;
                height:.17rem;
                line-height:.17rem;
                font-size:.1rem;
                padding:0rem .08rem;
            }
        }
    }
}
.border-line{
    height:.61rem;
    li{
        border-bottom: .01rem solid #ccc;
        padding-top:0;
    }
}
</style>
