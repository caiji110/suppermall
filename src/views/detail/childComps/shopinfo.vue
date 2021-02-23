<template>
    <div id = 'shopinfo'>
     
      <!-- this.logo = shopInfo.shopLogo;
      this.name = shopInfo.name;
      this.fans = shopInfo.cFans;
      this.sells = shopInfo.cSells;
      this.score = shopInfo.score;
      this.goodsCount = shopInfo.cGoods -->
      <div v-if ='istrue'>
          <div class="shoplogo">
              <img :src="shopinfo.shopLogo" alt=""> 
              <span>{{shopinfo.name}}</span>
            </div>
            <div class="shopmiddle">
                <div class="shopmiddleleft">
                    <table>
                        <tr>
                            <th>{{csell}}</th>
                            <th>{{shopinfo.cGoods}}</th>
                            </tr>
                            <tr class="hh">
                                <th>总销量</th>
                                <th>全部宝贝</th>
                                </tr>
                    </table>
                    
                </div>
                <div class="shopmiddleright">
                    <table>
                        <tr v-for = '(item,index) in shopinfo.score' :key="index">
                            <td>{{item.name}}</td>
                            <td class ="score" :class="{'nobetter':!item.isBetter}" >{{item.score}}</td>
                            <td>
                                <span class="score" :class="{'nobetter':!item.isBetter}">{{item.isBetter ? '高':'低'}}</span>
                            </td>
                            
                             
                        </tr>
                    </table>
                </div>
                <div class="shop">
                    <a :href="shopinfo.shopUrl">进店看看</a>
                </div>
            </div>
      </div>
    </div>
</template>
<script>
  export default {
      name:"shopinfo",
      data () {
            return {
                istrue:false,
               
            }
        },
        props: {
          shopinfo:{
              type:Object,
              default:null
          }
      },
        computed: {
            csell(){
               return (this.shopinfo.cSells/10000).toFixed(2) +'万'
            }
        },
        created () {
           const a= setInterval(() => {
                if(this.shopinfo){
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
  .shoplogo{
      margin-top: 24px;
      margin-left: 7px;
  }
 .shoplogo img{
     width: 44px;
     height:44px;
     border-radius: 22px;
     background-color: honeydew;
     vertical-align:middle

 }
 .shoplogo span{
     text-align: center;
     font-size: 17px;
     margin-left: 15px;
 }
 .shopmiddle{
     margin-top: 15px;
    
     border-bottom: 3px solid rgb(246, 245, 245);
 }
  .shopmiddleleft {
      margin-top: 15px;
      padding-left: 10px;
      
    
  }
  .shopmiddleleft table{
      margin-left: 5px;
      font-size: 16px;
      color: #333333;
    border-spacing:30px 7px;
    border-right: 1px solid rgb(206, 205, 205);
  }
  .hh{
      font-size: 12px;
      text-align: center;
  }
  .shopmiddleright table{
      position: relative;
      top: -15.66667vw;
    left: 58.66667vw;
    border-spacing:4.8vw 7px;
    font-size: 12px;
  }
  .score{
      color: red;
  }
  .nobetter{
  color: #5ea732;
  }
  .shop{
      width: 144px;
      height: 29px;
     background-color:#f2f5f8;
     color: #666;
     text-align: center;
     border-radius: 15px;
     line-height: 29px;
     position: relative;
     top: -40px;
     left: 100px;

  }
  
</style>