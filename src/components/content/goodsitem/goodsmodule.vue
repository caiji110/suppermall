<template>
    <div id="goodsmodule" v-if = 'isshow'>
     <goodsitem class="items" 
     :goodsitem='item'
      v-for = '(item,index) in goods' 
      :key="index"
      :goodslength = 'goodslength'
      ></goodsitem>
    </div>
</template>
<script>
    import goodsitem from './goodsitem.vue'
    export default {
        name:"goodsmodule",
        components: {
            goodsitem
        },
        data () {
            return {
                isshow:false,
                goodslength:0
            }
        },
       
        props: {
            goods:{
                type:Array
            }
        },
        created () {
          const a = setInterval(() => {
              //console.log(this.listdata);
                if(this.goods){
                this.isshow = true
               //console.log('wo');
               this.goodslength = this.goods.length
           
             
           }
            }, 200);
            setTimeout(() => {
                clearInterval(a)
            }, 601);
            
        }

    }
</script>
<style scoped>
   
    #goodsmodule {
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;
    justify-content: space-around;
  }
    .items{
       
    width: 48%;
 
    }
</style>