<template>
   <div id="user" v-if = 'istrue'>
     <div class="userdes">
         <div class="left">
             用户评价
         </div>
         <div class="right">
            更多&nbsp;>
         </div>
     </div>
     <div class="commend" v-for ='(item,index) in userdata' :key="index">
         <div class=" userimage">
             <img :src="item.user.avatar" alt="">
              <span> {{item.user.uname}} </span>
         </div>
         <div class="usercommend">
             <p>{{item.content}}</p>
         </div>
         <div class="date">
             <span>2021年1月22号</span>
             <span>{{item.style}}</span>
         </div>
     </div>

   </div>
</template>

<script>
 export  default {
     name:"user",
     data () {
         return {
             istrue:false
         }
     },
     props: {
         userdata:{
             type:Array
         }
     },
     created () {
           const a= setInterval(() => {
                if(this.userdata){
                    this.istrue = true
                }
            }, 100);
            if(this.istrue){
               clearInterval(a)
            }
            //防止因为异步操作的原因无法立马传过来值
        },
 }
</script>

<style scoped> 
  .left{
      margin-top: 24px;
      margin-left: 10px;
      float: left;
  }
  .right{
      float: right;
      margin-top: 24px;
      margin-right: 10px;
  }
  .userdes{
      width: 337px;
      height: 80px;
      border-top: 3px solid rgb(240, 240, 240);
      border-bottom: 3px solid rgb(240, 240, 240);
      margin-left: 20px;
  }
  img{
      width: 40px;
      height: 40px;
      border-radius: 20px;
      vertical-align: middle;
  }
  .userimage{
    margin-top: 28px;
    margin-left: 28px;
  }
  .usercommend p{
      margin-top: 20px;
      margin-left: 28px;
      margin-right: 18px;
  }
  .date span{
     display: inline-block;
     margin-top: 15px;
     margin-left: 28px;
     font-size: 14px;
  }
  .usercommend{
      font-size: 16px;
  }
</style>