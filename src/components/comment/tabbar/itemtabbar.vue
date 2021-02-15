<template>
    <div class="tab-bar-item" @click = 'clickme'>
    <div  v-if ="!isactive"><slot name = 'item-icon'></slot></div>  
    <div v-else-if =" isactive"><slot name = 'item-icon-active'></slot></div>
      
       <p :style='isstyle'><slot name = 'item-text'></slot></p> 
    </div>


</template>
<script>
    export default {
        name: "TabBaritem",
       
        
        props: {
            path:{
                type:String,
                
            },
            activecolor:{
                type:String,
                default:'red'
            }
        },
        computed: {
            isactive(){
                  return this.$route.path.indexOf(this.path)!==-1
            },
            isstyle(){
                return  this.isactive?{color:this.activecolor}:{}
            }
        },
        methods: {
            clickme(){
              
               if(this.$route.path==this.path){
                  
                   return 1;
               }
               else this.$router.push(this.path)
            }
        }
    }
</script>
<style scoped>

    .tab-bar-item img {
        width: 24px;
        height: 24px;
        margin-top: 5px;
        vertical-align: middle;
    }

    .tab-bar-item p {
        margin-top: 0px;
        font-size: 14px;
    }
  
</style>