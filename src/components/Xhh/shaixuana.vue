<template>
  <div class="shaixuana">
   <div class="header">
      <span class="back">
        <img src="./../../image/xhh/icon_back@2x.png" alt />
      </span>
      <span class="head">筛选</span>
      <span class="heada">取消</span>
    </div>
    <div class="link">
    <router-link  to="/shaixuana">按价格</router-link>
    <router-link  to="/shaixuanb">按车型</router-link>
    
    </div>
    <ul>
      <li v-for="(item,ind) in Fo" :key="ind" @click="dian(ind)">
        <span class="spa">{{item.title}}</span>
        <span class="spb"> 
          <img src="./../../image/xhh/icon_duihao@2x.png"
          v-show="ind == numbe?true:false">
         <img src="./../../image/xhh/icon_1_n@2x.png"
          v-show="ind == numbe?false:true"></span>
        </li>
    </ul>
    <div class="button">
    <button>确定</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
Fo:[
            {title:"价格不限"},
            {title:"￥150以下"},
            {title:"￥150-￥300"},
            {title:"￥300-￥500"},
            {title:"￥500以上"},
        ],
        numbe:0,
    }
  },
  methods: {
dian(ind){
      this.numbe=ind;
      console.log(ind);
    },
  },
  components: {

  }
}
</script>

<style scoped lang="less">
body ,html{
    background:#F7F8FA;
  width:100%;
  padding:100%;
}
.shaixuana{
  margin-top:0.135rem;
  
.header {
  width: 100%;
  height: 0.45rem;
  background-color: #f9c307;
  display: flex;
  align-items: center;
  .back {
    display:flex;
    justify-content: center;
    align-items:center;
    width:0.32rem;
   height:100%;
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
  .heada{
      margin-left: 1.275rem;
    font-size: 0.14rem;
    color: white;
    font-weight: 500;
    letter-spacing: 1px;
  }
}
.link{
    height:.46rem;
a{  
    font-size: .16rem;
    color:black;
     float:left;
     margin-top:.16rem;
}
a.router-link-active{   
                border-bottom: #f9c307 2px solid; 
                               color:#f9c307;
         }
a:nth-child(1){
    margin-left:.7rem;
}
a:nth-child(2){
    margin-left:2.58rem;
    margin-top:-0.2rem;
}
}
ul{
     margin:.16rem;
     border: 1px solid gainsboro;
     border-radius: 5%;
     font-size: .16rem;
     text-align: left;
     background:#FFFFFF;
     height:2.24rem;
     li{
         overflow: hidden;
         height:20%;
         border-bottom: 1px solid #dfdfdf;
         margin: 0 .12rem;
         .spa{
              margin-top:.14rem;
              float:left;
              color:rgba(102,102,102,1);
         }
         .spb{
            width:.21rem;
            height:.21rem;
             margin-top:.14rem;
             float:right;
         }
         img{
           width:100%;
           height:100%;
         }
     }
     li:last-child{
         border:none;
     }

 }
 .button{    
     margin-top: 1.9rem;
 button{
     border:none;
     background:#F9C307;
     color:#FFFFFF;
     font-size: .2rem;
     width: 3.43rem;
     height:.44rem;
     border-radius:.22rem;
     margin:0 .17rem;
 }
 }
}
</style>

 