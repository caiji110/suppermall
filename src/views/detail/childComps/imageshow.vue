<template>
    <div id="imageshow" v-if='istrue'>
        <div  class="imagesbox"> 上身效果展示 </div>
        <div v-for = '(item,index) in imageshow' :key="index">
            <img :src="item" alt="" @load ='showimageload'>
        </div>
      
    </div>
</template>
<script>
  export default {
      name:"imageshow",
      props: {
          imageshow:{
              type:Array,
          }         
      },
      data () {
          return {
              istrue:false,
              isload:true
          }
      },
      //按道理来说 这里应该去监听图片的加载完成后再去计算滚动的高度。
      created () {
           const a= setInterval(() => {
                if(this.imageshow){
                    this.istrue = true
                }
            }, 100);
            if(this.istrue){
               clearInterval(a)
            }
            // 防止因为异步操作的原因无法立马传过来值
        },
        methods: {
            showimageload(){
              this.$emit('showload');
             
            }
        }
  }
</script>
<style scoped>
   #imageshow img{
       width: 100%;
       height: 100%;
   }
   .imagesbox{
       font-size: 30px;
       width: 200px;
       height: 50px;
       margin-bottom: 7.6vw;
       border-radius: 25px;
       background-color: #f2f5f8;
       text-align: center;
       line-height: 50px;
       margin-left: 21.33vw;
       margin-top: 25px;
   }
</style>