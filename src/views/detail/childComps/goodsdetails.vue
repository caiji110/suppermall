<template>
    <div id = 'goods' >
   <div v-if = 'istrue'>
       <div class="iteminfodesc">{{goodsdetails.itemInfo.title}}</div>
       <div class="iteminfoprice" >
        <span class="itemprice">{{goodsdetails.itemInfo.price}}</span>
        <span class="oldprice">{{goodsdetails.itemInfo.oldPrice}}</span>
        <span class="discount">{{goodsdetails.itemInfo.discountDesc}}</span>
       </div>
        <div class="columns">
            <div class="columnsitem" v-for = '(item,index) in goodsdetails.columns' :key="index">{{item}}</div>
           
        </div>
        <div class="shopInfo">
            <div class="shopInfoitem" v-for = '(item,index) in goodsdetails.shopInfo.services' :key="index">
              <img :src="item.icon" alt="">
              <span>{{item.name}}</span>
            </div>
        </div>
   </div>
    </div>
</template>
<script>
    export default {
        name:"goods",
        props: {
            goodsdetails:{
                type:Object,
                default:null
            }
        },
        data () {
            return {
                istrue:false
            }
        },
        created () {
           const a= setInterval(() => {
                if(this.goodsdetails){
                    this.istrue = true
                }
            }, 200);
            if(this.istrue){
               clearInterval(a)
            }
        },
        
        methods: {
            
        }
    }
</script>
<style scoped>
    .iteminfodesc{
      
        color: #222;
        text-align: center;
        margin: 10px 10px 0 10px;
        font-size: 16px;
        font-family:Arial, Helvetica, sans-serif
    }
    .iteminfoprice{
        margin-left: 15px;
        margin-top: 10px;
        position: relative;
        font-size: 23px;
        color: #ff5777;
    }
    .oldprice{
        text-decoration: line-through;
        font-size: 8px;
        color: #999;
        margin-left: 9px;
    }
    .discount{
        top: 2px;
        left: 217px;
        position: absolute;
        display: inline-block;
        width: 52px;
        height: 16px;
        font-size: 12px;
        border-radius: 8px;
        color: white;
      background-color: #ff5777;
      text-align: center;
      font-family:Arial, Helvetica, sans-serif
    }
    .columns{
        display: flex;
        margin-top: 18px;
    margin-left: 14px;
    color: #999;
    }
    .columnsitem{
        flex: 1;
        font-size: 14px;
    }
    .shopInfo{
        border-top:2px solid rgb(245,245,245) ;
        margin-top: 10px;
        padding-top: 10px;
        padding-bottom:10px;
        display: flex;
        flex-wrap: wrap;
        border-bottom:4px solid rgb(245,245,245) ;
    }
    .shopInfo img{
        width: 10px;
        height: 10px;
    }
    .shopInfoitem{
        font-size: 12px;
        margin-top: 5px;
        margin-left: 40px;
        height: 10px;
    }
</style>