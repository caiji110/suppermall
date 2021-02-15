<template>
    <div id="recommend">
      <div class="recommenditem" v-for='(item,index) in recommends' :key="index">
          <a :href="item.link">
              <img :src="item.image" alt="">
              <span>{{item.title}}</span>
          </a>
      </div>
    </div>
</template>
<script>
    
    export default {
        name:"recommend",
        props: {
          recommends:{
            type:Array,
            required:true
          }  
        }
       
    }
</script>
<style scoped>
    #recommend{
        /* display: flex;
        margin-top: 10px;
       padding-bottom: 5px;
      border-bottom:15px solid rgb(245, 240, 240); */
      display: flex;
    margin-top: 10px;
    font-size: 14px;
    padding-bottom: 30px;
    border-bottom: 10px solid #eee;
    }
   .recommenditem{
       flex: 1;
       text-align: center;
   }
   .recommenditem img{
    width: 80px;
    height: 80px;
    margin-bottom: 10px;
   }

</style>