<template>
  <div class="chose-time">
    <div>
      <p @touchstart="f1()" class="begin">
        <span>请选择开始时间</span>
      </p>
      <p @touchstart="fn()" class="end">
        <span>请选择结束时间</span>
      </p>
    </div>
    <van-datetime-picker
  v-model="currentDate"
  type="date"
  :min-date="minDate"
  @change="change"
  style="background:#eee;"
  :class="{show:bol}"
/>

    <van-datetime-picker
  v-model="currentDate"
  type="date"
  :min-date="minDate_"
  @change="change_"
  style="background:#eee;"
  :class="{show_:bol_}"
/>
  </div>
</template>

<script>
export default {
  data() {
    return {
    currentDate: new Date(),
    minDate:new Date(),
    minDate_:new Date(),
    bol:true,
    bol_:true,
    text:'',
    }
  },
  mounted(){
document.getElementsByClassName('van-picker__columns')[0].style.width=100+'%';
document.getElementsByClassName('van-picker__columns')[1].style.width=100+'%';
document.getElementsByClassName('van-picker__columns')[0].style.marginTop=1.2+'rem';
document.getElementsByClassName('van-picker__columns')[1].style.marginTop=1.2+'rem';
document.getElementsByClassName('van-picker__columns')[0].style.background="skyblue";
document.getElementsByClassName('van-picker__columns')[1].style.background="skyblue";
document.getElementsByClassName('van-picker-column__wrapper')[0].style.fontSize=.2+'rem';
document.getElementsByClassName('van-picker-column__wrapper')[1].style.fontSize=.2+'rem';
document.getElementsByClassName('van-picker-column')[1].style.fontSize=.2+'rem';
document.getElementsByClassName('van-picker-column')[2].style.fontSize=.2+'rem';
document.getElementsByClassName('van-picker-column')[3].style.fontSize=.2+'rem';
document.getElementsByClassName('van-picker-column')[4].style.fontSize=.2+'rem';
document.getElementsByClassName('van-picker-column')[5].style.fontSize=.2+'rem';
document.getElementsByClassName('van-picker__confirm')[0].style.display="none";
document.getElementsByClassName('van-picker__cancel')[0].style.display="none";
document.getElementsByClassName('van-picker__confirm')[1].style.display="none";
document.getElementsByClassName('van-picker__cancel')[1].style.display="none";
  },
  updated(){
    // console.log('1')
       let begin=document.getElementsByClassName('begin')[0].textContent.split('/');
       let end=document.getElementsByClassName('end')[0].textContent.split('/');
       console.log(begin,end)
      let begintime=new Date(begin[0],begin[1],begin[2])
      let endtime=new Date(end[0],end[1],end[2])
      let begintimer=begintime.getTime()
      let endtimer=endtime.getTime()
      // console.log(begintime)
      // console.log(endtime)
      console.log(begintimer)
      console.log(endtimer)
      console.log((endtimer-begintimer)/1000/60/60/24 )
  },
  methods:{
    change(e){
      console.log(e.getValues())
      this.text=e.getValues()
      let begin=document.getElementsByClassName('begin')[0];
      begin.innerHTML=this.text[0]+'/'+this.text[1]+'/'+this.text[2];
    },
    change_(e){
      this.num=1
      console.log(e.getValues())
      this.text=e.getValues()
        let end=document.getElementsByClassName('end')[0];
        end.innerHTML=this.text[0]+'/'+this.text[1]+'/'+this.text[2];
    },
    f1(){
       let begin=document.getElementsByClassName('begin')[0];
      let nowyear=document.getElementsByClassName('van-picker-column__item--selected')[0].textContent;
      let nowmonth=document.getElementsByClassName('van-picker-column__item--selected')[1].textContent;
      let nowdate=document.getElementsByClassName('van-picker-column__item--selected')[2].textContent;
      begin.innerHTML=nowyear+'/'+nowmonth+'/'+nowdate;
      this.bol=!this.bol;
      this.bol_=true;
    },
    fn(){
      let end=document.getElementsByClassName('end')[0];
      let nowyear=document.getElementsByClassName('van-picker-column__item--selected')[0].textContent;
      let nowmonth=document.getElementsByClassName('van-picker-column__item--selected')[1].textContent;
      let nowdate=document.getElementsByClassName('van-picker-column__item--selected')[2].textContent;
      end.innerHTML=nowyear+'/'+nowmonth+'/'+nowdate;
      this.bol_=!this.bol_;
         this.bol=true;
    }
  }
};
</script >

<style scoped lang='less'>
.chose-time {
  height: 0.6rem;
  width: 100%;
  div {
    padding: 0 0.17rem;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  p {
    height:100%;
    border-radius: 0.05rem;
    text-indent: 0.05rem;
    width: 1.5rem;
    line-height:0.6rem;
    font-size: 0.14rem;
    margin-right: 0.1rem;
    color:rgb(104, 100, 100);
  }
  p:nth-child(2) {
    margin-right: 0;
  }
  .time {
    display: none;
  }
  .time_ {
    display: none;
  }
 .show{
   display:none;
 }
 .show_{
   display:none;
 }
}
</style>
