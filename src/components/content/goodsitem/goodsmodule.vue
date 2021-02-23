<template>
    <div id="goodsmodule">
     <goodsitem class="items" 
     :goodsitem='item'
      v-for = '(item,index) in goods' 
      :key="index"
      
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
        props: {
            goods:{
                type:Array
            }
        },

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