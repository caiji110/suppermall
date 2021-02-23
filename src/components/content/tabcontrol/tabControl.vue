<template>
    <div id =  'tabControl'>
       <div class="tabControlitem" v-for='(item,index) in  title' :key="index" :class='{active:currentindex==index}'
        @click = 'change(index,item)'
       >
          <span>{{item}}</span> </div>
    </div>
</template>
<script>
    export default {
        name:"tabControl",
        props: {
            title:{
                type:Array,
                default(){
                    return[]
                }
            }
        },

        data () {
            return {
                currentindex:0
            }
        },
        methods: {
            change(index,item){
                this.currentindex = index;
                this.$emit('tabclick',index,item)
                if(item=='流行'){item='pop' ,index=0} 
                if(item=='新款') {item='new',index=1}
                if(item=='精选'){ item='sell',index=2}
                this.$store.commit({
                    type:"change",
                    title:item
                }) }
        }
    }
</script>

<style scoped>
    #tabControl{
        padding-top: 10px;
        display: flex;
        text-align: center;
        padding-bottom: 9px;
    }
    .tabControlitem{
        flex: 1;
        
    }
    .active{
        color: #ff8198;
      
    }
    .active span{
        border-bottom: 3px solid #ff8198;
        padding-bottom: 5px;
    }
</style>