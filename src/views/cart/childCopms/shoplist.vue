<template>
    <div id="shoplist">
     <shopitem :listitem ='item' v-for = '(item,index) in list' :key="index" :itemindex= 'index' :listitemchecked = 'item.checked'></shopitem>
    
    </div>
</template>
<script>
    import shopitem from './shopitem.vue'
    export default {
        name:"shoplist",
        components: {
            shopitem,
        },
        data () {
            return {
              list:this.$store.state.cartlist      
            }
        },
        created () {
            console.log(this.list);
        },
        
    }
</script>