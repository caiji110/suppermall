<template>
  <div id="bottomnav">
      <div class="left">
          
            <div class="box"><checkbutton class="allselect" v-model = 'isall' @waschecked='allcheck'></checkbutton></div>
            <div class="xuan">全选</div>
       
        <div class="totalprice">合计: ￥{{totalmoney}}</div>
      </div>
  <div class="buyproduct"><a href="https://www.baidu.com/"> 去付款</a>
     
    </div>
  </div>
</template>
<script>
    import checkbutton from './checkbutton.vue'
  export default {
      name:"bottomnav",
      components: {
        checkbutton,
      },
      data () {
          return {
              value:true
          }
      },
     
      computed: {
        isall(){
            if(this.$store.state.cartlist.length == 0)
            return false
            return (this.$store.state.cartlist.find(item => item.checked==false)) ===undefined
        },
        totalmoney(){
            return this.$store.state.cartlist.filter(item => item.checked).reduce((preitem,item)=>{
                return preitem +item.price*item.count},0).toFixed(2)
            },
        
      },
      methods: {
        
          allcheck(){
              
            let temp = this.$store.state.cartlist.find(item => item.checked==false)
            // console.log('全选:'+temp);
            //  console.log(this.value);
            //  console.log(temp);
            if(temp){
                //存在有选项没被选中的情况
               
                this.$store.state.cartlist.forEach((e,index) => {
                    if(e.checked == false){
                        this.$store.commit('changechecked1', index)
                    }
                });
            }
            else{
              //全部被选中
              this.value =!this.value
             // console.log('2222222');
              this.$store.state.cartlist.forEach((e,index) => {
                   
              this.$store.commit('changechecked1', index)
                   
                });
            }
          }
      }
  }
</script>
<style scoped>
  #bottomnav{
      position: fixed;
      bottom: 58px;
      right: 0px;
      left: 0px;
      background-color: #eeeeee;
    height: 45px;
  }
  .xuan{
      position: relative;
      top: -19px;
      left: 50px;
  }

  .buyproduct{
     
      position: relative;
      top: 12px;
     right: -201px;
   
  }
  .allselect{
      position: relative;
      left: 20px;
      top: -11px;
      width: 20px;
      height: 20px;
      border-radius: 10px;
  }
  .box{
      position: relative;
      margin-top: 10px;
  }
  .totalprice{
      position: relative;
      top: -37px;
      left: 100px;
    
  }
  
</style>