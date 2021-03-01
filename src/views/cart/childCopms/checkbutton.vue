<template>
    <div id = 'checkbutton'>
        <img src="../../../assets/img/cart/tick.svg" :class = "{'active':istrue}"  @click = 'ischecked' alt="">
    </div>
</template>
<script>
export default {
    name:"checkbutton",
    props: {
        value:{
            type:Boolean,
            default:false
        }
    },
    data () {
        return {
            istrue:this.value
        }
    },
   
    methods: {
        ischecked(){
            this.$emit('waschecked')
        }
    },
    watch: {
		value:function (newValue) {
        this.istrue = newValue;
      
      }
    }
}
</script>
<style scoped>
    #checkbutton{
       
        position: relative;
         top: 38%;
        border: 1px solid gray;
        
    }  
    .active{
        background-color: tomato;
        border-radius: 50%;
        border-color: white;
    }
</style>